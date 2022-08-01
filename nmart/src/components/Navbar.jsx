/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/Navbar.css";
import React, { useEffect } from "react";
import fire from "../fire";
import {
  BoxArrowRight,
  CaretDownFill,
  CaretRightFill,
  Cart4,
  Flag,
  Heart,
  PersonFill,
  Search,
} from "react-bootstrap-icons";
import regionsJson from "../data/regions.json";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ search }) => {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <nav className="nav">
      <div className="d-flex">
        <img
          src="https://w7.pngwing.com/pngs/915/839/png-transparent-n-letter-n-font-n-watercolor-painting-purple-angle.png"
          alt="logo"
          style={{ height: "60px", width: "60px", marginRight: "1rem" }}
        ></img>
        <a href="/" className="site-title">
          NMart
        </a>
      </div>
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
        <li>
          <a href="/categories">
            ALL CATEGORIES
            <CaretDownFill />
          </a>
          <div className="sub-menu">
            <Link to="/baby">
              <li>Baby</li>
            </Link>
            <Link to="/giftGuide">
              <li>Gift Guide</li>
            </Link>
            <Link to="/women">
              <li>Women</li>
            </Link>
            <Link to="/divided">
              <li>Divided</li>
            </Link>
            <Link to="/men">
              <li>Men</li>
            </Link>
            <Link to="/kids">
              <li>Kids</li>
            </Link>
            <Link to="/home">
              <li>H&M Home</li>
            </Link>
            <Link to="/outlet">
              <li>Outlet</li>
            </Link>
            <Link to="/sale">
              <li>SALE</li>
            </Link>
          </div>
        </li>
      </ul>
      <div className="search-box">
        <Link to="/RandomPage">
          <Search className="search-icon mt-2" onClick={() => search(query)} />
        </Link>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="input-search"
          placeholder="Search..."
        />
      </div>
      <div className="nav-right d-flex">
        <div className="nav-icons d-flex mx-4 ">
          <div className="mr-3 my-0">
            <PersonFill /> <div>Profile</div>
          </div>

          <Link to="/favourites" className="p-0">
            <div className="mr-3 my-0">
              <Heart />
              <div>Wishlist</div>
            </div>
          </Link>
          <div className="mr-3 my-0">
            <Cart4 />
            <div>Cart (0)</div>
          </div>
          <div className="mr-3 my-0 flag">
            <Flag />

            <div>
              Region
              <CaretDownFill />
              <div className="sub-menu-2">
                {regionsJson &&
                  regionsJson.map((eachRegion) => (
                    <a key={eachRegion.region} href="/">
                      <CaretRightFill />
                      {eachRegion.region}
                    </a>
                  ))}
                <div className="sub-menu-3">
                  {regionsJson &&
                    regionsJson.map((eachRegion) => (
                      <a key={eachRegion.countries[0].code} href="/">
                        {eachRegion.countries[0].name}
                      </a>
                    ))}
                </div>
              </div>
            </div>
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
          {/* <div>{user?.email}</div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
