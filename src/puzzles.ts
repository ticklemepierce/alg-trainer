export interface IStep {
  displayName: string,
  steps?: IStep[],
  visualCubeParams: string,
  slug: string
  algs?: object
}

export interface IPuzzle extends IStep {
  steps: IStep[],
}

type Alg = string;

export interface IAlgs {
  [key: string]: Alg[]
}

export const Puzzles: IPuzzle[] = [
  {
    displayName: '3x3x3',
    slug: '/333',
    visualCubeParams: '&puzzle=3',
    steps: [{
      displayName: 'F2L',
      visualCubeParams: '&puzzle=3&stage=f2l',
      slug: 'f2l',
      algs: require('../setups/f2l.json') as IAlgs
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
]