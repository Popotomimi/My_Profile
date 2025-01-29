import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaReact, FaNode, FaBootstrap, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { SiCss3, SiMysql, SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";

const SkillsCarousel = () => {
  return (
    <div className="skills">
      <h2>Utilizo as melhores tecnologias disponíveis no mercado:</h2>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <FaReact className="react" size={150} />
          <p className="legend">React.js</p>
        </div>
        <div>
          <BiLogoTypescript className="type" size={150} />
          <p className="legend">Typescript</p>
        </div>
        <div>
          <RiNextjsLine className="next" size={150} />
          <p className="legend">Next.js</p>
        </div>
        <div>
          <FaAngular className="angular" size={150} />
          <p className="legend">Angular</p>
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
          <TiHtml5 className="html" size={150} />
          <p className="legend">HTML-5</p>
        </div>
        <div>
          <SiCss3 className="css" size={150} />
          <p className="legend">CSS-3</p>
        </div>
        <div>
          <SiTailwindcss className="tailwind" size={150} />
          <p className="legend">Tailwind</p>
        </div>
        <div>
          <FaBootstrap className="bootstrap" size={150} />
          <p className="legend">Bootstrap</p>
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
    </div>
  );
};

export default SkillsCarousel;
