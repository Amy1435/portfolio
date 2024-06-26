import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import ContactGirl from "./icons/ContactGirl";
const { VITE_FORM_KEY } = import.meta.env;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};
const AboutMe = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", VITE_FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  //animation
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    // p-4 mt-40 mb-12
    <motion.section
      id="contacts"
      className="w-full h-[auto] py-12 text-regular-white flex justify-center items-center snap-center xl:h-screen"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <div className="sm: max-w-[80%] mx-auto flex flex-col gap-12 md:justify-between md:flex-row ">
        <motion.div
          className="flex flex-col  text-center md:w-[40%] gap-8 md:text-left md:items-start"
          variants={variants}
        >
          {/* <div className="hidden lg:flex w-full justify-center">
            <ContactGirl />
          </div> */}
          <h1 className="sm: text-3xl font-bold md:text-3xl xl:text-4xl 2xl:text-5xl">
            Let's{" "}
            <span className="sm: text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text xl:text-5xl ">
              Connect!
            </span>
          </h1>
          <p className="text-sm sm:text-base">
            Excited to begin my career in web development! I'm looking for junior or trainee positions. If you have any
            openings, Fell free to email me!
          </p>
          <div className="flex gap-4 w-full justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/amanda-ausejo/" target="_blank">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Amy1435" target="_blank">
              <IoLogoGithub size={30} />
            </a>
          </div>
        </motion.div>

        <motion.div className="sm: flex justify-center gap-20 md:min-w-[40%]" variants={variants}>
          <form onSubmit={onSubmit} className="flex flex-col w-full gap-4 text-lg text-regular-white font-semibold">
            <label> Your Email</label>
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              required
              className="rounded-md bg-[#15213C] text-sm p-2 placeholder-gray-500 placeholder-opacity-100"
            />
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Example"
              required
              className="rounded-md  bg-[#15213C] text-sm p-2 placeholder-gray-500 placeholder-opacity-100"
            />
            <label>Message</label>
            <textarea
              type="text"
              name="message"
              placeholder="Lets’s Talk about..."
              required
              rows="8"
              className="rounded-md bg-[#15213C] text-sm p-2 placeholder-gray-500 placeholder-opacity-100"
            />
            <div className="flex w-full justify-end">
              <button
                type="submit"
                value="Submit"
                className="sm: p-2 text-base my-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-regular-white rounded-lg md:px-8 md:py-2 hover:shadow-xl hover:shadow-regular-purple/50 transition ease-in-out delay-150 hover:scale-110 hover:duration-300"
              >
                Send Message
              </button>
            </div>
            <span className="text-regular-purple">{result}</span>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
