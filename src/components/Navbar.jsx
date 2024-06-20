import { FormatListBulleted } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuStyle =
    "font-medium text-lg text-deep-blue hover:text-blue-violet cursor-pointer hover:translate-y-2";
  return (
    <>
      <div id="navbarWrapper" className="h-36 w-full py-5">
        <div
          id="navbarContainer"
          className="h-auto w-full flex flex-col lg:flex-row lg:px-12 p-3 lg:gap-0 gap-3 "
        >
          <div
            id="logoContainer"
            className="h-full lg:w-1/5 pl-3 text-3xl michroma-regular flex items-center justify-between lg:justify-start cursor-pointer  "
          >
            <Link to="/" className="hover:scale-95 comeSlowAnimation">
              SUM{" "}
              <span className="w-20 pl-2 bg-blue-violet text-white"> I.T.</span>{" "}
            </Link>
            <div
              id="listIcon"
              className="lg:w-0 lg:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <FormatListBulleted />
            </div>
          </div>
          <div
            id="menuContainer"
            className={`h-full lg:w-4/5 lg:pr-5 pr-0 lg:flex lg:flex-row gap-6 items-center justify-end ${
              isOpen ? "flex flex-col mt-3" : "hidden"
            }`}
          >
            <ul className="flex gap-3">
              <Link to="/about">
                <li className={menuStyle}>About</li>
              </Link>
              <Link to="/projects">
                <li className={menuStyle}>Projects</li>
              </Link>
              <Link to="/education">
                <li className={menuStyle}>Education</li>
              </Link>
              {/* <li className={menuStyle}>OpenSource</li> */}
            </ul>
            <Link to="/contact">
              <button className="h-12 w-auto p-3 border-2 border-blue-violet rounded-3xl flex items-center justify-center font-semibold  text-base lg:text-lg text-blue-violet hover:bg-blue-violet hover:text-white hover:shadow-md hover:shadow-blue-violet active:translate-y-1">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
