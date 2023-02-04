import HomePage from "./Pages/HomePage";
import ResultPage from "./Pages/ResultPage";
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from "react-router";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resultpage" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}