import React from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => (
  <header className="header flex">
    <div className="logoContainer flex clickable">
      <Link to="home" className="clickable">
        <h1 className="logo flex">
          <MdOutlineTravelExplore className="icon" />
          Voyage.
        </h1>
      </Link>
    </div>

    <nav className="navbarContainer">
      <ul className="navList flex">
        <li className="navItem  clickable">
          <Link to="home" smooth span={true.toString()} className="navLink">
            Home
          </Link>
        </li>
        <li className="navItem  clickable">
          <Link to="main" smooth span={true.toString()} className="navLink">
            News
          </Link>
        </li>
        <li className="navItem  clickable">
          <Link to="main" smooth span={true.toString()} className="navLink">
            Packages
          </Link>
        </li>
        <li className="navItem  clickable">
          <Link to="main" smooth span={true.toString()} className="navLink">
            About
          </Link>
        </li>
        <li className="navItem  clickable">
          <Link to="home" smooth span={true.toString()} className="navLink">
            Pages
          </Link>
        </li>
        <li className="navItem  clickable">
          <Link to="home" smooth span={true.toString()} className="navLink">
            Shop
          </Link>
        </li>

        <li className="bookBtnContainer clickable">
          <button type="button" className="btn bookBtn">
            <Link to="home" smooth span={true.toString()} className="navLink">
              BOOK NOW
            </Link>
          </button>
        </li>
      </ul>

      <div className="closeMenu flex">
        <AiFillCloseCircle className="icon clickable" />
      </div>
    </nav>

    <div className="hamburger">
      <FaBars className="icon" />
    </div>
  </header>
);

export default Navbar;
