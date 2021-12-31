import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 25px;
  cursor: pointer;
  position: relative;
`;

export const IName = styled.h1`
  font-family: "DM Mono", monospace;
  white-space: pre;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1;
  z-index: 1;
`;

export const ItemName = styled(IName)`
  color: #000000;
  text-transform: capitalize;
`;

export const ItemNameHighlight = styled(IName)`
  color: #ffae00;
`;
