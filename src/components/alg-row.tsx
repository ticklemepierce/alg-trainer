import { MouseEvent } from "react";
import { Box, Typography } from "@mui/material";

export const AlgRow = ({
  onClick,
  alg,
}: {
  onClick: (e: MouseEvent<HTMLElement>) => void;
  alg: string;
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        "&:hover": { cursor: "pointer" },
      }}
    >
      <Typography component={"p"} variant={"h6"}>
        {alg}
      </Typography>
    </Box>
  );
};
