import React from "react";

// style
import {
  CardC,
  Top,
  Bottom,
  IconSection,
  Button,
  ButtonSection,
  ButtonTitle,
} from "./Card.styled";

interface ICard {
  props: {
    id: number;
    Icon: ({}: any) => JSX.Element;
  };
}

export const Card: React.FC<ICard> = ({ props }) => {
  const { id, Icon } = props;
  return (
    <CardC
      key={`card-i-${id}`}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 100,
        },
      }}
    >
      <Top>
        <IconSection>
          <Icon />
        </IconSection>
      </Top>
      <Bottom>
        <ButtonSection>
          <Button
            whileHover={{
              scale: 1.03,
              transition: {
                type: "spring",
                stiffness: 100,
              },
            }}
          >
            <ButtonTitle>animate</ButtonTitle>
          </Button>
        </ButtonSection>
      </Bottom>
    </CardC>
  );
};
