import Box from '@mui/material/Box';
import { PuzzleCard } from '../components/puzzle-card';
import { PUZZLES } from '../steps';

export const HomePage = () => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {PUZZLES.map(puzzle => <PuzzleCard puzzle={puzzle} title={`${puzzle}x${puzzle}`} link={`/puzzle/${puzzle}`} key={puzzle} />)}
  </Box>
);
