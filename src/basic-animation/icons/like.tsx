import { AnimationControls, motion } from "framer-motion";
import * as React from "react";

interface ILikeIcon {
  liked?: boolean;
  forLike?: boolean;
  animation?: AnimationControls;
  onAnimationEnd?: () => void;
}

export const LikeIcon = ({
  liked,
  forLike,
  animation,
  onAnimationEnd,
}: ILikeIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28">
      {liked ? (
        <motion.path
          animate={
            animation
              ? animation
              : {
                  fill: "rgba(255, 213, 0,1)",
                  transition: {
                    ease: "easeIn",
                    duration: 0.5,
                    delay: 1.1,
                  },
                }
          }
          d="M 19.242 4.067 C 17.686 4.286 16.128 5.039 15 6.261 C 13.872 5.039 12.314 4.286 10.758 4.067 C 8.783 3.789 6.628 4.355 5.294 6.164 C 3.569 8.503 3.569 11.817 5.294 14.157 L 11.031 21.937 C 13.06 24.688 16.94 24.688 18.969 21.937 L 24.706 14.157 C 26.431 11.817 26.431 8.503 24.706 6.164 C 23.372 4.355 21.217 3.789 19.242 4.067 Z"
          onAnimationComplete={() => {
            return onAnimationEnd ? onAnimationEnd() : undefined;
          }}
        ></motion.path>
      ) : (
        <motion.path
          d="M 6.093 13.562 L 11.798 21.325 C 13.439 23.558 16.561 23.558 18.202 21.325 L 23.907 13.562 C 25.364 11.578 25.364 8.76 23.907 6.776 C 21.773 3.873 16.841 4.735 15 7.867 C 13.159 4.735 8.227 3.873 6.093 6.776 C 4.636 8.76 4.636 11.578 6.093 13.562 Z"
          fill="transparent"
          strokeWidth="1.5"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray=""
        ></motion.path>
      )}
    </svg>
  );
};
