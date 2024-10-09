import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { SiCss3, SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const SkillsCarousel = () => {
  return (
    <Carousel className="skills" showThumbs={false} autoPlay infiniteLoop>
      <div>
        <FaReact className="react" size={150} />
        <p className="legend">React</p>
      </div>
      <div>
        <IoLogoJavascript className="javascript" size={150} />
        <p className="legend">JavaScript</p>
      </div>
      <div>
        <FaNode className="node" size={150} />
        <p className="legend">Node.js</p>
      </div>
      <div>
        <FaBootstrap className="bootstrap" size={150} />
        <p className="legend">Bootstrap</p>
      </div>
      <div>
        <TiHtml5 className="html" size={150} />
        <p className="legend">HTML-5</p>
      </div>
      <div>
        <SiCss3 className="css" size={150} />
        <p className="legend">CSS-3</p>
      </div>
      <div>
        <SiMysql className="mysql" size={150} />
        <p className="legend">MySQL</p>
      </div>
      <div>
        <BiLogoMongodb className="mongodb" size={150} />
        <p className="legend">MongoDB</p>
      </div>
    </Carousel>
  );
};

export default SkillsCarousel;
