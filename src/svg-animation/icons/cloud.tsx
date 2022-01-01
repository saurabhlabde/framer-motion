import React from "react";

interface ICloudIcon {}

export const CloudIcon = ({}: ICloudIcon) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28">
        <path
          d="M 21.136 22 C 24.042 22 26 19.612 26 16.667 C 26 14.467 24.685 12.578 22.809 11.762 C 22.466 8.527 19.549 6 16 6 C 12.221 6 9.158 8.865 9.158 12.4 C 9.158 12.491 9.16 12.581 9.164 12.671 C 7.321 13.328 6 15.108 6 17.2 C 6 19.851 7.828 22 10.444 22"
          fill="transparent"
          strokeWidth="1.5"
          stroke="rgb(54,56,83)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeDasharray=""
        ></path>
      </svg>
    </>
  );
};
