export interface Option {
  name: string;
  desc?: string;
  optionArgs: string[];
  symbolOptionArg: string;
}

export type Options = Option[];
