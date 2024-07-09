import React from "react";

const CircularProgressBar = ({
  userScore,
  size = 100,
  strokeWidth = 3,
  color = "#f0f0f0",
  children,
}) => {
  const progress = Math.min(Math.max(userScore, 0), 100);

  const circleStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const progressStyle = {
    backgroundImage: `conic-gradient(from ${color} 0%, ${color} ${progress}, transparent ${progress})`,
    width: "inherit",
    height: "inherit",
    borderRadius: "50%",
    position: "absolute",
  };

  return (
    <div className="p-7 relative bg-transparent rounded-[50%] flex border-[3px] border-yellow-40">
      <div style={circleStyle}>
        <div style={progressStyle} />
        <p className="text-white font-semibold text-lg">{ userScore }</p>
      </div>
    </div>
  );
};

export default CircularProgressBar;
