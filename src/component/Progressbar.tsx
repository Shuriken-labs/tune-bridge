

const ProgressBar = ({ value = 0 }) => {
  return (
    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
      <div
        className="bg-cyan-500 h-full transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
