import { CircularProgress } from "@mui/material";
import useFetch from "react-fetch-hook";
import { Outlet } from "react-router-dom";
import { usePuzzle } from "../components/puzzle";
import { IAlg, IBaseStep } from "../puzzles";

export const AlgsPage = ({ step }: { step: IBaseStep }) => {
  const { isLoading, data } = useFetch<IAlg[]>(
    `static/cases/${step.cases}.json`
  );
  const { puzzle } = usePuzzle();

  if (isLoading) {
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }

  // TODO hoist to regular context and change this to set
  return <Outlet context={{ step, algs: data, puzzle }} />;
};
