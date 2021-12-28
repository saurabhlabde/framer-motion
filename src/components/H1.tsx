import React from "react";
import styled from "styled-components";

interface IH1 {
  title: string;
}

export const H1: React.FC<IH1> = ({ title }) => {
  const Heading = styled.div`
    margin: 50px 0 25px 0;
  `;

  const HeadingText = styled.h1`
    font-family: "DM Sans", sans-serif;
    white-space: pre;
    font-weight: 500;
    font-style: normal;
    color: #000000;
    font-size: 18px;
    letter-spacing: 0px;
    line-height: 1.2;
    text-transform: capitalize;
  `;

  return (
    <Heading>
      <HeadingText>{title}</HeadingText>
    </Heading>
  );
};
