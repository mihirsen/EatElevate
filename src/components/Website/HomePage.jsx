import React from "react";
import Navbar from "./Navbar";
import LeftImg from "../Website/Assest/Right-pic-2ndpage.png";
import one from "../Website/Assest/one.png";
import two from "../Website/Assest/two.png";
import three from "../Website/Assest/three.png";
import four from "../Website/Assest/four.png";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="page2">
        <div className="left">
          <img src={LeftImg} alt="Left-Img" />
        </div>
        <div className="right">
          <div className="right-rl">
            <div>
              <img
                src={one}
                alt="one"
                style={{
                  height: "50px",
                }}
              />
            </div>
            <div>
              <img
                src={two}
                alt="two"
                style={{
                  height: "50px",
                }}
              />
            </div>
            <div>
              <img
                src={three}
                alt="three"
                style={{
                  height: "50px",
                }}
              />
            </div>
            <div>
              <img
                src={four}
                alt="four"
                style={{
                  height: "50px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
