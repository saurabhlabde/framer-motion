import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled.div`
  width: 358px;
  height: auto;
  padding: 10px;
  border-radius: 27px;
  background-color: #000000;
`;

// top
export const TopSection = styled.div`
  position: relative;
`;

export const MediaSection = styled(motion.div)`
  width: 100%;
  max-height: 500px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 18px;
`;

// bottom
export const BottomSection = styled.div`
  margin-top: 3px;
  /* padding-bottom: 10px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserProfile = styled.div`
  width: 25px;
  height: 25px;
  aspect-ratio: 1 / 1;
`;

export const UserProfileImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  margin-left: 10px;
`;

export const Name = styled.h1`
  white-space: pre;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 1.2;
`;

export const LCSSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Item = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  margin: 0 2.5px;
  cursor: pointer;
`;

// pop up

export const PopUp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const IconSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
