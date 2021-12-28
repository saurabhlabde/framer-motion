import { motion } from "framer-motion";
import styled from "styled-components";

export const Outline = styled(motion.div)`
  width: 358px;
  height: 58px;
  border-radius: 21px;
  padding: 4px;
  background-color: transparent;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.4;
  color: rgb(51, 51, 51);
  border-radius: 18px;
  border: none;
  outline: none;
  padding: 15px;
  background-color: #f0ebeb;
  box-shadow: 0px 1px 75px 0px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: rgb(107, 102, 102);
    font-weight: 400;
    text-transform: capitalize;
  }
`;
