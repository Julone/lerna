import { versionBump } from 'bumpp';
import cac from 'cac';
import { blue, lightGreen } from 'kolorist';
// import { version } from './package.json';
import {loadCliOptions}from "./configs.mjs"

export async function release(execute = 'pnpm sa changelog', push = true) {
  await versionBump({
    files: ['**/package.json', '!**/node_modules'],
    execute,
    all: true,
    tag: true,
    commit: 'release: release v%s',
    push
  });
}
