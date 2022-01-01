import React from "react";
import { items } from "./data/items";

// component
import { Card } from "./components/Card";

// style
import { IndexMain, Cards, Heading, HeadingTitle } from "./styles";

export const SvgAnimation: React.FC = () => {
  return (
    <IndexMain>
      <Heading>
        <HeadingTitle>svg animations</HeadingTitle>
      </Heading>

      <Cards>
        {items.map((item, i) => {
          return <Card key={`card-${i}`} props={item} />;
        })}
      </Cards>
    </IndexMain>
  );
};
