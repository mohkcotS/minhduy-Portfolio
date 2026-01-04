import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";
import { SubProjectCard } from "../SubProjectCard";
import { projects } from "../../data";
import { useState } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

export const Projects = () => {
  const projectsLength = projects.length;
  const [curProject, setCurProject] = useState(0);

  const leftIndex = (curProject - 1 + projectsLength) % projectsLength;
  const rightIndex = (curProject + 1) % projectsLength;

  const projectChoose = (index) => {
    setCurProject(index);
  };
  return (
    <section id="projects" className="min-h-screen flex pt-10 justify-center">
      <RevealOnScroll>
        <div className="mx-auto">
          <h2
            className="text-3xl font-bold mt-16 mb-8  bg-gradient-to-r from-blue-500 to-cyan-400 
            bg-clip-text text-transparent text-center"
          >
            Projects
          </h2>
          <div className=" w-full flex flex-col sm:flex-row lg:grid lg:grid-cols-7 items-center max-w-7xl">
            <div className="hidden sm:block lg:hidden">
              <FaRegArrowAltCircleLeft className="active:scale-90 cursor-pointer" onClick={() => projectChoose(leftIndex)} size={36} />
            </div>
            <div
              className="hidden lg:block lg:col-span-2 p-8"
              onClick={() => projectChoose(leftIndex)}
            >
              <SubProjectCard project={projects[leftIndex]} />
            </div>
            <div className="px-10 lg:p-0 lg:col-span-3">
              <ProjectCard project={projects[curProject]} />
            </div>
            <div
              className="hidden lg:block lg:col-span-2 p-8"
              onClick={() => projectChoose(rightIndex)}
            >
              <SubProjectCard project={projects[rightIndex]} />
            </div>
            <div className="hidden sm:block lg:hidden">
              <FaRegArrowAltCircleRight className="active:scale-90 cursor-pointer" onClick={() => projectChoose(leftIndex)} size={36} />
            </div>

            <div className="flex mt-8 gap-20 sm:hidden">
              <FaRegArrowAltCircleLeft className="active:scale-90 cursor-pointer" onClick={() => projectChoose(leftIndex)} size={36} />
              <FaRegArrowAltCircleRight className="active:scale-90 cursor-pointer" onClick={() => projectChoose(rightIndex)} size={36} />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
