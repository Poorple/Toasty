import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToYComponent = () => {
    const yElement = document.getElementById("breadID");
    if (yElement) {
      yElement.scrollIntoView({ behavior: "smooth" });
    } else {
      setTimeout(() => scrollToYComponent(), 0);
    }
  };
  return (
    <header>
      <h1>
        <Link to="/">Toasty</Link>
      </h1>
      <ul>
        <li>
          <Link to="/" onClick={scrollToYComponent}>
            Our Breads
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/measurement">Measuring</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
