import React from "react";

// component
import { Button } from "./Button";

// style
import { FooterF, Hire, LinkItem, SocialLink } from "../styles/footer";

// icon
import { GithubIcon } from "../icons/github";
import { DribbleIcon } from "../icons/dribble";
import { TwitterIcon } from "../icons/twitter";
import { MailIcon } from "../icons/mail";

export const Footer = () => {
  return (
    <FooterF>
      <Hire>
        <Button title="hire me" radius={0} height={60} paddingLeftRight={100} />
      </Hire>
      <SocialLink>
        <LinkItem>
          <GithubIcon />
        </LinkItem>

        <LinkItem>
          <DribbleIcon />
        </LinkItem>

        <LinkItem>
          <TwitterIcon />
        </LinkItem>

        <LinkItem>
          <MailIcon />
        </LinkItem>
      </SocialLink>
    </FooterF>
  );
};
