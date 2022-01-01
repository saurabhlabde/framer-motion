import React from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { lineVariants } from "./NavItem";

// component
import { Line } from "./Line";

// style
import {
  HeadingSection,
  HeadingNameSection,
  HeadingNameHighlighSection,
  SubHeadingNameSection,
  HeadingName,
  HeadingNameHighlight,
  SpanHeading,
  SpanSubHeading,
} from "../styles/heading";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const letterSubAni = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const AnimatedLetters = ({ title }: ILetters) => (
  <HeadingName
    className="row-title"
    variants={banner}
    initial="initial"
    animate="animate"
    style={{
      display: "inline-block",
      flexWrap: "nowrap",
      position: "relative",
    }}
  >
    {[...title].map((letter) => (
      <AnimatePresence>
        <motion.span
          className="row-letter"
          variants={letterAni}
          style={{
            display: "inline-block",
            flexWrap: "nowrap",
            position: "relative",
            fontWeight: "bold",
          }}
        >
          {letter}
        </motion.span>
      </AnimatePresence>
    ))}
  </HeadingName>
);

interface ILetters {
  title: any;
}

const AnimatedHighlighLetters = ({ title }: ILetters) => (
  <HeadingNameHighlight
    className="row-title"
    variants={banner}
    initial="initial"
    animate="animate"
    style={{
      display: "inline-block",
      flexWrap: "nowrap",
      position: "relative",
      fontWeight: 500,
    }}
  >
    {[...title].map((letter) => (
      <AnimatePresence>
        <motion.span
          className="row-letter"
          variants={letterAni}
          style={{
            display: "inline-block",
            flexWrap: "nowrap",
            position: "relative",
            fontWeight: "bold",
          }}
        >
          {letter}
        </motion.span>
      </AnimatePresence>
    ))}
  </HeadingNameHighlight>
);

const AnimatedSubLetters = ({ title }: ILetters) => (
  <SpanSubHeading
    className="row-title"
    variants={banner}
    initial="initial"
    animate="animate"
    style={{
      display: "inline-block",
      flexWrap: "nowrap",
      position: "relative",
    }}
  >
    {[...title].map((letter) => (
      <AnimatePresence>
        <motion.span
          className="row-letter"
          variants={letterSubAni}
          style={{
            display: "inline-block",
            flexWrap: "nowrap",
            position: "relative",
          }}
        >
          {letter}
        </motion.span>
      </AnimatePresence>
    ))}
  </SpanSubHeading>
);

export const Heading = () => {
  const [hover, setHover] = React.useState<boolean>(false);

  const lineAnimation = useAnimation();

  React.useEffect(() => {
    lineAnimation.start(hover ? lineVariants.visible : lineVariants.hidden);
  }, [hover]);

  const heading = "hello i'm".replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

  const headingHighLight = "saurabh".replace(/^(.)|\s+(.)/g, (c) =>
    c.toUpperCase()
  );

  const subHeading =
    "i'm freelance front end developer based in mumbai.".replace(
      /^(.)|\s+(.)/g,
      (c) => c.toUpperCase()
    );

  return (
    <AnimatePresence>
      <HeadingSection>
        <HeadingNameSection>
          <AnimatedLetters title={heading} />
        </HeadingNameSection>

        <HeadingNameHighlighSection
          onMouseEnter={() => {
            return setHover(true);
          }}
          onMouseLeave={() => {
            return setHover(false);
          }}
        >
          <HeadingNameHighlight>
            <AnimatedHighlighLetters title={headingHighLight} />
          </HeadingNameHighlight>

          <Line
            height={8}
            backgroundColor="#ffffff"
            bottom={-70}
            animation={lineAnimation}
          />
        </HeadingNameHighlighSection>

        <SubHeadingNameSection>
          <AnimatedSubLetters title={subHeading} />
        </SubHeadingNameSection>
      </HeadingSection>
    </AnimatePresence>
  );
};
