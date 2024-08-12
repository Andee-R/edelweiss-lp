import React from "react";
import "./Hero.css";
import edelweisskegs from "../../assests/edelweisskegs.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText container">
        <h1>Edelweiss Biergarten</h1>
        <p>
          "Edelweiss Biergarten is a German-Hungarian restaurant in North
          Phoenix serving traditional German and Hungarian cuisine, and has the
          largest selection of German beers in Arizona." Family-owned and
          dedicated to making you feel at home. We provide an old-world European
          experience alongside our delicious and hearty plates. Guests can
          experience a taste of Oktoberfest all year round – our staff wears the
          traditional German outfits and guests are treated to live, traditional
          polka music on the weekends.
        </p>
        <button className="btn">Loyalty Program</button>
      </div>
    </div>
  );
};

export default Hero;
