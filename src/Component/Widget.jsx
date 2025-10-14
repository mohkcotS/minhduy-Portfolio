export const Widget = ({ title, children }) => {
  return (
    <div className="p-6 rounded-xl max-w-100 md:max-w-150 border-white/10 border shadow-blue-400/40 shadow-md">
      {title && (
        <h3 className="text-lg md:text-xl text-center text-amber-400 font-bold mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
