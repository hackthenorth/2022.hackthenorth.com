import React from "react";
import { StaticE5 } from "src/assets/img";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { styled } from "twin.macro";
import "twin.macro";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin-right: -25%;
  z-index: -10;
`;

const Spacer = styled.div`
  width: 100vw;
  height: 66vw;
`;

const OrganizerAppsHero: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");

  return (
    <>
      <SectionWrapper>
        {isTabletOrSmaller && (
          <>
            <div tw="w-screen absolute">
              <img src={StaticE5} alt="Waterloo's Engineering 5 Building" />
            </div>
            <Spacer />
          </>
        )}
        <ContentWrapper tw="max-w-screen-xl flex lm:(items-start) relative z-10">
          <div tw="overflow-hidden max-width[55%] mt-128 md:(max-width[65%]) tb:max-w-full tb:mt-0">
            <h2 css={[TWText.h2]} tw="mt-16 mb-48">
              Hack the North 2023
              <br />
              Organizing Team Application
            </h2>
            <p css={[TWText.body]}>
              Hey there! 👋
              <br />
              <br />
              Thanks for checking out the Hack the North 2023 organizer
              applications. This September, we&rsquo;ll be hosting our 10th
              iteration of Hack the North, in-person and better than ever! 🎉
              <br />
              <br />
              These roles are open to any student attending a post-secondary
              institution in Waterloo, and will be located in Waterloo during
              either the Winter (January - April) or Spring (May - August) terms
              this year. Your program, age, gender, or other personal factors
              will not be factored in during hiring decisions.
              <br />
              <br />
              All organizers are required to attend weekly All-Hands meetings
              and regular weekly/bi-weekly team-specific meetings. The average
              time commitment for team members is 7-10 hours per week, however,
              the exact time commitment may vary week-to-week depending on the
              role. Feel free to apply to as many roles as you&rsquo;re
              interested in, but please note that each hired organizer can only
              take on one role.
              <br />
              <br />
              Don&rsquo;t worry if you don&rsquo;t meet all the role
              requirements! We&rsquo;re looking for people who are eager to
              learn and have a strong desire to contribute to the team.
              <br />
              <br />
              <b>
                Organizer applications close on February 10, 2023 at 11:59pm
                EST.
              </b>
              <br />
              All applicants will hear back with next steps by February 15 at
              the latest.
              <br />
              <br />
              Best of luck! If you have any questions or concerns, don&rsquo;t
              hesitate to reach out to us at{" "}
              <a
                href="mailto:hello@hackthenorth.com"
                target="_blank"
                rel="noreferrer"
              >
                hello@hackthenorth.com
              </a>
              ! 😊
            </p>
          </div>
        </ContentWrapper>
      </SectionWrapper>
      {!isTabletOrSmaller && (
        <Wrapper>
          <img src={StaticE5} alt="Waterloo's Engineering 5 Building" />
        </Wrapper>
      )}
    </>
  );
};

export default OrganizerAppsHero;
