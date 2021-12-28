import React from "react";
import { AnimatePresence, useAnimation } from "framer-motion";

// style
import { Container, Outline, Title, TitleSection } from "../styles/button";

const outlineVariants = {
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

export const Button: React.FC = () => {
  const [buttonHover, setButtonHover] = React.useState<boolean>(false);

  const outlineAnimation = useAnimation();

  React.useEffect(() => {
    outlineAnimation.start(
      buttonHover ? outlineVariants.visible : outlineVariants.hidden
    );
  }, [buttonHover]);

  return (
    <Outline
      animate={outlineAnimation}
      exit={{
        opacity: 1,
      }}
    >
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
    </Outline>
  );
};
