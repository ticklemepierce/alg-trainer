import * as React from 'react';
import { useParams } from "react-router-dom";
import { STEPS, MASK } from '../steps';
import Box from '@mui/material/Box';
import { PuzzleCard } from '../components/puzzle-card';


export const PuzzlePage = () => {
  // console.log(STEPS);
  const { puzzleId } = useParams();
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {STEPS[puzzleId].map(step => <PuzzleCard puzzle={puzzleId} mask={MASK[step]} title={step} link={`/puzzle/${puzzleId}/${step}`}/>)}
    </Box>
  )
};
