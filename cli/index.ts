#! /usr/bin/env node

import chalk from 'chalk';
import parseArgv from './lib/argv-parser';
import start from './start';
import showHelp from './utils/show-help';
import withErrorHandler from './utils/with-error-handler';

/**
 * Templater CLI
 *
 * This module is the `templater-cli` CLI.
 * To use it, run `templater <user>` or `templater <user>/<repo>`.
 *
 * @see `steps.md`
 */

withErrorHandler(async () => {
  const [, , ...args] = process.argv;
  const parsedArgv = parseArgv(...args);

  console.log(['', chalk.bgBlue.black('   Templater CLI   '), ''].join('\n'));

  if (parsedArgv === '--help') {
    showHelp();
  } else {
    await start(parsedArgv);
  }
});
