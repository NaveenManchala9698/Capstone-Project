/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/Navbar.css";
import React from "react";
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
import categoriesJson from "../data/categories.json";
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

  // GET PRODUCTS

  const [searchResults, setSearchResults] = useState([]);

  const fetchProducts = async (query) => {
    try {
      const response = await fetch(
        `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=${query}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "dca4ee111amsh4fb2a63abc004dcp1e797fjsn03712ea92185",
            "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const allProducts = data.results;
        setSearchResults(allProducts);
      } else {
        console.log("Errrrror!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <li>
          <a href="/categories">
            ALL CATEGORIES
            <CaretDownFill />
          </a>
          <div className="sub-menu">
            {categoriesJson &&
              categoriesJson.map((eachCategory) => (
                <a key={eachCategory.CatName} href="/">
                  {eachCategory.CatName}
                </a>
              ))}
          </div>
        </li>
      </ul>
      <div className="search-box">
        <Link to="/category">
          <Search className="search-icon" onClick={() => search(query)} />
        </Link>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="input-search"
          placeholder="Type to Search..."
        />
      </div>
      <div className="nav-right d-flex">
        <div className="nav-icons d-flex mx-4">
          <div className="mr-3 my-0">
            <PersonFill /> <div>Profile</div>
          </div>

          <Link to="/favourites">
            <div className="mr-3 my-0">
              <Heart />
              <div>Wishlist</div>
            </div>
          </Link>
          <div className="mr-3 my-0">
            <Cart4 />
            <div>Cart (0)</div>
          </div>
          <div className="mr-3 my-1 flag">
            <Flag />
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
