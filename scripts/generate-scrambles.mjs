import { execSync } from "child_process";
import { Alg } from "cubing/alg";
import { writeFileSync, readFileSync } from "fs";
import { Buffer } from "node:buffer";
import times from "lodash.times";

const input = process.argv[2];
const fileName = input.endsWith(".json") ? input : `${input}.json`;

const inputData = readFileSync(`cases/${fileName}`, {
  encoding: "utf8",
  flag: "r",
});

const { setup, cases, tws, moves, doubleMovesNotEqual, randomizeAuf } =
  JSON.parse(inputData);

const isAlg = (input) => /^[RUFBLD' 2]+$/.test(input);

const output = [];

const normalize = (alg) => {
  alg = alg.toString();
  if (alg.startsWith("U")) {
    alg = alg.substring(alg.indexOf(" ") + 1);
  }
  return invertAlg(alg);
};

let setupAlg;
if (setup) {
  setupAlg = new Alg(setup);
}

const algs = [];

cases.forEach((_case, idx) => {
  const alg = _case.display;

  const entry = {
    ..._case,
    setups: [],
  };

  const inverse = new Alg(alg).invert();

  let scrambleAlg = setupAlg
    ? setupAlg.concat(inverse).toString()
    : inverse.toString();

  // TODO replace with quantum moves
  if (!doubleMovesNotEqual) {
    scrambleAlg = scrambleAlg.replaceAll("2'", "2");
  }

  algs.push(scrambleAlg);

  if (randomizeAuf) {
    algs.push(new Alg("U").concat(scrambleAlg));
    algs.push(new Alg("U'").concat(scrambleAlg));
    algs.push(new Alg("U2").concat(scrambleAlg));
  }

  output.push(entry);
});

const c = randomizeAuf ? 20 : 75;

const data = execSync(
  `twsearch --nowrite --moves ${moves} -s -c 75 --randomstart tws-files/${tws}`,
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
  let invertedAlg = new Alg(alg).invert().toString();
  if (!doubleMovesNotEqual) {
    invertedAlg = invertedAlg.replaceAll("2'", "2");
  }
  return invertedAlg;
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
      const currOutput = output.find(
        (alg) => alg.display === normalize(currAlg)
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
