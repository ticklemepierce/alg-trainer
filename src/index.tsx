import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { HomePage } from './pages/home';
import { StepPage } from './pages/step';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Puzzles, IPuzzle, IStep } from './puzzles';

const createStepRoutes = (step: IStep) => (
  <Route path={`${step.slug}`} key={step.slug}>
    <Route path="" element={<StepPage step={step} />} />
    {step.steps && step.steps.map(substep => (createStepRoutes(substep)))}
  </Route>
)

const createPuzzleRoutes = (puzzle: IPuzzle) => (
  <Route path={`${puzzle.slug}`} key={puzzle.slug}>
    <Route path="" element={<StepPage step={puzzle} />} />
    {puzzle.steps.map(step => (createStepRoutes(step)))}
  </Route>
)

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage /> }/>
      {Puzzles.map(puzzle => (createPuzzleRoutes(puzzle)))}
    </Routes>
  </HashRouter>
)

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('root'));