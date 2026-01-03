export const SubProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl shadow shadow-white/20 opacity-50 cursor-pointer active:scale-90 transition duration-500">
      <div className="w-full relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={project.images[0]}
          alt="Avatar"
          className="w-full h-48 object-cover"
        />

        <div className="absolute inset-0 bg-black/10 flex justify-center items-center">
          <h3 className="text-xl font-bold mb-2 mt-4 text-white">
            {project.name}
          </h3>
        </div>
      </div>
    </div>
  );
};
