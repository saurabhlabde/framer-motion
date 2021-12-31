import React from "react";

// component
import { Button } from "./Button";
import { ItemLink } from "./LinkItem";

// style
import { FooterF, Hire, SocialLink } from "../styles/footer";

// icon
import { GithubIcon } from "../icons/github";
import { DribbleIcon } from "../icons/dribble";
import { TwitterIcon } from "../icons/twitter";
import { MailIcon } from "../icons/mail";

const item = [
  {
    id: 1,
    Icon: GithubIcon,
  },
  {
    id: 2,
    Icon: DribbleIcon,
  },
  {
    id: 3,
    Icon: TwitterIcon,
  },
  {
    id: 4,
    Icon: MailIcon,
  },
];

export const Footer = () => {
  return (
    <FooterF>
      <Hire>
        <Button title="hire me" radius={0} height={60} paddingLeftRight={100} />
      </Hire>
      <SocialLink>
        {item.map((link) => {
          return <ItemLink props={link} />;
        })}
      </SocialLink>
    </FooterF>
  );
};
