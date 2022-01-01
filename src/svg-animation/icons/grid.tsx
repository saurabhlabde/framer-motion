import React from "react";

interface IGridIcon {}

export const GridIcon = ({}: IGridIcon) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          d="M 0.678 5.879 L 9 5.879 M 9 12.121 L 17.322 12.121 M 9 0.678 L 9 17.322 M 0.353 12.05 C -0.118 10.044 -0.118 7.956 0.353 5.95 C 1.004 3.173 3.173 1.004 5.95 0.353 C 7.956 -0.118 10.044 -0.118 12.05 0.353 C 14.827 1.004 16.996 3.173 17.647 5.95 C 18.118 7.956 18.118 10.044 17.647 12.05 C 16.996 14.827 14.827 16.996 12.05 17.647 C 10.044 18.118 7.956 18.118 5.95 17.647 C 3.173 16.996 1.004 14.827 0.353 12.05 Z"
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
