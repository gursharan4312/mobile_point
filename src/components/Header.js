import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Mobile Point</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="btn" to="/products">
              Shop
            </Link>
          </li>
          <li>
            <Link className="btn" to="categories">
              Category
            </Link>
          </li>
          <li>
            <Link className="btn" to="information">
              Information
            </Link>
          </li>
          <li>
            <Link className="btn" to="admin">
              admin login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
