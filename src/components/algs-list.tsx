import { ChangeEvent } from "react";
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
import { IAlgs, IBaseStep } from "../puzzles";
import { useLocalStorage } from "usehooks-ts";

// TODO move to puzzles (which should be renamed to types)
interface IAlgsListContext {
  algs: IAlgs;
  step: IBaseStep;
}

interface IFilter {
  [key: string]: boolean;
}

export const AlgsList = () => {
  const { algs, step } = useOutletContext<IAlgsListContext>();
  const [filters, setFilters] = useLocalStorage<IFilter>(
    `${step}-filters`,
    Object.keys(step.filters).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: false,
      }),
      {}
    )
  );
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
              .filter(([algKey, algValue]) => {
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
              .map(([alg]) => (
                <TableRow
                  key={alg}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={getImage(alg)} height={75} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {alg}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
