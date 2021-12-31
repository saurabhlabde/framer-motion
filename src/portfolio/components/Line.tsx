import React from "react";
import { AnimationControls } from "framer-motion";

// style
import { LineL } from "../styles/line";

interface ILine {
  height: number;
  backgroundColor: string;
  left?: number;
  bottom?: number;
  animation: AnimationControls;
}

export const Line: React.FC<ILine> = ({
  height,
  backgroundColor,
  left,
  bottom,
  animation,
}) => {
  return (
    <LineL
      animate={animation}
      style={{
        height: height ? height : 5,
        backgroundColor: backgroundColor ? backgroundColor : "#000000",
        left: left ? left : 0,
        bottom: bottom ? bottom : 0,
      }}
    />
  );
};
