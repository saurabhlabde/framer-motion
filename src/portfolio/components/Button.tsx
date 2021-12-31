import React from "react";
import { AnimatePresence, useAnimation } from "framer-motion";

// style
import { Btn, Title, Background } from "../styles/button";

interface IButton {
  title: string;
  onClick?: () => void;
  height?: number;
  radius?: number;
  paddingLeftRight?: number;
}

export const buttonVariants = {
  hidden: {
    width: 0,
    backgroundColor: "#000000",
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
  visible: {
    width: "100%",
    backgroundColor: "#000000",
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

export const Button: React.FC<IButton> = ({
  title,
  radius,
  height,
  onClick,
  paddingLeftRight,
}) => {
  const [hover, setHover] = React.useState<boolean>(false);

  const lineAnimation = useAnimation();

  React.useEffect(() => {
    lineAnimation.start(hover ? buttonVariants.visible : buttonVariants.hidden);
  }, [hover]);

  return (
    <Btn
      onClick={() => {
        onClick ? onClick() : undefined;
      }}
      style={{
        height: height ? height : 50,
        paddingLeft: paddingLeftRight ? paddingLeftRight : 25,
        paddingRight: paddingLeftRight ? paddingLeftRight : 25,
        borderColor: hover ? "transparent" : "#000000",
      }}
      onMouseEnter={() => {
        return setHover(true);
      }}
      onMouseLeave={() => {
        return setHover(false);
      }}
    >
      <Title
        style={{
          color: hover ? "#ffffff" : "#000000",
        }}
      >
        {title}
      </Title>

      <AnimatePresence>
        <Background
          style={{
            height: height ? height : 50,
          }}
          animate={lineAnimation}
        />
      </AnimatePresence>
    </Btn>
  );
};
