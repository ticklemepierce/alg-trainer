// export type Puzzles = 'two'|'three'|'four'|'five';


export enum PuzzlesEnum { two, three, four, five }
export type Step = 'f2l'|'oll'|'pll'|'f3l'|'cross edges';

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
