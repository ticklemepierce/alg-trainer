export interface ISubStep {
  displayName: string;
  steps: Step[];
  visualCubeParams: string;
  slug: string;
}

export interface IBaseStep {
  displayName: string;
  visualCubeParams: string;
  slug: string;
  filters: {
    [key: string]: string;
  };
}

export type Step = ISubStep | IBaseStep;

export interface IAlg {
  setups: string[];
  filters: {
    [key: string]: boolean;
  };
  solutions: string[];
}

export interface IAlgs {
  [key: string]: IAlg;
}

export const Puzzles: ISubStep[] = [
  {
    displayName: "3x3x3",
    slug: "/333",
    visualCubeParams: "&puzzle=3",
    steps: [
      {
        displayName: "F2L",
        visualCubeParams: "&puzzle=3&stage=f2l",
        slug: "f2l",
        filters: {
          cornerInSlot: "Corner in slot",
          edgeInSlot: "Edge in slot",
          incorrectlyConnected: "Incorrectly connected",
          bothInSlot: "Both pieces in slot",
        },
      },
      {
        displayName: "OLL",
        visualCubeParams: "&puzzle=3&stage=oll",
        slug: "oll",
        steps: [
          {
            displayName: "All",
            visualCubeParams: "&puzzle=3&stage=oll",
            slug: "all",
            filters: {},
          },
          {
            displayName: "Dots",
            visualCubeParams: "&puzzle=3&stage=oll",
            slug: "dots",
            filters: {},
          },
        ],
      },
      {
        displayName: "PLL",
        visualCubeParams: "&puzzle=3&stage=pll",
        slug: "pll",
        filters: {},
      },
    ],
  },
  {
    displayName: "4x4x4",
    slug: "/444",
    visualCubeParams: "&puzzle=4",
    steps: [
      {
        displayName: "F3L",
        visualCubeParams: "&puzzle=4",
        slug: "f3l",
        filters: {},
      },
      {
        displayName: "cross edges",
        visualCubeParams:
          "&puzzle=4&fd=nnnnnnnnnnnnndnnnnnnnrrnnrrnnnnnnfnnnnnnnnnnnfnntddtdttddttdtddt",
        slug: "cross_edges",
        filters: {},
      },
    ],
  },
];

export function isBaseStep(step: Step): step is IBaseStep {
  return (step as ISubStep).steps === undefined;
}

export function isSubStep(step: Step): step is ISubStep {
  return (step as ISubStep).steps !== undefined;
}

export interface IAlgsListContext {
  algs: IAlgs;
  step: IBaseStep;
}

export interface IFilter {
  [key: string]: boolean;
}