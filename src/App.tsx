import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Recipe from "./components/Recipe";
import Measurements from "./components/Measurements";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipe/:bread" element={<Recipe />} />
        <Route path="/measurement" element={<Measurements />} />
      </Routes>
    </Router>
  );
}

export default App;
