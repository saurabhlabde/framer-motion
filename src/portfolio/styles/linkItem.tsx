import styled from "styled-components";
import { motion } from "framer-motion";

export const LinkItem = styled(motion.div)`
  background-color: #000000;
  border-radius: 100px;
  margin: 0 15px;
  height: 50px;
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
