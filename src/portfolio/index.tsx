import React from "react";
import { AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        <Content>
          <Navbar />
          <Heading />
          <Footer />
          <BackgroundIcon />
        </Content>
        <Background />
      </AnimatePresence>
    </Main>
  );
};
