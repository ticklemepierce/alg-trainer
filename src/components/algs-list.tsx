import { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { useOutletContext, useNavigate } from "react-router-dom";
import { IAlgsListContext, IStepStorage } from "../puzzles";
import { useLocalStorage } from "usehooks-ts";
import { AlgModal } from "./alg-modal";
import { OptionsModal } from "./options-modal";
import { AlgTableRow } from "./alg-table-row";
import TuneIcon from "@mui/icons-material/Tune";
import { StatusMap } from "../puzzles";

export const AlgsList = () => {
  const { algs, step } = useOutletContext<IAlgsListContext>();
  const [stepStorage, setStepStorage] = useLocalStorage<IStepStorage>(
    step.slug,
    {
      filters: Object.keys(step.filters).reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: false,
        }),
        {}
      ),
      options: {
        "learning-first": true,
        "learned-last": true,
        "exclude-unstarted": true,
        "exclude-learned": true,
      },
      cases: Object.entries(algs!).reduce(
        (acc, [, cur]) => ({
          ...acc,
          [cur.solutions[0]]: {
            preferred: cur.solutions[0],
            status: "unstarted",
          },
        }),
        {}
      ),
    }
  );

  const [algDialog, setAlgDialog] = useState<string[] | null>();
  const [optionsDialogOpen, setOptionsDialogOpen] = useState(false);

  const navigate = useNavigate();

  const startTrainer = () => navigate("trainer");

  const getImage = (alg: string) =>
    `https://cubiclealgdbimagegen.azurewebsites.net/generator?${step.visualCubeParams}&case=${alg}`;

  const algRowClick = (solutions: string[]) => {
    setAlgDialog(solutions);
  };

  const closeAlgModal = () => setAlgDialog(null);

  const closeOptionsModal = () => setOptionsDialogOpen(false);
  const openOptionsModal = () => setOptionsDialogOpen(true);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <IconButton
        aria-label="delete"
        sx={{ position: "fixed", top: 20, right: 20 }}
        onClick={openOptionsModal}
      >
        <TuneIcon fontSize="large" color="action" />
      </IconButton>
      <Button
        variant="contained"
        sx={{ my: 4, mx: "auto" }}
        size="large"
        onClick={startTrainer}
      >
        Start Trainer
      </Button>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 650, m: "0 auto" }}
        elevation={4}
      >
        <Table aria-label="simple table">
          <TableBody>
            {Object.entries(algs!)
              .sort(([, alg1], [, alg2]) => {
                const status1 = stepStorage.cases[alg1.solutions[0]].status;
                const status2 = stepStorage.cases[alg2.solutions[0]].status;

                if (status1 === status2) {
                  return 0;
                }
                const valMap: StatusMap = {
                  learning: 0,
                  unstarted: 1,
                  learned: 2,
                };

                return valMap[status1] - valMap[status2];
              })
              .filter(([, algValue]) => {
                if (
                  !Object.values(stepStorage.filters).some(
                    (filter) => filter === true
                  )
                ) {
                  return true;
                }
                let shouldShow = false;
                Object.entries(stepStorage.filters).forEach(([key, value]) => {
                  if (value && !shouldShow) {
                    shouldShow = algValue.filters[key];
                  }
                });
                return shouldShow;
              })
              .map(([alg, value]) => (
                <AlgTableRow
                  key={alg}
                  solutions={value.solutions}
                  algRowClick={algRowClick}
                  stepStorage={stepStorage}
                  setStepStorage={setStepStorage}
                  image={getImage(alg)}
                  id={value.solutions[0]}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!!algDialog && (
        <AlgModal
          handleClose={closeAlgModal}
          solutions={algDialog}
          stepStorage={stepStorage}
          setStepStorage={setStepStorage}
        />
      )}
      {optionsDialogOpen && (
        <OptionsModal
          handleClose={closeOptionsModal}
          stepStorage={stepStorage}
          setStepStorage={setStepStorage}
          step={step}
        />
      )}
    </Box>
  );
};
