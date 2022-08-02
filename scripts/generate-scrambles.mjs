import { execSync } from "child_process";
import { Alg } from 'cubing/alg';
import { writeFileSync, readFileSync } from 'fs';

const isAlg = (input) => /^[RUFBLD' 2]+$/.test(input);

const algs = {};

const antisune = new Alg("R U R' U R U2 R'");

const data = readFileSync('cases/f2l.json', {encoding:'utf8', flag:'r'});
const cases = JSON.parse(data);


cases.forEach((alg) => {
  console.log(alg);
  algs[alg] = [];

  const inverse = new Alg(alg).invert();

  const scrambleAlg = antisune.concat(inverse).toString().replaceAll("2'", '2');

  const data = execSync(`twsearch --moves R,U,F,B,L,D --scramblealg \"${scrambleAlg}\" --mindepth 7 -c 75 tws-files/3x3x3.tws`).toString(); 
  
  const strippedData = data.replace(/(\r\n|\r)/gm, "\n");
  const lines = strippedData.split('\n');
  lines.forEach((line, idx) => {
    const trimmedLine = line.trim();
    if (lines[idx - 1] === 'Solving') {
      return;
    }
    if (isAlg(trimmedLine) && !trimmedLine.endsWith(inverse.toString()) && !trimmedLine.startsWith(alg)) {
      const invertedSolution = new Alg(line).invert().toString().replaceAll("2'", '2');
      algs[alg].push(invertedSolution);
    }
  });
});

writeFileSync('setups/f2l.json', JSON.stringify(algs, null, 4));
