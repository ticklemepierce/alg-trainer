import { IPuzzle, IStep } from '../puzzles';
import Box from '@mui/material/Box';
import { StepCard } from '../components/step-card';

export const StepPage = ({ step }: { step: IStep | IPuzzle }) => {
  if (step.steps) {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {step.steps.map((substep) => <StepCard step={substep} key={substep.slug} />)}
      </Box>
    );
  } else {
    return (
      <h1>Base case</h1>
    )
  }

};
