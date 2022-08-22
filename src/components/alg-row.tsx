import { MouseEvent, ReactElement } from "react";
import { Box, Typography } from "@mui/material";

export const AlgRow = ({
  onClick,
  alg,
  children,
}: {
  onClick: (e: MouseEvent<HTMLElement>) => void;
  alg: string;
  children: ReactElement;
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        "&:hover": { cursor: "pointer" },
        width: "100%",
      }}
    >
      {children}
      <Typography component={"p"} variant={"h6"}>
        {alg}
      </Typography>
    </Box>
  );
};
