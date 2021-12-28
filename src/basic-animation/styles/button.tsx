import styled from "styled-components";

import { motion } from "framer-motion";

export const Border = styled(motion.div)`
  background-color: rgba(51, 170, 255, 0);

  width: 358px;
  height: 58px;
  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(motion.div)`
  background-color: #33aaff;

  width: 350px;
  height: 50px;
  border-radius: 21px;
  box-shadow: 0px 1px 75px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TitleSection = styled.div``;

export const Title = styled.h1`
  text-transform: capitalize;
  white-space: pre;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.2;
  user-select: none;

  color: #ffffff;
`;
