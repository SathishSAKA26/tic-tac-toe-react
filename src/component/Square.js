import React from "react";

// destructuring props
const Square = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Square;
