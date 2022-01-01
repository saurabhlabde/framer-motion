import React from "react";

interface IAwardIcon {}

export const AwardIcon = ({}: IAwardIcon) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-award"
      >
        <circle fill="#000000" cx="12" cy="8" r="7"></circle>
        <polyline
          fill="#000000"
          points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
        ></polyline>
      </svg>
    </>
  );
};
