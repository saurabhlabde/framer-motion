import React from "react";

interface ISunIcon {}

export const SunIcon = ({}: ISunIcon) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
        <path
          d="M 21.312 8.688 L 21.429 8.571 M 8.571 21.429 L 8.688 21.312 M 15 6.074 L 15 6 M 15 24 L 15 23.926 M 6.074 15 L 6 15 M 24 15 L 23.926 15 M 8.688 8.688 L 8.571 8.571 M 21.429 21.429 L 21.312 21.312"
          fill="transparent"
          strokeWidth="1.5"
          stroke="rgb(54,56,83)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray=""
        ></path>
      </svg>
    </>
  );
};
