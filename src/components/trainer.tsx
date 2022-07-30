import { useEffect, useState } from 'react';
import { IPuzzle, IStep, IAlgs } from '../puzzles';
import { Box, Button, Typography } from '@mui/material';
import { StepCard } from '../components/step-card';
import randomItem from 'random-item';
import shuffle from 'lodash.shuffle';

export const Trainer = ({ algs }: { algs: IAlgs }) => {
  const [order, setOrder] = useState<string[]>(shuffle(Object.keys(algs)));
  const [index, setIndex] = useState<number>(0);
  const [currentCase, setCurrentCase] = useState<string>();

  const isLast = () => (index >= order.length - 1);

  useEffect(() => {
    console.log(index + 1);
    setCurrentCase(randomItem(algs[order[index]]));
  }, [index])

  const clickHandler = () => {
    if (isLast()) {
      setOrder(shuffle(Object.keys(algs)));
      setIndex(0);
    } else {
      setIndex((index) => (index + 1));
    }
  }

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    minHeight="100vh"
  >
    <Typography component="h1" variant="h3">{currentCase}</Typography>
    <Button variant="contained" sx={{mt: 3}} size="large" onClick={clickHandler}>
      {isLast() ? "Start over" : "Next case"}
    </Button>
  </Box>
  );
};
 