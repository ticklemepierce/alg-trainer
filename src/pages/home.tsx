import Box from "@mui/material/Box";
import { StepCard } from "../components/step-card";
import { Puzzles } from "../puzzles";

export const HomePage = () => (
  <>
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {Puzzles.map((puzzle) => (
        <StepCard step={puzzle} key={puzzle.slug} />
      ))}
    </Box>
  </>
);
