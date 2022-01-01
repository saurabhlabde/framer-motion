import React from "react";

interface IActivityIcon {}

export const ActivityIcon = ({}: IActivityIcon) => {
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
        className="feather feather-activity"
      >
        <polyline
          fill="#000000"
          points="22 12 18 12 15 21 9 3 6 12 2 12"
        ></polyline>
      </svg>
    </>
  );
};