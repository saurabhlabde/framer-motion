import styled from "styled-components";
import { motion } from "framer-motion";

export const Btn = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  overflow: visible;
  border: 3px solid #000000;
  padding: 0 25px;
  border-radius: 0px;
  position: relative;
  cursor: pointer;
`;

export const Background = styled(motion.div)`
  height: 100%;
  width: 0;
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Title = styled.h1`
  font-family: "DM Mono", sans-serif;
  flex-shrink: 0;
  white-space: pre;
  font-weight: 500;
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1;
  text-transform: capitalize;
  user-select: none;
  z-index: 1;
`;
