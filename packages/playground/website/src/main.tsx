import { createRoot } from 'react-dom/client';
import { DropdownMenu, MenuGroup, MenuItem } from '@wordpress/components';
import { menu, external } from '@wordpress/icons';
import PlaygroundViewport, {
	DisplayMode,
	supportedDisplayModes,
} from './components/playground-viewport';
import css from './style.module.css';
import buttonCss from './components/button/style.module.css';
import './styles.css';

import PlaygroundConfigurationGroup from './components/playground-configuration-group';
import { PlaygroundConfiguration } from './components/playground-configuration-group/form';
import { SupportedPHPVersions } from '@php-wasm/universal';
import { StorageType, StorageTypes } from './types';
import { ResetSiteMenuItem } from './components/toolbar-buttons/reset-site';
import { DownloadAsZipMenuItem } from './components/toolbar-buttons/download-as-zip';
import { RestoreFromZipMenuItem } from './components/toolbar-buttons/restore-from-zip';
import { ReportError } from './components/toolbar-buttons/report-error';
import { resolveBlueprint } from './lib/resolve-blueprint';
import { GithubImportMenuItem } from './components/toolbar-buttons/github-import-menu-item';
import { acquireOAuthTokenIfNeeded } from './github/acquire-oauth-token-if-needed';
import { GithubImportModal } from './github/github-import-form';
import { GithubExportMenuItem } from './components/toolbar-buttons/github-export-menu-item';
import { GithubExportModal } from './github/github-export-form';
import { useState } from 'react';
import {
	ExportFormValues,
	asPullRequestAction,
} from './github/github-export-form/form';
import { joinPaths } from '@php-wasm/util';
import { PlaygroundContext } from './playground-context';
import { collectWindowErrors, logger } from '@php-wasm/logger';
import { ErrorReportModal } from './components/error-report-modal';
import { asContentType } from './github/import-from-github';
import { GitHubOAuthGuardModal } from './github/github-oauth-guard';

collectWindowErrors(logger);

const query = new URL(document.location.href).searchParams;
const blueprint = await resolveBlueprint();

// @ts-ignore
const opfsSupported = typeof navigator?.storage?.getDirectory !== 'undefined';
let storageRaw = query.get('storage');
if (StorageTypes.includes(storageRaw as any) && !opfsSupported) {
	storageRaw = 'none';
} else if (!StorageTypes.includes(storageRaw as any)) {
	storageRaw = 'none';
}
const storage = storageRaw as StorageType;

const displayMode: DisplayMode = supportedDisplayModes.includes(
	query.get('mode') as any
)
	? (query.get('mode') as DisplayMode)
	: 'browser-full-screen';

const currentConfiguration: PlaygroundConfiguration = {
	wp: blueprint.preferredVersions?.wp || 'latest',
	php: resolveVersion(blueprint.preferredVersions?.php, SupportedPHPVersions),
	storage: storage || 'none',
	withExtensions: blueprint.phpExtensionBundles?.[0] !== 'light',
	withNetworking: blueprint.features?.networking || false,
	resetSite: false,
};

/*
 * The 6.3 release includes a caching bug where
 * registered styles aren't enqueued when they
 * should be. This isn't present in all environments
 * but it does here in the Playground. For now,
 * the fix is to define `WP_DEVELOPMENT_MODE = all`
 * to bypass the style cache.
 *
 * @see https://core.trac.wordpress.org/ticket/59056
 */
if (currentConfiguration.wp === '6.3') {
	blueprint.steps?.unshift({
		step: 'defineWpConfigConsts',
		consts: {
			WP_DEVELOPMENT_MODE: 'all',
		},
	});
}

acquireOAuthTokenIfNeeded();

function Main() {
	const [showErrorModal, setShowErrorModal] = useState(false);
	const [githubExportFiles, setGithubExportFiles] = useState<any[]>();
	const [githubExportValues, setGithubExportValues] = useState<
		Partial<ExportFormValues>
	>(() => {
		const values: Partial<ExportFormValues> = {};
		if (query.get('ghexport-repo-url')) {
			values.repoUrl = query.get('ghexport-repo-url')!;
		}
		if (query.get('ghexport-content-type')) {
			values.contentType = asContentType(
				query.get('ghexport-content-type')
			);
		}
		if (query.get('ghexport-pr-action')) {
			values.prAction = asPullRequestAction(
				query.get('ghexport-pr-action')
			);
		}
		if (query.get('ghexport-playground-root')) {
			values.fromPlaygroundRoot = query.get('ghexport-playground-root')!;
		}
		if (query.get('ghexport-repo-root')) {
			values.toPathInRepo = query.get('ghexport-repo-root')!;
		}
		if (query.get('ghexport-path')) {
			values.relativeExportPaths = query.getAll('ghexport-path');
		}
		if (query.get('ghexport-commit-message')) {
			values.commitMessage = query.get('ghexport-commit-message')!;
		}
		if (query.get('ghexport-plugin')) {
			values.plugin = query.get('ghexport-plugin')!;
		}
		if (query.get('ghexport-theme')) {
			values.theme = query.get('ghexport-theme')!;
		}
		return values;
	});

	return (
		<PlaygroundContext.Provider
			value={{ storage, showErrorModal, setShowErrorModal }}
		>
			<ErrorReportModal />
			<PlaygroundViewport
				storage={storage}
				displayMode={displayMode}
				blueprint={blueprint}
				toolbarButtons={[
					<PlaygroundConfigurationGroup
						key="configuration"
						initialConfiguration={currentConfiguration}
					/>,
					<DropdownMenu
						key="menu"
						icon={menu}
						label="Additional actions"
						className={css.dropdownMenu}
						toggleProps={
							{
								className: `${buttonCss.button} ${buttonCss.isBrowserChrome}`,
								'data-cy': 'dropdown-menu',
							} as any
						}
					>
						{({ onClose }) => (
							<>
								<MenuGroup>
									<ResetSiteMenuItem
										storage={currentConfiguration.storage}
										onClose={onClose}
									/>
									<ReportError onClose={onClose} />
									<DownloadAsZipMenuItem onClose={onClose} />
									<RestoreFromZipMenuItem onClose={onClose} />
									<GithubImportMenuItem onClose={onClose} />
									<GithubExportMenuItem onClose={onClose} />
								</MenuGroup>
								<MenuGroup label="More resources">
									<MenuItem
										icon={external}
										iconPosition="left"
										aria-label="Go to WordPress PR previewer"
										href={
											joinPaths(
												document.location.pathname,
												'wordpress.html'
											) as any
										}
										target="_blank"
									>
										Preview WordPress Pull Request
									</MenuItem>
									<MenuItem
										icon={external}
										iconPosition="left"
										aria-label="Go to a list of Playground demos"
										href={
											joinPaths(
												document.location.pathname,
												'demos/index.html'
											) as any
										}
										target="_blank"
									>
										More demos
									</MenuItem>
									<MenuItem
										icon={external}
										iconPosition="left"
										aria-label="Go to Playground documentation"
										href={
											'https://wordpress.github.io/wordpress-playground/' as any
										}
										target="_blank"
									>
										Documentation
									</MenuItem>
								</MenuGroup>
							</>
						)}
					</DropdownMenu>,
				]}
			>
				{query.get('gh-ensure-auth') === 'yes' ? (
					<GitHubOAuthGuardModal />
				) : (
					''
				)}
				<GithubImportModal
					onImported={({
						url,
						path,
						files,
						pluginOrThemeName,
						contentType,
						urlInformation: { owner, repo, type, pr },
					}) => {
						setGithubExportValues({
							repoUrl: url,
							prNumber: pr?.toString(),
							toPathInRepo: path,
							prAction: pr ? 'update' : 'create',
							contentType,
							plugin: pluginOrThemeName,
							theme: pluginOrThemeName,
						});
						setGithubExportFiles(files);
					}}
				/>
				<GithubExportModal
					allowZipExport={
						(query.get('ghexport-allow-include-zip') ?? 'yes') ===
						'yes'
					}
					initialValues={githubExportValues}
					initialFilesBeforeChanges={githubExportFiles}
					onExported={(prUrl, formValues) => {
						setGithubExportValues(formValues);
						setGithubExportFiles(undefined);
					}}
				/>
			</PlaygroundViewport>
		</PlaygroundContext.Provider>
	);
}

const root = createRoot(document.getElementById('root')!);
root.render(<Main />);

function resolveVersion<T>(
	version: string | undefined,
	allVersions: readonly T[],
	defaultVersion: T = allVersions[0]
): T {
	if (
		!version ||
		!allVersions.includes(version as any) ||
		version === 'latest'
	) {
		return defaultVersion;
	}
	return version as T;
}
