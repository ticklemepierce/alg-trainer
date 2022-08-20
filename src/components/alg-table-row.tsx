import {
  TableCell,
  TableRow,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Step } from "../puzzles";
import { useLocalStorage } from "usehooks-ts";
import { AlgRow } from "./alg-row";

const colorMap = {
  unstarted: "none",
  learning: "yellow",
  learned: "green",
};

type status = "unstarted" | "learning" | "learned";

interface IAlgStorage {
  preferred: string;
  status: status;
}

// TODO any
export const AlgTableRow = ({
  alg,
  value,
  step,
  algRowClick,
  storageKey,
}: {
  alg: string;
  value: any;
  step: Step;
  algRowClick: Function;
  storageKey: string;
}) => {
  const [algStorage, setAlgStorage] = useLocalStorage<IAlgStorage>(storageKey, {
    preferred: value.solutions[0],
    status: "unstarted",
  });

  const handleChange = (e: SelectChangeEvent) => {
    setAlgStorage({
      ...algStorage,
      status: e.target.value as status,
    });
  };

  const getImage = (alg: string) =>
    `https://cubiclealgdbimagegen.azurewebsites.net/generator?${step.visualCubeParams}&case=${alg}`;

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        component="th"
        scope="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: colorMap[algStorage.status],
        }}
      >
        <AlgRow
          onClick={() => algRowClick(value.solutions)}
          alg={algStorage.preferred}
        >
          <img
            src={getImage(alg)}
            height={75}
            width={75}
            style={{ marginRight: "24px" }}
          />
        </AlgRow>

        <FormControl size="small">
          <Select
            value={algStorage.status}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"unstarted"}>Unstarted</MenuItem>
            <MenuItem value={"learning"}>Learning</MenuItem>
            <MenuItem value={"learned"}>Learned</MenuItem>
          </Select>
        </FormControl>
      </TableCell>
    </TableRow>
  );
};
