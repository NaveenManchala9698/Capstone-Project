/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../css/Navbar.css";
import React, { useState } from "react";
import fire from "../fire";
import SearchBar from "./SearchBar";
import {
  CaretDownFill,
  CaretRightFill,
  Flag,
  Heart,
  Person,
  PersonFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import CartIndicator from "./CartIndicator";
import regionsJson from "../data/regions.json";

const Navbar2 = ({ search }) => {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Navbar.Brand href="#home">
        <img
          src="https://w7.pngwing.com/pngs/915/839/png-transparent-n-letter-n-font-n-watercolor-painting-purple-angle.png"
          alt="logo"
          style={{ height: "60px", width: "60px", marginRight: "1rem" }}
        ></img>
        <a href="/" className="site-title">
          NMart
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div>
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
              <a href="#">
                ALL CATEGORIES
                <CaretDownFill />
              </a>
              <div className="sub-menu">
                <ul>
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
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* <Nav className="mr-auto main-links" >
          <Nav.Link href="/men">MEN</Nav.Link>
          <Nav.Link href="/women">WOMEN</Nav.Link>
          <Nav.Link href="/kids">KIDS</Nav.Link>
          <NavDropdown title="ALL CATEGORIES" id="basic-nav-dropdown">
            <Link to="/baby">
              <NavDropdown.Item>Baby</NavDropdown.Item>
            </Link>
            <Link to="/giftGuide">
              <NavDropdown.Item>Gift Guide</NavDropdown.Item>
            </Link>
            <Link to="/women">
              <NavDropdown.Item>Women</NavDropdown.Item>
            </Link>
            <Link to="/divided">
              <NavDropdown.Item>Divided</NavDropdown.Item>
            </Link>
            <Link to="/men">
              <NavDropdown.Item>Men</NavDropdown.Item>
            </Link>
            <Link to="/kids">
              <NavDropdown.Item>Kids</NavDropdown.Item>
            </Link>
            <Link to="/home">
              <NavDropdown.Item>H&M Home</NavDropdown.Item>
            </Link>
            <Link to="/outlet">
              <NavDropdown.Item>Outlet</NavDropdown.Item>
            </Link>
            <Link to="/sale">
              <NavDropdown.Item>SALE</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav> */}
      </Navbar.Collapse>
      <div className="search-box">
        <SearchBar />
      </div>

      <div className="nav-right d-flex">
        <div className="nav-icons d-flex mx-4 ">
          <div className="mr-3 my-0 text-center">
            <Person /> <div>Profile</div>
          </div>

          <Link to="/favourites" className="p-0">
            <div className="mr-3 my-0 text-center">
              <Heart />
              <div>Wishlist</div>
            </div>
          </Link>
          <div className="mr-3 my-0 text-center">
            <CartIndicator />
          </div>
          <div className="mr-3 my-0 text-center flag ">
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
              </div>
            </div>
          </div>
        </div>
        <div className="logout-div">
          <a href="#" className="logout-button" onClick={handleLogout}>
            {/* <BoxArrowRight className="logout-icon" /> */}
            <img src="https://secure.gravatar.com/avatar/b00a75773920a3d17b9098645e34459c?s=384" />
            <div className="logout">LOGOUT</div>
          </a>
          {/* <BoxArrowRight className="mr-2" /> Log out
          </a> */}
          {/* <div>{user?.email}</div> */}
        </div>
      </div>
    </Navbar>
  );
};

export default Navbar2;
