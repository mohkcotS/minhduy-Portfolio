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
    <div className="rounded-xl shadow-lg shadow-white/50 h-160 flex flex-col"> 
      
      <div className="w-full overflow-hidden rounded-t-xl shrink-0">
        <img
          src={project.images[currentImage]}
          alt="Avatar"
          className="w-full h-68"
        />
      </div>

      <div className="flex flex-col p-6 flex-grow">
        
        <div className="mb-4"> 
          <h3 className="text-xl font-bold text-amber-400">{project?.name}</h3>
          <h5 className="text-gray-400 mb-4 text-md">{project.type}</h5>
          
          <p className="mb-4 ">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project?.technique?.map((tech, key) => (
              <span
                key={key}
                className="border border-green-300 text-green-300 py-1 px-3 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto w-full">
          <a href={project?.link}>
            <div
              className="flex justify-center items-center py-2 border border-pink-300 rounded-xl text-pink-300 
              hover:text-pink-200 hover:border-pink-200 transition-colors cursor-pointer active:scale-95"
            >
              View Project
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};
