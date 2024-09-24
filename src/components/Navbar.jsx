// React icons
import { BsFillMoonFill, BsFillBrightnessHighFill } from "react-icons/bs";

// React router dom
import { NavLink } from "react-router-dom";

// Hooks
import { useState } from "react";

const Navbar = () => {
  const handleStyle = () => {
    if (!background) {
      setBackdround(true);
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "white";
    } else {
      setBackdround(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  const [background, setBackdround] = useState(false);

  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Sobre</NavLink>
      </li>
      <li className="styleBack" onClick={handleStyle}>
        {!background && <BsFillMoonFill />}
        {background && <BsFillBrightnessHighFill />}
      </li>
    </nav>
  );
};

export default Navbar;
