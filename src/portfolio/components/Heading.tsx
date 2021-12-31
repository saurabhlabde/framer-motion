import React from "react";
import { useAnimation } from "framer-motion";
import { lineVariants } from "./NavItem";

// component
import { Line } from "./Line";

// style
import {
  HeadingSection,
  HeadingNameSection,
  HeadingNameHighlight,
  HeadingNameHighlighSection,
  SubHeadingNameSection,
  HeadingName,
  SubHeadingName,
  SpanHeading,
  SpanSubHeading,
} from "../styles/heading";

export const Heading = () => {
  const [hover, setHover] = React.useState<boolean>(false);

  const lineAnimation = useAnimation();

  React.useEffect(() => {
    lineAnimation.start(hover ? lineVariants.visible : lineVariants.hidden);
  }, [hover]);

  const heading = "hello i'm".split("");

  const headingHighLight = "saurabh".split("");

  const subHeading =
    " i'm freelance front end developer based in mumbai.".split("");

  return (
    <HeadingSection>
      <HeadingNameSection>
        <HeadingName>
          {heading.map((str, i) => {
            return <SpanHeading key={`span-${i}-h`}>{str}</SpanHeading>;
          })}
        </HeadingName>

        <HeadingNameHighlighSection
          onMouseEnter={() => {
            return setHover(true);
          }}
          onMouseLeave={() => {
            return setHover(false);
          }}
        >
          <HeadingNameHighlight>
            {headingHighLight.map((str, i) => {
              return <SpanHeading key={`span-${i}-hh`}>{str}</SpanHeading>;
            })}
          </HeadingNameHighlight>

          <Line
            height={8}
            backgroundColor="#ffffff"
            bottom={-70}
            animation={lineAnimation}
          />
        </HeadingNameHighlighSection>
      </HeadingNameSection>

      <SubHeadingNameSection>
        <SubHeadingName>
          {subHeading.map((str, i) => {
            return <SpanSubHeading key={`span-${i}-sh`}>{str}</SpanSubHeading>;
          })}
        </SubHeadingName>
      </SubHeadingNameSection>
    </HeadingSection>
  );
};
