import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DonatePage from "./Pages/DonatePage";
import AboutPage from "./Pages/AboutPage";
import OurWorkPage from "./Pages/OurWorkPage";
import GetInvolvedPage from "./Pages/GetInvolvedPage";
import ContactPage from "./Pages/ContactPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/ourWork" element={<OurWorkPage />} />
          <Route path="/getInvolved" element={<GetInvolvedPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
