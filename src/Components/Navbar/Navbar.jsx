import React, { useState } from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-scroll';

const Navbar = () => {
  const navLists = [
    {
      id: 1, to: 'home', name: 'Home', class: 'navItem  clickable',
    },
    {
      id: 4, to: 'home', name: 'about', class: 'navItem  clickable',
    },
    {
      id: 2, to: 'home', name: 'News', class: 'navItem  clickable',
    },
    {
      id: 3, to: 'home', name: 'Packages', class: 'navItem  clickable',
    },
    {
      id: 5, to: 'home', name: 'Pages', class: 'navItem  clickable',
    },
    {
      id: 6, to: 'home', name: 'Shop', class: 'navItem  clickable',
    },
  ];

  const [active, setActive] = useState('navbarContainer');

  const showNavMenu = () => setActive('navbarContainer activeNavbar backgroundBlur');

  const closeNavMenu = () => setActive('navbarContainer');

  return (
    <header className="header flex">
      <div className="logoContainer flex clickable">
        <Link to="home" className="clickable">
          <h1 className="logo flex">
            <MdOutlineTravelExplore className="icon" />
            Voyage.
          </h1>
        </Link>
      </div>

      <nav className={active}>
        <ul className="navList flex">
          {navLists.map((navItem) => (
            <li
              key={navItem.id}
              aria-hidden="true"
              className={navItem.class}
            >
              <Link to={navItem.to} onClick={() => closeNavMenu()} smooth span={true.toString()} className="navLink">
                {navItem.name}
              </Link>
            </li>
          ))}

          <li className="bookBtnContainer clickable">
            <button type="button" className="btn bookBtn">
              <Link to="home" smooth span={true.toString()} className="navLink">
                BOOK NOW
              </Link>
            </button>
          </li>
        </ul>

        <div
          aria-hidden="true"
          onClick={() => closeNavMenu()}
          className="closeMenu flex"
        >
          <AiFillCloseCircle className="icon clickable" />
        </div>
      </nav>

      <div aria-hidden="true" onClick={showNavMenu} className="hamburger">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
