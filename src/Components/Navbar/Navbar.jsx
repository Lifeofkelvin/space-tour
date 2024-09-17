import Logo from "../../../public/assets/shared/logo.svg";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="nav-container">
        <img src={Logo} className="logo" />
        <div className="line"></div>
        <div className={`btn-container ${menu ? "show" : ""}`}>
          <Link className="btn" to="/" onClick={() => setMenu(!menu)}>
            <span>00</span>Home
          </Link>
          <Link className="btn" to="destination" onClick={() => setMenu(!menu)}>
            <span>01</span>Destination
          </Link>
          <Link className="btn" to="crew" onClick={() => setMenu(!menu)}>
            <span>02</span>Crew
          </Link>
          <Link className="btn" to="technology" onClick={() => setMenu(!menu)}>
            <span>03</span>Technology
          </Link>
        </div>
        <div onClick={toggleMenu} className="hamburger"></div>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
