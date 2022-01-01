import styled from "styled-components";
import { motion } from "framer-motion";

export const CardC = styled(motion.div)`
  width: 400px;
  height: 500px;
  box-shadow: 0px 1px 100px 0px rgba(211, 197, 197, 0.315);
  background-color: #ffffff;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 25px;
  padding: 15px;
`;

export const Top = styled.div`
  width: 100%;
`;

export const Bottom = styled.div`
  width: 100%;
`;

export const IconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonSection = styled.div``;

export const Button = styled(motion.div)`
  width: 100%;
  height: 60px;
  background-color: #0095ff;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ButtonTitle = styled.h1`
  font-family: "DM Mono", sans-serif;
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 1.2;
  white-space: pre;
  text-transform: capitalize;
`;
