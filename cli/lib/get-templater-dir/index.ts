import os from 'os';
import path from 'path';
import fs from 'fs-extra';

const DIR_NAME = '.templater';

export default async function getTemplaterDir(): Promise<string> {
  const homeDir = os.homedir();
  const templaterDirPath = path.join(homeDir, DIR_NAME);

  await fs.ensureDir(templaterDirPath);
  return templaterDirPath;
}
