import { IoIosCloseCircle } from "react-icons/io";
import { RiShareForward2Fill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
const ProjectModal = ({ open, setOpenModal, project }) => {
  console.log("open " + open);
  if (!open) {
    return null;
  }
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="z-50 transition duration-300 bg-regular-blue/90 overflow-x-hidden overflow-y-auto fixed inset-0 flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[80%] bg-regular-white flex flex-col justify-center items-center gap-6 rounded-xl overflow-hidden text-center pb-4 md:text-start md:pb-8 xl:max-w-[60%] 2xl:max-w-[45%]"
      >
        <div>
          <figure className="flex justify-center items-center md:max-h-[250px] overflow-hidden border-b-4 border-regular-purple">
            <img src={project.img} alt={project.name} />
          </figure>
        </div>
        <div className="w-[90%] flex flex-row flex-wrap justify-center gap-4 items-center sm:gap-2 xl:gap-8">
          <a
            href={project.gitHubFront}
            target="_blank"
            className="flex items-center gap-2 bg-regular-purple text-regular-white font-semibold p-1 rounded-md md:p-3"
          >
            {project.gitHubBack ? "Front-end" : "GitHub"}
            <IoLogoGithub />
          </a>
          {project.gitHubBack && (
            <a
              href={project.gitHubBack}
              target="_blank"
              className="flex items-center gap-2 bg-regular-purple text-regular-white font-semibold p-1 rounded-md md:p-3"
            >
              Back-end <IoLogoGithub />
            </a>
          )}
          <a
            href={project.website}
            target="_blank"
            className="flex items-center gap-2 bg-regular-blue text-regular-white font-semibold p-1 rounded-md md:p-3"
          >
            Live Site <RiShareForward2Fill />
          </a>
        </div>
        <section className="max-w-[90%] flex flex-col items-center justify-center gap-6 md:flex-row w-[90%] text-regular-blue md:gap-16 md:items-start">
          <div className="flex flex-col gap-2 ">
            <h1 className="font-bold text-lg md:text-2xl">{project.title}</h1>
            <p className="text-xs font-light max-w-[350px] md:text-base md:font-normal">{project.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold md:text-lg ">Languages</h2>
              <div className="grid grid-cols-2 gap-2">
                {project.languages.map((language, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <GoDotFill color="#8546F0" />
                    <p className="text-xs font-semibold md:text-base">{language}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold md:text-lg">Status</h2>
              <p className="text-xs font-semibold md:text-base">{project.status}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectModal;
