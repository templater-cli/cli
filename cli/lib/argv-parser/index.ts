import { ArgvDataOrHelp } from '../../@types/ParsedArgv';
import UserError from '../../utils/UserError';
import defaultCliOptions from './options';

export default function parseArgv(...args: string[]): ArgvDataOrHelp {
  const [rawUser] = args;
  const options: string[] = [];

  if (!rawUser) {
    throw new UserError(
      'Invalid CLI call. You should provide at least one argument.'
    );
  }

  for (const option of defaultCliOptions) {
    if (option.optionArgs.some((optionArg) => args.includes(optionArg))) {
      options.push(option.symbolOptionArg);
    }
  }

  // If the `--help` option was passed, we should not continue.
  if (options.includes('--help')) {
    return '--help';
  }

  const [username, repository] = (rawUser.includes('/')
    ? rawUser
    : `${rawUser}/default`
  ).split('/');

  const name = repository.startsWith('templater-config-')
    ? repository
    : `templater-config-${repository}`;

  return {
    repo: {
      name,
      url: `https://github.com/${username}/${name}`
    },
    options
  };
}
