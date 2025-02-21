import React from "react";

// Components
import Myprojects from "../Myprojects";
import Skills from "../Skills";

const Home = () => {
  return (
    <div>
      <div className="welcome"></div>
      <div className="content">
        <h1 className="animate__animated animate__bounceInDown">
          Seja bem vindo!
        </h1>
      </div>
      <div className="welcome"></div>
      <Myprojects />
      <Skills />
    </div>
  );
};

export default Home;
