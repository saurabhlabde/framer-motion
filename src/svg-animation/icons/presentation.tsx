import React from "react";

interface IPresentationIcon {}

export const PresentationIcon = ({}: IPresentationIcon) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18">
        <path
          d="M 6 9 L 8 9 L 10 12 L 14 6 L 16 9 L 18 9"
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
