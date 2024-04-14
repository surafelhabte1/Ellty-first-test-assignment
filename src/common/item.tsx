import React, { useState } from "react";
import Checkbox from "./checkbox.tsx";

export interface ItemProps {
  title: string;
}

const Item = ({ title }: ItemProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 340,
    height: 37,
    backgroundColor: "#FFFFFF",
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 22,
    cursor: isHover ? "pointer" : "default",
    marginBottom: 5,
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span
        style={{
          fontFamily: "Montserrat",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 18.2,
        }}
      >
        {title}
      </span>
      <span>
        <Checkbox isHover={isHover} isChecked={isChecked} />
      </span>
    </div>
  );
};

export default Item;
