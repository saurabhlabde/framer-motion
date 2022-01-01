import React from "react";

interface IBookmarkIcon {}

export const BookmarkIcon = ({}: IBookmarkIcon) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18">
        <path
          d="M 14 16.267 L 14 4.845 C 14 2.641 12.425 0.745 10.239 0.315 C 8.101 -0.105 5.899 -0.105 3.761 0.315 C 1.575 0.745 0 2.641 0 4.845 L 0 16.267 C 0 17.604 1.468 18.435 2.634 17.76 L 5.821 15.916 C 6.549 15.494 7.451 15.494 8.179 15.916 L 11.366 17.76 C 12.532 18.435 14 17.604 14 16.267 Z"
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
