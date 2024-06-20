import OsteoAI from "../assets/projects/OsteoAI.png";
import Devlinks from "../assets/projects/devlinks.png";
import Portfolio from "../assets/projects/portfolio.png";
import github from "../assets/github.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import onrender from "../assets/onrender.png";
import youtube from "../assets/youtube.svg";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Project = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    console.log(id);
    if (isInView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, isInView]);

  const listStyle =
    "h-9 w-auto min-w-28 border-2 border-blue-violet p-2 rounded-full flex items-center justify-center font-semibold bg-blue-violet text-white hover:bg-white hover:border-none hover:text-black";

  const ProjectDetails = [
    {
      image: OsteoAI,
      heading: "OsteoAI: AI powered Web App",
      description:
        "OsteoAI is a web application that assists medical professionals in diagnosing bone tumors or fractures using X-ray analysis.",
      points: [
        "AI Analysis: Utilizes AI to analyze X-ray images.",
        "Secure Access: JWT authentication restricts access to authorized professionals.",
        "Streamlined Workflow: Formik simplifies data entry and validation.",
        "Scalable Storage: MongoDB Atlas securely stores medical data.",
        "Efficient Communication: Context API facilitates data exchange.",
      ],
      tech: [
        "ReactJS",
        "Tailwind CSS",
        "Context API",
        "Formik",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "JWT Auth",
      ],
      links: [
        {
          Github: "https://github.com/sumitkrjha/OsteoAI",
          Live: "https://osteoai.onrender.com",
          Video: "https://youtube.com",
        },
      ],
    },
    {
      image: Devlinks,
      heading: "Devlinks: One Link to Connect All",
      description:
        "DevLinks, a streamlined developer link management tool, is a Frontend application designed to empower developers by offering a centralized platform for managing and sharing their development resources.",
      points: [
        "Centralized Hub: Manage all your development platform links (code, docs, etc.) in one place using ReactJS dynamic interface.",
        "Effortless Profile Creation: Formik streamlines user profile and developer link creation with validation for accuracy.",
        "Live Preview: See how your DevLinks profile appears to others with ReactJS real-time preview as you edit.",
        "One-Click Sharing: Seamlessly share your curated resources with colleagues.",
      ],
      tech: ["ReactJS", "Tailwind CSS", "Redux", "Formik"],
      links: [
        {
          Github: "https://github.com/sumitkrjha/devlinks",
          Live: "https://devlinks-nsir.onrender.com",
          Video: "https://youtube.com",
        },
      ],
    },
    {
      image: Portfolio,
      heading: "SUMI.T.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nobis molestiae sapiente ad obcaecati repellendus ipsam. Soluta provident optio eaque ipsum accusamus, aliquid possimus ipsam dicta, dolor error repellendus nobis et blanditiis fugiat ex sequi voluptatibus nostrum. Ex rem aliquam praesentium modi nemo atque corrupti velit, quam consectetur labore reiciendis.",
      points: [
        "AI Analysis: Utilizes AI to analyze X-ray images.",
        "Secure Access: JWT authentication restricts access to authorized professionals.",
        "Streamlined Workflow: Formik simplifies data entry and validation.",
        "Scalable Storage: MongoDB Atlas securely stores medical data.",
        "Efficient Communication: Context API facilitates data exchange.",
      ],
      tech: ["ReactJS", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          name: "osteoai",
          Github: "https://github.com/sumitkrjha/SUMI.T.",
          Live: "https://sumitkrjha.onrender.com",
          Video: "https://youtube.com",
        },
      ],
    },
  ];

  return (
    <>
      <div
        id="wrapper"
        className={`absolute w-full h-[190rem] lg:h-[80rem] bg-blue-violet ${
          id == "1" ? "top-[32rem]" : "lg:top-[158rem] top-[258rem]"
        }`}
      ></div>
      <div
        id="projectWrapper"
        className={`relative h-auto w-full pt-28 px-0 lg:px-20 mb-10 flex flex-col items-center justify-center ${
          id == "1" ? "top-[-72px]" : "lg:top-[402px] top-[605px]"
        } `}
      >
        <h1
          ref={ref}
          className="text-4xl text-deep-blue font-bold text-center mb-1"
        >
          My Personal Projects
        </h1>
        <hr className="h-1 w-36 bg-lime-green mb-10" />
        {ProjectDetails.map((items, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.5, delay: 0.65 }}
            id="projectContainer"
            className={`h-auto w-[90%] p-5 mb-5 border-2 text-white bg-deep-blue rounded-3xl flex flex-col lg:flex-row items-center justify-center hover:scale-105 transition-all ${
              index === 1 ? "xl:flex-row-reverse" : "xl:flex-row"
            }`}
          >
            <div
              id="imageContainer"
              className="lg:w-2/5 h-auto flex items-center"
            >
              <img src={items.image} alt="" className="rounded-xl h-72" />
            </div>
            <div
              id="detailsContainer"
              className="lg:w-3/5 w-[319px] h-auto sm:px-0 py-5 lg:pr-5 lg:pl-10 "
            >
              <h1 className="text-2xl font-bold  text-lime-green text-center mb-5 michroma-regular">
                {items.heading}
              </h1>
              <p className=" text-base sm:text-xl text-white text-justify mb-2">
                {items.description}
              </p>
              <ul className="mb-8 pl-5">
                {items.points.map((point) => (
                  <li className="list-decimal sm:text-xl">{point}</li>
                ))}
              </ul>
              <ul className="h-auto w-auto flex gap-3 mb-9 items-center justify-center flex-wrap">
                {items.tech.map((tools) => (
                  <li className={listStyle}>{tools}</li>
                ))}
              </ul>
              {items.links.map((buttons) => (
                <ul
                  id="button"
                  className="flex flex-col lg:flex-row items-center justify-center gap-3"
                >
                  <a href={buttons.Github} target="_blank" rel="noreferrer">
                    <button className="text-white bg-[#24292F] hover:bg-[#1a1c20] font-medium rounded-lg text-sm h-12 w-36 px-5 py-2.5 text-center inline-flex justify-between items-center mb-2 pb-2">
                      <div class="flex items-center gap-2">
                        <img src={github} alt="github" className="w-4 h-4" />
                        GitHub
                      </div>
                      <img
                        src={forwardArrow}
                        alt="arrow"
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      />
                    </button>
                  </a>
                  <a href={buttons.Live} target="_blank" rel="noreferrer">
                    <button className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm h-12 w-36 px-5 py-2.5 text-center inline-flex justify-between items-center mb-2 pb-2">
                      <div class="flex items-center gap-2">
                        <img src={onrender} alt="Live" className="w-4 h-4 " />
                        Live
                      </div>
                      <img
                        src={forwardArrow}
                        alt="arrow"
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      />
                    </button>
                  </a>
                  <a href={buttons.Video} target="_blank" rel="noreferrer">
                    <button className="text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm h-12 w-36 px-5 py-2.5 text-center inline-flex justify-between items-center mb-2 pb-2">
                      <div class="flex items-center gap-2">
                        <img
                          src={youtube}
                          alt="Video link"
                          className="w-4 h-4 "
                        />
                        Demo
                      </div>
                      <img
                        src={forwardArrow}
                        alt="arrow"
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      />
                    </button>
                  </a>
                </ul>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Project;
