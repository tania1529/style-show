// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../icons/logo.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="ui-navbar">
      <img src={logo} alt="Style Show Logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/career">Join Our Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
