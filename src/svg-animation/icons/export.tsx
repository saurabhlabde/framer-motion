import React from "react";

interface IExportIcon {}

export const Icon = ({}: IExportIcon) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
        <path
          d="M 15 6 C 13.977 6 12.953 6.118 11.95 6.353 C 9.173 7.004 7.004 9.173 6.353 11.95 C 5.882 13.956 5.882 16.044 6.353 18.05 C 7.004 20.827 9.173 22.996 11.95 23.647 C 13.956 24.118 16.044 24.118 18.05 23.647 C 20.827 22.996 22.996 20.827 23.647 18.05 C 23.882 17.047 24 16.023 24 15"
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
