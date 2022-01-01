import React from "react";
import { style } from ".";

interface IExportIcon {}

export const ExportIcon = ({}: IExportIcon) => {
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
          d="M12 3C10.9767 3 9.95334 3.11763 8.95043 3.35288C6.17301 4.00437 4.00437 6.17301 3.35288 8.95043C2.88237 10.9563 2.88237 13.0437 3.35288 15.0496C4.00437 17.827 6.17301 19.9956 8.95044 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496C20.8824 14.0466 21 13.0233 21 12"
         stroke={style.color}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M17 3H21M21 3V7.66667M21 3L15 10"
         stroke={style.color}
          stroke-width={style.strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
