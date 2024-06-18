import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
      <div
        id="aboutContainer"
        className="absolute h-[662px] w-full bg-blue-violet flex items-start pt-36"
      >
        <div
          ref={ref}
          id="aboutwrapper"
          className="relative h-auto w-full px-48 flex flex-col justify-center items-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1
              id="heading"
              className="text-white font-bold text-center text-3xl mb-5"
            >
              Hi, I'm Sumit Kumar Jha. Nice to meet you.
            </h1>
            <p id="aboutMe" className="text-white ">
              <span className=" font-medium text-lg text-justify block px-24">
                Built OsteoAI, an AI-powered medical app for bone analysis using
                ReactJS, Tailwind CSS, and MongoDB. JWT auth ensures user
                security. <br />
                Contributed to GDSC JSSSTU's project during HacktoberFest 2023
                (5 merged PRs). Built user interfaces and integrated Firebase
                for authentication. <br />
                Skilled in various APIs (OpenAI) and UI libraries (Material UI,
                Chakra UI). Eager to learn and tackle new challenges! <br />
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
