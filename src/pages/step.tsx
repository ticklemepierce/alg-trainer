import { ISubStep, Step } from "../puzzles";
import { Box } from "@mui/material";
import { StepCard } from "../components/step-card";
import { setTwistyDebug } from "cubing/twisty";

export const StepPage = ({ step }: { step: ISubStep }) => {
  setTwistyDebug({ shareAllNewRenderers: "always" });

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {step.steps.map((substep: Step) => (
        <StepCard step={substep} key={substep.slug} />
      ))}
    </Box>
  );
};
