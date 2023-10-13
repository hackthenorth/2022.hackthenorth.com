import React from "react";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import Playground from "src/sections/Playground";
import { TWText } from "src/styles";
import "twin.macro";

const PlaygroundPage: React.FC = () => (
  <SectionWrapper tw="bg-background-blue-gray">
    <ContentWrapper>
      <h1 css={[TWText.title]} tw="mb-48 mt-96">
        Design System
      </h1>
      <Playground />
    </ContentWrapper>
  </SectionWrapper>
);

export default PlaygroundPage;
