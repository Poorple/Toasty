import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/landing-page/Home";
import About from "./components/About";
import Recipe from "./components/Recipe";
import Measurements from "./components/Measurements";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:bread" element={<Recipe />} />
        <Route path="/measurement" element={<Measurements />} />
      </Routes>
    </Router>
  );
}

export default App;
