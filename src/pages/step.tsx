import { ISubStep, Step } from '../puzzles';
import { Box } from '@mui/material';
import { StepCard } from '../components/step-card';

export const StepPage = ({ step }: { step: ISubStep }) =>  (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {step.steps.map((substep: Step) => <StepCard step={substep} key={substep.slug} />)}
  </Box>
);