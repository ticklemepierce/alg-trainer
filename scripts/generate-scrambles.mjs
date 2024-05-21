import { execSync } from "child_process";
import { Alg } from "cubing/alg";
import { writeFileSync, readFileSync } from "fs";
import { Buffer } from "node:buffer";

const input = process.argv[2];
const fileName = input.endsWith(".json") ? input : `${input}.json`;

const inputData = readFileSync(`cases/${fileName}`, {
  encoding: "utf8",
  flag: "r",
});

const { setup, cases, tws, moves, randomizeAuf, quantumMoveOrder } =
  JSON.parse(inputData);

const isAlg = (input) => /^[RUFBLD' 2]+$/.test(input);

const output = [];

const simplify = (alg) => {
  return alg.experimentalSimplify({
    cancel: true,
    puzzleLoader: {
      puzzleSpecificSimplifyOptions: {
        quantumMoveOrder: () => quantumMoveOrder,
      },
    },
  });
};

const normalize = (alg) => {
  alg = alg.toString();
  if (alg.startsWith("U")) {
    alg = alg.substring(alg.indexOf(" ") + 1);
  }
  return simplify(new Alg(invertAlg(alg)));
};

const setupAlg = new Alg(setup || '');

const algs = [];

cases.forEach((_case, idx) => {
  const alg = _case.display;

  const entry = {
    ..._case,
    setups: [],
  };

  const inverse = new Alg(alg).invert();

  let scrambleAlg = setupAlg.concat(inverse);

  if (quantumMoveOrder) {
    scrambleAlg = scrambleAlg.experimentalSimplify({
      cancel: true,
      puzzleLoader: {
        puzzleSpecificSimplifyOptions: {
          quantumMoveOrder: () => quantumMoveOrder,
        },
      },
    });
  }

  algs.push(scrambleAlg.toString());

  if (randomizeAuf) {
    algs.push(new Alg("U").concat(scrambleAlg));
    algs.push(new Alg("U'").concat(scrambleAlg));
    algs.push(new Alg("U2").concat(scrambleAlg));
  }

  output.push(entry);
});

const c = randomizeAuf ? 20 : 75;

const data = execSync(
  `twsearch --nowrite --moves ${moves} -s -c ${c} --randomstart tws-files/${tws}`,
  {
    input: algs.join("\r\n"),
  }
).toString();

const LOG_WORDS = ["Depth", "Filling", "Found"];

const strippedData = data.replace(/(\r\n|\r)/gm, "\n");
const lines = strippedData.split("\n");

let currAlgsIdx = 0;
let currLinesIdx = lines.findIndex((line) => line === "Solving") + 1;

let currOutputIdx = 0;

const invertAlg = (alg) => {
  let invertedAlg = new Alg(alg).invert();
  if (quantumMoveOrder) {
    invertedAlg = invertedAlg.experimentalSimplify({
      cancel: true,
      puzzleLoader: {
        puzzleSpecificSimplifyOptions: {
          quantumMoveOrder: () => quantumMoveOrder,
        },
      },
    });
  }
  return invertedAlg.toString();
};

while (currLinesIdx < lines.length) {
  let line = lines[currLinesIdx].trim();
  if (LOG_WORDS.includes(line.split(" ")[0])) {
    currLinesIdx++;
    continue;
  }

  const currAlg = algs[currAlgsIdx];

  if (line !== "Solving") {
    if (!line.endsWith(invertAlg(currAlg)) && !line.startsWith(currAlg)) {
      const invertedSolution = invertAlg(line);
      const currOutput = output.find((alg) => 
        simplify(new Alg(alg.display).concat(setupAlg.invert())).isIdentical(normalize(currAlg))
      );
      currOutput.setups.push(invertedSolution);
    }
  } else {
    currAlgsIdx++;
    currOutputIdx = output.findIndex(
      (entry) => entry.display === invertAlg(algs[currAlgsIdx])
    );
  }

  currLinesIdx++;
}

writeFileSync(`static/cases/${fileName}`, JSON.stringify(output, null, 2));

// TODO regenerate scrambles with random AUF
// TODO update cases files with new image format
