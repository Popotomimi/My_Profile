import { useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaReact, FaNode, FaBootstrap, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { SiCss3, SiMysql, SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const SkillsCarousel = () => {
  const sliderMainRef = useRef(null);
  const sliderNavRef = useRef(null);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: sliderNavRef.current,
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderMainRef.current,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  };

  const skills = [
    { icon: <FaReact className="react" size={100} />, name: "React.js" },
    {
      icon: <BiLogoTypescript className="type" size={100} />,
      name: "Typescript",
    },
    { icon: <RiNextjsLine className="next" size={100} />, name: "Next.js" },
    { icon: <FaAngular size={100} className="angular" />, name: "Angular" },
    {
      icon: <IoLogoJavascript size={100} className="javascript" />,
      name: "JavaScript",
    },
    { icon: <FaNode size={100} className="node" />, name: "Node.js" },
    { icon: <TiHtml5 size={100} className="html" />, name: "HTML-5" },
    { icon: <SiCss3 size={100} className="css" />, name: "CSS-3" },
    {
      icon: <SiTailwindcss size={100} className="tailwind" />,
      name: "Tailwind",
    },
    {
      icon: <FaBootstrap size={100} className="bootstrap" />,
      name: "Bootstrap",
    },
    { icon: <SiMysql size={100} className="mysql" />, name: "MySQL" },
    { icon: <BiLogoMongodb size={100} className="mongodb" />, name: "MongoDB" },
  ];

  useEffect(() => {
    const navElements = document.querySelectorAll(".slider-nav div");

    navElements.forEach((element) => {
      element.addEventListener("focus", (event) => {
        const parent = event.target.closest(".slider-nav div");
        if (parent) {
          parent.removeAttribute("aria-hidden");
          parent.removeAttribute("inert");
        }
      });
    });

    return () => {
      navElements.forEach((element) => {
        element.removeEventListener("focus", null);
      });
    };
  }, []);

  return (
    <div className="skills">
      <h2>Utilizo as melhores tecnologias disponíveis no mercado:</h2>
      <Slider {...settingsMain} ref={sliderMainRef} className="slider-for">
        {skills.map((skill, index) => (
          <div key={index}>
            {skill.icon}
            <p className="legend">{skill.name}</p>
          </div>
        ))}
      </Slider>
      <Slider {...settingsNav} ref={sliderNavRef} className="slider-nav">
        {skills.map((skill, index) => (
          <div key={index} inert="true">
            {skill.icon}
            <p className="legend">{skill.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsCarousel;
