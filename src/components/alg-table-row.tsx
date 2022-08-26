import {
  TableCell,
  TableRow,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { AlgRow } from "./alg-row";
import { IStepStorage, Status, IAlg, IBaseStep } from "../puzzles";
import { expandTriggers } from "../triggers";

const colorMap = {
  unstarted: "none",
  learning: "#FDD835",
  learned: "#43A047",
};

export const AlgTableRow = ({
  alg,
  algRowClick,
  stepStorage,
  setStepStorage,
  step,
}: {
  alg: IAlg;
  algRowClick: Function;
  stepStorage: IStepStorage;
  setStepStorage: Function;
  step: IBaseStep;
}) => {
  const handleChange = (e: SelectChangeEvent) => {
    setStepStorage({
      ...stepStorage,
      cases: {
        ...stepStorage.cases,
        [alg.name]: {
          ...stepStorage.cases[alg.name],
          status: e.target.value as Status,
        },
      },
    });
  };

  const { preferred, status } = stepStorage.cases[alg.name];

  const getImage = () =>
    `https://cubiclealgdbimagegen.azurewebsites.net/generator?${
      step.visualCubeParams
    }&case=${expandTriggers(alg.solutions[0])}`;

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        component="th"
        scope="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: colorMap[status],
        }}
      >
        <AlgRow onClick={() => algRowClick(alg)} alg={alg.solutions[preferred]}>
          <img
            src={getImage()}
            height={75}
            width={75}
            style={{ marginRight: "24px" }}
          />
        </AlgRow>
        <FormControl size="small" sx={{ flexShrink: 0 }}>
          <Select
            value={status}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ ml: 2 }}
            native
          >
            <option value={"unstarted"}>Unstarted</option>
            <option value={"learning"}>Learning</option>
            <option value={"learned"}>Learned</option>
          </Select>
        </FormControl>
      </TableCell>
    </TableRow>
  );
};
