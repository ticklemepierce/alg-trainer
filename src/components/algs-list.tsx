import { ChangeEvent, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useOutletContext, useNavigate } from "react-router-dom";
import { IAlgsListContext, IFilter } from "../puzzles";
import { useLocalStorage } from "usehooks-ts";
import { AlgRow } from "./alg-row";
import { AlgModal } from "./alg-modal";

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
  const [algDialog, setAlgDialog] = useState<string[] | null>();

  const navigate = useNavigate();

  const startTrainer = () => navigate("trainer");

  const getImage = (alg: string) =>
    `https://cubiclealgdbimagegen.azurewebsites.net/generator?${step.visualCubeParams}&case=${alg}`;

  const updateFilters = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
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
        </FormGroup>
      </FormControl>
      <TableContainer component={Paper} sx={{ maxWidth: 650, m: "0 auto" }}>
        <Table aria-label="simple table">
          <TableBody>
            {Object.entries(algs!)
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
                <TableRow
                  key={alg}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={getImage(alg)} height={75} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <AlgRow
                      onClick={() => algRowClick(value.solutions)}
                      alg={value.solutions[0]}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!!algDialog && (
        <AlgModal handleClose={handleClose} solutions={algDialog} />
      )}
    </Box>
  );
};
