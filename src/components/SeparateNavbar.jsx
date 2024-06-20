import React, { useState } from "react";
import profilePhoto from "../assets/profilePhoto.png";
import { Link } from "react-router-dom";
import { FormatListBulleted } from "@mui/icons-material";

const SeparateNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuStyle =
    "font-medium text-lg text-deep-blue hover:text-blue-violet cursor-pointer hover:translate-y-2";
  return (
    <>
      <div
        id="navbarWrapper"
        className={`h-32 w-full py-5 ${isOpen ? "mb-36" : "mb-8"} `}
      >
        <div
          id="navbarContainer"
          className="h-auto w-full flex flex-col lg:flex-row lg:px-12 p-3 mb-8 lg:mb-0"
        >
          <div
            id="logoContainer"
            className="h-full lg:w-1/5 pl-3 text-3xl michroma-regular flex items-center justify-between lg:justify-start cursor-pointer "
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
              <button className="h-12 w-auto p-3 border-2 border-blue-violet rounded-3xl flex items-center justify-center font-semibold text-lg text-blue-violet hover:bg-blue-violet hover:text-white hover:shadow-md hover:shadow-blue-violet active:translate-y-1">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-1 bg-deep-blue"></div>
        <Link to="/">
          <img
            src={profilePhoto}
            alt="Sumit Kumar Jha"
            className="relative top-[-5rem] left-[9rem] lg:left-[45rem] h-20 w-20 bg-blue-violet rounded-full my-10"
          />
        </Link>
      </div>
    </>
  );
};

export default SeparateNavbar;
