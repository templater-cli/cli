import chalk from 'chalk';
import UserError from './UserError';

function handleError(error: Error) {
  const message = error.message || error;

  console.log(
    ['', chalk.bgRed.white.bold('   ERROR   '), '', message, ''].join('\n')
  );

  if (!(error instanceof UserError)) {
    console.log(error.stack);
  }
}

export default async function withErrorHandler(fn: () => void): Promise<void> {
  try {
    await fn();
  } catch (error) {
    handleError(error);
    process.exit(1);
  }
}
