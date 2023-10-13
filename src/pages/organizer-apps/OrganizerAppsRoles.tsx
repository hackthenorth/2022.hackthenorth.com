import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronIcon } from "src/assets/icons";
import { Button } from "src/components/base";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { TWShared, TWText } from "src/styles";
import "twin.macro";
import { mediaQueries, useDeviceSize } from "src/utils";
import tw, { styled } from "twin.macro";
import "styled-components/macro";

import { ROLES, RoleCategory, ROLE_CATEGORIES } from "./constants";

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

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath transform='rotate(180 10 10)' fill-rule='evenodd' clip-rule='evenodd' d='M5.19986 15.4996C5.19986 15.1924 5.31746 14.8852 5.55146 14.6512L11.5515 8.65122C12.0207 8.18202 12.7791 8.18202 13.2483 8.65122L19.2483 14.6512C19.7175 15.1204 19.7175 15.8788 19.2483 16.348C18.7791 16.8172 18.0207 16.8172 17.5515 16.348L12.3999 11.1964L7.24826 16.348C6.77906 16.8172 6.02066 16.8172 5.55146 16.348C5.31746 16.114 5.19986 15.8068 5.19986 15.4996Z' fill='white' fill-opacity='0.87'/%3E%3C/svg%3E");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 65%, 0 0;
`;

const linkRenderer = (props: any) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
};

const OrganizerAppsRoles: React.FC = () => {
  const [selectedRoleCategory, setSelectedRoleCategory] = useState<string>(
    RoleCategory.ALL
  );

  const isMediumOrSmaller = useDeviceSize("medium");

  return (
    <SectionWrapper>
      <ContentWrapper
        id="roles"
        tw="max-w-screen-xl flex flex-col lm:(items-start) relative z-10"
      >
        {isMediumOrSmaller ? (
          <Select
            css={[TWText.largeBodyBold]}
            tw="bg-background-elevation border-none block w-full px-20 py-16 mt-64 rounded-8 focus:border-background-elevation"
            value={selectedRoleCategory}
            onChange={(event) => setSelectedRoleCategory(event.target.value)}
          >
            {Object.entries(ROLE_CATEGORIES).map(([id, roleCategory]) => {
              return (
                <option key={id} value={id}>
                  {roleCategory.label}
                </option>
              );
            })}
          </Select>
        ) : (
          <div tw="flex justify-start w-screen max-w-[1202px] gap-x-20 mt-48 tb:gap-x-0 h-80">
            {Object.entries(ROLE_CATEGORIES).map(([id, roleCategory]) => {
              return id === selectedRoleCategory ? (
                <Button key={id} variant="secondary">
                  <p css={[TWText.bodyBold]} tw="px-16 py-8">
                    {roleCategory.label}
                  </p>
                </Button>
              ) : (
                <div
                  key={id}
                  tw="self-center mx-16 px-2 cursor-pointer"
                  onClick={() => setSelectedRoleCategory(id)}
                  onKeyDown={() => setSelectedRoleCategory(id)}
                  role="button"
                  tabIndex={0}
                >
                  <p
                    tw="whitespace-nowrap"
                    css={[TWText.bodyBold, TWShared.hover]}
                  >
                    {roleCategory.label}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <div tw="flex flex-col">
          {Object.entries(
            ROLE_CATEGORIES[selectedRoleCategory as RoleCategory].roles
          ).map(([id, roleId]) => {
            const role = ROLES[roleId];
            return (
              <div key={id} tw="flex flex-col mt-72 tb:mt-48">
                <div tw="flex tb:flex-col tb:gap-y-24 items-center justify-between mb-32 tb:mb-8">
                  <div tw="flex justify-start tb:w-full">
                    <h2 css={[TWText.h2]}>{role.label}</h2>
                  </div>
                  <Button key={id}>
                    <a
                      href={role.link}
                      target="_blank"
                      css={[TWText.bodyBold]}
                      tw="px-20 py-8"
                      rel="noreferrer"
                    >
                      Apply for this role
                    </a>
                  </Button>
                </div>
                <div tw="mb-24 tb:mb-0">
                  <p css={[TWText.body]}>
                    <Content>
                      <ReactMarkdown
                        source={role.description}
                        renderers={{ link: linkRenderer }}
                      />
                    </Content>
                  </p>
                </div>
                {mediaQueries.tablet ? (
                  <div tw="flex flex-col">
                    <h3 css={[TWText.largeBody]} tw="mt-12 mb-4">
                      Opportunities
                    </h3>
                    <Content>
                      <ReactMarkdown
                        source={role.opportunities}
                        renderers={{ link: linkRenderer }}
                      />
                    </Content>
                    <h3 css={[TWText.largeBody]} tw="mt-12 mb-4">
                      Skills
                    </h3>
                    <Content>
                      <ReactMarkdown source={role.skills} />
                    </Content>
                  </div>
                ) : (
                  <div tw="flex">
                    <div tw="flex flex-col flex-1 w-0">
                      <h3 css={[TWText.h3]} tw="mb-12">
                        Opportunities
                      </h3>
                      <Content>
                        <ReactMarkdown
                          source={role.opportunities}
                          renderers={{ link: linkRenderer }}
                        />
                      </Content>
                    </div>
                    <div tw="flex flex-col flex-1 w-0">
                      <h3 css={[TWText.h3]} tw="mb-12">
                        Skills
                      </h3>
                      <Content>
                        <ReactMarkdown
                          source={role.skills}
                          renderers={{ link: linkRenderer }}
                        />
                      </Content>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div tw="mt-72 tb:mt-48">
          <Button>
            <a
              href="#roles"
              css={[TWText.bodyBold]}
              tw="px-20 py-8"
              rel="noreferrer"
            >
              Back to top of roles
            </a>
          </Button>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default OrganizerAppsRoles;
