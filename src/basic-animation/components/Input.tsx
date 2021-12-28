import React from "react";
import { useAnimation, AnimatePresence } from "framer-motion";

// style
import { Outline, Input } from "../styles/input";

const outlineVariants = {
  visible: {
    backgroundColor: "rgba(0, 153, 255, 0.3)",
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
  hidden: {
    backgroundColor: "rgba(0, 153, 255,0)",
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

export const TextInput: React.FC = () => {
  const [inputFocus, setInputFocus] = React.useState<boolean>(false);

  const outlineAnimation = useAnimation();

  React.useEffect(() => {
    outlineAnimation.start(
      inputFocus ? outlineVariants.visible : outlineVariants.hidden
    );
  }, [inputFocus]);

  return (
    <Outline animate={outlineAnimation}>
      <Input
        placeholder="username"
        onFocus={() => {
          return setInputFocus(true);
        }}
        onBlur={() => {
          return setInputFocus(false);
        }}
      />
    </Outline>
  );
};
