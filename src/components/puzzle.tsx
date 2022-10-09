import { Outlet, useOutletContext } from "react-router-dom";
import { IPuzzle } from "../puzzles";

type ContextType = { puzzle: IPuzzle | null };

export const PuzzleRoute = ({ puzzle }: { puzzle: IPuzzle }) => {
  return <Outlet context={{ puzzle }} />;
};

export function usePuzzle() {
  return useOutletContext<ContextType>();
}
