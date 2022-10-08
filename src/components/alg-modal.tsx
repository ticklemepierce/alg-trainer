import { useCallback, useState } from "react";
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
import { IStepStorage, IAlg } from "../puzzles";
import { usePuzzle } from "./puzzle";
import { expandTriggers } from "../triggers";

export const AlgModal = ({
  alg,
  handleClose,
  stepStorage,
  setStepStorage,
}: {
  alg: IAlg;
  handleClose: () => void;
  stepStorage: IStepStorage;
  setStepStorage: Function;
}) => {
  const [player, setPlayer] = useState<TwistyPlayer>();
  const { puzzle } = usePuzzle();

  const twistyPlayerRef = useCallback((node) => {
    if (node && !player) {
      const twistyPlayer = new TwistyPlayer({
        puzzle: puzzle!.twisty,
        alg: alg.solutions[0],
        hintFacelets: "none",
        background: "none",
        experimentalSetupAnchor: "end",
        experimentalSetupAlg: "x2",
        controlPanel: "none",
        experimentalDragInput: "none",
      });

      twistyPlayer.style.maxWidth = "100%";

      node.appendChild(twistyPlayer);

      setPlayer(twistyPlayer);
    }
  }, []);

  const handleClick = (preferred: number) => {
    if (player) {
      player.alg = new Alg(expandTriggers(alg.solutions[preferred]));
      player.play();
    }

    setStepStorage({
      ...stepStorage,
      cases: {
        ...stepStorage.cases,
        [alg.name]: {
          ...stepStorage.cases[alg.name],
          preferred,
        },
      },
    });

    return null;
  };

  return (
    <Dialog open={!!alg} onClose={handleClose}>
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
          style={{ margin: "0 auto" }}
        />
        {alg.solutions.map((solution, idx) => (
          <AlgRow
            alg={solution}
            onClick={() => handleClick(idx)}
            key={solution}
          >
            <Radio checked={idx === stepStorage.cases[alg.name].preferred} />
          </AlgRow>
        ))}
      </DialogContent>
    </Dialog>
  );
};
