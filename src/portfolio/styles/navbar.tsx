import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  padding-bottom: 0px;
`;

// logo

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoName = styled.h1`
  font-family: "DM Mono", sans-serif;
  text-transform: capitalize;
`;

export const LogoNameHighlight = styled.h1`
  font-family: "DM Mono", sans-serif;
  color: #ffae00;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 25px;
  cursor: pointer;
`;

export const IName = styled.h1`
  font-family: "DM Mono", monospace;
  white-space: pre;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1;
`;

export const ItemName = styled(IName)`
  color: #000000;
  text-transform: capitalize;
`;

export const ItemNameHighlight = styled(IName)`
  color: #ffae00;
`;

export const Contact = styled.div``;
