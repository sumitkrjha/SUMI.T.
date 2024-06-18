import React, { useRef } from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import { animate, motion, useInView } from "framer-motion";

const Contact = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headingRef = useRef(null);
  const isInHeadingView = useInView(headingRef, { once: true });

  const contacts = [
    {
      name: "Github",
      link: "https://github.com/sumitkrjha",
      logo: github,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/-sumitkumarjha/",
      logo: linkedin,
    },
    {
      name: "Gmail",
      link: "jhasumit4742@gmail.com",
      logo: gmail,
    },
  ];

  return (
    <>
      <div
        id="contactWrapper"
        className={`h-auto w-full mt-10 p-10 bg-white relative ${
          id == "1" ? "top-[2rem]" : "top-[23rem]"
        }`}
      >
        <div
          id="heading"
          ref={ref}
          className=" relative z-0 h-auto w-full flex flex-col items-center justify-center mb-3"
        >
          <motion.div
            ref={headingRef}
            animate={{
              x: isInView ? ["-100%", "-80%", "-50%", "-20%", "0%"] : "-100%",
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
            x: isInHeadingView
              ? ["-100%", "-80%", "-50%", "-20%", "0%"]
              : "-100%",
          }}
          transition={{ duration: 1, delay: 0.5 }}
          class="bg-white"
        >
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
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
        </motion.section>
      </div>
    </>
  );
};

export default Contact;
