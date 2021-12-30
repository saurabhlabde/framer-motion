import React from "react";

// style
import { IconBackground, Icon } from "../styles/backgroundIcon";

// icon
import { CatIcon } from "../icons/cat";

export const BackgroundIcon = () => {
  return (
    <IconBackground>
      <Icon>
        <CatIcon />
      </Icon>
    </IconBackground>
  );
};
