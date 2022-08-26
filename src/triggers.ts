interface ITriggers {
  name: string;
  key: string;
  alg: string;
  color: string;
  notes?: string;
}

export const triggers: ITriggers[] = [
  {
    name: "Sledgehammer",
    key: "sledge",
    alg: "R' F R F'",
    color: "red",
    notes: "sledgehammer",
  },
  {
    name: "Hedgeslammer",
    key: "hedge",
    alg: "F R' F' R",
    color: "blue",
  },
  {
    name: "Sexy Move",
    key: "sexy",
    alg: "R U R' U'",
    color: "purple",
  },
  {
    name: "Inverse Sexy Move",
    key: "inversesexy",
    alg: "U R U' R'",
    color: "black",
  },
  {
    name: "Sledgehammer (Left)",
    key: "leftsledge",
    alg: "L F' L' F",
    color: "red",
  },
  {
    name: "Hedgeslammer (Left)",
    key: "lefthedge",
    alg: "F' L F L'",
    color: "blue",
  },
  {
    name: "Sexy Move (Left)",
    key: "leftsexy",
    alg: "L' U' L U",
    color: "purple",
  },
  {
    name: "Inverse Sexy Move (Left)",
    key: "leftinversesexy",
    alg: "U' L' U L",
    color: "black",
  },
];

export const triggerRegEx = /\[\[(.+?)\]\]/g;

export const expandTriggers = (alg: string) =>
  alg.replace(
    triggerRegEx,
    (_brackets, match) => triggers.find((trigger) => trigger.key === match)!.alg
  );
