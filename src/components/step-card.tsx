import { useCallback, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { Step } from "../puzzles";
import { TwistyPlayer } from "cubing/twisty";

export const StepCard = ({ step }: { step: Step }) => {
  const twistyPlayerRef = useRef<any>(null);

  const setRef = useCallback((node) => {
    if (node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }

      const twistyPlayer = new TwistyPlayer({
        ...step.image,
        hintFacelets: "none",
        background: "none",
        experimentalSetupAnchor: "end",
        controlPanel: "none",
        experimentalDragInput: "none",
      });

      twistyPlayer.style.width = "200px";
      twistyPlayer.style.height = "200px";

      node.appendChild(twistyPlayer);

      twistyPlayerRef.current = twistyPlayer;
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
            <Box height={200} width={200} ref={setRef} />
            <Typography variant="h5" component="div" p="10">
              {step.displayName}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
