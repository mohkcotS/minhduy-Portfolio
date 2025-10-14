export const ExperienceRow = ({ title, year, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col sm:flex-row sm:justify-between text-sm sm:text-[16px]">
        <h4 className="font-semibold "> {title} </h4>
        <h4> {year} </h4>
      </div>
      <p className="text-gray-400 text-sm md:text-[16px]">{description}</p>
    </div>
  );
};
