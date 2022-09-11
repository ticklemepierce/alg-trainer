import { useCallback, useState } from "react";
import {
  Box,
  TableCell,
  TableRow,
  FormControl,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Alg } from "./alg";
import { IStepStorage, Status, IAlg } from "../puzzles";
import { expandTriggers } from "../triggers";
import { useTheme } from "@mui/material/styles";
import { yellow, green } from "@mui/material/colors";
import { SVG, Visualizer, Type } from "sr-puzzlegen";

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
}: {
  alg: IAlg;
  algRowClick: Function;
  stepStorage: IStepStorage;
  setStepStorage: Function;
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
  const [svg, setSvg] = useState<Visualizer | null>(null);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const imgRef = useCallback((node) => {
    if (node && !svg) {
      setSvg(
        SVG(node, "cube" as Type, {
          width: 75,
          height: 75,
          puzzle: {
            case: expandTriggers(alg.solutions[0]),
            mask: {
              F: [0, 1, 2],
              B: [0, 1, 2],
              R: [0, 1, 2],
              L: [0, 1, 2],
              U: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            },
          },
        })
      );
    }
  }, []);

  const tableProps: any = {
    component: "th",
    scope: "row",
  };

  if (!isSmallScreen) {
    tableProps.onClick = () => algRowClick(alg);
  }

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        {...tableProps}
        sx={{
          backgroundColor: colorMap[status],
          "&:hover": { cursor: "pointer" },
        }}
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
            height={75}
            width={75}
            sx={{ mr: 2, flexShrink: 0 }}
            ref={imgRef}
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
              sx={{
                height: "100%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                  mb: 2,
                  width: "100%",
                },
              }}
            >
              <Alg alg={alg.solutions[preferred]} />
            </Box>
            <FormControl
              onClick={(e) => e.stopPropagation()}
              size="small"
              sx={{
                my: 0,
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
                  my: 0,
                  alignSelf: "end",
                  ml: 2,
                  flexShrink: 0,
                  [theme.breakpoints.down("sm")]: {
                    "& .MuiNativeSelect-select": {
                      padding: "5px 14px",
                    },
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
