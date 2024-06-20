import React, { useEffect, useRef } from "react";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import software from "../assets/softwareDevelopment.png";
import { motion, useAnimation, useInView } from "framer-motion";
const Skills = () => {
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

  const listStyle =
    "text-lg mb-2 text-deep-blue text-center hover:text-blue-violet hover:scale-110";
  const skillsData = [
    {
      image: frontend,
      heading: "Frontend Development",
      subheading:
        "I like to Crafting beautiful and interactive user interfaces from scratch.",
      tools: [
        "ReactJS",
        "Tailwind CSS",
        "Styled Components",
        "Material UI",
        "Chakra UI",
        "Framer Motion",
      ],
    },
    {
      image: backend,
      heading: "Backend Development",
      subheading:
        "I like to Building robust and scalable server-side applications.",
      tools: [
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "JWT Auth",
        "Postman",
        "Deployment(Render)",
      ],
    },
    {
      image: software,
      heading: "Software Engineering",
      subheading:
        "Solving complex problems with efficient and maintainable code",
      tools: [
        "C++",
        "Version control (Git)",
        "SDLC",
        "Computer Networks",
        "Operating System",
      ],
    },
  ];

  return (
    <>
      <div
        ref={ref}
        id="skillsContainer"
        className="relative top-[640px] lg:top-[440px] mb-10 px-2 lg:px-20 h-auto w-full flex-col items-center justify-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.5, delay: 0.4 }}
          id="categoryContainer"
          className="h-auto w-full bg-white rounded-xl grid grid-cols-1 lg:grid-cols-3 border-2"
        >
          {skillsData.map((items) => (
            <div
              id="detailsContainer"
              className="border-r-2 px-7 py-10 flex flex-col items-center justify-center"
            >
              <div
                id="imageContainer"
                className="h-40 w-40 p-2 mb-5 rounded-full bg-green-400 flex items-center justify-center"
              >
                <img src={items.image} alt="" className="h-24 w-24" />
              </div>
              <h1 className="font-bold text-2xl text-center text-deep-blue mb-4">
                {items.heading}
              </h1>
              <p className="text-md text-center mb-4">{items.subheading}</p>
              <h2 className="michroma-regular font-semibold text-lg text-blue-violet mb-4">
                Tech & Tools:
              </h2>
              {items.tools.map((tool) => (
                <ul>
                  <li className={listStyle}>{tool}</li>
                </ul>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
