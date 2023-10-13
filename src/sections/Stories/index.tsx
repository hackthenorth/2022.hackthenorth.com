import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import {
  QuotationsLeftImg,
  QuotationsRightImg,
  UltrawideSpark,
  UltrawideBigStar,
  UltrawideSmallStar,
} from "src/assets/img";
import { Glow } from "src/components/base";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { SectionId } from "src/constants";
import { TWText } from "src/styles";
import { useWindowSize, mediaQueries } from "src/utils";
import { deviceBreakpoints } from "src/utils/responsive";
import tw, { styled } from "twin.macro";

import { HoverAnimation, ClickedAnimation } from "./animations";
import hackerStoriesData from "./data/hackerStories";
import StoriesImgWrapper from "./StoriesImgWrapper";

const Stories: React.FC = () => {
  const isUltrawideOrLarger =
    (useWindowSize().windowWidth ?? 0) > deviceBreakpoints.large;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showHoverAnimation, setShowHoverAnimation] = useState(
    INITIAL_HOVER_ANIMATION_STATE
  );
  const [showClickedAnimation, setShowClickedAnimation] = useState(
    INITIAL_CLICKED_OUT_ANIMATION_STATE
  );

  return (
    <SectionWrapper tw="mb-72">
      <ContentWrapper tw="tb:(px-100 my-100) lm:(px-16 my-72)">
        <Section tw="relative pt-128 -mt-128" id={SectionId.STORIES}>
          {isUltrawideOrLarger && (
            <>
              <SUltrawideSpark alt="" src={UltrawideSpark} loading="lazy" />
              <SUltrawideBigStar alt="" src={UltrawideBigStar} loading="lazy" />
              <SUltrawideSmallStar
                alt=""
                src={UltrawideSmallStar}
                loading="lazy"
              />
            </>
          )}
          <div tw="grid grid-cols-3 gap-x-40 md:gap-x-20 tb:(grid-cols-1 gap-0 justify-items-center text-center) mb-100">
            <div tw="col-span-2 tb:(col-span-1)">
              <h1 css={[TWText.h2]} tw="text-white text-opacity-87">
                The{" "}
                <span tw="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-primary-blue1">
                  magic
                </span>{" "}
                of Hack the North
              </h1>
              <p
                css={[TWText.largeBody]}
                tw="mt-24 text-white text-opacity-60 lm:(mt-12) lm:(text-16!)"
              >
                For 8 years, Hack the North has empowered students of all levels
                to take their ideas to the next level by fostering a community
                of learning, mentorship, and fun.
              </p>
            </div>
            <div tw="relative row-span-2 tb:(row-span-1 mt-36) lm:(mt-32)">
              <StoriesImgWrapper
                image={hackerStoriesData[selectedIndex].image}
                alt={`Hacker story image for ${hackerStoriesData[selectedIndex].name}`}
              />
            </div>
            <div tw="col-span-2 tb:(col-span-1)">
              <div tw="mt-48 lm:(mt-20)">
                <h2
                  css={[TWText.h3]}
                  tw="text-white text-opacity-87 lm:(text-24!)"
                >
                  Words from {hackerStoriesData[selectedIndex].name},
                </h2>
                <Tab.Group
                  selectedIndex={selectedIndex}
                  onChange={setSelectedIndex}
                >
                  <Tab.Panels>
                    {hackerStoriesData.map(({ id, tagline, description }) => (
                      <Tab.Panel key={id} tw="mt-10 relative">
                        <h3
                          css={[TWText.largeBody]}
                          tw="text-white text-opacity-87 lm:(text-16!)"
                        >
                          {tagline}
                        </h3>

                        <HackerDescription tw="flex flex-col justify-around mb-48 mt-40 mb:(mb-36) tb:(mt-36 mt-8) lm:(mt-8 mb-32)">
                          <p
                            css={[TWText.body]}
                            tw="leading-loose text-white text-opacity-60 lm:px-8"
                          >
                            <LeftParagraphQuotation
                              alt=""
                              src={QuotationsLeftImg}
                              style={{
                                color: tailwindColorsConfig[selectedIndex],
                              }}
                              tw="all-child:fill-current"
                              loading="lazy"
                            />
                            {description}
                            <RightParagraphQuotation
                              alt=""
                              src={QuotationsRightImg}
                              style={{
                                color: tailwindColorsConfig[selectedIndex],
                              }}
                              tw="all-child:fill-current"
                              loading="lazy"
                            />
                          </p>
                        </HackerDescription>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                  <div tw="tb:(flex justify-center)">
                    <Tab.List>
                      <GradientDivider />
                      <div tw="h-72 flex justify-start items-center gap-x-40 lm:(gap-x-20) sm:(gap-x-12)">
                        {hackerStoriesData.map(({ id, name }) => {
                          return (
                            <Tab
                              key={id}
                              type="button"
                              tw="inline-block text-20 transition duration-150 ease-in-out relative"
                              onClick={() => {
                                if (selectedIndex !== id)
                                  setShowClickedAnimation({
                                    ...INITIAL_CLICKED_OUT_ANIMATION_STATE,
                                    [selectedIndex]: true,
                                  });
                                setSelectedIndex(id);
                                setShowHoverAnimation(
                                  INITIAL_HOVER_ANIMATION_STATE
                                );
                              }}
                              onMouseEnter={() =>
                                setShowHoverAnimation({
                                  ...showHoverAnimation,
                                  [id]: {
                                    hoverIn: true,
                                    hoverOut: false,
                                  },
                                })
                              }
                              onMouseLeave={() =>
                                setShowHoverAnimation({
                                  ...showHoverAnimation,
                                  [id]: {
                                    hoverIn: false,
                                    hoverOut: true,
                                  },
                                })
                              }
                            >
                              <div tw="flex justify-center">
                                <h1
                                  css={[
                                    TWText.largeBodyBold,
                                    generateActiveTabButtonStyles(
                                      id,
                                      selectedIndex
                                    ),
                                  ]}
                                  tw="text-white text-opacity-60 hover:(text-white) lm:(text-14!)"
                                >
                                  {name}
                                </h1>
                                {selectedIndex === id && (
                                  <ClickedAnimation
                                    load={clickedAnimationConfig[id].clickedIn}
                                  />
                                )}
                                {showClickedAnimation[id.toString()] && (
                                  <ClickedAnimation
                                    load={clickedAnimationConfig[id].clickedOut}
                                  />
                                )}
                                {selectedIndex !== id &&
                                  showHoverAnimation[id.toString()].hoverIn && (
                                    <HoverAnimation
                                      load={hoverAnimationConfig[id].hoverIn}
                                    />
                                  )}
                                {selectedIndex !== id &&
                                  showHoverAnimation[id.toString()]
                                    .hoverOut && (
                                    <HoverAnimation
                                      load={hoverAnimationConfig[id].hoverOut}
                                    />
                                  )}
                              </div>
                            </Tab>
                          );
                        })}
                      </div>
                    </Tab.List>
                  </div>
                </Tab.Group>
              </div>
            </div>
          </div>
        </Section>
        {/* Green glow to left of hacker stories */}
        <Glow
          color="#17BF14"
          radius={600}
          opacity={0.1}
          tw="absolute top[25%] left[-25%]"
          horizAlignment="left"
          vertAlignment="top"
        />
      </ContentWrapper>
    </SectionWrapper>
  );
};

// Color Config Object
const tailwindColorsConfig = [
  "#E455BC",
  "#EA9D09",
  "#FFE04A",
  "#17BF14",
  "#43AFDE",
  "#037FF3",
];
const generateActiveTabButtonStyles = (id: number, selectedIndex: number) =>
  id === selectedIndex ? tw`text-opacity-100!` : ``;

// Initial Animation States
const INITIAL_HOVER_ANIMATION_STATE: {
  [key: string]: {
    hoverIn: boolean;
    hoverOut: boolean;
  };
} = {
  "0": {
    hoverIn: false,
    hoverOut: false,
  },
  "1": {
    hoverIn: false,
    hoverOut: false,
  },
  "2": {
    hoverIn: false,
    hoverOut: false,
  },
  "3": {
    hoverIn: false,
    hoverOut: false,
  },
  "4": {
    hoverIn: false,
    hoverOut: false,
  },
  "5": {
    hoverIn: false,
    hoverOut: false,
  },
};

const INITIAL_CLICKED_OUT_ANIMATION_STATE: {
  [key: string]: boolean;
} = {
  "0": false,
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false,
};

// Animation Config Obj
const hoverAnimationConfig: { [key: string]: any } = {
  "0": {
    hoverIn: () => import("src/assets/img/stories/animations/HoverInPink.json"),
    hoverOut: () =>
      import("src/assets/img/stories/animations/HoverOutPink.json"),
  },
  "1": {
    hoverIn: () =>
      import("src/assets/img/stories/animations/HoverInOrange.json"),
    hoverOut: () =>
      import("src/assets/img/stories/animations/HoverOutOrange.json"),
  },
  "2": {
    hoverIn: () =>
      import("src/assets/img/stories/animations/HoverInYellow.json"),
    hoverOut: () =>
      import("src/assets/img/stories/animations/HoverOutYellow.json"),
  },
  "3": {
    hoverIn: () =>
      import("src/assets/img/stories/animations/HoverInGreen.json"),
    hoverOut: () =>
      import("src/assets/img/stories/animations/HoverOutGreen.json"),
  },
  "4": {
    hoverIn: () =>
      import("src/assets/img/stories/animations/HoverInLightBlue.json"),
    hoverOut: () =>
      import("src/assets/img/stories/animations/HoverOutLightBlue.json"),
  },
  "5": {
    hoverIn: () => import("src/assets/img/stories/animations/HoverInBlue.json"),
    hoverOut: () =>
      import("src/assets/img/stories/animations/HoverOutBlue.json"),
  },
};

const clickedAnimationConfig: { [key: string]: any } = {
  "0": {
    clickedIn: () =>
      import("src/assets/img/stories/animations/ClickedInPink.json"),
    clickedOut: () =>
      import("src/assets/img/stories/animations/ClickedOutPink.json"),
  },
  "1": {
    clickedIn: () =>
      import("src/assets/img/stories/animations/ClickedInOrange.json"),
    clickedOut: () =>
      import("src/assets/img/stories/animations/ClickedOutOrange.json"),
  },
  "2": {
    clickedIn: () =>
      import("src/assets/img/stories/animations/ClickedInYellow.json"),
    clickedOut: () =>
      import("src/assets/img/stories/animations/ClickedOutYellow.json"),
  },
  "3": {
    clickedIn: () =>
      import("src/assets/img/stories/animations/ClickedInGreen.json"),
    clickedOut: () =>
      import("src/assets/img/stories/animations/ClickedOutGreen.json"),
  },
  "4": {
    clickedIn: () =>
      import("src/assets/img/stories/animations/ClickedInLightBlue.json"),
    clickedOut: () =>
      import("src/assets/img/stories/animations/ClickedOutLightBlue.json"),
  },
  "5": {
    clickedIn: () =>
      import("src/assets/img/stories/animations/ClickedInBlue.json"),
    clickedOut: () =>
      import("src/assets/img/stories/animations/ClickedOutBlue.json"),
  },
};

// Styled Components
const Section = styled.section`
  button {
    outline: none !important;
  }
`;

const SUltrawideSpark = styled.img`
  position: absolute;
  top: 15%;
  left: -22.5%;
`;

const SUltrawideBigStar = styled.img`
  position: absolute;
  top: 22.5%;
  right: -20%;
`;

const SUltrawideSmallStar = styled.img`
  position: absolute;
  top: 32.5%;
  right: -12.5%;
`;

const LeftParagraphQuotation = styled.img`
  position: absolute;
  top: 22.5%;
  left: -6.5%;

  ${mediaQueries.large} {
    top: 25.5%;
    left: -6.5%;
  }

  ${mediaQueries.medium} {
    top: 23.5%;
    left: -5.5%;
  }

  ${mediaQueries.tablet} {
    top: 20.5%;
    left: -6.5%;
  }

  ${mediaQueries.largeMobile} {
    height: 22.5px;
    top: 1.5%;
    left: -3.5%;
  }

  ${mediaQueries.mobile} {
    height: 19.5px;
    top: 3.5%;
    left: -3.5%;
  }
`;

const RightParagraphQuotation = styled.img`
  position: absolute;
  bottom: 3%;
  right: -5%;

  ${mediaQueries.medium} {
    bottom: 4%;
    right: -6%;
  }

  ${mediaQueries.tablet} {
    bottom: 1%;
    right: -7%;
  }

  ${mediaQueries.largeMobile} {
    bottom: -2%;
    right: -1%;
    height: 20px;
  }

  ${mediaQueries.mobile} {
    bottom: -6%;
    right: -4%;
    height: 16px;
  }

  ${mediaQueries.smallMobile} {
    bottom: -6%;
    right: -3%;
  }
`;

const GradientDivider = styled.hr`
  background: linear-gradient(
    270deg,
    rgba(67, 175, 222, 0.87) 0%,
    rgba(35, 254, 31, 0.87) 33.9%,
    rgba(255, 224, 74, 0.87) 59.37%,
    rgba(253, 115, 197, 0.87) 99.86%
  );
  max-width: 552px;
  height: 3px;
`;

const HackerDescription = styled.div`
  min-height: 201px;

  ${mediaQueries.medium} {
    min-height: 230px;
  }

  ${mediaQueries.tablet} {
    min-height: 196px;
  }

  ${mediaQueries.largeMobile} {
    min-height: 308px;
  }

  ${mediaQueries.mobile} {
    min-height: 336px;
  }

  ${mediaQueries.smallMobile} {
    min-height: 420px;
  }
`;

export default Stories;
