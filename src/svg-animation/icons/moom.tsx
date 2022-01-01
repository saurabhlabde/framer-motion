import React from "react";

interface IMoonIcon {}

export const MoonIcon = ({}: IMoonIcon) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
        <path
          d="M 6 13.46 C 6 17.624 9.474 21 13.76 21 C 17.059 21 19.877 18.999 21 16.178 C 20.111 16.584 19.118 16.811 18.071 16.811 C 14.261 16.811 11.173 13.81 11.173 10.108 C 11.173 8.56 11.713 7.135 12.621 6 C 8.875 6.535 6 9.671 6 13.46 Z"
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
