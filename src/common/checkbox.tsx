import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Checkbox = ({ isHover: propIsHover = false, isChecked: propIsChecked = false }) => {
  const [isHover, setIsHover] = useState(propIsHover);
  const [isChecked, setIsChecked] = useState(propIsChecked);

  useEffect(() => {
    setIsHover(propIsHover);
    setIsChecked(propIsChecked);
  }, [propIsHover, propIsChecked]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const checkboxStyle = {
    width: 25,
    height: 25,
    borderRadius: 6,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderStyle: isChecked ? "none" : "solid",
    backgroundColor: isChecked ? (isHover ? "#5087F8" : "#2469F6") : "transparent",
    cursor: isHover ? "pointer" : "default",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
  };

  const iconColor = isChecked ? "#FFFFFF" : (isHover ? "#878787" : "transparent");

  return (
    <div
      style={checkboxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Icon
        icon={"material-symbols-light:check"}
        width={25}
        height={25}
        color={iconColor}
        style={{
          border: 1,
        }}
      />
    </div>
  );
};

export default Checkbox;
