import { memo } from 'react';
import { GithubIcon } from '../../assets/Icons';
import { FooterWrapper } from "./FooterStyles";

export const Footer = memo(({ inHomePage }) => {
  console.log('footer');

  return (
    <FooterWrapper inHomePage={inHomePage}>
      <h3>
        Powered by{" "}
        <a href="https://github.com/Luciano-Scalfone" target="_blank">
          Luciano Scalfone <GithubIcon />
        </a>{" "}
        and{" "}
        <a href="https://github.com/Lucas-kechi" target="_blank">
          Lucas Kechi <GithubIcon />
        </a>
      </h3>
    </FooterWrapper>
  );
});
