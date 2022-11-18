import React, { useState } from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import uuid from 'react-uuid';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
  const navLists = [
    {
      id: uuid(),
      to: '/',
      name: 'Home',
      class: 'navItem  clickable',
    },
    {
      id: uuid(),
      to: '/about',
      name: 'About',
      class: 'navItem  clickable',
    },
    {
      id: uuid(),
      to: 'travels/:id',
      name: 'Item',
      class: 'navItem  clickable',
    },
    {
      id: uuid(),
      to: '/travels',
      name: 'Our Destinations',
      class: 'navItem  clickable',
    },
    {
      id: uuid(),
      to: '/contacts',
      name: 'Contacts',
      class: 'navItem  clickable',
    },
  ];

  const [active, setActive] = useState('navbarContainer');

  const showNavMenu = () => setActive('navbarContainer activeNavbar backgroundBlur');

  const closeNavMenu = () => setActive('navbarContainer');

  return (
    <header className="header flex">
      <div className="logoContainer flex clickable">
        <NavLink to="/" className="clickable">
          <h1 className="logo flex">
            <MdOutlineTravelExplore className="icon" />
            Voyage.
          </h1>
        </NavLink>
      </div>

      <nav className={active}>
        <ul className="navList flex">
          {navLists.map((navItem) => (
            <li key={navItem.id} aria-hidden="true" className={navItem.class}>
              <NavLink
                to={navItem.to}
                onClick={() => closeNavMenu()}
                className="navLink"
              >
                {navItem.name}
              </NavLink>
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
