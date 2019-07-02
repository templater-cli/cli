import chalk from 'chalk';
import got from 'got';
import ora from 'ora';
import UserError from '../../utils/UserError';

export default async function checkRepo(repoUrl: string): Promise<boolean> {
  const spinner = ora('Checking repository...').start();

  try {
    await got(repoUrl, { method: 'HEAD' });
    spinner.succeed('Repository exists.');
    return true;
  } catch (error) {
    spinner.fail('Repository does not exists.');

    throw new UserError(
      [
        'Invalid repository.',
        `The repository ${chalk.underline(repoUrl)} does not exist.`
      ].join('\n')
    );
  }
}
