import UserError from '../../utils/UserError';
import defaultCliOptions from './options';

type ArgvData =
  | {
      repo?: {
        name: string;
        url: string;
      };

      // Just `option.symbolOption`.
      options: string[];
    }
  | { isHelp: true };

export default function parseArgv(...args: string[]): ArgvData {
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
    return { isHelp: true };
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
