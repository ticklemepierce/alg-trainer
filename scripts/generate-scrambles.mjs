import { execSync } from "child_process";
import { Alg } from "cubing/alg";
import { writeFileSync, readFileSync } from "fs";

const input = process.argv[2];
const fileName = input.endsWith(".json") ? input : `${input}.json`;

const data = readFileSync(`cases/${fileName}`, { encoding: "utf8", flag: "r" });

const { setup, cases, tws, moves, doubleMovesNotEqual } = JSON.parse(data);

const isAlg = (input) => /^[RUFBLD' 2]+$/.test(input);

const output = [];

// TODO make optional
const setupAlg = new Alg(setup);

cases.forEach((_case) => {
  const alg = _case.display;

  console.log(alg);

  const entry = {
    ..._case,
    setups: [],
  };

  const inverse = new Alg(alg).invert();

  let scrambleAlg = setupAlg.concat(inverse).toString();

  if (!doubleMovesNotEqual) {
    scrambleAlg = scrambleAlg.replaceAll("2'", "2");
  }

  const data = execSync(
    `twsearch --nowrite --moves ${moves} --scramblealg \"${scrambleAlg}\" --mindepth 7 -c 75 tws-files/${tws}`
  ).toString();

  const strippedData = data.replace(/(\r\n|\r)/gm, "\n");
  const lines = strippedData.split("\n");
  lines.forEach((line, idx) => {
    const trimmedLine = line.trim();
    if (lines[idx - 1] === "Solving") {
      return;
    }
    if (
      isAlg(trimmedLine) &&
      !trimmedLine.endsWith(inverse.toString()) &&
      !trimmedLine.startsWith(alg)
    ) {
      let invertedSolution = new Alg(line).invert().toString();
      if (!doubleMovesNotEqual) {
        invertedSolution = invertedSolution.replaceAll("2'", "2");
      }
      entry.setups.push(invertedSolution);
    }
  });
  output.push(entry);
});

writeFileSync(`static/${fileName}`, JSON.stringify(output, null, 2));
