import { motion } from "framer-motion";
import styled from "styled-components";

export const IndexMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Cards = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  padding: 0 15%;
`;

export const Heading = styled(motion.div)`
  margin: 60px 0 130px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeadingTitle = styled(motion.h1)`
  font-weight: 500;
  font-family: "DM Mono", monospace;
  color: #000000;
  font-size: 30px;
  letter-spacing: 0px;
  line-height: 1.2;
  white-space: pre;
  text-transform: capitalize;
`;
