import React from "react";
import styled, { css, keyframes } from "styled-components";

import {
  primaryBackgroundColor,
  secondaryTextColor
} from "style/palette";

import image from "icons/image.png";

const Footer = () => (
  <StyledFooter>
    we've go<span id="a">a</span>t this.
    <span id="b">?</span>
    <img alt="" src={image} />
  </StyledFooter>
);

const firstDurationMS = 500;
const firstDelayMS = 400;
const secondDurationMS = firstDurationMS;
const secondDelayMS = firstDurationMS + firstDelayMS;
const thirdDurationMS = 1000;
const thirdDelayMS = 1600;

const endImg = css`
  top: -300%;
  transform: rotateY(180deg) rotateX(0deg) rotateZ(-20deg);
`;
const enterImg = keyframes`
  40% { ${endImg} }
  80% { ${endImg} }
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  background-color: ${primaryBackgroundColor};
  color: ${secondaryTextColor};
  text-align: center;
  font-weight: 900;
  padding: 0.5rem 0;
  cursor: help;
  position: relative;
  user-select: none;

  & #a {
    display: inline-block;
    width: 0;
    overflow: hidden;
    line-height: 0.8;
    transition: width ${firstDurationMS}ms ${firstDelayMS}ms;
    width: 0;
  }
  &:hover #a {
    width: 9.31px;
  }
  & #b {
    display: inline-block;
    transform: translate(-72%, -1%) rotateY(-90deg) rotateX(0deg) rotateZ(0deg);
    transform-origin: bottom;
    transition: transform ${secondDurationMS}ms ${secondDelayMS}ms;
  }
  &:hover #b {
    transform: translate(-72%, -1%) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
  }

  & > img {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: rotateY(180deg) rotateX(90deg) rotateZ(0deg);
  }
  &:hover > img {
    display: block;
    animation: ${enterImg} ${thirdDurationMS}ms ${thirdDelayMS}ms forwards;
  }
`;

export default Footer;
