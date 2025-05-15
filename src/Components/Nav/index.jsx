import { Link } from "react-router-dom";
import "./nav.css";

export function Nav() {
  return (
      <nav>
        <div>Logo</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
  );
}
