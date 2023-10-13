import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  TalkingPoints1,
  TalkingPoints2,
  TalkingPoints3,
  TPSpark,
  Create,
  Make,
} from "src/assets/img";
import { Glow, SectionWrapper } from "src/components/base";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import { TWText, TWFade } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

import BlueSparksAnimation from "./BlueSparks";
import GearsAnimation from "./Gears";
import GreenStarAnimation from "./GreenStar";
import PinkBlobsAnimation from "./PinkBlobs";
import PinkStarAnimation from "./PinkStar";

const TalkingPoints: React.FC = () => {
  const [sparkRef, sparkInView] = useInView();
  const [createRef, createInView] = useInView();
  const [makeRef, makeInView] = useInView();

  const [sparkDivRef, sparkDivInView] = useInView();
  const [createDivRef, createDivInView] = useInView();
  const [makeDivRef, makeDivInView] = useInView();

  return (
    <SectionWrapper>
      <ContentWrapper tw="max-w-screen-xl p-0">
        <div tw="grid grid-cols-2 tb:grid-cols-1 flex-col">
          <div tw="mr-96 tb:mr-0 relative block tb:order-2 padding-left[6%] tb:padding-right[6%]">
            <TalkingPointsTextWrapper
              tw="tb:margin-top[-50%] lm:margin-top[-80%]"
              css={[createDivInView ? TWFade.fadeDown : TWFade.fadeUp]}
            >
              <h1 css={[TWText.h2]} tw="pb-24">
                Spark your inspiration
              </h1>
              <p
                css={[TWText.largeBodyMed]}
                tw="text-medium-emphasis"
                ref={sparkDivRef}
              >
                Connect and collaborate face to face. Create connections with
                students from across the globe. Not from Waterloo? We&#39;ll
                help cover your travel expenses. Chat with industry leaders,
                sponsors, and mentors and open your mind to endless
                possibilities.
              </p>
              <span ref={sparkRef} />
              <SparkIllo alt="" src={TPSpark} />
            </TalkingPointsTextWrapper>
            <TalkingPointsTextWrapper
              css={[makeDivInView ? TWFade.fadeDown : TWFade.fadeUp]}
            >
              <h1 css={[TWText.h2]} tw="pb-24">
                Create something amazing
              </h1>
              <p
                css={[TWText.largeBodyMed]}
                tw="text-medium-emphasis -mr-4"
                ref={createDivRef}
              >
                Join a variety of workshops, tech talks, and career sessions to
                learn something new. We welcome hackers of all experience levels
                to collaborate and build something they are proud of. Don&#39;t
                have the gear you need to make your hack come to life? We&#39;ll
                help you out.
              </p>
              <span ref={createRef} />
              <CreateIllo alt="" src={Create} />
            </TalkingPointsTextWrapper>
            <TalkingPointsTextWrapper
              css={[makeInView ? TWFade.fadeUp : TWFade.fadeDown]}
            >
              <h1 css={[TWText.h2]} tw="pb-24 pt-24 tb:pt-88">
                Make lasting memories
              </h1>
              <p
                css={[TWText.largeBodyMed]}
                tw="text-medium-emphasis"
                ref={makeDivRef}
              >
                Take a break and enjoy fun activities planned just for you! From
                bubble soccer to rock climbing to yoga and more, we make sure
                that every hacker has the chance to play as hard as they work.
              </p>
              <span ref={makeRef} />
              <MakeIllo alt="" src={Make} />
            </TalkingPointsTextWrapper>
          </div>
          <TalkingPointsStickyWrapper>
            <BlueSparksAnimation />
            <PinkBlobsAnimation />
            <div tw="relative block h-full tb:w-3/4 tb:margin-left[12%] tb:h-1/2">
              <FadeImages
                css={[sparkInView ? TWFade.fadeUp : TWFade.fadeDown]}
                src={TalkingPoints1}
                alt="Through a window, a group of seven hackers stand around a table as they brainstorm ideas."
              />
              <FadeImages
                css={[createInView ? TWFade.fadeUp : TWFade.fadeDown]}
                src={TalkingPoints2}
                alt="Two bubble soccer teams face off, running back and forth on a field of green grass surounded by windswept trees."
              />
              <FadeImages
                css={[makeInView ? TWFade.fadeUp : TWFade.fadeDown]}
                src={TalkingPoints3}
                alt="A group of four hackers gather around a single hacker as they present their project."
              />
            </div>
            <GearsAnimation />
            <PinkStarAnimation />
            <GreenStarAnimation />
            {/* Pink glow to right of talking points img */}
            <Glow
              color="#FD73C5"
              radius={400}
              opacity={0.15}
              tw="absolute top[50%] right[0px]"
              horizAlignment="right"
              vertAlignment="top"
            />
          </TalkingPointsStickyWrapper>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

const FadeImages = styled.img`
  position: absolute;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  top: 0px;
  bottom: 0px;
  width: 100%;
  transition: opacity 0.3s linear;
`;

const TalkingPointsTextWrapper = styled.div`
  display: flex;
  height: 100vh;
  min-height: 600px;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.3s linear;

  ${mediaQueries.tablet} {
    text-align: center;
    height: 50vh;
    min-height: unset;
  }
`;

const TalkingPointsStickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 100vh;
  min-height: 600px;
  padding-left: 96px;
  padding-right: 6%;

  ${mediaQueries.tablet} {
    top: -20%;
    height: 100vh;
    padding-left: 0px;
    padding-left: 6%;
    min-height: unset;
  }
`;

const SparkIllo = styled.img`
  position: absolute;
  top: 9%;
  left: -18%;
  max-width: 20%;

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const CreateIllo = styled.img`
  position: absolute;
  top: 47%;
  left: -18%;
  max-width: 20%;

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const MakeIllo = styled.img`
  position: absolute;
  top: 81%;
  left: -40%;
  max-width: 41%;

  ${mediaQueries.tablet} {
    display: none;
  }
`;

export default TalkingPoints;
