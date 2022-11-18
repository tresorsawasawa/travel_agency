import React from 'react';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import mostVisitedData from './data';

const Main = () => (
  <section className="container main">
    <div className="sectTitle">
      <h2 className="title">Les plus visitées</h2>
    </div>

    <ul className="secContent">
      {mostVisitedData.map(
        ({
          id,
          image,
          destTitle,
          icon,
          location,
          fees,
          grade,
          description,
        }) => (
          <li className="singleDestination" key={id}>
            <div className="imageCont">
              <img className="cardImage" src={image} alt={destTitle} />
            </div>

            <div className="cardInfo">
              <h3 className="destTitle">{destTitle}</h3>
              <div className="location flex">
                {icon}
                <span className="name">{location}</span>
              </div>

              <div className="fees flex">
                <div className="grade">
                  <span>
                    {grade}
                    {' '}
                    <small>+1</small>
                  </span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>

              <button type="button" className="btn flex">
                DETAILS
                <HiOutlineClipboardCheck />
              </button>
            </div>
          </li>
        ),
      )}
    </ul>
  </section>
);

export default Main;
