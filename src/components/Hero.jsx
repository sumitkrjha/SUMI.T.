import profilePhoto from "../assets/profilePhoto.png";
import heroDevices from "../assets/hero-devices.svg";
import cv from "../assets/cv.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { redirect } from "react-router-dom";
const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all", once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, isInView]);

  return (
    <>
      <div id="heroContainer" className="h-auto w-full pt-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0.6 }}
          id="heroHeader"
          className="relative lg:top-0 top-5 p-5 flex flex-col items-center justify-center"
        >
          <h1
            id="heading"
            className="mb-5 text-[38px] font-bold text-center text-deep-blue"
          >
            Software Engineer & MERN Stack Developer
          </h1>
          <h2
            id="subheading"
            className="text-2xl font-medium text-center text-dark-gray"
          >
            I engineer with MERN: From Idea to Implementation
          </h2>
          <img
            src={profilePhoto}
            alt="Sumit Kumar Jha"
            className=" h-48 w-48 lg:h-72 lg:w-72 bg-blue-violet rounded-full my-10"
          />
          <a
            href="https://drive.google.com/file/d/1fZx3ifZCZ8Eq7HFk102oSgAWqGXqN9SE/view"
            target="_blank"
          >
            <button className="h-12 w-auto p-5 border-2 border-blue-violet rounded-3xl flex items-center justify-center font-semibold  text-base lg:text-lg text-blue-violet hover:bg-blue-violet hover:text-white hover:shadow-md hover:shadow-blue-violet active:translate-y-1">
              My Resume
            </button>
          </a>
        </motion.div>
        <div ref={ref} id="heroFooter" className=" px-5 pt-5 mt-7">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.5, delay: 0.2 }}
            id="imageContainer"
            className=" px-10 flex items-center justify-center"
          >
            <img
              src={heroDevices}
              alt=""
              className="h-auto max-w-[345px] lg:max-w-[860px]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
