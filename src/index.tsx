import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { HomePage } from "./pages/home";
import { StepPage } from "./pages/step";
import { AlgsPage } from "./pages/algs";
import { Trainer } from "./components/trainer";
import { AlgsList } from "./components/algs-list";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/nav-bar";

import { Puzzles, Step, ISubStep, isSubStep } from "./puzzles";

const createStepRoutes = (step: Step) => (
  <Route path={`${step.slug}`} key={step.slug}>
    {isSubStep(step) ? (
      <>
        <Route path="" element={<StepPage step={step} />} />
        {step.steps && step.steps.map((substep) => createStepRoutes(substep))}
      </>
    ) : (
      <Route path="" element={<AlgsPage step={step} />}>
        <Route path="" element={<AlgsList />} />
        <Route path="trainer" element={<Trainer />} />
      </Route>
    )}
  </Route>
);

const createPuzzleRoutes = (puzzle: ISubStep) => (
  <Route path={`${puzzle.slug}`} key={puzzle.slug}>
    <Route path="" element={<StepPage step={puzzle} />} />
    {puzzle.steps.map((step) => createStepRoutes(step))}
  </Route>
);

const App = () => (
  <>
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {Puzzles.map((puzzle) => createPuzzleRoutes(puzzle))}
      </Routes>
    </HashRouter>
  </>
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(new URL("../service-worker.js", import.meta.url), {
      type: "module",
    })
    .then((_registration) => {
      // No Op
    })
    .catch((e) => {
      console.error(e);
    });
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
