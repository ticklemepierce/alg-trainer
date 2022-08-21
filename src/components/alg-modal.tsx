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
import { IStepStorage } from "../puzzles";

export const AlgModal = ({
  solutions,
  handleClose,
  stepStorage,
  setStepStorage,
}: {
  solutions: string[];
  handleClose: () => void;
  stepStorage: IStepStorage;
  setStepStorage: Function;
}) => {
  const [player, setPlayer] = useState<TwistyPlayer>();

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
    const preferred = e.currentTarget.innerText;
    if (player) {
      player.alg = new Alg(e.currentTarget.innerText);
      player.play();
    }

    setStepStorage({
      ...stepStorage,
      cases: {
        ...stepStorage.cases,
        [solutions[0]]: {
          ...stepStorage.cases[solutions[0]],
          preferred,
        },
      },
    });

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
            <Radio
              checked={solution === stepStorage.cases[solutions[0]].preferred}
            />
          </AlgRow>
        ))}
      </DialogContent>
    </Dialog>
  );
};
