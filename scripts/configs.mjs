import process from 'node:process';
import { loadConfig } from 'c12';

const defaultOptions = {
  cwd: process.cwd(),
  cleanupDirs: [
    '**/dist',
    '**/package-lock.json',
    '**/yarn.lock',
    '**/pnpm-lock.yaml',
    '**/node_modules',
    '!node_modules/**'
  ],
  gitCommitTypes: [
    ['feat', 'A new feature'],
    ['fix', 'A bug fix'],
    ['refactor', 'A code change that neither fixes a bug nor adds a feature'],
    ['opt', 'A code change that improves performance'],
    ['docs', 'Documentation only changes'],
    ['style', 'Changes that do not affect the meaning of the code'],
    ['test', 'Adding missing tests or correcting existing tests'],
    ['build', 'Changes that affect the build system or external dependencies'],
    ['ci', 'Changes to our CI configuration files and scripts'],
    ['chore', "Other changes that don't modify src or test files"],
    ['revert', 'Reverts a previous commit']
  ],
  gitCommitScopes: [
    ['projects', 'project'],
    ['components', 'components'],
    ['hooks', 'hook functions'],
    ['utils', 'utils functions'],
    ['types', 'TS declaration'],
    ['styles', 'style'],
    ['deps', 'project dependencies'],
    ['release', 'release project'],
    ['other', 'other changes']
  ],
  ncuCommandArgs: ['--deep', '-u'],
  changelogOptions: {}
};

export async function loadCliOptions(overrides, cwd = process.cwd()) {
  const { config } = await loadConfig({
    name: 'soybean',
    defaults: defaultOptions,
    overrides,
    cwd,
    packageJson: true
  });

  return config;
}
