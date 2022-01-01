import React from "react";
import { style } from ".";

interface ITwoUserIcon {}

export const TwoUserIcon = ({}: ITwoUserIcon) => {
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
          d="M3 18.433C3 16.4308 4.45485 14.7254 6.43204 14.4098L6.61013 14.3814C8.19336 14.1287 9.80664 14.1287 11.3899 14.3814L11.568 14.4098C13.5451 14.7254 15 16.4308 15 18.433C15 19.2984 14.2984 20 13.433 20H4.56697C3.70156 20 3 19.2984 3 18.433Z"
         stroke={style.color}
          stroke-width={style.strokeWidth}
        />
        <path
          d="M12.5 7.5C12.5 9.433 10.933 11 9 11C7.067 11 5.5 9.433 5.5 7.5C5.5 5.567 7.067 4 9 4C10.933 4 12.5 5.567 12.5 7.5Z"
         stroke={style.color}
          stroke-width={style.strokeWidth}
        />
        <path
          d="M15 11C16.933 11 18.5 9.433 18.5 7.5C18.5 5.567 16.933 4 15 4M17.3899 20H19.433C20.2984 20 21 19.2984 21 18.433C21 16.4308 19.5451 14.7254 17.568 14.4098V14.4098C17.4494 14.3909 17.3293 14.3814 17.2093 14.3814C16.8895 14.3814 16.7902 14.3814 16.2412 14.3814"
         stroke={style.color}
          stroke-width={style.strokeWidth}
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};
