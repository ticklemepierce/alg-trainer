import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { HomePage } from "./pages/home";
import { StepPage } from "./pages/step";
import { AlgsPage } from "./pages/algs";
import { Trainer } from "./components/trainer";
import { AlgsList } from "./components/algs-list";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/nav-bar";

import { Puzzles, Step, IPuzzle, isSubStep } from "./puzzles";
import { PuzzleRoute } from "./components/puzzle";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { setTwistyDebug } from "cubing/twisty";

setTwistyDebug({ shareAllNewRenderers: "always" });

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

const createPuzzleRoutes = (puzzle: IPuzzle) => (
  <Route
    path={`${puzzle.slug}`}
    key={puzzle.slug}
    element={<PuzzleRoute puzzle={puzzle} />}
  >
    <Route path="" element={<StepPage step={puzzle} />} />
    {puzzle.steps.map((step) => createStepRoutes(step))}
  </Route>
);

const App = () => (
  <HelmetProvider>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1976d2" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="apple-touch-icon" href="static/icons/icon-192.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="static/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="static/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="manifest.json" />

      <title>Alg Trainer test</title>
      <style>
        {`
          body {
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </Helmet>
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {Puzzles.map((puzzle) => createPuzzleRoutes(puzzle))}
      </Routes>
    </HashRouter>
  </HelmetProvider>
);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
