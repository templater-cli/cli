#! /usr/bin/env node

/**
 * Templater CLI
 *
 * This module is the `templater-cli` CLI.
 * To use it, run `templater <user>` or `templater <user>/<repo>`.
 *
 * @see `steps.md`
 */

const [, , ...args] = process.argv;

console.log(args);
