import { motion } from "framer-motion";
import styled from "styled-components";

export const HeadingSection = styled(motion.div)`
  margin-top: 0px;
  padding-left: 50px;
  cursor: default;
  margin-top: -20px;
`;

export const HeadingNameSection = styled(motion.div)`
  overflow: hidden;
`;

export const HeadingNameHighlighSection = styled.div`
  position: relative;
  width: 55%;
  overflow: hidden;
`;

export const HName = styled(motion.span)`
  font-family: "DM Sans", sans-serif;

  white-space: pre;
  font-weight: 700;
  font-style: normal;
  color: #3a3636;
  font-size: 250px;
  letter-spacing: 0px;
  line-height: 1;
  cursor: default;
`;

export const HeadingName = styled(HName)`
  color: #3a3636;
`;

export const HeadingNameHighlight = styled(HName)`
  color: #ffae00;
  position: relative;
  height: 100%;
  z-index: 1;
`;

export const SpanHeading = styled(motion.span)`
  font-weight: bold;
`;

export const SpanSubHeading = styled(HName)`
  font-family: "DM Sans", sans-serif;
  color: #9e9a9a;
  white-space: pre;
  font-weight: 500;
  font-size: 50px;
  letter-spacing: 0px;
  line-height: 0.9;
  font-weight: 500;
`;

export const SubHeadingNameSection = styled(motion.div)`
  margin-top: 100px;
  /* overflow: hidden; */
`;
