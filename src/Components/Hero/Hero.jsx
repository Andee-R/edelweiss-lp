import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import edelweisskegs from "../../assests/biergarten.png";

const Hero = () => {
  return (
    
    <div className="hero">
      <div className="heroText container">
        <h1>Edelweiss Biergarten</h1>
        <p></p>
        <p>
        <span style={{color:"yellow"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> - "The atmosphere immerses you into another country with the decor, music, and style. 
         I have enjoyed everything I have ordered, usually enough for leftovers too" - Michelle Fettig
        </p>
        <p>
        <span style={{color:"yellow"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> - "I haven't had German food since I was in Germany and I forgot how good it is" - Mazanec Mischief   
        </p>
        <p>
        <span style={{color:"yellow"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> - "Everything was great, the service and the food from start to finish" - Heidi Bublitz
        </p>
        <p>
        <span style={{color:"yellow"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> - "Went with 4 of my coworkers and we all were very impressed! The food was absolutely amazing, the restaurant FEELS like one you might find in Germany" - Daniel Kirtley
        </p>
        <button className="btn" >Read Our Reviews</button>
      </div>
    </div>
  );
};

export default Hero;
