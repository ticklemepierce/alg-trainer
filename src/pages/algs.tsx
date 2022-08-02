import { 
  CircularProgress
} from "@mui/material";
import useFetch from "react-fetch-hook";
import { Outlet } from "react-router-dom";
import { IAlgs, Step } from "../puzzles";

export const AlgsPage = ({ step } : { step: Step }) => {
  const { isLoading, data } = useFetch<IAlgs>(`${step.slug}.json`);
  
  if (isLoading) {
    return (<CircularProgress />);
  }
  return <Outlet context={{step, algs: data}} />
};
 