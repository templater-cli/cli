import { ArgvData } from './@types/ParsedArgv';
import checkRepo from './lib/check/repo';
import getTemplaterDir from './lib/get-templater-dir';

export default async function start(argv: ArgvData) {
  const templaterDir = await getTemplaterDir();

  await checkRepo(argv.repo.url);
}
