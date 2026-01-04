import { useState, useEffect } from "react";


export const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project?.images?.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        (prev + 1) % project.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div className="rounded-xl shadow-lg shadow-violet-300/50 w-100 md:w-120 lg:w-full h-132 md:h-160 flex flex-col"> 
      <div className="w-full overflow-hidden rounded-t-xl shrink-0">
        <img
          src={project.images[currentImage]}
          alt="Avatar"
          className="w-full h-44 md:h-56 xl:h-68"
        />
      </div>

      <div className="flex flex-col p-6 flex-grow">
        
        <div className="mb-4"> 
          <h3 className="text-xl font-bold text-amber-400">{project?.name}</h3>
          <h5 className="text-gray-400 mb-4 text-sm md:text-base">{project.type}</h5>
          
          <p className="mb-4 text-gray-200 text-sm md:text-base">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project?.technique?.map((tech, key) => (
              <span
                key={key}
                className="bg-green-500/10 text-green-200 py-1 px-3 rounded-full text-xs lg:text-sm border border-green-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto w-full">
          <a href={project?.link}>
            <div
              className="text-xs md:text-sm flex justify-center items-center py-2 border-2 border-pink-300 rounded-xl text-pink-300 
              hover:text-pink-300 hover:border-pink-300 transition-colors cursor-pointer active:scale-95"
            >
              View Project
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};
