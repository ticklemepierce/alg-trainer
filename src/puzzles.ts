export interface IStep {
  displayName: string,
  steps?: IStep[],
  visualCubeParams: string,
  slug: string
}

export interface IPuzzle extends IStep {
  steps: IStep[],
}

export const Puzzles: IPuzzle[] = [
  {
    displayName: '3x3x3',
    slug: '/puzzle/333', // TODO hoist /puzzle to the router
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
    slug: '/puzzle/444', // TODO hoist /puzzle to the router
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