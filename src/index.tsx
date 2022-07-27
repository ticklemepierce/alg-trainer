import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { HomePage } from './pages/home';
// import { PuzzlePage } from './pages/puzzle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage /> }/>
      {/* <Route path="/puzzle/3">
        <Route path="" element={<PuzzlePage puzzle={4} />} />
        <Route path=":step" element={<h1>I'm a step page test</h1>} />
      </Route>
      <Route path="/puzzle/4">
        <Route path="" element={<PuzzlePage puzzle={4}/> } />
        <Route path=":step" element={<h1>I'm a step page test</h1>} />
      </Route> */}
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('root'));