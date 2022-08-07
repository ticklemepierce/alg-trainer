import { MouseEventHandler } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box } from "@mui/material";

export const AlgRow = ({
  onclick,
  alg,
}: {
  onclick: MouseEventHandler<HTMLSpanElement>;
  alg: string;
}) => {
  return (
    <Box
      onClick={onclick}
      sx={{
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        "&:hover": { cursor: "pointer" },
      }}
    >
      {alg}
      <OpenInNewIcon fontSize="inherit" sx={{ marginLeft: "auto" }} />
    </Box>
  );
};
