// Icons
import {
  BsFillChatTextFill,
  BsChatSquareText,
  BsFillMoonFill,
  BsFillBrightnessHighFill,
  BsFileImage,
  BsFileImageFill,
  BsFillTrashFill,
} from "react-icons/bs";

// Hooks
import { useState } from "react";

// Img
import Cubo from "../assets/img/cubos.jfif";
import Cubos from "../assets/img/cubo.jfif";

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
    const welcomeDiv = document.querySelector(".welcome");
    if (!layout) {
      setLayout(true);
      welcomeDiv.style.backgroundImage = `url('${Cubo}')`;
    } else {
      setLayout(false);
      welcomeDiv.style.backgroundImage = `url('${Cubos}')`;
    }
  };

  const handleFont = () => {
    if (!font) {
      setFont(true);
      document.body.style.fontFamily = "Verdana";
    } else {
      setFont(false);
      document.body.style.fontFamily = "Helvetica";
    }
  };

  const [background, setBackground] = useState(true);
  const [layout, setLayout] = useState(false);
  const [font, setFont] = useState(false);

  return (
    <nav>
      <ul className="navbar">
        <li className="languageToggle" onClick={handleFont}>
          {!font ? (
            <BsFillChatTextFill title="Alterar Fonte" />
          ) : (
            <BsChatSquareText title="Alterar Fonte" />
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
