import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #f7f7f7;
  box-shadow: 0px 1px 200px 0px rgba(0, 0, 0, 0);

  border-radius: 25px;
  width: 565px;
  height: auto;
  justify-content: space-between;
  height: 65px;
  padding: 5px 10px 5px 25px;
  margin-bottom: 15px;
`;

export const LeftSection = styled.div``;

export const RightSection = styled.div``;

export const HeadingSection = styled.div`
  user-select: none;
`;

export const HeadingText = styled.h1`
  white-space: pre;
  font-weight: 500;
  font-style: normal;
  font-family: "DM Sans", sans-serif;
  color: #000000;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-transform: capitalize;
`;

export const Button = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 45px;
  height: 45px;
  aspect-ratio: 1 / 1;
  border-radius: 100px;
`;
