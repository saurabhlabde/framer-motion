import React from "react";

// style
import { Btn, Title } from "../styles/button";

interface IButton {
  title: string;
  onClick?: () => void;
  height?: number;
  radius?: number;
  paddingLeftRight?: number;
}

export const Button: React.FC<IButton> = ({
  title,
  radius,
  height,
  onClick,
  paddingLeftRight,
}) => {
  return (
    <Btn
      onClick={() => {
        onClick ? onClick() : undefined;
      }}
      style={{
        height: height ? height : 50,
        borderRadius: radius ? radius : 0,
        paddingLeft: paddingLeftRight ? paddingLeftRight : 25,
        paddingRight: paddingLeftRight ? paddingLeftRight : 25,
      }}
    >
      <Title>{title}</Title>
    </Btn>
  );
};
