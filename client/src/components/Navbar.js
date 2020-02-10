import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MiniCart from "./Cart/MiniCart";

export default function Navbar() {
  return (
    <Nav className="navbar p-3 ">
      <div className="container">
        <div className="row w-100">
          <div className="col-10 text-center d-inline-flex  justify-content-between pr-0">
            <Link to="/" className="d-inline-flex align-items-center">
              <img src={logo} alt="brand logo" />
              <h3 className="d-inline-block ml-2"> mobile point</h3>
            </Link>
            {/* Logo reference:
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
            <ul className="navbar-nav d-inline-flex flex-row align-items-center text-uppercase">
              <li className="nav-item mx-2">
                <Link to="/products/mobile">Mobiles</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/products/accessory">Accessories</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/promotions">Special Deals</Link>
              </li>
              {/* <li className="nav-item mx-2">
                <Link to="/cart">
                  <button className="btn btn-outline-primary cart-btn">
                    login
                  </button>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="col-2 cart-btn-container py-1">
            <Link to="/cart" className=" cart-btn ">
              <button className="btn btn-warning cart-btn">cart</button>
            </Link>
            <MiniCart />
          </div>
        </div>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 90;
  background: #3ac2f0;
  a,
  button {
    color: #fff;
    font-weight: bold;
  }
  s
`;
