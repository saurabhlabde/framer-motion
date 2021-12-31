import React from "react";
import { useAnimation } from "framer-motion";

// component
import { Line } from "./Line";

// style
import { Item, ItemName, ItemNameHighlight } from "../styles/navItem";

interface INavItem {
  props: {
    id: number;
    title: string;
    highlightTitle?: string | null;
    href: string;
  };
}

export const lineVariants = {
  hidden: {
    width: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  visible: {
    width: "100%",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const NavItem: React.FC<INavItem> = ({ props }) => {
  const [hover, setHover] = React.useState<boolean>(false);

  const lineAnimation = useAnimation();

  React.useEffect(() => {
    lineAnimation.start(hover ? lineVariants.visible : lineVariants.hidden);
  }, [hover]);

  const { id, title, highlightTitle, href } = props;

  return (
    <Item
      id={`item_navbar_${id}`}
      onMouseEnter={() => {
        return setHover(true);
      }}
      onMouseLeave={() => {
        return setHover(false);
      }}
    >
      <ItemName>{title}</ItemName>

      {highlightTitle && (
        <ItemNameHighlight>{highlightTitle}</ItemNameHighlight>
      )}

      <Line
        height={2}
        backgroundColor="#ffc400"
        bottom={10}
        animation={lineAnimation}
      />
    </Item>
  );
};
