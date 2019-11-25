import React from "react";
import styled from "styled-components";

const FadeInOutWrapper = styled.div`
  transition: opacity 1300ms;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;
const FadeInOut = ({ children, visible }) => {
  return <FadeInOutWrapper visible={visible}>{children}</FadeInOutWrapper>;
};

export default FadeInOut;
