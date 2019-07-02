export interface ArgvData {
  repo?: {
    name: string;
    url: string;
  };

  // Just `option.symbolOption`.
  options: string[];
}

export type ArgvDataOrHelp = ArgvData | '--help';
