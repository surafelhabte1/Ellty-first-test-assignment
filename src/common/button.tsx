import React, { useState } from "react";

const Button = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseDown = () => {
    setIsHover(false);
  };

  const handleMouseUp = () => {
    setIsHover(true);
  };

  const buttonStyle = {
    width: 340,
    height: 40,
    borderRadius: 4,
    border: 0,
    backgroundColor: isHover ? "#FFD84D" : "#FFCE22",
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    color: "black",
    cursor: isHover ? "pointer" : "default",
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 400,
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      Done
    </button>
  );
};

export default Button;
