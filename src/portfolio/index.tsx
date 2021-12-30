import React from "react";

// component
import { Navbar } from "./components/Navbar";
import { Heading } from "./components/Heading";
import { Footer } from "./components/Footer";
import { BackgroundIcon } from "./components/BackgroundIcon";

// style
import { Main, Background, Content } from "./styles/index";

export const Portfolio = () => {
  return (
    <Main>
      <Background />
      <Content>
        <Navbar />
        <Heading />
        <Footer />
        <BackgroundIcon />
      </Content>
    </Main>
  );
};
