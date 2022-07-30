import { IPuzzle, IStep } from '../puzzles';
import { Box } from '@mui/material';
import { StepCard } from '../components/step-card';
import { Trainer } from '../components/trainer';

export const StepPage = ({ step }: { step: IStep | IPuzzle }) => {
  if (step.steps) {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {step.steps.map((substep) => <StepCard step={substep} key={substep.slug} />)}
      </Box>
    );
  } else {
    return (
      <Trainer algs={step.algs!}/>
    )
  }

};
 