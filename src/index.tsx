import React from 'react';
import * as ReactDOM from 'react-dom';
import { HomePage } from './pages/home';
import { PuzzlePage } from './pages/puzzle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage /> }/>
      <Route path="/puzzle/:puzzleId">
        <Route path="" element={<PuzzlePage />} />
        <Route path=":step" element={<h1>I'm a step page</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
)

ReactDOM.render( <React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));