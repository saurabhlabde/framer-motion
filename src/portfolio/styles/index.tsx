import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f1eee8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
`;
