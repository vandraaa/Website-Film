import React from "react";

const CircularProgressBar = ({ percentage }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-20 h-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          className="stroke-current text-gray-200"
          strokeWidth="2"
        ></circle>
        <g className="origin-center -rotate-90 transform">
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            className="stroke-current text-[#21D07A]"
            strokeWidth="2" 
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          ></circle>
        </g>
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-xl font-semibold text-white">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
