import React, { useEffect, useState } from "react";
import TextLoop from "react-text-loop";
import { HeroUltrawide, MLHLogo } from "src/assets/img";
import { Button, Glow } from "src/components/base";
import GradientText from "src/components/base/GradientText";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { SectionId } from "src/constants";
import { TWShared, TWText } from "src/styles";
import { useDeviceSize, useWindowSize } from "src/utils";
import "twin.macro";

import E5Animation from "./E5";
import ExtraSparkAnimation from "./ExtraSpark";
import GreenBlueStarAnimation from "./GreenBlueStar";
import GreenGearAnimation from "./GreenGear";
import GreenStarAnimation from "./GreenStar";
import GreenYellowStarAnimation from "./GreenYellowStar";
import PinkGearAnimation from "./PinkGear";
import PinkSparkAnimation from "./PinkSpark";
import PinkStarAnimation from "./PinkStar";
import SmallGreenStarAnimation from "./SmallGreenStar";
import YellowSparkAnimation from "./YellowSpark";

const actions = [
  "design",
  "learning",
  "code",
  "building",
  "connection",
  "exploring",
];

const Hero: React.FC = () => {
  const { windowWidth } = useWindowSize();
  const [haveLinebreak, sethaveLinebreak] = useState(false);

  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  useEffect(() => {
    if (!windowWidth || windowWidth < 1441 || windowWidth > 2326) return;
    sethaveLinebreak(true);
  }, [windowWidth]);
  return (
    <SectionWrapper id={SectionId.HERO}>
      <ContentWrapper tw="h-screen max-w-screen-xl flex items-center lm:(items-start) relative z-10">
        <div tw="relative overflow-hidden max-width[75%] lg:(max-width[70%]) tb:max-w-full tb:margin-top[-120px] lm:margin-top[6vh]">
          <h2 css={[TWText.overline]} tw="mt-64">
            SEPTEMBER 16 - 18, 2022
          </h2>
          <h1 css={[TWText.title]} tw="mt-8 mb-32">
            Hack the North is Canada&apos;s{" "}
            <GradientText tw="bg-gradient-to-r from-primary-blue2 to-accent-pink">
              biggest
            </GradientText>{" "}
            hackathon where{" "}
            <GradientText tw="bg-gradient-to-r from-accent-green to-primary-blue1">
              anyone
            </GradientText>{" "}
            can{" "}
            <GradientText tw="bg-gradient-to-r from-secondary-yellow to-accent-yellow">
              spark
            </GradientText>{" "}
            their passion for {haveLinebreak ? <br /> : null}
            {/* eslint-disable-next-line react/no-children-prop */}
            <TextLoop children={actions} />
          </h1>
          <p css={[TWText.bodyBold]}>
            <GradientText tw="bg-gradient-to-r from-accent-pink to-accent-yellow">
              In-person event
            </GradientText>{" "}
            @ Waterloo, ON <span tw="text-accent-yellow">•</span>{" "}
            <img alt="MLH Logo" src={MLHLogo} tw="inline" /> Official Member
          </p>
          {!isLargeMobileOrSmaller ? (
            <div tw="mt-64">
              <p css={[TWText.body]} tw="mb-20">
                <strong>
                  Hacker applications for Hack the North 2022 are now closed.
                </strong>{" "}
                <br />
                Thank you to everyone who applied!
              </p>
            </div>
          ) : null}
        </div>
      </ContentWrapper>
      <div tw="lm:(margin-top[0vh])">
        <img
          src={HeroUltrawide}
          alt="Waterloo's Engineering 5 Building"
          tw="absolute z-index[-20] top[-58vh] left[calc(25vw + 50vw - 138vh)] max-width[275vh] tb:max-width[200vh] tb:top[-48vh] tb:left[calc(26vw + 50vw - 100vh)] lm:hidden width[300vw]"
        />
        <ExtraSparkAnimation />
        <PinkSparkAnimation />
        <YellowSparkAnimation />
        <PinkGearAnimation />
        <GreenGearAnimation />
        <GreenBlueStarAnimation />
        <PinkStarAnimation />
        <GreenYellowStarAnimation />
        <GreenStarAnimation />
        <SmallGreenStarAnimation />
        <E5Animation />
        {/* Green top left glow */}
        <Glow
          color="#1D9D1B"
          radius={500}
          opacity={0.18}
          tw="absolute top[0px] left[0px]"
          horizAlignment="left"
          vertAlignment="top"
        />
        {isLargeMobileOrSmaller ? (
          <div tw="mb-100 ml-20 mr-20">
            <p css={[TWText.body]} tw="mb-20">
              <strong>
                Hacker applications for Hack the North 2022 are now closed.
              </strong>{" "}
              Thank you to everyone who applied!
            </p>
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  );
};

export default Hero;
