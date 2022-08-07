import { useEffect, useState, useMemo } from "react";
import { IAlgsListContext, IFilter } from "../puzzles";
import { Box, Button, Typography } from "@mui/material";
import randomItem from "random-item";
import shuffle from "lodash.shuffle";
import useKeypress from "../hooks/useKeypress";
import { useOutletContext } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

export const Trainer = () => {
  const { algs, step } = useOutletContext<IAlgsListContext>();

  const [filters] = useLocalStorage<IFilter>(
    `${step.slug}-filters`,
    Object.keys(step.filters).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: false,
      }),
      {}
    )
  );
  const filterAlgs = () =>
    Object.entries(algs!)
      .filter(([, algValue]) => {
        if (!Object.values(filters).some((filter) => filter === true)) {
          return true;
        }
        let shouldShow = false;
        Object.entries(filters).forEach(([key, value]) => {
          if (value && !shouldShow) {
            shouldShow = algValue.filters[key];
          }
        });
        return shouldShow;
      })
      .map(([algKey]) => algKey);

  const [order, setOrder] = useState<string[]>(shuffle(filterAlgs()));
  const [index, setIndex] = useState<number>(0);
  const [currentCase, setCurrentCase] = useState<string>();

  const isLast = useMemo(() => index >= order.length - 1, [index]);
  const isFirst = useMemo(() => index === 0, [index]);

  const previousCase = () => {
    setIndex((index) => index - 1);
  };

  const nextCase = () => {
    if (isLast) {
      alert("starting over!!");
      setOrder(shuffle(Object.keys(algs)));
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };
  useKeypress(" ", nextCase, [isLast]);

  useEffect(() => {
    setCurrentCase(randomItem(algs[order[index]].setups));
  }, [index]);

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
        {currentCase}
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 3 }}
        size="large"
        onClick={nextCase}
      >
        {isLast ? "Start over" : "Next case"}
      </Button>
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
