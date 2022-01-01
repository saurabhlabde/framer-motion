import React from "react";

interface ITwoUserIcon {}

export const TwoUserIcon = ({}: ITwoUserIcon) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28">
        <path
          d="M 6 20.433 C 6 18.431 7.455 16.725 9.432 16.41 L 9.61 16.381 C 11.193 16.129 12.807 16.129 14.39 16.381 L 14.568 16.41 C 16.545 16.725 18 18.431 18 20.433 C 18 21.298 17.298 22 16.433 22 L 7.567 22 C 6.702 22 6 21.298 6 20.433 Z"
          fill="transparent"
          strokeWidth="1.5"
          stroke="rgb(54,56,83)"
          strokeMiterlimit="10"
          strokeDasharray=""
        ></path>
        <path
          d="M 15.5 9.5 C 15.5 11.433 13.933 13 12 13 C 10.067 13 8.5 11.433 8.5 9.5 C 8.5 7.567 10.067 6 12 6 C 13.933 6 15.5 7.567 15.5 9.5 Z"
          fill="transparent"
          strokeWidth="1.5"
          stroke="rgb(54,56,83)"
          strokeMiterlimit="10"
          strokeDasharray=""
        ></path>
      </svg>
    </>
  );
};
