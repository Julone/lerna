import { versionBump } from 'bumpp';
import cac from 'cac';
import { blue, lightGreen } from 'kolorist';
// import { version } from './package.json';
import {loadCliOptions}from "./configs.mjs"
import { release } from './release.mjs';
export async function setupCli() {
  const cliOptions = await loadCliOptions();
  console.log('%cscripts\release.mjs:20 cliOptions', 'color: #007acc;', cliOptions);

  const cli = cac(blue('soybean-admin'));

  cli
    .version(lightGreen("1.0.0"))
    .option(
      '-e, --execute [command]',
      "Execute additional command after bumping and before git commit. Defaults to 'npx soy changelog'"
    )
    .option('-p, --push', 'Indicates whether to push the git commit and tag')
    .option('-t, --total', 'Generate changelog by total tags')
    .option(
      '-c, --cleanupDir <dir>',
      'The glob pattern of dirs to cleanup, If not set, it will use the default value, Multiple values use "," to separate them'
    )
    .help();
    
    console.log('%cscripts\release.mjs:38 cli', 'color: #007acc;', cli);

  const commands = {
    release: {
      desc: 'release: update version, generate changelog, commit code',
      action: async args => {
        console.log('%cscripts\release.mjs:41 args', 'color: #007acc;', args);
        await release(args?.execute, args?.push);
      }
    },
  };

  for (const [command, { desc, action }] of Object.entries(commands)) {
    cli.command(command, lightGreen(desc)).action(action);
  }

  cli.parse();
}

setupCli();
