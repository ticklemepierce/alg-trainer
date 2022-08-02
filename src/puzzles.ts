export interface ISubStep {
  displayName: string,
  steps: Step[],
  visualCubeParams: string,
  slug: string
}

export interface IBaseStep {
  displayName: string,
  visualCubeParams: string,
  slug: string
}

export type Step = ISubStep | IBaseStep;

export type Alg = string;

export interface IAlgs {
  [key: string]: Alg[]
}

export const Puzzles: ISubStep[] = [
  {
    displayName: '3x3x3',
    slug: '/333',
    visualCubeParams: '&puzzle=3',
    steps: [{
      displayName: 'F2L',
      visualCubeParams: '&puzzle=3&stage=f2l',
      slug: 'f2l',
    }, {
      displayName: 'OLL',
      visualCubeParams: '&puzzle=3&stage=oll',
      slug: 'oll',
      steps: [{
        displayName: 'All',
        visualCubeParams: '&puzzle=3&stage=oll',
        slug: 'all',
      }, {
        displayName: 'Dots',
        visualCubeParams: '&puzzle=3&stage=oll',
        slug: 'dots',
      }]
    }, {
      displayName: 'PLL',
      visualCubeParams: '&puzzle=3&stage=pll',
      slug: 'pll',
    }],
  }, {
    displayName: '4x4x4',
    slug: '/444',
    visualCubeParams: '&puzzle=4',
    steps: [{
      displayName: 'F3L',
      visualCubeParams: '&puzzle=4',
      slug: 'f3l',
    }, {
      displayName: 'cross edges',
      visualCubeParams: '&puzzle=4&fd=nnnnnnnnnnnnndnnnnnnnrrnnrrnnnnnnfnnnnnnnnnnnfnntddtdttddttdtddt',
      slug: 'cross_edges'
    }],
  }
];

export function isBaseStep(step: Step): step is IBaseStep {
  return (step as ISubStep).steps === undefined;
}


export function isSubStep(step: Step): step is ISubStep {
  return (step as ISubStep).steps !== undefined;
}