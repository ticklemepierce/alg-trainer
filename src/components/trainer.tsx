import { useState, KeyboardEvent } from "react";
import { IAlgsListContext, IStepStorage, IAlg } from "../puzzles";
import { Box, Button, Typography } from "@mui/material";
import randomItem from "random-item";
import shuffle from "lodash.shuffle";
import useKeypress from "../hooks/useKeypress";
import { useOutletContext } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { expandTriggers } from "../triggers";
import { Alg } from "cubing/alg";

// TODO add timer
// TODO add ability to change status of case from trainer
export const Trainer = () => {
  const { algs, step } = useOutletContext<IAlgsListContext>();

  const [stepStorage] = useLocalStorage<IStepStorage>(step.slug, {
    filters: Object.keys(step.filters).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: false,
      }),
      {}
    ),
    options: {
      "learning-first": false,
      "learned-last": false,
      "exclude-unstarted": false,
      "exclude-learned": true,
    },
    cases: algs.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.name]: {
          preferred: 0,
          status: "unstarted",
        },
      }),
      {}
    ),
  });

  const filterAlgs = () =>
    algs.filter(
      (alg) =>
        !(
          (stepStorage.options["exclude-learned"] &&
            stepStorage.cases[alg.name]!.status === "learned") ||
          (stepStorage.options["exclude-unstarted"] &&
            stepStorage.cases[alg.name]!.status === "unstarted")
        )
    );

  const [order, setOrder] = useState<IAlg[]>(shuffle(filterAlgs()));

  const randomIntUpTo = (max: number) => Math.floor(Math.random() * (max + 1));

  const randomAUF = () => randomIntUpTo(step.quantumMoveOrder - 1);

  const createSetup = (setup: string) => {
    return new Alg(`${setup} U${randomAUF()}`).experimentalSimplify({
      cancel: true,
      puzzleLoader: {
        puzzleSpecificSimplifyOptions: {
          quantumMoveOrder: () => step.quantumMoveOrder,
        },
      },
    });
  };

  const getRandomCase = (newIndex: number) => {
    const _case: IAlg = order[newIndex];
    return {
      setup: createSetup(randomItem(_case.setups)).toString(),
      preferredSolution: expandTriggers(
        _case.solutions[stepStorage.cases[_case.name]!.preferred]
      ).split(" "),
    };
  };

  const setCase = (index: number) => {
    setState({
      index,
      ...getRandomCase(index),
    });
  };

  const [state, setState] = useState<{
    index: number;
    setup: string;
    preferredSolution: string[];
  }>({
    index: 0,
    ...getRandomCase(0),
  });

  const [hint, setHint] = useState<string>("");

  const previousCase = () => {
    setHint("");

    setCase(state.index - 1);
  };

  const nextCase = () => {
    setHint("");
    if (state.index >= order.length - 1) {
      alert("starting over!!");
      setOrder(shuffle(filterAlgs()));
      setCase(0);
    } else {
      setCase(state.index + 1);
    }
  };

  const handleSpace = (e: KeyboardEvent) => {
    e.preventDefault();
    nextCase();
  };

  useKeypress(" ", handleSpace, [state]);

  const updateHint = () => {
    const newHintLength = hint.length > 0 ? hint.split(" ").length + 1 : 1;

    setHint(state.preferredSolution.slice(0, newHintLength).join(" "));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "88vw",
          textAlign: "center",
          position: "fixed",
          height: "100%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography component="h1" variant="h3">
          {state.setup}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          size="large"
          onClick={nextCase}
        >
          {state.index >= order.length - 1 ? "Start over" : "Next case"}
        </Button>
        <Button variant="text" sx={{ mt: 2 }} size="large" onClick={updateHint}>
          Hint
        </Button>
        <Typography component="h5" variant="h5">
          {hint}
        </Typography>
        {state.index !== 0 && (
          <Button
            variant="text"
            sx={{ mt: 3, position: "fixed", bottom: 85 }}
            size="small"
            onClick={previousCase}
          >
            Previous case
          </Button>
        )}
      </Box>
    </>
  );
};
