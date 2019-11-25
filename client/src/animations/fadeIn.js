import React from "react";
import styled, { keyframes } from "styled-components";

const animationDurationMS = 400;
const animationDelayMS = 100;

function makeFadeInChainCounter() {
  let count = 0;
  return function fadeInChainCounter() {
    return ++count * animationDelayMS;
  };
}
const fadeInChainCounter = makeFadeInChainCounter();

const FadeInWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  opacity: 0;
  animation:
    forwards
    ${animationDurationMS}ms
    ${({ delay }) => delay}ms
    ${keyframes`
      to {
        opacity: 1
      }
    `};

  ${({ css }) => css};
`;

const FadeIn = ({ children, css = "", withDelay = true }) => (
  <FadeInWrapper delay={withDelay ? fadeInChainCounter() : 0} css={css}>
    {children}
  </FadeInWrapper>
);

export default FadeIn;
