import chalk from 'chalk';
import options from '../lib/argv-parser/options';

export default function showHelp(): void {
  console.log(
    [
      '',
      chalk.bgBlue.black('  TEMPLATER HELP  '),
      '',
      'The templater module is used to download project templates from GitHub.',
      'These templates aim to store repetivive configuration that is boring to create.',
      '',
      'With that, with just a simple command, you can download an entire configuration boilerplate.',
      '',
      // prettier-ignore
      `Visit ${chalk.underline('https://templater.luizfelipe.dev')} to learn more.`,
      '',
      '',
      chalk.bold('Command signature:'),
      '',
      `    ${chalk.bold('templater')} <username>`,
      '',
      // prettier-ignore
      `    Where "${chalk.blue('<username>')}" is the name of the user that has a "${chalk.blue('templater-config-default')}" repository.`,
      '',
      chalk.bold('Options:'),
      '',
      options
        .map((option) =>
          [
            `  * ${chalk.bold(option.name)}: ${option.optionArgs
              .map((arg) => chalk.blue(arg))
              .join(', ')}`,
            '    ' + option.desc
          ].join('\n')
        )
        .join('\n\n'),
      ''
    ].join('\n')
  );
}
