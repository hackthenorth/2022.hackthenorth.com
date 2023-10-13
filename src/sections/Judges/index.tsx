import React from "react";
import {
  KeynoteSpeakerStar,
  LeftArrow,
  RightArrow,
  WillIAmRedHatImg,
} from "src/assets/img";
import { Glow } from "src/components/base";
import GradientText from "src/components/base/GradientText";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { LeaderCarousel } from "src/components/LeaderCarousel";
import { MobileLeaderCarousel } from "src/components/LeaderCarousel/MobileLeaderCarousel";
import { TWText } from "src/styles";
import { mediaQueries, useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

const Judges: React.FC = () => {
  const isMediumOrSmaller = useDeviceSize("medium");

  return (
    <SectionWrapper>
      <ContentWrapper tw="max-w-screen p-0">
        <div tw="flex w-full justify-center mb-48">
          {!isMediumOrSmaller && (
            <img
              alt=""
              loading="lazy"
              src={LeftArrow}
              tw="inline-block mt-20"
            />
          )}
          <div tw="m-10 w-560 text-center">
            <div tw="flex w-full justify-center">
              <h2 css={[TWText.h2]} tw="sm:text-20! lm:text-24! mb-24">
                Get{" "}
                <GradientText tw="bg-gradient-to-r from-primary-blue1 to-primary-blue2">
                  inspired
                </GradientText>{" "}
                by industry leaders
              </h2>
            </div>
            <p css={[TWText.body]} tw="text-medium-emphasis">
              Every year, leaders in the tech industry join Hack the North to
              speak, judge, and mentor hackers.
            </p>
          </div>

          {!isMediumOrSmaller && (
            <img
              alt=""
              loading="lazy"
              src={RightArrow}
              tw="inline-block mt-32"
            />
          )}
        </div>
        <div tw="flex w-full justify-center mb-48 gap-x-40 relative lm:(flex-wrap justify-center)">
          <img
            src={WillIAmRedHatImg}
            alt="Will.i.am"
            width={260}
            tw="rounded-16"
          />
          <div tw="m-10 w-520 text-left lm:(px-20 text-center)">
            <h2 css={[TWText.h2]} tw="leading-relaxed text-28">
              will.i.am
            </h2>
            <h3
              css={[TWText.largeBody]}
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
              Keynote Speaker
            </h3>
            <p
              css={[TWText.body]}
              style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: 15 }}
              tw="mt-10 tb:leading-relaxed"
            >
              will.i.am is a musician, tech entrepreneur, philanthropist, and
              founder and frontman of Black Eyed Peas. Since the start of his
              tech career in 2011, he has held executive advisory roles in
              leading tech companies including a number of companies, including
              Intel, 3D Systems, Stradigi AI, and Atom Bank. In 2009, he then
              launched the i.am/Angel Foundation to empower middle school and
              high school students through STEAM education, including
              establishing more than 400 robotics clubs in public middle and
              senior high schools in Los Angeles.
            </p>
          </div>
          {/* for some reason tailwind positioning is not working: -top-[2%] right-[19%] */}
          <SKeynoteStar src={KeynoteSpeakerStar} alt="Star" tw="absolute" />
        </div>
        <h2 css={[TWText.h2]} tw="text-center mb-36 text-32">
          Judges
        </h2>
        {isMediumOrSmaller ? <MobileLeaderCarousel /> : <LeaderCarousel />}
        {/* Yellow glow to right of leaders */}
        <Glow
          color="#FFE04A"
          radius={680}
          opacity={0.15}
          tw="absolute top[50%] right[0px]"
          horizAlignment="right"
          vertAlignment="top"
        />
      </ContentWrapper>
    </SectionWrapper>
  );
};

const SKeynoteStar = styled.img`
  top: -2%;
  right: 19%;
  width: 80px;

  ${mediaQueries.custom(1200)} {
    right: 14%;
  }

  ${mediaQueries.medium} {
    right: 8%;
  }

  ${mediaQueries.tablet} {
    width: 70px;
    right: 2%;
  }

  ${mediaQueries.largeMobile} {
    top: 47.5%;
    right: 5%;
    width: 60px;
  }

  ${mediaQueries.smallMobile} {
    width: 40px;
  }
`;

export default Judges;
