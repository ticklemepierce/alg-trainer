import { PuzzleID, TwistyPlayerConfig } from "cubing/dist/types/twisty";

export interface IStep {
  displayName: string;
  image: TwistyPlayerConfig;
  slug: string;
  quantumMoveOrder: number;
}

export interface ISubStep extends IStep {
  steps: Step[];
}

export interface IPuzzle extends ISubStep {
  twisty: PuzzleID;
}

export interface IBaseStep extends IStep {
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
  image: TwistyPlayerConfig;
  solutions: string[];
};

// TODO split up the madness
export const Puzzles: IPuzzle[] = [
  {
    displayName: "2x2x2",
    slug: "/222",
    image: {
      puzzle: "2x2x2",
      visualization: "3D",
    },
    twisty: "2x2x2",
    quantumMoveOrder: 4,
    steps: [
      {
        displayName: "CLL",
        image: {
          puzzle: "2x2x2",
          visualization: "experimental-2D-LL",
          alg: "R U R' U R U2 R'",
        },
        slug: "cll",
        cases: "cll",
        quantumMoveOrder: 4,
        filters: {},
      },
    ],
  },
  {
    displayName: "3x3x3",
    slug: "/333",
    image: {
      puzzle: "3x3x3",
      visualization: "PG3D",
    },
    twisty: "3x3x3",
    quantumMoveOrder: 4,
    steps: [
      {
        displayName: "F2L",
        image: {
          puzzle: "3x3x3",
          visualization: "PG3D",
          experimentalStickering: "LS",
          alg: "R U R' U'",
        },
        slug: "f2l",
        cases: "333-f2l",
        quantumMoveOrder: 4,
        filters: {
          cornerInSlot: "Corner in slot",
          edgeInSlot: "Edge in slot",
          incorrectlyConnected: "Incorrectly connected",
          bothInSlot: "Both pieces in slot",
        },
      },
      // {
      //   displayName: "OLL",
      //   image: {
      //     type: "cube",
      //     puzzle: {
      //       mask: {
      //         R: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //         F: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //         D: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //         L: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //         B: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //       },
      //     },
      //   },
      //   slug: "oll",
      //   steps: [
      //     {
      //       displayName: "All",
      //       image: {
      //         type: "cube",
      //         puzzle: {
      //           mask: {
      //             R: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //             F: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //             D: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //             L: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //             B: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //           },
      //         },
      //       },
      //       slug: "all",
      //       cases: "333-oll",
      //       filters: {},
      //     },
      //     {
      //       displayName: "Dots",
      //       image: {
      //         type: "cube",
      //         puzzle: {},
      //       },
      //       slug: "dots",
      //       cases: "333-oll",
      //       filters: {},
      //     },
      //   ],
      // },
      // {
      //   displayName: "PLL",
      //   image: {
      //     type: "cube",
      //     arrowColor: {
      //       value: "#FFFFFF",
      //     },
      //     puzzle: {
      //       mask: {
      //         F: [3, 4, 5, 6, 7, 8],
      //         B: [3, 4, 5, 6, 7, 8],
      //         R: [3, 4, 5, 6, 7, 8],
      //         L: [3, 4, 5, 6, 7, 8],
      //         D: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //       },
      //     },
      //   },
      //   slug: "pll",
      //   cases: "333-pll",
      //   filters: {},
      // },
    ],
  },
  {
    displayName: "3x3x3 OH",
    slug: "/333oh",
    image: {
      puzzle: "3x3x3",
      visualization: "PG3D",
    },
    twisty: "3x3x3",
    quantumMoveOrder: 4,
    steps: [
      // {
      //   displayName: "F2L",
      //   image: {
      //     type: "cube",
      //     puzzle: {
      //       mask: {
      //         F: [0, 1, 2],
      //         B: [0, 1, 2],
      //         R: [0, 1, 2],
      //         L: [0, 1, 2],
      //         U: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //       },
      //     },
      //   },
      //   slug: "f2l",
      //   cases: "333-f2l",
      //   quantumMoveOrder: 4,
      //   filters: {
      //     cornerInSlot: "Corner in slot",
      //     edgeInSlot: "Edge in slot",
      //     incorrectlyConnected: "Incorrectly connected",
      //     bothInSlot: "Both pieces in slot",
      //   },
      // },
      {
        displayName: "OLL",
        image: {
          puzzle: "3x3x3",
          visualization: "PG3D",
          experimentalStickering: "OLL",
        },
        slug: "oll",
        quantumMoveOrder: 4,
        cases: "oh-oll",
        filters: {},
      },
      // {
      //   displayName: "PLL",
      //   image: {
      //     type: "cube",
      //     arrowColor: {
      //       value: "#FFFFFF",
      //     },
      //     puzzle: {
      //       mask: {
      //         F: [3, 4, 5, 6, 7, 8],
      //         B: [3, 4, 5, 6, 7, 8],
      //         R: [3, 4, 5, 6, 7, 8],
      //         L: [3, 4, 5, 6, 7, 8],
      //         D: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //       },
      //     },
      //   },
      //   slug: "pll",
      //   cases: "333-pll",
      //   filters: {},
      // },
    ],
  },
  {
    displayName: "4x4x4",
    slug: "/444",
    image: {
      puzzle: "4x4x4",
      visualization: "3D",
    },
    quantumMoveOrder: 4,
    twisty: "4x4x4",
    steps: [
      {
        displayName: "Hoya",
        image: {
          puzzle: "4x4x4",
          visualization: "3D",
        },
        slug: "hoya",
        steps: [
          {
            displayName: "Cross edges",
            image: {
              puzzle: "4x4x4",
              visualization: "3D",
              experimentalStickering: "Cross",
            },
            slug: "cross_edges",
            cases: "hoya-edges",
            filters: {},
            quantumMoveOrder: 4,
          },
        ],
        filters: {},
        quantumMoveOrder: 4,
      },
    ],
  },
  {
    displayName: "Megaminx",
    slug: "/megaminx",
    image: {
      puzzle: "megaminx",
      visualization: "3D",
    },
    twisty: "megaminx",
    quantumMoveOrder: 5,
    steps: [
      {
        displayName: "2-look OLL",
        image: {
          puzzle: "megaminx",
          visualization: "experimental-2D-LL",
          experimentalStickering: "OLL",
          alg: "F U R U' R' F' R' U2' R U R' U R",
        },
        slug: "2-look-oll",
        quantumMoveOrder: 5,
        steps: [
          {
            displayName: "Edge Orientation",
            image: {
              puzzle: "megaminx",
              visualization: "experimental-2D-LL",
              experimentalStickering: "EOLL",
              alg: "F R U R' U' F'",
            },
            slug: "eo",
            cases: "mega-oll-eo",
            quantumMoveOrder: 5,
            filters: {},
          },
          {
            displayName: "Corner Orientation",
            image: {
              puzzle: "megaminx",
              visualization: "experimental-2D-LL",
              experimentalStickering: "OLL",
              alg: "R U2 R' U' R U' R'",
            },
            slug: "co",
            cases: "mega-oll-co",
            quantumMoveOrder: 5,
            filters: {},
          },
        ],
      },
      {
        displayName: "2-look PLL",
        image: {
          puzzle: "megaminx",
          visualization: "experimental-2D-LL",
          experimentalStickering: "PLL",
          alg: "F R U R' F U R' U' F' U R2 U2' R' F'",
        },
        slug: "2-look-pll",
        quantumMoveOrder: 5,
        steps: [
          {
            displayName: "Edge Permutation",
            image: {
              puzzle: "megaminx",
              visualization: "experimental-2D-LL",
              experimentalStickering: "EPLL",
              alg: "F' R' F U F' R F U R' U2 R U' R' U' R U2 R' U R",
            },
            slug: "ep",
            cases: "mega-pll-ep",
            quantumMoveOrder: 5,
            filters: {},
          },
          {
            displayName: "Corner Permutation",
            image: {
              puzzle: "megaminx",
              visualization: "experimental-2D-LL",
              experimentalStickering: "COLL",
              alg: "R' F' R U R U' R2' F R U R' F' R F U'",
            },
            slug: "cp",
            cases: "mega-pll-cp",
            quantumMoveOrder: 5,
            filters: {},
          },
        ],
      },
    ],
  },
  {
    displayName: "Pyraminx",
    slug: "/pyraminx",
    image: {
      puzzle: "pyraminx",
      visualization: "3D",
    },
    twisty: "pyraminx",
    quantumMoveOrder: 3,
    steps: [
      {
        displayName: "L4E",
        image: {
          puzzle: "pyraminx",
          visualization: "3D",
          alg: "R U R'",
          cameraLatitude: 90,
          cameraLatitudeLimit: 90,
        },
        slug: "l4e",
        quantumMoveOrder: 3,
        cases: "l4e",
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
