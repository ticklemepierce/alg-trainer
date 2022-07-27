import { STEPS_MAP, MASK_MAP, PuzzlesEnum, Step } from '../steps';
import Box from '@mui/material/Box';
import { PuzzleCard } from '../components/puzzle-card';

export const PuzzlePage = ({ puzzle }: { puzzle: PuzzlesEnum }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {STEPS_MAP[puzzle].map((step: Step) => <PuzzleCard puzzle={puzzle} mask={MASK_MAP[step]} title={step} link={`/puzzle/${puzzle}/${step}`}/>)}
    </Box>
  )
};
