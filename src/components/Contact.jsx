import React, { useRef } from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import { animate, motion, useInView } from "framer-motion";
import { ContactPage } from "@mui/icons-material";

const Contact = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headingRef = useRef(null);
  const isInHeadingView = useInView(headingRef, { once: true });

  const contacts = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/-sumitkumarjha/",
      logo: linkedin,
      color: " bg-blue-500 hover:bg-blue-800",
    },
    {
      name: "Gmail",
      link: "mailto:jhasumit4742@gmail.com",
      logo: gmail,
      color: "bg-red-500 hover:bg-red-700",
    },
    {
      name: "Github",
      link: "https://github.com/sumitkrjha",
      logo: github,
      color: " bg-[#24292F] hover:bg-[#1a1c20]",
    },
  ];

  return (
    <>
      <div
        id="contactWrapper"
        className={`h-auto w-full mt-10 py-10 lg:p-10 bg-white relative ${
          id == "1" ? "top-[2rem]" : "lg:top-[23rem] top-[30rem]"
        }`}
      >
        <div
          id="heading"
          ref={ref}
          className=" relative z-0 h-auto w-full flex flex-col items-center justify-center mb-3 pl-10"
        >
          <motion.div
            ref={headingRef}
            animate={{
              x: isInView ? "0%" : "-100%",
            }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-auto w-full text-4xl text-center font-bold mb-1"
          >
            Contact Me
          </motion.div>
          <hr className="h-1 w-24 bg-lime-green" />
        </div>
        <motion.section
          animate={{
            x: isInHeadingView ? "0%" : "-100%",
          }}
          transition={{ duration: 1, delay: 0.5 }}
          class="mt-4 flex flex-col lg:flex-row lg:p-10 gap-14 "
        >
          <div class="py-16 lg:px-4 mx-4 lg:mx-auto lg:w-1/2 ">
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-lg font-medium text-deep-blue"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-deep-blue text-sm rounded-lg block w-full p-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-lg font-medium text-deep-blue"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-deep-blue text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-lg font-medium text-deep-blue "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-deep-blue bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Let me know how can I help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-lg font-medium text-deep-blue "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-deep-blue bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="h-12 w-auto p-3 border-2 border-blue-violet rounded-3xl flex items-center justify-center font-semibold text-lg text-blue-violet hover:bg-blue-violet hover:text-white hover:shadow-md hover:shadow-blue-violet active:translate-y-1"
              >
                Send message
              </button>
            </form>
          </div>
          <div
            id="linkContainer"
            className="relative h-auto lg:w-1/2 border-t-4 lg:border-t-0 lg:border-l-4 border-blue-violet"
          >
            <div
              id="or"
              className="relative top-[-2rem] lg:top-72 min-[400px]:left-1/2 left-[135px] lg:left-[-32px] h-16 w-16 p-4 rounded-full flex items-center justify-center border-2 border-white bg-deep-blue text-2xl font-semibold text-lime-green"
            >
              OR
            </div>
            <div
              id="links"
              className="absolute top-56 lg:top-[-3px] h-[90%] w-full flex flex-col items-center justify-center"
            >
              <h1 className="text-4xl font-semibold michroma-regular pb-2 text-deep-blue">
                Connect @
              </h1>
              <hr className="h-1 w-24 mb-10 bg-lime-green" />
              {contacts.map((items) => (
                <a href={items.link} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    class={`text-white font-medium rounded-lg text-sm h-12 w-52 px-5 py-2.5 text-center inline-flex justify-between items-center me-2 mb-10 pb-2 ${items.color}`}
                  >
                    <div class="flex items-center">
                      <img
                        src={items.logo}
                        alt={items.name}
                        className="w-4 h-4 me-2 "
                      />
                      {items.name}
                    </div>
                    <img
                      src={forwardArrow}
                      alt="arrow"
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    />
                  </button>
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Contact;
