import { CircularProgress } from "@mui/material";
import useFetch from "react-fetch-hook";
import { Outlet } from "react-router-dom";
import { IAlg, Step } from "../puzzles";

export const AlgsPage = ({ step }: { step: Step }) => {
  const { isLoading, data } = useFetch<IAlg[]>(`${step.slug}.json`);

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
  return <Outlet context={{ step, algs: data }} />;
};
