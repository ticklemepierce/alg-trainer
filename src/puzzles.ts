import { PuzzleID } from "cubing/dist/types/twisty";

export interface Image {
  type: "cube" | "megaminx" | "megaminx-top";
  options: any;
}
export interface ISubStep {
  displayName: string;
  steps: Step[];
  image: Image;
  slug: string;
}

export interface Puzzle {
  displayName: string;
  steps: Step[];
  image: Image;
  slug: string;
  twisty: PuzzleID;
}

export interface IBaseStep {
  displayName: string;
  image: Image;
  slug: string;
  cases: string;
  filters: {
    [key: string]: string;
  };
}

export type Step = ISubStep | IBaseStep;

export type IAlg = {
  name: string;
  setups: string[];
  filters: {
    [key: string]: boolean;
  };
  solutions: string[];
};

// TODO split up the madness
export const Puzzles: Puzzle[] = [
  {
    displayName: "3x3x3",
    slug: "/333",
    image: {
      type: "cube",
      options: {},
    },
    twisty: "3x3x3",
    steps: [
      {
        displayName: "F2L",
        image: {
          type: "cube",
          options: {
            mask: {
              F: [0, 1, 2],
              B: [0, 1, 2],
              R: [0, 1, 2],
              L: [0, 1, 2],
              U: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            },
          },
        },
        slug: "f2l",
        cases: "333-f2l",
        filters: {
          cornerInSlot: "Corner in slot",
          edgeInSlot: "Edge in slot",
          incorrectlyConnected: "Incorrectly connected",
          bothInSlot: "Both pieces in slot",
        },
      },
      {
        displayName: "OLL",
        image: {
          type: "cube",
          options: {
            mask: {
              R: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              F: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              D: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              L: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              B: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            },
          },
        },
        slug: "oll",
        steps: [
          {
            displayName: "All",
            image: {
              type: "cube",
              options: {
                mask: {
                  R: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                  F: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                  D: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                  L: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                  B: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                },
              },
            },
            slug: "all",
            cases: "333-oll",
            filters: {},
          },
          {
            displayName: "Dots",
            image: {
              type: "cube",
              options: {},
            },
            slug: "dots",
            cases: "333-oll",
            filters: {},
          },
        ],
      },
      {
        displayName: "PLL",
        image: {
          type: "cube",
          options: {
            mask: {
              F: [3, 4, 5, 6, 7, 8],
              B: [3, 4, 5, 6, 7, 8],
              R: [3, 4, 5, 6, 7, 8],
              L: [3, 4, 5, 6, 7, 8],
              D: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            },
          },
        },
        slug: "pll",
        cases: "333-pll",
        filters: {},
      },
    ],
  },
  {
    displayName: "4x4x4",
    slug: "/444",
    image: {
      type: "cube",
      options: {
        size: 4,
      },
    },
    twisty: "4x4x4",
    steps: [
      {
        displayName: "F3L",
        image: {
          type: "cube",
          options: {
            size: 4,
          },
        },
        slug: "f3l",
        cases: "444-f3l",
        filters: {},
      },
      {
        displayName: "cross edges",
        image: {
          type: "cube",
          options: {
            size: 4,
          },
        },
        slug: "cross_edges",
        cases: "444-hoya-cross-edges",
        filters: {},
      },
    ],
  },
  {
    displayName: "Megaminx",
    slug: "/megaminx",
    image: {
      type: "megaminx",
      options: {},
    },
    twisty: "megaminx",
    steps: [
      {
        displayName: "2-step OLL",
        image: {
          type: "megaminx",
          options: {},
        },
        slug: "2-step-oll",
        steps: [
          {
            displayName: "Edge Orientation",
            image: {
              type: "megaminx",
              options: {},
            },
            slug: "eo",
            cases: "mega-oll-eo",
            filters: {},
          },
          {
            displayName: "Corner Orientation",
            image: {
              type: "megaminx",
              options: {},
            },
            slug: "co",
            cases: "mega-oll-co",
            filters: {},
          },
        ],
      },
      {
        displayName: "2-step PLL",
        image: {
          type: "megaminx",
          options: {
            mask: {
              F: [0, 1, 5, 6, 7, 8, 9, 10],
              R: [0, 3, 4, 5, 6, 7, 8, 9],
              L: [0, 1, 2, 3, 7, 8, 9, 10],
              BR: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              BL: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              d: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              b: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10],
              dl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              dr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              bl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              br: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
          },
        },
        slug: "2-step-pll",
        steps: [
          {
            displayName: "Edge Permutation",
            image: {
              type: "megaminx-top",
              options: {},
            },
            slug: "ep",
            cases: "mega-pll-ep",
            filters: {},
          },
          {
            displayName: "Corner Permutation",
            image: {
              type: "megaminx",
              options: {},
            },
            slug: "cp",
            cases: "mega-pll-cp",
            filters: {},
          },
        ],
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
  algs: IAlg[];
  step: IBaseStep;
}

export interface IFilter {
  [key: string]: boolean;
}

export type Status = "unstarted" | "learning" | "learned";

export type StatusMap = {
  [key in Status]: number;
};

export type OptionKeys =
  | "learning-first"
  | "learned-last"
  | "exclude-unstarted"
  | "exclude-learned";

export type Options = Array<{
  name: OptionKeys;
  label: string;
}>;

export interface IStepStorage {
  filters: {
    [key: string]: boolean;
  };
  options: {
    [key in OptionKeys]: boolean;
  };
  cases: {
    [key: string]: {
      preferred: number;
      status: Status;
    };
  };
}
