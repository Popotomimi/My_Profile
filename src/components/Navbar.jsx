// Icons
import {
  BsFillMoonFill,
  BsFillBrightnessHighFill,
  BsHouse,
  BsInfoSquare,
} from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { GiPadlock } from "react-icons/gi";

// Hooks
import { useState } from "react";

// React Route Dom
import { Link } from "react-router-dom";

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

  const [background, setBackground] = useState(true);
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
              <li>
                <Link to="/auth">
                  <GiPadlock />
                  Auth
                </Link>
              </li>
            </ul>
          )}
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
