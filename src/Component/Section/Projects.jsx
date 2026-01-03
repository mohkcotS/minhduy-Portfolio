import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";
import { SubProjectCard } from "../SubProjectCard";
import { projects } from "../../data";
import { useState } from "react";

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
        <div className="mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
            bg-clip-text text-transparent text-center"
          >
            Projects
          </h2>
          <div className=" w-full grid grid-cols-7 items-center max-w-7xl">
            <div
              className="col-span-2 -translate-x-8 cursor-pointer"
              onClick={() => projectChoose(leftIndex)}
            >
              <SubProjectCard project={projects[leftIndex]} />
            </div>
            <div className="col-span-3 z-10">
              <ProjectCard project={projects[curProject]} />
            </div>
            <div
              className="col-span-2 translate-x-8"
              onClick={() => projectChoose(rightIndex)}
            >
              <SubProjectCard project={projects[rightIndex]} />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
