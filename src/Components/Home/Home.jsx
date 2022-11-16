import React from 'react';
import { GoSearch } from 'react-icons/go';
import HomeVideoBg from '../../assets/videos/Home_bg_video.mp4';
import { inputData, leftIcons, rightIcons } from './data';

const Home = () => (
  <section id="home" className="home">
    <div className="overlay" />

    <video
      src={HomeVideoBg}
      className="HomeVideoBg"
      muted
      autoPlay
      loop
      type="video.mp4"
    />

    <div className="homeContent">
      <div className="textContainer">
        <span className="smallText">Nos Forfaits</span>
        <h2 className="homeTitle">Découvrir le monde</h2>
      </div>

      <form className="inputsContainer">
        {inputData.map((InputItem) => (
          <div className="dataInput" key={InputItem.id}>
            <label htmlFor={InputItem.for}>
              {InputItem.label}
              <div className="inputCont flex">
                <input
                  type={InputItem.type}
                  placeholder={InputItem.placeholder}
                  data-date-format={InputItem.dataDateFormat}
                  required={InputItem.required}
                />
                {InputItem.icon}
              </div>
            </label>
          </div>
        ))}

        <div className="searchOptions clickable">
          <span>Rechercher</span>
          <GoSearch className="icon" />
        </div>
      </form>

      <div className="homeFooterIcons flex">
        <ul className="leftsIcons flex">
          {leftIcons.map((iconItem) => (
            <li className="iconItem clickable" key={iconItem.id}>
              <a href={iconItem.link}>{iconItem.icon}</a>
            </li>
          ))}
        </ul>

        <ul className="rightIcons flex">
          {rightIcons.map((iconItem) => (
            <li className="iconItem clickable" key={iconItem.id}>
              {iconItem.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Home;
