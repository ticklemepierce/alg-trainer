import { Typography } from "@mui/material";
import { triggers, triggerRegEx } from "../triggers";
import reactStringReplace from "react-string-replace";
import { Tooltip } from "./tooltip";

export const Alg = ({ alg }: { alg: string }) => {
  const fullAlg = reactStringReplace(alg, triggerRegEx, (match, i) => {
    const trigger = triggers.find((trigger) => trigger.key === match)!;
    const tooltipContent = <>{trigger.name}</>;
    return (
      <Tooltip title={tooltipContent} key={i}>
        <strong style={{ color: trigger.color }}>({trigger.alg})</strong>
      </Tooltip>
    );
  });
  return (
    <Typography component={"p"} variant={"inherit"}>
      {fullAlg}
    </Typography>
  );
};
