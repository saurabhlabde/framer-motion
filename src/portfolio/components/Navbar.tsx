import React from "react";

// component
import { NavItem } from "./NavItem";
import { Button } from "./Button";

// style
import {
  Nav,
  Logo,
  LogoName,
  LogoNameHighlight,
  Items,
  Contact,
} from "../styles/navbar";

// data
import NavItemData from "../data/nav.json";

export const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <LogoName>saurabh</LogoName>
        <LogoNameHighlight>.dev</LogoNameHighlight>
      </Logo>

      <Items>
        {NavItemData.map((item) => {
          return <NavItem props={item} />;
        })}
      </Items>

      <Contact>
        <Button title="contact me" radius={100} />
      </Contact>
    </Nav>
  );
};
