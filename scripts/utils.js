import pc from 'picocolors';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export const scanner = readline.createInterface({ input, output });

export function log(s) {
  console.log(`${pc.green('[INFO]')} ${s}`);
}
export function warn(s) {
  console.warn(`${pc.yellow('[WARN]')} ${s}`);
}
export function err(s) {
  console.error(`${pc.red('[ERR]')}  ${s}`);
}
