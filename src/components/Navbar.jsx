// Icons
import {
  BsFillMoonFill,
  BsFillBrightnessHighFill,
  BsFileImage,
  BsFileImageFill,
  BsFillTrashFill,
  BsHouse,
  BsInfoSquare,
} from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";

// Hooks
import { useState } from "react";

// React Route Dom
import { Link } from "react-router-dom";

// Img
import Cubo from "../assets/img/cubos.jpg";
import Cubos from "../assets/img/cubo.jpg";

const Navbar = () => {
  const deleteAll = () => {
    window.alert("Você excluiu o site!!!!");
    document.body.style.display = "none";
  };

  const handleStyle = () => {
    if (!background) {
      setBackground(true);
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      setBackground(false);
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };

  const handleLayout = () => {
    const welcomeDivs = document.querySelectorAll(".welcome");
    if (!layout) {
      setLayout(true);
      welcomeDivs.forEach((div) => {
        div.style.backgroundImage = `url('${Cubo}')`;
      });
    } else {
      setLayout(false);
      welcomeDivs.forEach((div) => {
        div.style.backgroundImage = `url('${Cubos}')`;
      });
    }
  };

  const [background, setBackground] = useState(true);
  const [layout, setLayout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <ul className="navbar">
        <li className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
          <TiThMenu title="Menu" />
          {menuOpen && (
            <ul className="submenu">
              <li>
                <Link to="/">
                  <BsHouse />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsInfoSquare />
                  About
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="layoutToggle" onClick={handleLayout}>
          {!layout ? (
            <BsFileImage title="Alterar a imagem" />
          ) : (
            <BsFileImageFill title="Alterar a imagem" />
          )}
        </li>
        <li>
          <BsFillTrashFill title="NÃO CLIQUE" onClick={deleteAll} />
          <span onClick={deleteAll}>NÃO CLIQUE</span>
        </li>
        <li className="styleBack" onClick={handleStyle}>
          {!background ? (
            <BsFillMoonFill title="Modo Escuro" />
          ) : (
            <BsFillBrightnessHighFill title="Modo Claro" />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
