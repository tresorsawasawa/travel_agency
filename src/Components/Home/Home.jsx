import React from 'react';
import HomeVideoBg from '../../assets/videos/Home_bg_video.mp4';
import Tabs from '../Tabs/Tabs';
// import Traveling from '../Traveling/TravelingHeader';

const Home = () => (
  <section id="home" className="home">
    <div className="overlay" />

    <video src={HomeVideoBg} className="HomeVideoBg" muted autoPlay loop type="video.mp4" />

    <div className="homeContent">
      <div className="textContainer">
        <span className="smallText">Nos Forfaits</span>
        <h2 className="homeTitle">Réservez votre prochaine aventure</h2>
      </div>
    </div>

    <Tabs />

    {/* <div className="cardConatiner">
      <div className="destinationInput">

      </div>
    </div> */}
  </section>
);
export default Home;
