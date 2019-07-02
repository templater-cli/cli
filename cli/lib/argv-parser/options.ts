import { Options } from '../../@types/Options';

const options: Options = [
  {
    name: 'Help',
    desc: "Shows the CLI's help page",
    optionArgs: ['--help', '-h'],
    symbolOptionArg: '--help'
  },
  {
    name: 'Reset Cache',
    desc: "Reset the CLI's cache",
    optionArgs: ['--reset-cache', '-r'],
    symbolOptionArg: '--rset-cache'
  }
];

export default options;
