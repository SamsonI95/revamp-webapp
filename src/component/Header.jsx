import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icon(s)
import { FaBars, FaTimes } from "react-icons/fa";

// Image(s)
import Logo from "/Logo.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  //Toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //smooth scrolling
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // This enables smooth scrolling
      });
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between shadow-xl">
        <div className="py-3 pl-7">
          <img src={Logo} alt="logo" />
        </div>
        <div className="py-3 pr-7 md:hidden">
          {showMenu ? (
            <FaTimes className="text-white w-8 h-7" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-white w-8 h-7" onClick={toggleMenu} />
          )}
          <div
            className={`text-white font-semibold text-[12px] flex flex-col items-center absolute top-20 right-0 w-full bg-black bg-opacity-80 
    transform transition-all duration-500 ease-in-out ${
      showMenu
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }`}
          >
            <a
              className="mobile-menu-nav"
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
            >
              About me
            </a>

            <a
              className="mobile-menu-nav"
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
            >
              Skills
            </a>

            <a
              className="mobile-menu-nav"
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "portfolio")}
            >
              Portfolio
            </a>

            <a
              className="mobile-menu-nav"
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-5 pr-10 text-white font-semibold text-2xl">
            <Link to="/about" onClick={(e) => handleSmoothScroll(e, "about")}>
              <li className="desktop-menu-nav">About</li>
            </Link>
            <Link to="/skills" onClick={(e) => handleSmoothScroll(e, "skills")}>
              <li className="desktop-menu-nav">Skills</li>
            </Link>
            <Link
              to="/portfolio"
              onClick={(e) => handleSmoothScroll(e, "portfolio")}
            >
              <li className="desktop-menu-nav">Portfolio</li>
            </Link>
            <Link
              to="/contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <li className="desktop-menu-nav">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
