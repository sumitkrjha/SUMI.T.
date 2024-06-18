import React from "react";
import profilePhoto from "../assets/profilePhoto.png";
import { Link } from "react-router-dom";
const SeparateNavbar = () => {
  const menuStyle =
    "font-medium text-lg text-deep-blue hover:text-blue-violet cursor-pointer hover:translate-y-2";
  return (
    <>
      <div id="navbarWrapper" className=" h-32 w-full py-5 mb-7">
        <div id="navbarContainer" className="h-full w-full flex px-12 ">
          <div
            id="logoContainer"
            className="h-full w-1/5 pl-3 text-3xl michroma-regular flex items-center justify-start cursor-pointer hover:scale-95 "
          >
            <Link to="/">
              SUM{" "}
              <span className="w-20 pl-2 bg-blue-violet text-white comeSlowAnimation">
                {" "}
                I.T.
              </span>{" "}
            </Link>
          </div>
          <div
            id="menuContainer"
            className="h-full w-4/5 pr-5 flex gap-6 items-center justify-end "
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
        <img
          src={profilePhoto}
          alt="Sumit Kumar Jha"
          className="relative top-[-5rem] left-[45rem] h-20 w-20 bg-blue-violet rounded-full my-10"
        />
      </div>
    </>
  );
};

export default SeparateNavbar;
