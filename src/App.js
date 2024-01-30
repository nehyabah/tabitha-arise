import "./App.css";
<<<<<<< HEAD
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DonatePage from "./Pages/DonatePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </div>
    </Router>
>>>>>>> trial
  );
}

export default App;
