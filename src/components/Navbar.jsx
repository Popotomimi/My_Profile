// Icons
import {
  BsFillChatTextFill,
  BsChatSquareText,
  BsFillMoonFill,
  BsFillBrightnessHighFill,
  BsFillGridFill,
  BsList,
} from "react-icons/bs";

// Hooks
import { useState } from "react";

const Navbar = () => {
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
    if (!layout) {
      setLayout(true);
      document.body.classList.add("grid-layout");
      document.body.classList.remove("list-layout");
    } else {
      setLayout(false);
      document.body.classList.add("list-layout");
      document.body.classList.remove("grid-layout");
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

  const [background, setBackground] = useState(false);
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
          {!layout ? <BsFillGridFill /> : <BsList />}
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
