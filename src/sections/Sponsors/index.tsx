import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { DarkLeftChevron, DarkRightChevron } from "src/assets/img";
import { Button } from "src/components/base";
import { CarouselNav } from "src/components/base/CarouselNav";
import GradientText from "src/components/base/GradientText";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { SectionId } from "src/constants";
import { TWText } from "src/styles";
import { mediaQueries, useDeviceSize } from "src/utils";
import styled from "styled-components";

import "twin.macro";
import {
  bronzeSponsors,
  goldSponsors,
  partners,
  silverSponsors,
  startupSponsors,
} from "./sponsors";

const Sponsors: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");

  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
  const [changed, setChanged] = useState(false);

  const toggleChanged = () => {
    setChanged(true);
    setTimeout(() => {
      setChanged(false);
    }, 1);
  };

  const showcaseSponsors = [];
  for (const goldSponsor of goldSponsors) {
    if (goldSponsor.text) {
      showcaseSponsors.push(goldSponsor);
    }
  }
  for (const silverSponsor of silverSponsors) {
    if (silverSponsor.text) {
      showcaseSponsors.push(silverSponsor);
    }
  }

  const silverGroups = [];
  for (let i = 0; i < silverSponsors.length; i += 2) {
    silverGroups.push(silverSponsors.slice(i, i + 2));
  }
  const bronzeGroups = [];
  for (let i = 0; i < bronzeSponsors.length; i += 3) {
    bronzeGroups.push(bronzeSponsors.slice(i, i + 3));
  }
  const startupGroups = [];
  for (let i = 0; i < startupSponsors.length; i += 4) {
    startupGroups.push(startupSponsors.slice(i, i + 4));
  }
  const partnerGroups = [];
  for (let i = 0; i < partners.length; i += 4) {
    partnerGroups.push(partners.slice(i, i + 4));
  }
  return (
    <SectionWrapper id={SectionId.SPONSORS}>
      <ContentWrapper tw="mt-120 max-w-screen p-0">
        <div tw="relative w-full">
          <div tw="flex w-full justify-center items-center mb-72">
            <div tw="w-560 text-center">
              <div tw="flex w-full justify-center">
                <h2 css={[TWText.h2]} tw="sm:text-20! mb-24">
                  Sponsor a{" "}
                  <GradientText tw="bg-gradient-to-r from-accent-pink to-accent-yellow">
                    special
                  </GradientText>{" "}
                  weekend
                </h2>
              </div>
              <p
                css={[TWText.body]}
                tw="text-medium-emphasis lm:width[80%] mx-auto"
              >
                Hack the North is made possible by our wonderful sponsors. Want
                to help make this event a reality?
              </p>
              <Button
                tw="mx-auto mt-32 lm:mt-16"
                variant="primary"
                aria-label="Submit email"
              >
                <a href="mailto:sponsor@hackthenorth.com" tw="py-12 px-32">
                  Become a sponsor
                </a>
              </Button>
            </div>
          </div>

          {/* Gold sponsor carousel */}
          <SponsorRow tw="mb-64 tb:(block)">
            <div tw="w-full">
              <ShowcaseSponsor
                num={1}
                href={showcaseSponsors[currentShowcaseIndex].link}
                target="_blank"
                rel="noopener"
                tw="mb-16"
              >
                <StyledAnimated
                  animationIn="fadeOut"
                  animationInDuration={600}
                  animationOut="fadeIn"
                  animationOutDuration={600}
                  isVisible={changed}
                >
                  <img
                    src={showcaseSponsors[currentShowcaseIndex].src}
                    alt={showcaseSponsors[currentShowcaseIndex].alt}
                    title={showcaseSponsors[currentShowcaseIndex].title}
                    tw="max-width[80%] max-height[80%] m-auto"
                    loading="lazy"
                  />
                </StyledAnimated>
                {isTabletOrSmaller && (
                  <>
                    {currentShowcaseIndex > 0 && (
                      <ChevronWrapper
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentShowcaseIndex(currentShowcaseIndex - 1);
                          toggleChanged();
                        }}
                        tw="left-0"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          src={DarkLeftChevron}
                          tw="m-auto"
                        />
                      </ChevronWrapper>
                    )}
                    {currentShowcaseIndex < showcaseSponsors.length - 1 && (
                      <ChevronWrapper
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentShowcaseIndex(currentShowcaseIndex + 1);
                          toggleChanged();
                        }}
                        tw="right-0"
                      >
                        <img
                          alt=""
                          loading="lazy"
                          src={DarkRightChevron}
                          tw="m-auto"
                        />
                      </ChevronWrapper>
                    )}
                  </>
                )}
              </ShowcaseSponsor>
              {!isTabletOrSmaller && (
                <CarouselNav
                  numSlides={showcaseSponsors.length}
                  backCallback={() => {
                    setCurrentShowcaseIndex(currentShowcaseIndex - 1);
                    toggleChanged();
                  }}
                  forwardCallback={() => {
                    setCurrentShowcaseIndex(currentShowcaseIndex + 1);
                    toggleChanged();
                  }}
                  selectCallback={() => setCurrentShowcaseIndex(0)}
                  selected={currentShowcaseIndex}
                />
              )}
            </div>
            <ShowcaseTextWrapper>
              <div css={[TWText.body]} tw="text-medium-emphasis">
                {showcaseSponsors[currentShowcaseIndex].text}
              </div>
            </ShowcaseTextWrapper>
          </SponsorRow>

          {/* Grid */}
          {/* Gold Sponsors */}
          {goldSponsors.map((sponsor) => {
            return (
              <SponsorRow key={sponsor.title}>
                <StyledSponsor
                  num={1}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src={sponsor.src}
                    alt={sponsor.alt}
                    title={sponsor.title}
                    tw="max-width[80%] max-height[80%]"
                    loading="lazy"
                  />
                </StyledSponsor>
              </SponsorRow>
            );
          })}

          {/* Silver Sponsors */}
          {silverGroups.map((silverGroup, i) => {
            return (
              <SponsorRow key={i}>
                {silverGroup.map((sponsor) => (
                  <StyledSponsor
                    key={sponsor.title}
                    num={2}
                    href={sponsor.link}
                    rel="noopener"
                    target="_blank"
                  >
                    <img
                      src={sponsor.src}
                      alt={sponsor.alt}
                      title={sponsor.title}
                      tw="max-width[80%] max-height[80%]"
                      loading="lazy"
                    />
                  </StyledSponsor>
                ))}
              </SponsorRow>
            );
          })}

          {/* Bronze Sponsors */}
          {bronzeGroups.map((bronzeGroup, i) => {
            return (
              <SponsorRow key={i}>
                {bronzeGroup.map((sponsor) => {
                  return (
                    <StyledSponsor
                      key={sponsor.title}
                      num={3}
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src={sponsor.src}
                        alt={sponsor.alt}
                        title={sponsor.title}
                        tw="max-width[80%] max-height[80%]"
                        loading="lazy"
                      />
                    </StyledSponsor>
                  );
                })}
              </SponsorRow>
            );
          })}

          {/* Startup Sponsors */}
          {startupGroups.map((startupGroup, i) => {
            return (
              <SponsorRow key={i}>
                {startupGroup.map((sponsor) => (
                  <StyledSponsor
                    key={sponsor.title}
                    num={4}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src={sponsor.src}
                      alt={sponsor.alt}
                      title={sponsor.title}
                      tw="max-width[80%] max-height[80%]"
                      loading="lazy"
                    />
                  </StyledSponsor>
                ))}
              </SponsorRow>
            );
          })}
        </div>
        <div tw="mt-64 text-center">
          <h2 css={[TWText.h3]}>...and more to come</h2>
        </div>
        <div tw="relative w-full">
          <div tw="mt-120 mb-64 text-center">
            <h2 css={[TWText.h2]}>Our Partners</h2>
          </div>
          {/* Partner */}
          {partnerGroups.map((partnerGroup, i) => {
            return (
              <SponsorRow key={i}>
                {partnerGroup.map((partner) => (
                  <StyledSponsor
                    key={partner.title}
                    num={4}
                    href={partner.link}
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      title={partner.title}
                      tw="max-width[80%] max-height[80%]"
                      loading="lazy"
                    />
                  </StyledSponsor>
                ))}
              </SponsorRow>
            );
          })}
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

const ChevronWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  display: flex;
  justify-content: center;
`;

const Sponsor = styled.a`
  transform: scale(1);
  background-color: white;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const SponsorRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding-left: 20%;
  padding-right: 20%;
  margin-bottom: 32px;

  ${mediaQueries.tablet} {
    padding-left: 10%;
    padding-right: 10%;
  }

  ${mediaQueries.largeMobile} {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

// num is the number of sponsors in the row
// so gold = 1, silver = 2, etc
const StyledSponsor = styled(Sponsor)<{ num: number }>`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: calc(
    (100% - ${(props) => (props.num - 1) * 32}px) / ${(props) => props.num}
  );

  ${mediaQueries.largeMobile} {
    height: 110px;
  }
`;

const ShowcaseSponsor = styled(StyledSponsor)`
  height: 400px;
  width: 100%;

  ${mediaQueries.largeMobile} {
    height: 220px;
  }

  &:hover {
    transform: none;
  }
`;

const StyledAnimated = styled(Animated)`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries.largeMobile} {
    height: 220px;
  }
`;

const ShowcaseTextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  padding-bottom: 30px;
`;
// padding to account for extra space from the stepper

export default Sponsors;
