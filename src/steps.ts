export enum PuzzlesEnum { 
  two = 2, 
  three = 3, 
  four = 4, 
  five = 5
};

export type Step = 'f2l'|'oll'|'pll'|'f3l'|'cross edges';

export const PUZZLES = [PuzzlesEnum.two, PuzzlesEnum.three, PuzzlesEnum.four, PuzzlesEnum.five];

export type StepsMap  = {
  [key in PuzzlesEnum]: Step[];
};

export type MaskMap  = {
  [key in Step]: string;
};

export const STEPS_MAP: StepsMap = {
  [PuzzlesEnum.two]: [],
  [PuzzlesEnum.three]: ['f2l', 'oll', 'pll'],
  [PuzzlesEnum.four]: ['f3l', 'cross edges'],
  [PuzzlesEnum.five]: [],
};

export const MASK_MAP: MaskMap = {
  'f2l': '?mask=f2l',
  'f3l': '',
  'oll': '',
  'pll': '',
  'cross edges': '&pzl=4&fd=nnnnnnnnnnnnndnnnnnnnrrnnrrnnnnnnfnnnnnnnnnnnfnntddtdttddttdtddt'
}
