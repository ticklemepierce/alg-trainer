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
import { StatusMap, IAlg } from "../puzzles";
import { MultiProgress } from "./multiprogress";

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
        "learning-first": false,
        "learned-last": false,
        "exclude-unstarted": false,
        "exclude-learned": false,
      },
      cases: algs.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.name]: {
            preferred: 0,
            status: "unstarted",
          },
        }),
        {}
      ),
    }
  );

  const [algDialog, setAlgDialog] = useState<IAlg | null>();
  const [optionsDialogOpen, setOptionsDialogOpen] = useState(false);

  const navigate = useNavigate();

  const startTrainer = () => navigate("trainer");

  const algRowClick = (alg: IAlg) => {
    setAlgDialog(alg);
  };

  const closeAlgModal = () => setAlgDialog(null);

  const closeOptionsModal = () => setOptionsDialogOpen(false);
  const openOptionsModal = () => setOptionsDialogOpen(true);

  const percentLearned = algs.reduce((acc, curr) => {
    if (stepStorage.cases[curr.name].status === "learned") {
      acc++;
    }
    return acc;
  }, 0);

  const percentLearning = algs.reduce((acc, curr) => {
    if (stepStorage.cases[curr.name].status === "learning") {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        m: 1,
      }}
    >
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            my: 2,
            gridColumnStart: 1,
            gridRowStart: 1,
            justifySelf: "center",
          }}
          size="large"
          onClick={startTrainer}
        >
          Start Trainer
        </Button>
        <IconButton
          aria-label="delete"
          onClick={openOptionsModal}
          size={"large"}
          sx={{
            gridColumnStart: 1,
            gridRowStart: 1,
            justifySelf: "right",
            display: "flex",
          }}
        >
          <TuneIcon fontSize="large" color="action" />
        </IconButton>
      </Box>
      {(percentLearned > 0 || percentLearning > 0) && (
        <MultiProgress
          data={[
            {
              name: "learned",
              value: percentLearned,
            },
            {
              name: "learning",
              value: percentLearning,
            },
          ]}
        />
      )}
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 650, m: "0 auto" }}
        elevation={4}
      >
        <Table aria-label="simple table">
          <TableBody>
            {algs
              .sort((alg1, alg2) => {
                const status1 = stepStorage.cases[alg1.name]!.status;
                const status2 = stepStorage.cases[alg2.name]!.status;

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
              .filter((alg) => {
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
                    shouldShow = alg.filters[key];
                  }
                });
                return shouldShow;
              })
              .map((alg) => (
                <AlgTableRow
                  key={alg.name}
                  alg={alg}
                  algRowClick={algRowClick}
                  stepStorage={stepStorage}
                  setStepStorage={setStepStorage}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!!algDialog && (
        <AlgModal
          handleClose={closeAlgModal}
          alg={algDialog}
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
