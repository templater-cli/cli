#! /usr/bin/env node

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

withErrorHandler(() => {
  const [, , ...args] = process.argv;
  const parsedArgv = parseArgv(...args);

  if ('isHelp' in parsedArgv) {
    showHelp();
  } else {
    start(parsedArgv);
  }
});
