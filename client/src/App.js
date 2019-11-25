import React, { useState } from "react";
import styled from "styled-components";

import Header from "components/header";
import Error from "components/error";
import Button from "components/button";
import Input from "components/input";
import Links from "components/links";
import Footer from "components/footer";

import { postUrl } from "services/api"
import { validateUrl } from "utils/validation";
import {
  saveLinksToLocalStorage,
  getLinksFromLocalStorage
} from "utils/storage";

import { apiUrl } from "config";

import { secondaryBackgroundColor } from "style/palette";

const App = () => {
  const [links, setLinks] = useState(getLinksFromLocalStorage() || []);

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const [error, setError] = useState(null);
  const resetError = () => setError(null);

  const handleInputChange = e => {
    setInput(e.target.value);
    resetError();
  };

  const generateLink = async e => {
    e.preventDefault();

    if (!input) {
      return setError("error, input empty.");
    }
    
    const inputIsValidUrl = validateUrl(input);
    if(!inputIsValidUrl) {
      return setError("error, that doesn't look like a url.");
    }

    const response = await postUrl(input);
    if (!response.ok) {
      return setError("error, server says no.");
    }
    const { tiny } = JSON.parse(await response.json());

    const newLinks = [
      {
        url: input,
        tiny
      },
      ...links.slice(0, 9)
    ];

    setOutput(`${apiUrl}/${tiny}`);
    setInput("");
    setLinks(newLinks);
    saveLinksToLocalStorage(newLinks);
    resetError();
  };

  return (
    <StyledApp>
      <Header />

      <StyledContent>
        <StyledSection>
          <Error message={error}></Error>
        </StyledSection>

        <InputSection onSubmit={generateLink}>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="example.com"
            autoFocus
          />

          <Button />

          <Input
            value={output}
            placeholder={`${apiUrl}/133337`}
            onClick={e => e.target.select()}
            onChange={() => {}}
          />
        </InputSection>

        <StyledSection>
          <Links links={links}></Links>
        </StyledSection>
      </StyledContent>

      <Footer />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background-color: ${secondaryBackgroundColor};
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;

  svg {
    fill: currentColor;
  }
`;
const StyledContent = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;
const StyledSection = styled.section`
  width: 100%;
  margin: 1rem 0;
`;
const InputSection = styled.form`
  ${StyledSection};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default App;
