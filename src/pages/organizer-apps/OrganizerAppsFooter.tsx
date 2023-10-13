import React from "react";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { TWText } from "src/styles";
import "twin.macro";

const OrganizerAppsFooter: React.FC = () => (
  <SectionWrapper>
    <ContentWrapper tw="max-w-screen-xl flex justify-between mt-72 tb:mt-64 py-32 tb:py-20 border-t border-high-emphasis lm:(items-start) relative z-10">
      <a href="/" css={[TWText.body]}>
        Back to homepage →
      </a>
      <a href="/code-of-conduct" css={[TWText.body]}>
        Code of Conduct
      </a>
    </ContentWrapper>
  </SectionWrapper>
);
export default OrganizerAppsFooter;
