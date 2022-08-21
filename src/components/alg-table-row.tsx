import {
  TableCell,
  TableRow,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { AlgRow } from "./alg-row";
import { IStepStorage, Status } from "../puzzles";

const colorMap = {
  unstarted: "none",
  learning: "#FDD835",
  learned: "#43A047",
};

export const AlgTableRow = ({
  solutions,
  algRowClick,
  stepStorage,
  setStepStorage,
  image,
  id,
}: {
  solutions: string[];
  algRowClick: Function;
  stepStorage: IStepStorage;
  setStepStorage: Function;
  image: string;
  id: string;
}) => {
  const handleChange = (e: SelectChangeEvent) => {
    setStepStorage({
      ...stepStorage,
      cases: {
        ...stepStorage.cases,
        [id]: {
          ...stepStorage.cases[id],
          status: e.target.value as Status,
        },
      },
    });
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        component="th"
        scope="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: colorMap[stepStorage.cases[id].status],
        }}
      >
        <AlgRow
          onClick={() => algRowClick(solutions)}
          alg={stepStorage.cases[id].preferred}
        >
          <img
            src={image}
            height={75}
            width={75}
            style={{ marginRight: "24px" }}
          />
        </AlgRow>
        <FormControl size="small">
          <Select
            value={stepStorage.cases[id].status}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
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
