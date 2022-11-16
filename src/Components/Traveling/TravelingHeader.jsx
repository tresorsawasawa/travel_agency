import React from 'react';
import { Link } from 'react-scroll';
// import { NavLink } from 'react-router-dom';

const TravelingHeader = () => {
  const navList = [
    { id: 1, to: 'home', name: 'Reservation' },
    { id: 2, to: 'reserve', name: 'Mes Voyages' },
    { id: 3, to: 'reserve', name: 'Check in' },
    { id: 4, to: 'reserve', name: 'Statut du voyager' },
  ];

  // navList.forEach((item) => console.log(item.name), );

  return (
    <div className="header">
      <nav className="navbar">
        <ul>
          {navList.map((navItem) => (
            <li key={navItem.id}>
              <Link to={navItem.to}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TravelingHeader;
