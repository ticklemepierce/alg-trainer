import { MouseEvent, ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { triggers, triggerRegEx } from "../triggers";
import reactStringReplace from "react-string-replace";
import { Tooltip } from "./tooltip";

export const AlgRow = ({
  onClick,
  alg,
  children,
}: {
  onClick: (e: MouseEvent<HTMLElement>) => void;
  alg: string;
  children: ReactElement;
}) => {
  const fullAlg = reactStringReplace(alg, triggerRegEx, (match, i) => {
    const trigger = triggers.find((trigger) => trigger.key === match)!;
    const tooltipContent = <>{trigger.name}</>;
    return (
      <Tooltip title={tooltipContent}>
        <strong key={i} style={{ color: trigger.color }}>
          ({trigger.alg})
        </strong>
      </Tooltip>
    );
  });
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
        {fullAlg}
      </Typography>
    </Box>
  );
};
