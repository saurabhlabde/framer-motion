import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// style
import {
  Container,
  RightSection,
  LeftSection,
  HeadingSection,
  HeadingText,
  Button,
} from "../styles/card";

// icon
import { ArrowIcon } from "../icons/Arrow";

interface IProjectCard {
  title: string;
  onClick?: () => void;
}

const variantsHover = {
  cursor: "pointer",
  scale: 1.02,
  boxShadow: "0px 1px 200px 0px rgba(0, 0, 0, 0.2)",
  backgroundColor: "#ffffff",
  transition: {
    type: "spring",
    stiffness: 100,
  },
};

export const ProjectCard: React.FC<IProjectCard> = ({ title, onClick }) => {
  const [hoverButton, setHoverButton] = useState<boolean>(false);

  return (
    <Container
      whileHover={variantsHover}
      onHoverStart={() => {
        setHoverButton(true);
      }}
      onHoverEnd={() => {
        setHoverButton(false);
      }}
      onClick={() => {
        return onClick ? onClick() : undefined;
      }}
    >
      <LeftSection>
        <HeadingSection>
          <HeadingText>{title}</HeadingText>
        </HeadingSection>
      </LeftSection>

      <RightSection>
        <AnimatePresence>
          <Button
            animate={{
              backgroundColor: hoverButton ? "#f7f7f7" : "#ffffff",
              transition: {
                ease: "easeInOut",
                duration: 0.4,
              },
            }}
          >
            <ArrowIcon />
          </Button>
        </AnimatePresence>
      </RightSection>
    </Container>
  );
};
