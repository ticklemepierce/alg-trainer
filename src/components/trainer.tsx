import { useState, useMemo, KeyboardEvent } from "react";
import { IAlgsListContext, IStepStorage, IAlg } from "../puzzles";
import { Box, Button, Typography } from "@mui/material";
import randomItem from "random-item";
import shuffle from "lodash.shuffle";
import useKeypress from "../hooks/useKeypress";
import { useOutletContext } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { expandTriggers } from "../triggers";

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
      "learning-first": true,
      "learned-last": true,
      "exclude-unstarted": true,
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
  const [index, setIndex] = useState<number>(0);

  const [hint, setHint] = useState<string>("");

  const isLast = useMemo(() => index >= order.length - 1, [index]);
  const isFirst = useMemo(() => index === 0, [index]);

  const currentCase = useMemo(() => order[index], [index]);

  const preferredSolution = useMemo(
    () =>
      expandTriggers(
        currentCase.solutions[stepStorage.cases[currentCase.name]!.preferred]
      ).split(" "),
    [currentCase]
  );

  const previousCase = () => {
    setHint("");

    setIndex((index) => index - 1);
  };

  const nextCase = () => {
    setHint("");

    if (isLast) {
      alert("starting over!!");
      setOrder(shuffle(filterAlgs()));
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };

  const handleSpace = (e: KeyboardEvent) => {
    e.preventDefault();
    nextCase();
  };

  useKeypress(" ", handleSpace, [isLast]);

  const updateHint = () => {
    const newHintLength = hint.length > 0 ? hint.split(" ").length + 1 : 1;

    setHint(preferredSolution.slice(0, newHintLength).join(" "));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="95vh"
      textAlign="center"
    >
      <Typography component="h1" variant="h3">
        {randomItem(currentCase.setups)}
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 3 }}
        size="large"
        onClick={nextCase}
      >
        {isLast ? "Start over" : "Next case"}
      </Button>
      <Button variant="text" sx={{ mt: 2 }} size="large" onClick={updateHint}>
        Hint
      </Button>
      <Typography component="h5" variant="h5">
        {hint}
      </Typography>
      {!isFirst && (
        <Button
          variant="text"
          sx={{ mt: 3, position: "fixed", bottom: 50 }}
          size="small"
          onClick={previousCase}
        >
          Previous case
        </Button>
      )}
    </Box>
  );
};
