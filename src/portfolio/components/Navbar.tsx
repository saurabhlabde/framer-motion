import React from "react";

// component
import { Button } from "./Button";

// style
import {
  Nav,
  Logo,
  LogoName,
  LogoNameHighlight,
  Items,
  Item,
  ItemName,
  ItemNameHighlight,
  Contact,
} from "../styles/navbar";

export const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <LogoName>saurabh</LogoName>
        <LogoNameHighlight>.dev</LogoNameHighlight>
      </Logo>

      <Items>
        <Item>
          <ItemName>home</ItemName>
        </Item>

        <Item>
          <ItemName>about</ItemName>
        </Item>

        <Item>
          <ItemName>portfolio</ItemName>
        </Item>

        <Item>
          <ItemName>pricing</ItemName>
          <ItemNameHighlight>.</ItemNameHighlight>
        </Item>
      </Items>

      <Contact>
        <Button title="contact me" radius={100} />
      </Contact>
    </Nav>
  );
};
