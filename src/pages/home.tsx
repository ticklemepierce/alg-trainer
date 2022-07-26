import * as React from 'react';
import Box from '@mui/material/Box';
import { PuzzleCard } from '../components/puzzle-card';

const PUZZLES = [2, 3, 4, 5];

export const HomePage = () => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {PUZZLES.map(puzzle => <PuzzleCard puzzle={puzzle} title={`${puzzle}x${puzzle}`} link={`/puzzle/${puzzle}`}/>)}
  </Box>
);
