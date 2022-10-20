import { PuzzleID } from "cubing/dist/types/twisty";

// TODO fix scheme?
const megaminxYellowUpScheme = {
  U: {
    value: "#FFFF00",
  },
  F: {
    value: "#00FF00",
  },
  R: {
    value: "#FFA500",
  },
  dr: {
    value: "#FF69B4",
  },
  dl: {
    value: "#ffffb3",
  },
  L: {
    value: "#0000FF",
  },
  d: {
    value: "#808080",
  },
  br: {
    value: "#FF0000",
  },
  BR: {
    value: "#808080",
  },
  BL: {
    value: "#800080",
  },
  bl: {
    value: "#32CD32",
  },
  b: {
    value: "#FFA500",
  },
};
const megaminxGreyUpScheme = {
  U: {
    value: "#808080",
  },
  F: {
    value: "#FFA500",
  },
  R: {
    value: "#32CD32",
  },
  dr: {
    value: "#FF69B4",
  },
  dl: {
    value: "#ffffb3",
  },
  L: {
    value: "#4ecdf8",
  },
  d: {
    value: "#808080",
  },
  br: {
    value: "#FF0000",
  },
  BR: {
    value: "#FF69B4",
  },
  BL: {
    value: "#FFFDD0",
  },
  bl: {
    value: "#32CD32",
  },
  b: {
    value: "#FFA500",
  },
};

export interface Image {
  type: "cube" | "megaminx" | "megaminx-top";
  arrowColor?: any;
  puzzle: any;
}

export interface IStep {
  displayName: string;
  image: Image;
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
  image: Image;
  solutions: string[];
};

// TODO split up the madness
export const Puzzles: IPuzzle[] = [
  {
    displayName: "3x3x3",
    slug: "/333",
    image: {
      type: "cube",
      puzzle: {},
    },
    twisty: "3x3x3",
    quantumMoveOrder: 4,
    steps: [
      {
        displayName: "F2L",
        image: {
          type: "cube",
          puzzle: {
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
  // {
  //   displayName: "4x4x4",
  //   slug: "/444",
  //   image: {
  //     type: "cube",
  //     puzzle: {
  //       size: 4,
  //     },
  //   },
  //   twisty: "4x4x4",
  //   steps: [
  //     {
  //       displayName: "F3L",
  //       image: {
  //         type: "cube",
  //         puzzle: {
  //           size: 4,
  //         },
  //       },
  //       slug: "f3l",
  //       cases: "444-f3l",
  //       filters: {},
  //     },
  //     {
  //       displayName: "cross edges",
  //       image: {
  //         type: "cube",
  //         puzzle: {
  //           size: 4,
  //         },
  //       },
  //       slug: "cross_edges",
  //       cases: "444-hoya-cross-edges",
  //       filters: {},
  //     },
  //   ],
  // },
  {
    displayName: "Megaminx",
    slug: "/megaminx",
    image: {
      type: "megaminx",
      puzzle: {},
    },
    twisty: "megaminx",
    quantumMoveOrder: 5,
    steps: [
      {
        displayName: "2-look OLL",
        image: {
          type: "megaminx-top",
          puzzle: {
            case: "F U R U' R' F' R' U2' R U R' U R",
            mask: {
              F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              R: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              L: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              BR: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              BL: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              d: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              dl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              dr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              bl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              br: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            scheme: megaminxYellowUpScheme,
          },
        },
        slug: "2-look-oll",
        quantumMoveOrder: 5,
        steps: [
          {
            displayName: "Edge Orientation",
            image: {
              type: "megaminx-top",
              puzzle: {
                case: "F R U R' U' F'",
                mask: {
                  U: [2, 4, 6, 8, 10],
                  F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  R: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  L: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  BR: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  BL: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  d: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  dl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  dr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  bl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  br: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                },
                scheme: megaminxYellowUpScheme,
              },
            },
            slug: "eo",
            cases: "mega-oll-eo",
            quantumMoveOrder: 5,
            filters: {},
          },
          {
            displayName: "Corner Orientation",
            image: {
              type: "megaminx-top",
              puzzle: {
                case: "R U2 R' U' R U' R'",
                mask: {
                  F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  R: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  L: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  BR: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  BL: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  d: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  b: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  dl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  dr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  bl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  br: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                },
                scheme: megaminxYellowUpScheme,
              },
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
          type: "megaminx-top",
          puzzle: {
            case: "F R U R' F U R' U' F' U R2 U2' R' F'",
            mask: {
              F: [0, 1, 5, 6, 7, 8, 9, 10],
              R: [0, 3, 4, 5, 6, 7, 8, 9],
              L: [0, 1, 2, 3, 7, 8, 9, 10],
              BR: [0, 1, 2, 3, 4, 5, 9, 10],
              BL: [0, 1, 2, 3, 4, 5, 6, 7],
              d: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              b: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10],
              dl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              dr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              bl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              br: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            scheme: megaminxGreyUpScheme,
          },
        },
        slug: "2-look-pll",
        quantumMoveOrder: 5,
        steps: [
          {
            displayName: "Edge Permutation",
            image: {
              arrowColor: {
                value: "#FFFFFF",
              },
              type: "megaminx-top",
              puzzle: {
                case: "F' R' F U F' R F U R' U2 R U' R' U' R U2 R' U R",
                mask: {
                  F: [0, 1, 5, 6, 7, 8, 9, 10],
                  R: [0, 3, 4, 5, 6, 7, 8, 9],
                  L: [0, 1, 2, 3, 7, 8, 9, 10],
                  BR: [0, 1, 2, 3, 4, 5, 9, 10],
                  BL: [0, 1, 2, 3, 4, 5, 6, 7],
                  d: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  b: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10],
                  dl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  dr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  bl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  br: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                },
                scheme: megaminxGreyUpScheme,
              },
            },
            slug: "ep",
            cases: "mega-pll-ep",
            quantumMoveOrder: 5,
            filters: {},
          },
          {
            displayName: "Corner Permutation",
            image: {
              type: "megaminx-top",
              puzzle: {
                case: "R' F' R U R U' R2' F R U R' F' R F U'",
                mask: {
                  F: [0, 1, 5, 6, 7, 8, 9, 10],
                  R: [0, 3, 4, 5, 6, 7, 8, 9],
                  L: [0, 1, 2, 3, 7, 8, 9, 10],
                  BR: [0, 1, 2, 3, 4, 5, 9, 10],
                  BL: [0, 1, 2, 3, 4, 5, 6, 7],
                  d: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  b: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10],
                  dl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  dr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  bl: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  br: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                },
                scheme: megaminxGreyUpScheme,
              },
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
