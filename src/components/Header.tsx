import "../styles/header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Toasty</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Our Breads</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
