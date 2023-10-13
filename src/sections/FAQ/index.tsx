import React from "react";
import { Blob3, LeftGear, Spark, Star3, Star4 } from "src/assets/img";
import { AccordionGroup, Glow, UnstyledLink } from "src/components/base";
import { ContentWrapper, SectionWrapper } from "src/components/base";
import { SectionId } from "src/constants/section";
import { LEFT_QUESTION_SET, RIGHT_QUESTION_SET } from "src/copy/FAQ";
import { TWGradient, TWShared, TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

const StyledAccordionGroup = styled(AccordionGroup)`
  flex: 1;
`;

const FAQ: React.FC = () => {
  const isMediumOrSmaller = useDeviceSize("medium");
  const screenSize = useDeviceSize();
  if (screenSize && screenSize.length == 0) {
    return <div></div>;
  }

  return isMediumOrSmaller !== undefined ? (
    // may need to add overflow-x-hidden to SectionWrapper
    <SectionWrapper id={SectionId.FAQ} tw="h-full relative">
      <div tw="h-196 tb:h-256"></div>
      <img
        alt=""
        loading="lazy"
        src={Spark}
        tw="absolute width[360px] height[380px] top-0 right[3%] lg:(top[-50px] right[-90px]) tb:(top[-12px] right[-90px] scale[0.75]) lm:(top[48px] right[-20px] width[150px])"
      />
      <img
        alt=""
        loading="lazy"
        src={LeftGear}
        tw="absolute width[120px] height[120px] bottom[300px] right[100px] lg:(bottom[240px] right[50px]) md:bottom[120px] lm:hidden"
      />

      <ContentWrapper>
        <h1 css={[TWText.h1]} tw="mb-32">
          Frequently asked questions
        </h1>
        <div tw="w-full flex justify-between gap-x-96 md:(block)">
          <StyledAccordionGroup
            questionSet={LEFT_QUESTION_SET.map((cur) => ({
              question: cur.question,
              answer: <p>{cur.answer}</p>,
            }))}
          />
          <StyledAccordionGroup
            questionSet={RIGHT_QUESTION_SET.map((cur) =>
              cur.question ==
              "What if I need to travel internationally to attend Hack the North?"
                ? {
                    question: cur.question,
                    answer: (
                      <>
                        <p>
                          If you’re travelling to Hack the North from outside of
                          Canada, you must follow the{" "}
                          <UnstyledLink
                            css={[TWShared.hover]}
                            tw="text-white underline"
                            href="https://travel.gc.ca/travel-covid"
                            target="_blank"
                            // eslint-disable-next-line react/jsx-no-duplicate-props
                            rel="noreferrer"
                          >
                            Government of Canada’s travel guidelines
                          </UnstyledLink>{" "}
                          in order to attend. As of May 2022, the guidelines
                          require you to be fully vaccinated against COVID-19
                          with one of the listed vaccines at least 14 days
                          before your date of travel.
                        </p>
                        <p>
                          Please note that visitor visa wait times may be as
                          long as several months, depending on the country of
                          departure. We recommend you apply for your visa, if
                          required, immediately after receiving your acceptance
                          to Hack the North. More information can be found on
                          our{" "}
                          <UnstyledLink
                            css={[TWShared.hover]}
                            tw="text-white underline"
                            href="/travel-guidelines"
                          >
                            Travel Guidelines
                          </UnstyledLink>{" "}
                          page.
                        </p>
                      </>
                    ),
                  }
                : cur.question == "What are your COVID-19 regulations?"
                ? {
                    question: cur.question,
                    answer: (
                      <p>
                        At this time, Hack the North’s COVID-19 policy is a
                        living document. Our policy will reflect the local
                        guidelines at the time of the event, as well as the
                        global COVID-19 situation. Take a look at our{" "}
                        <UnstyledLink
                          css={[TWShared.hover]}
                          tw="text-white underline"
                          href="/covid-policy"
                        >
                          COVID-19 policy
                        </UnstyledLink>{" "}
                        for a detailed outline of the safety precautions that
                        may be in place at the event.
                      </p>
                    ),
                  }
                : cur.question ==
                  "I'm not currently enrolled as a student, can I still attend Hack the North?"
                ? {
                    question: cur.question,
                    answer: (
                      <p>
                        Hack the North is geared towards students who are
                        interested in tech, but we also want to open the doors
                        for anyone who wants to learn. If your situation falls
                        within this category, please reach out to us at
                        <UnstyledLink
                          css={[TWShared.hover]}
                          tw="text-white underline"
                          href="mailto:hello@hackthenorth.com"
                        >
                          hello@hackthenorth.com
                        </UnstyledLink>{" "}
                        and we can chat more regarding certain exemptions!
                      </p>
                    ),
                  }
                : {
                    question: cur.question,
                    answer: cur.answer,
                  }
            )}
            shouldOpenFirst={!isMediumOrSmaller}
          />
        </div>
        <div tw="relative mb-360 tb:(left[-60px] top[-80px])">
          <img
            alt=""
            loading="lazy"
            src={Blob3}
            tw="absolute width[25px] height[40px] left[60px] top[40px]"
          />
          <div tw="relative left[140px] top[120px]">
            <img
              alt=""
              loading="lazy"
              src={Star3}
              tw="absolute width[64px] height[64px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Star4}
              tw="absolute width[40px] height[40px] top[14px] left[10px]"
            />
          </div>
        </div>
        {/* Blue glow to left of FAQ */}
        <Glow
          color="#037FF3"
          radius={680}
          opacity={0.15}
          tw="absolute top[50%] left[-25%]"
          horizAlignment="left"
          vertAlignment="top"
        />
      </ContentWrapper>
    </SectionWrapper>
  ) : null;
};

export default FAQ;
