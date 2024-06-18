import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ContributionTimeline from "./ContributionTimeline";

const OpenSource = () => {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(ref, { amount: "all", once: true });
  const isHeadingView = useInView(headingRef, { amount: "all", once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isHeadingView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, isHeadingView]);
  return (
    <>
      <div
        id="openSourceContainer"
        className=" h-auto  w-full relative top-[32rem] p-5"
      >
        <div
          id="heading"
          ref={ref}
          className=" relative z-0 h-auto w-full flex flex-col items-center justify-center mb-2"
        >
          <div
            ref={headingRef}
            className="h-auto w-full text-4xl text-center font-bold mb-1"
          >
            Open Source
          </div>
          <hr className="h-1 w-24 bg-lime-green" />
        </div>
        <motion.div
          animate={{
            x: isInView ? "-32%" : "0%",
            opacity: isInView ? [1, 0.5, 0.25, 0] : 1,
          }}
          transition={{ duration: 1, delay: 0.5 }}
          id="wrapper"
          className="absolute z-10 h-[100px] top-[7px] left-[559px] w-[140px] bg-blue-violet "
        ></motion.div>
        <motion.div
          animate={{
            y: isInView ? "100%" : "0%",
            opacity: isInView ? [1, 0.5, 0.25, 0] : 1,
          }}
          transition={{ duration: 1, delay: 0.5 }}
          id="wrapper"
          className="absolute z-10 h-[100px] top-[7px] left-[699px] w-[120px] bg-blue-violet "
        ></motion.div>
        <motion.div
          animate={{
            x: isInView ? "40%" : "0%",
            opacity: isInView ? [1, 0.5, 0.25, 0] : 1,
          }}
          transition={{ duration: 1, delay: 0.5 }}
          id="wrapper"
          className="absolute z-10 h-[100px] top-[7px] left-[819px] w-[140px] bg-blue-violet "
        ></motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.5, delay: 0.65 }}
          id="detail"
          className=" relative top-36 mb-10 px-20 h-auto w-full"
        >
          <h1 className="michroma-regular text-3xl text-deep-blue font-bold">
            Hacktoberfest 2023
          </h1>
          <h3 className="mt-3 text-lg text-deep-blue font-semibold">
            <span className="text-xl font-semibold font-serif text-black ">
              Organization:{" "}
            </span>
            GDSC, JSS Science and Technology University, Mysuru.
          </h3>
          <h3 className="mt-3 text-lg text-deep-blue font-semibold">
            <span className="text-xl font-semibold font-serif text-black ">
              Project:{" "}
            </span>
            CampUs Web
          </h3>
        </motion.div>
        <div
          id="timelineContainer"
          className="relative top-28 h-auto w-full p-5 flex items-center justify-center"
        >
          <ContributionTimeline />
        </div>
      </div>
    </>
  );
};

export default OpenSource;
