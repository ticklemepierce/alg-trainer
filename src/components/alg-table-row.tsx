import {
  Box,
  TableCell,
  TableRow,
  FormControl,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Alg } from "./alg";
import { IStepStorage, Status, IAlg, IBaseStep } from "../puzzles";
import { expandTriggers } from "../triggers";
import { useTheme } from "@mui/material/styles";
import { yellow, green } from "@mui/material/colors";

const colorMap = {
  unstarted: "none",
  learning: yellow[500],
  learned: green[500],
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

  const theme = useTheme();

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
        sx={{ backgroundColor: colorMap[status] }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: theme.typography.h6,
            width: "100%",
            [theme.breakpoints.down("sm")]: {
              fontSize: theme.typography.body1,
            },
          }}
        >
          <Typography
            variant="inherit"
            component="span"
            sx={{ mr: 2, flexShrink: 0, width: "65px" }}
          >
            {alg.name}
          </Typography>
          <Box
            component="img"
            height={75}
            width={75}
            sx={{ mr: 2, flexShrink: 0 }}
            src={getImage()}
          />
          <Box
            sx={{
              height: "100%",
              display: "inline-flex",
              alignItems: "center",
              flexWrap: "wrap",
              flexGrow: "1",
              justifyContent: "space-between",
            }}
          >
            <Box
              onClick={() => algRowClick(alg)}
              sx={{
                height: "100%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": { cursor: "pointer" },
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              }}
            >
              <Alg alg={alg.solutions[preferred]} />
            </Box>
            <FormControl
              size="small"
              sx={{
                flexShrink: 0,
                [theme.breakpoints.down("sm")]: {
                  margin: "auto",
                },
              }}
            >
              <Select
                value={status}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                native
                sx={{
                  alignSelf: "end",
                  ml: 2,
                  flexShrink: 0,
                  [theme.breakpoints.down("sm")]: {
                    "& .MuiNativeSelect-select": {
                      padding: "5px 14px",
                    },
                    mt: 1,
                    ml: 0,
                  },
                }}
              >
                <option value={"unstarted"}>Unstarted</option>
                <option value={"learning"}>Learning</option>
                <option value={"learned"}>Learned</option>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
};
