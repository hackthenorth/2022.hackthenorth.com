import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Scrollspy from "react-scrollspy";
import { DidWeMissAnything, Navbar } from "src/components";
import { Layout } from "src/components/base";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/PageWrapper";
import { NAVBAR_HEIGHT_PX } from "src/components/Navbar/constants";
import { TWShared, TWText } from "src/styles";
import { mediaQueries } from "src/utils";
import { useScrollDirection } from "src/utils";
import { ScrollDirection } from "src/utils/hooks/useScrollDirection";
import tw, { styled, theme } from "twin.macro";
import "styled-components/macro";

interface InfoPageProps {
  sections: { id: string; title: string }[];
  content: string;
  title: string;
}

const Heading: React.FC<{
  level: number;
  children: React.ReactElement<{ value: string }>[];
}> = (props) => {
  return React.createElement(
    `h${props.level}`,
    {
      id: props.children[0].props.value
        .split(" ")
        .map((s: string) => s.toLowerCase())
        .join("-"),
    },
    props.children
  );
};

const Sidebar = styled.div<{ shiftUp: boolean }>`
  display: flex;
  width: 150px;
  top: 100px;
  position: sticky;
  align-self: flex-start;
  margin-right: 75px;

  transition: transform 250ms;
  transform: translateY(
    ${({ shiftUp }) => (shiftUp ? -NAVBAR_HEIGHT_PX : 0)}px
  );

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const StyledLink = styled.a<{ isBlue: boolean }>`
  ${tw`text-high-emphasis`};
  font-weight: 500;
  margin-bottom: 1em;
  text-decoration: underline;
  color: ${({ isBlue }) =>
    isBlue ? theme`colors.primary.blue1` : theme`colors.white`};
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const Content = styled.div<{ children: React.ReactNode }>`
  ${TWText.body}
  h1,
  h2,
  h3,
  h4 {
    ${tw`font-heading`}
  }
  h1 {
    ${TWText.h1}
  }
  h2 {
    ${TWText.h2}
    padding-top: 50px;
    padding-bottom: 20px;
  }
  h3 {
    ${TWText.h3}
    padding-top: 20px;
  }
  p {
    padding: 10px 0;
  }
  hr {
    border-style: none;
    height: 1px;
    margin-top: 3rem;
  }
  a {
    ${tw`text-high-emphasis`};
    ${TWShared.hover}
    text-decoration: underline;
  }
  ol,
  ul {
    list-style: initial;
    margin: initial;
    padding: revert;
  }
  ${mediaQueries.tablet} {
    margin-left: 0;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: justify;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const InfoPage: React.FC<InfoPageProps> = ({ title, content, sections }) => {
  const scrollDirection = useScrollDirection();
  const [isScrolledDown, setScrolledDown] = useState(false);
  const [curSection, setCurSection] = useState<string>();

  /**
   * Change the appearance of the nav bar when a user
   * scrolls down the page.
   */
  const checkScrolledDown = () => {
    const hasScrolledDown = window.scrollY > 0;
    setScrolledDown(hasScrolledDown);
  };

  const debouncedCheckScrollDown = debounce(checkScrolledDown, 250);

  useEffect(() => {
    window.addEventListener("scroll", debouncedCheckScrollDown);
    checkScrolledDown();

    return () => window.removeEventListener("scroll", debouncedCheckScrollDown);
  }, [debouncedCheckScrollDown]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onScrollSpyUpdate = (el: HTMLElement) =>
    setCurSection((el as HTMLElement)?.id); // types for react-scrollspy are incorrect

  return (
    <Layout>
      <Navbar notMainPage />
      <SectionWrapper tw="mt-120">
        <ContentWrapper>
          <Flex>
            <div>
              <Sidebar
                shiftUp={
                  isScrolledDown && scrollDirection === ScrollDirection.DOWN
                }
              >
                <Scrollspy
                  offset={-80}
                  items={sections.map(({ id }) => id)}
                  onUpdate={onScrollSpyUpdate}
                  componentTag={FlexColumn}
                  currentClassName="active"
                >
                  {sections
                    .slice()
                    .reverse()
                    .map(({ id, title }) => (
                      <StyledLink
                        key={id}
                        href={`#${id}`}
                        tw="mb-32"
                        isBlue={curSection === id}
                      >
                        {title}
                      </StyledLink>
                    ))}
                </Scrollspy>
              </Sidebar>
            </div>
            <div tw="mb-100">
              <h1 css={[TWText.h1]} tw="mb-48">
                {title}
              </h1>
              <Content tw="mb-100">
                <ReactMarkdown
                  source={content}
                  renderers={{ heading: Heading }}
                />
              </Content>
              <DidWeMissAnything />
            </div>
          </Flex>
        </ContentWrapper>
      </SectionWrapper>
    </Layout>
  );
};

export default InfoPage;
