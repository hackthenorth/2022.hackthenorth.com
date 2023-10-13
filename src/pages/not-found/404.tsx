import React from "react";
import { QuestionGoose } from "src/assets/img";
import { Navbar } from "src/components";
import {
  ContentWrapper,
  GradientText,
  Layout,
  SectionWrapper,
} from "src/components/base";
import { TWShared, TWText } from "src/styles";
import { mediaQueries } from "src/utils";
import tw, { styled } from "twin.macro";

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <SectionWrapper>
        <ContentWrapper>
          <Wrapper>
            <TextWrapper>
              <h1 css={[TWText.h1]}>
                <GradientText tw="bg-gradient-to-r from-accent-green via-accent-pink to-accent-yellow">
                  Whoops!
                </GradientText>
              </h1>
              <h1 css={[TWText.h1]}>
                looks like this page doesn&#8217;t exist...
              </h1>
              <a
                css={[TWText.largeBodyBold, TWShared.hover]}
                href="https://hackthenorth.com"
                tw="mt-24 underline"
              >
                Back to homepage →
              </a>
            </TextWrapper>
            <GooseWrapper>
              <img src={QuestionGoose} tw="h-full m-auto" alt="" />
            </GooseWrapper>
          </Wrapper>
        </ContentWrapper>
      </SectionWrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;

  ${mediaQueries.tablet} {
    place-items: center;
    flex-direction: column;
    padding-top: 20vh;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 70%;

  ${mediaQueries.tablet} {
    place-items: center;
    text-align: center;
    width: 100%;
  }
`;

const GooseWrapper = styled.div`
  width: 30%;

  ${mediaQueries.tablet} {
    width: 100%;
  }
`;

export default NotFoundPage;
