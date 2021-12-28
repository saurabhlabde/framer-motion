import React from "react";
import { useAnimation } from "framer-motion";

// style
import { Container, Border, Title, TitleSection } from "../styles/button";

const borderVariants = {
  visible: {
    backgroundColor: "rgba(51, 170, 255, 0.3)",
    scale: 1.01,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
  hidden: {
    backgroundColor: "rgba(51, 170, 255, 0)",
    scale: 1.01,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const buttonVariants = {};

export const Button: React.FC = () => {
  const [buttonHover, setButtonHover] = React.useState<boolean>(false);

  const borderAnimation = useAnimation();

  React.useEffect(() => {
    borderAnimation.start(
      buttonHover ? borderVariants.visible : borderVariants.hidden
    );
  }, [buttonHover]);

  return (
    <Border animate={borderAnimation}>
      <Container
        onHoverStart={() => {
          return setButtonHover(true);
        }}
        onHoverEnd={() => {
          return setButtonHover(false);
        }}
        whileHover={{
          backgroundColor: buttonHover ? "#0095ff" : "#33aaff",
          transition: {
            ease: "easeInOut",
            duration: 0.4,
          },
        }}
      >
        <TitleSection>
          <Title>log in</Title>
        </TitleSection>
      </Container>
    </Border>
  );
};
