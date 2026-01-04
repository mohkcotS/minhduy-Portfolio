import personalImage from "../assets/pi.jpg";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-10 items-center">
        <div className="w-25 h-25 md:w-40 md:h-40 rounded-full p-1 md:p-1.5 bg-gradient-to-b from-blue-700 to-purple-800">
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img
              src={personalImage}
              alt="Picture"
              className="w-full h-full object-cover object-[50%_5%]"
            />
          </div>
        </div>
        <div className="text-5xl md:text-7xl font-bold">
          <div>Hi, It's </div>
          <div className="bg-clip-text text-transparent leading-right bg-gradient-to-r from-blue-800 to-cyan-400">
            Duy
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto">
          I'm a 4th year student passionate about programming. I'm learning
          frontend and backend to become a Full Stack Developer, always seeking
          opportunities to learn, practice, and work on real projects.
        </p>
      </div>
      <div className="flex gap-10 justify-center">
        <a
          href="https://github.com/mohkcotS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-6 w-6 sm:h-8 sm:w-8 hover:scale-110" />
        </a>

        <a
          href="https://www.facebook.com/duylm04/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="h-6 w-6 sm:h-8 sm:w-8 hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/l%C3%AA-minh-duy-505021364/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8 hover:scale-110" />
        </a>
      </div>
    </div>
  );
};
