import { useCallback, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { Step } from "../puzzles";
import { SVG, Visualizer, Type } from "sr-puzzlegen";

export const StepCard = ({ step }: { step: Step }) => {
  const [svg, setSvg] = useState<Visualizer | null>(null);

  const imgRef = useCallback((node) => {
    if (node && !svg) {
      setSvg(
        SVG(node, step.image.type as Type, {
          width: 200,
          height: 200,
          puzzle: step.image.options,
        })
      );
    }
  }, []);
  return (
    <Card sx={{ maxWidth: 200, textAlign: "center", m: 2 }}>
      <CardActionArea>
        <Link
          to={step.slug}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardContent sx={{ p: 0, "&:last-child": { p: 0 } }}>
            <Box height={200} width={200} ref={imgRef} />
            <Typography variant="h5" component="div" p="10">
              {step.displayName}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
