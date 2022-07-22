/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/Navbar.css";
import React from "react";
import {
  BoxArrowRight,
  Cart4,
  Heart,
  PersonCircle,
  PersonFill,
  Search,
  SearchHeart,
} from "react-bootstrap-icons";

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        NMart
      </a>
      <ul>
        <li>
          <a href="/men">MEN</a>
        </li>
        <li>
          <a href="/women">WOMEN</a>
        </li>
        <li>
          <a href="/kids">KIDS</a>
        </li>
      </ul>
      <div class="search-box">
        <Search className="search-icon" />
        <input
          type="text"
          class="input-search"
          placeholder="Type to Search..."
        />
      </div>
      <div className="nav-right d-flex">
        <div className="nav-icons d-flex mx-4">
          <div className="mr-3 my-0">
            <PersonFill /> <div>Profile</div>
          </div>

          <div className="mr-3 my-0">
            <Heart />
            <div>Wishlist</div>
          </div>
          <div className="mr-3 my-0">
            <Cart4 />
            <div>Cart</div>
          </div>
        </div>
        <div className="logout">
          <a
            href="#"
            className="btn btn-secondary logout-btn"
            onClick={handleLogout}
          >
            <BoxArrowRight className="mr-2" /> Log out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
