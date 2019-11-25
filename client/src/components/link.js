import React from "react";
import styled from "styled-components";

import LinkIcon from "icons/link";

import { primaryBackgroundColor } from "style/palette";

import { apiUrl } from "config";

const Link = ({ tiny, url }) => (
  <StyledLink href={tiny} title={url}>
    <span>{`${apiUrl}/${tiny}`}</span>
    <LinkIcon />
    <span>{url}</span>
  </StyledLink>
);

const StyledLink = styled.a`
  max-width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  grid-template-columns: 6fr 1fr 6fr;
  justify-items: center;
  align-items: center;
  margin: 1rem 0;
  cursor: pointer;
  color: ${primaryBackgroundColor};
  font-size: calc(1.5rem + 0.15vw);
  font-size: calc(0.625rem + 0.5vw);
  font-weight: 900;
  text-decoration: none;

  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    text-decoration: underline transparent;
    transition: text-decoration-color 300ms;
  }

  & > span:first-child {
    direction: rtl;
    justify-self: flex-end;
  }
  & > span:last-child {
    justify-self: flex-start;
  }

  &:focus,
  &:hover {
    & > span {
      text-decoration-color: ${primaryBackgroundColor};
    }
  }
`;

export default Link;
