import React from "react";

const Divider = () => {
  const containerStyle = {
    width: 370,
    height: 20,
  };

  const hrStyle = {
    width: 340,
    color: "#CDCDCD",
  };

  return (
    <div style={containerStyle}>
      <hr style={hrStyle} />
    </div>
  );
};

export default Divider;
