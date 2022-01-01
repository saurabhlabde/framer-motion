import React from "react";
import { style } from ".";

interface IGridIcon {}

export const GridIcon = ({}: IGridIcon) => {
  return (
    <>
      <svg
        width={style.HeightWidth}
        height={style.HeightWidth}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.67782 8.87918H12M12 15.1208H20.3222M12 3.67782L12 20.3222M3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496Z"
         stroke={style.color}
          stroke-width={style.strokeWidth}
        />
      </svg>
    </>
  );
};
