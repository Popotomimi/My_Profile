import { useRef, useEffect } from "react";
import Slider from "react-slick";
import {
  FaReact,
  FaNode,
  FaBootstrap,
  FaAngular,
  FaCss3Alt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { SiMysql, SiTailwindcss, SiNestjs } from "react-icons/si";
import {
  BiLogoMongodb,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const SkillsCarousel = () => {
  const sliderMainRef = useRef(null);
  const sliderNavRef = useRef(null);
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.setAttribute("tabindex", "-1");
    }
  }, []);

  useEffect(() => {
    const handleBlur = () => {
      if (carouselContainerRef.current) {
        carouselContainerRef.current.blur();
      }
    };

    const container = carouselContainerRef.current;
    if (container) {
      container.addEventListener("click", handleBlur);
    }

    return () => {
      if (container) {
        container.removeEventListener("click", handleBlur);
      }
    };
  }, []);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
  };

  const skills = [
    {
      icon: <FaReact size={100} className="react main-svg" />,
      name: "React.js",
    },
    {
      icon: <BiLogoTypescript size={100} className="type main-svg" />,
      name: "Typescript",
    },
    {
      icon: <RiNextjsLine size={100} className="next main-svg" />,
      name: "Next.js",
    },
    {
      icon: <FaAngular size={100} className="angular main-svg" />,
      name: "Angular",
    },
    {
      icon: <IoLogoJavascript size={100} className="javascript main-svg" />,
      name: "JavaScript",
    },
    { icon: <FaNode size={100} className="node main-svg" />, name: "Node.js" },
    { icon: <TiHtml5 size={100} className="html main-svg" />, name: "HTML-5" },
    { icon: <FaCss3Alt size={100} className="css main-svg" />, name: "CSS-3" },
    {
      icon: <SiTailwindcss size={100} className="tailwind main-svg" />,
      name: "Tailwind",
    },
    {
      icon: <FaBootstrap size={100} className="bootstrap main-svg" />,
      name: "Bootstrap",
    },
    { icon: <SiMysql size={100} className="mysql main-svg" />, name: "MySQL" },
    {
      icon: <BiLogoMongodb size={100} className="mongodb main-svg" />,
      name: "MongoDB",
    },
    {
      icon: <BiLogoPostgresql size={100} className="postgre main-svg" />,
      name: "PostgreSQL",
    },
    {
      icon: <SiNestjs size={100} className="nest main-svg" />,
      name: "Nest.js",
    },
  ];

  return (
    <div className="skills" ref={carouselContainerRef}>
      <h2>Utilizo as melhores tecnologias disponíveis no mercado:</h2>
      <Slider {...settingsMain} ref={sliderMainRef} className="slider-for">
        {skills.map((skill, index) => (
          <div key={index}>
            {skill.icon}
            <p className="legend main-legend">{skill.name}</p>
          </div>
        ))}
      </Slider>
      <Slider {...settingsNav} ref={sliderNavRef} className="slider-nav">
        {skills.map((skill, index) => (
          <div key={index}>
            {skill.icon}
            <p className="legend main-legend">{skill.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsCarousel;
