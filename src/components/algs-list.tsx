import { ChangeEvent, useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Button,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  IconButton,
} from "@mui/material";
import { useOutletContext, useNavigate } from "react-router-dom";
import { IAlgsListContext, IFilter } from "../puzzles";
import { useLocalStorage } from "usehooks-ts";
import { getLocalStorage } from "../components/utils/get-local-storage";
import { AlgModal } from "./alg-modal";
import { AlgTableRow } from "./alg-table-row";
import TuneIcon from "@mui/icons-material/Tune";

type status = "unstarted" | "learning" | "learned";

type StatusMap = {
  [key in status]: number;
};

export const AlgsList = () => {
  const { algs, step } = useOutletContext<IAlgsListContext>();
  const [filters, setFilters] = useLocalStorage<IFilter>(
    `${step.slug}-filters`,
    Object.keys(step.filters).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: false,
      }),
      {}
    )
  );
  const [options, setOptions] = useLocalStorage<IFilter>(
    `${step.slug}-options`,
    { "learning-first": true, "learned-last": true }
  );

  const [algDialog, setAlgDialog] = useState<string[] | null>();

  const navigate = useNavigate();

  const startTrainer = () => navigate("trainer");

  const updateFilters = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const updateOptions = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions({
      ...options,
      [event.target.name]: event.target.checked,
    });
  };

  const algRowClick = (solutions: string[]) => {
    setAlgDialog(solutions);
  };

  const handleClose = () => {
    setAlgDialog(null);
  };

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
        onClick={() => alert("click")}
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
      {/* TODO make the filters prettier */}
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          {Object.entries(step.filters).map(([filter, displayName]) => (
            <FormControlLabel
              control={
                <Switch
                  onChange={updateFilters}
                  name={filter}
                  checked={filters[filter]}
                />
              }
              label={displayName}
              key={filter}
            />
          ))}
          <FormControlLabel
            control={
              <Switch
                onChange={updateOptions}
                name={"learning-first"}
                checked={options["learning-first"]}
              />
            }
            label={"Move learned cases to the bottom"}
          />
          <FormControlLabel
            control={
              <Switch
                onChange={updateOptions}
                name={"learned-last"}
                checked={options["learned-last"]}
              />
            }
            label={"Move cases being worked on to the top"}
          />
        </FormGroup>
      </FormControl>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 650, m: "0 auto" }}
        elevation={4}
      >
        <Table aria-label="simple table">
          <TableBody>
            {Object.entries(algs!)
              .sort(([, alg1], [, alg2]) => {
                const status1 = getLocalStorage(
                  `${step.slug}-${alg1.solutions[0]}`,
                  { status: "unstarted" }
                ).status as status;
                const status2 = getLocalStorage(
                  `${step.slug}-${alg2.solutions[0]}`,
                  { status: "unstarted" }
                ).status as status;

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
                if (!Object.values(filters).some((filter) => filter === true)) {
                  return true;
                }
                let shouldShow = false;
                Object.entries(filters).forEach(([key, value]) => {
                  if (value && !shouldShow) {
                    shouldShow = algValue.filters[key];
                  }
                });
                return shouldShow;
              })
              .map(([alg, value]) => (
                <AlgTableRow
                  key={alg}
                  alg={alg}
                  value={value}
                  algRowClick={algRowClick}
                  step={step}
                  storageKey={`${step.slug}-${value.solutions[0]}`}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!!algDialog && (
        <AlgModal handleClose={handleClose} solutions={algDialog} step={step} />
      )}
    </Box>
  );
};
