import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
const AboutMe = () => {
  return (
    <div className="w-full p-4 mt-40 mb-12 text-regular-white ">
      <div className="sm: max-w-[80%] mx-auto flex flex-col gap-12 md:justify-between md:flex-row">
        <div className="flex flex-col items-center text-center md:w-[40%] gap-8 md:text-left md:items-start">
          <h1 className="sm: text-3xl font-bold md:text-3xl xl:text-4xl 2xl:text-5xl">
            Let's{" "}
            <span className="sm: text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 inline-block text-transparent bg-clip-text xl:text-5xl ">
              Connect!
            </span>
          </h1>
          <p>
            Ready to kickstart my career in web development! Seeking junior or trainee positions. If you have any
            opportunities available, let's chat.
          </p>
          <div className="flex gap-4">
            <FaLinkedin size={30} />
            <IoLogoGithub size={30} />
          </div>
        </div>

        <div className="sm: flex justify-center gap-20 md:min-w-[40%]">
          <form className="flex flex-col w-full gap-4 text-lg text-regular-white font-semibold">
            <label> Your Email</label>
            <input
              type="text"
              name="name"
              placeholder="example@gmail.com"
              className="rounded-md bg-[#15213C] text-sm p-2 placeholder-gray-500 placeholder-opacity-100"
            />
            <label>Subject</label>
            <input
              type="text"
              name="name"
              placeholder="Example"
              className="rounded-md  bg-[#15213C] text-sm p-2 placeholder-gray-500 placeholder-opacity-100"
            />
            <label>Message</label>
            <textarea
              type="text"
              name="name"
              placeholder="Lets’s Talk about..."
              rows="5"
              className="rounded-md bg-[#15213C] text-sm p-2 placeholder-gray-500 placeholder-opacity-100"
            />
            <div className="flex w-full justify-end">
              <button
                type="submit"
                value="Submit"
                className="sm: p-2 text-base my-4 bg-regular-purple text-regular-white rounded-lg md:px-8 md:py-2 "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;