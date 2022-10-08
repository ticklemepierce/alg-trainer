import { Outlet, useOutletContext } from "react-router-dom";
import { Puzzle } from "../puzzles";

type ContextType = { puzzle: Puzzle | null };

export const PuzzleRoute = ({ puzzle }: { puzzle: Puzzle }) => {
  return <Outlet context={{ puzzle }} />;
};

export function usePuzzle() {
  return useOutletContext<ContextType>();
}
