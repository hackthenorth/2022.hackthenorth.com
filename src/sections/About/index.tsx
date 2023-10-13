import { motion, useMotionValue } from "framer-motion";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { LeftRibbonImg, RightRibbonImg } from "src/assets/img";
import AboutCarousel from "src/components/AboutCarousel";
import { Glow } from "src/components/base";
import GradientText from "src/components/base/GradientText";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { SectionId } from "src/constants";
import { TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

interface CarouselSectionWrapperProps {
  isTabletOrSmaller: boolean | undefined;
}

interface AboutWrapperProps {
  isBottom: boolean | undefined;
  isTabletOrSmaller: boolean | undefined;
}

const inPersonText =
  "This September, join 1000+ hackers from all around the world for a hackathon like no other. We’ll handle all the details so that you can focus on turning your ideas into reality. With world-class mentors, workshops, and events – you’re in for a great time.";
const belongText =
  "Getting into tech can be hard. We’re here to make that easier. Hack the North is dedicated to building an inclusive experience for attendees from across the globe. We strive to foster a space where everyone feels welcomed to pursue their dreams and build something they’re proud of.";

const About: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");
  const containerRef = useRef<HTMLDivElement>(null);
  const translateX = useMotionValue(0);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      translateX.set(-containerRef.current.offsetTop);
    }
  }, [translateX]);

  useEffect(() => {
    document
      .getElementById("container")
      ?.addEventListener("scroll", handleScroll);
    return () =>
      document
        .getElementById("container")
        ?.removeEventListener("scroll", handleScroll);
  }, [handleScroll, document]);

  // TODO: refactor this so we don't repeat copy/components
  return isLargeMobileOrSmaller ? (
    <SectionWrapper>
      <ContentWrapper tw="p-0" id={SectionId.ABOUT}>
        <div tw="mt-64 flex flex-col justify-center text-center">
          <h1 css={[TWText.h1]}>
            We&#8217;re back{" "}
            <GradientText tw="bg-gradient-to-r from-accent-green via-accent-yellow to-accent-pink">
              in person
            </GradientText>
          </h1>
          <p
            css={[TWText.largeBodyMed]}
            tw="mt-16 mb-64 px-16 text-medium-emphasis"
          >
            {inPersonText}
          </p>
          <AboutCarousel />
          <h1 css={[TWText.h1]} tw="mt-72">
            You{" "}
            <GradientText tw="bg-gradient-to-r from-accent-pink to-primary-blue1">
              belong
            </GradientText>{" "}
            in tech
          </h1>
          <p css={[TWText.largeBodyMed]} tw="mt-16 px-16 text-medium-emphasis">
            {belongText}
          </p>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  ) : (
    <ContentWrapper tw="max-w-screen p-0" id={SectionId.ABOUT}>
      <CarouselSectionWrapper isTabletOrSmaller={isTabletOrSmaller}>
        <CarouselSection ref={containerRef}>
          <AboutWrapper isBottom={false} isTabletOrSmaller={isTabletOrSmaller}>
            <RibbonWrapper>
              <img
                src={LeftRibbonImg}
                alt="Colourful floating ribbons."
                tw="tb:w-256 mr-128 lg:mr-64 md:mr-16"
                loading="lazy"
              />
              <h1 css={[TWText.h1]}>
                We&#8217;re back{" "}
                <GradientText tw="bg-gradient-to-r from-accent-green via-accent-yellow to-accent-pink">
                  in person
                </GradientText>
              </h1>
              <img
                src={RightRibbonImg}
                alt="Colourful floating ribbons."
                tw="tb:w-256 ml-128 lg:ml-64 md:ml-16"
                loading="lazy"
              />
            </RibbonWrapper>
            <TopTextWrapper>
              <p
                css={[TWText.largeBodyMed]}
                tw="px-128 md:px-96 tb:px-48 text-medium-emphasis"
              >
                {inPersonText}
              </p>
            </TopTextWrapper>
          </AboutWrapper>
          <OuterCarouselWrapper>
            <CarouselWrapper style={{ x: translateX }}>
              <AboutCarousel />
            </CarouselWrapper>
          </OuterCarouselWrapper>
          <div tw="flex flex-col items-center justify-center">
            <h1 css={[TWText.h1]}>
              You{" "}
              <GradientText tw="bg-gradient-to-r from-accent-pink to-primary-blue1">
                belong
              </GradientText>{" "}
              in tech
            </h1>
            <TopTextWrapper>
              <p
                css={[TWText.largeBodyMed]}
                tw="px-128 md:px-96 tb:px-48 text-medium-emphasis"
              >
                {belongText}
              </p>
            </TopTextWrapper>
          </div>
          {/* Blue glow to left of gallery */}
          <Glow
            color="#0351F3"
            radius={500}
            opacity={0.22}
            tw="absolute top[30%] left[25%]"
            horizAlignment="left"
            vertAlignment="top"
          />
        </CarouselSection>
      </CarouselSectionWrapper>
    </ContentWrapper>
  );
};

const CarouselSectionWrapper = styled.div<CarouselSectionWrapperProps>(
  ({ isTabletOrSmaller }) => `
    position: sticky;
    width: 100vw;
    height: calc(100vh + 3061px - 100vw);
    margin: ${isTabletOrSmaller ? "0px 0px 128px 0px" : "64px 0px"};
  `
);

const CarouselSection = styled.div`
  position: sticky;
  top: 0;
  padding-top: 50px;
  width: 100vw;
`;

const OuterCarouselWrapper = styled.div``;

const CarouselWrapper = styled(motion.div)`
  width: 3061px;
  height: 342px;
  margin: 128px auto;
  will-change: transform;
`;

const AboutWrapper = styled.div<AboutWrapperProps>(
  ({ isBottom, isTabletOrSmaller }) => `
    ${isBottom ? "top" : "bottom"}: ${
    isTabletOrSmaller ? "calc(50vh + 256px)" : "calc(50vh + 320px)"
  };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
);

const RibbonWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  white-space: nowrap;
`;

const TopTextWrapper = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin-top: 32px;
  text-align: center;
`;

export default About;
