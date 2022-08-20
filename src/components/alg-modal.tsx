import { useCallback, useState, MouseEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Radio,
} from "@mui/material";
import { TwistyPlayer } from "cubing/twisty";
import { Alg } from "cubing/alg";
import { AlgRow } from "./alg-row";
import CloseIcon from "@mui/icons-material/Close";
import { useLocalStorage } from "usehooks-ts";
import { IBaseStep } from "../puzzles";

export const AlgModal = ({
  step,
  solutions,
  handleClose,
}: {
  step: IBaseStep;
  solutions: string[];
  handleClose: () => void;
}) => {
  const [player, setPlayer] = useState<TwistyPlayer>();
  const [preferredSolution, setPreferredSolution] = useLocalStorage<string>(
    `${step.slug}-${solutions[0]}-preferred`,
    solutions[0]
  );
  const twistyPlayerRef = useCallback((node) => {
    if (node) {
      const player = new TwistyPlayer({
        puzzle: "3x3x3",
        alg: solutions[0],
        hintFacelets: "none",
        background: "none",
        experimentalSetupAnchor: "end",
        experimentalSetupAlg: "x2",
        controlPanel: "none",
        experimentalDragInput: "none",
      });

      node.appendChild(player);

      setPlayer(player);
    }
  }, []);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const solution = e.currentTarget.innerText;
    if (player) {
      player.alg = new Alg(e.currentTarget.innerText);
      player.play();
    }

    setPreferredSolution(solution);

    return null;
  };

  return (
    <Dialog open={!!solutions} onClose={handleClose}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[700],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div
          id="twisty-player"
          ref={twistyPlayerRef}
          style={{ margin: "0 auto", width: "384px" }}
        />
        {solutions.map((solution) => (
          <AlgRow alg={solution} onClick={handleClick} key={solution}>
            <Radio checked={solution === preferredSolution} />
          </AlgRow>
        ))}
      </DialogContent>
    </Dialog>
  );
};
