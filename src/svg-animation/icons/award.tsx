import React from "react";
import { style } from ".";

interface IAwardIcon {}

export const AwardIcon = ({}: IAwardIcon) => {
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
          d="M14.2025 15.3439C14.9297 15.1787 15.5991 14.874 16.1795 14.4601L17.3264 18.9669C17.6708 20.3201 16.2233 21.4446 14.9341 20.8255L13.0013 19.8972C12.3704 19.5943 11.6296 19.5943 10.9987 19.8972L9.0659 20.8255C7.77673 21.4446 6.32924 20.3201 6.67359 18.9669L7.82046 14.46C8.40085 14.874 9.0703 15.1787 9.79754 15.3439M14.2025 15.3439C12.7538 15.673 11.2462 15.673 9.79754 15.3439M14.2025 15.3439C16.2084 14.8882 17.7746 13.3712 18.2451 11.4285C18.585 10.0254 18.585 8.56527 18.2451 7.16223C17.7746 5.21947 16.2084 3.70254 14.2025 3.24683C12.7538 2.91772 11.2462 2.91772 9.79753 3.24683C7.79162 3.70254 6.22538 5.21947 5.75486 7.16223C5.41505 8.56527 5.41505 10.0254 5.75486 11.4285C6.22538 13.3712 7.79162 14.8882 9.79754 15.3439"
          stroke={style.color}
          stroke-width={style.strokeWidth}
        />
      </svg>
    </>
  );
};
