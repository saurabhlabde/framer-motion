import React from "react";
import { AnimatePresence, useAnimation } from "framer-motion";

// style
import { LinkItem } from "../styles/linkItem";

interface IItemLink {
  props: {
    id: number;
    Icon: any;
  };
}

export const iconVariants = {
  initial: { pathLength: 1, opacity: 1 },
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const ItemLink: React.FC<IItemLink> = ({ props }) => {
  const [hover, setHover] = React.useState<boolean>(false);

  const iconAnimation = useAnimation();

  React.useEffect(() => {
    iconAnimation.start(hover ? iconVariants.visible : iconVariants.initial);
  }, [hover]);

  const { id, Icon } = props;
  return (
    <LinkItem
      key={`link-item-${id}`}
      onMouseEnter={() => {
        return setHover(true);
      }}
      onMouseLeave={() => {
        return setHover(false);
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 100,
        },
      }}
    >
      <AnimatePresence>
        <Icon animation={iconAnimation} />
      </AnimatePresence>
    </LinkItem>
  );
};
