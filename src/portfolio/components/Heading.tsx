import React from "react";

// style
import {
  HeadingSection,
  HeadingNameSection,
  HeadingNameHighlight,
  SubHeadingNameSection,
  HeadingName,
  SubHeadingName,
} from "../styles/heading";

export const Heading = () => {
  return (
    <HeadingSection>
      <HeadingNameSection>
        <HeadingName>hello i'm</HeadingName>
        <HeadingNameHighlight>saurabh</HeadingNameHighlight>
      </HeadingNameSection>

      <SubHeadingNameSection>
        <SubHeadingName>
          i'm freelance front end developer based in mumbai.
        </SubHeadingName>
      </SubHeadingNameSection>
    </HeadingSection>
  );
};
