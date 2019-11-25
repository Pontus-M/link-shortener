import React from "react";
import styled from "styled-components";

import FadeIn from "animations/fadeIn";

import Link from "components/link";

const Links = ({ links }) => {
  const isFirstRender = React.useRef(true);
  const setIsFirstRender = value => (isFirstRender.current = value);
  React.useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <StyledLinks>
      {links.map(({ tiny, url }) => (
        <FadeIn key={tiny} withDelay={isFirstRender.current}>
          <Link tiny={tiny} url={url} />
        </FadeIn>
      ))}
    </StyledLinks>
  );
};

const StyledLinks = styled.div`
  width: 100%;
`;

export default Links;
