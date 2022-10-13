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
import { IStepStorage, Status, IAlg, IBaseStep } from "../puzzles";
import { useTheme } from "@mui/material/styles";
import { yellow, green } from "@mui/material/colors";
import { SVG, Visualizer, Type } from "sr-puzzlegen";
import merge from "lodash.merge";

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
  const [svg, setSvg] = useState<Visualizer | null>(null);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const imgRef = useCallback((node) => {
    if (node && !svg) {
      const stepImageCopy = JSON.parse(JSON.stringify(step.image));
      delete stepImageCopy.puzzle.case;
      delete stepImageCopy.puzzle.alg;

      setSvg(
        SVG(node, stepImageCopy.type as Type, {
          ...merge({}, stepImageCopy, alg.image),
          width: 120,
          height: 120,
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
            height={120}
            width={120}
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
                maxWidth: "250px",
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
