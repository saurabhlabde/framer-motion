import * as React from "react";
import { AnimationControls, motion } from "framer-motion";

interface IMailIcon {
  animation: AnimationControls;
}

export const MailIcon = ({ animation }: IMailIcon) => {
  return (
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
      className="feather feather-mail"
    >
      <motion.path
        stroke={"#ffffff"}
        animate={animation}
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      ></motion.path>
      <motion.polyline
        animate={animation}
        stroke={"#ffffff"}
        points="22,6 12,13 2,6"
      ></motion.polyline>
    </svg>
  );
};
