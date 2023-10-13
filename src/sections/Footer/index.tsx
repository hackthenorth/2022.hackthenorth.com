import { useViewportScroll, motion, useTransform } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import { RainbowLine, YellowSticky, Stairs, Wisps } from "src/assets/img";
import { DidWeMissAnything } from "src/components";
import { UnstyledLink } from "src/components/base";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { TWShared, TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import tw, { styled } from "twin.macro";

import FooterPairOfGears from "./FooterPairOfGears";
import FooterPinkGear from "./FooterPinkGear";
import OrganizerCarousel from "./OrganizerCarousel";
import { Organizer } from "./OrganizerCarousel/organizers";

interface OrganizerTextProps {
  isHidden: boolean;
}

const DEFAULT_ORGANIZER_TEXT = "";
const DEFAULT_EMOJI = "🇨🇦";

const Footer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const translate = useTransform(scrollY, [start, end], [0, -120]);
  const scale = useTransform(scrollY, [start, end], [1, 1.25]);
  const [isHovering, setHovering] = useState(false);
  const [emoji, setEmoji] = useState(DEFAULT_EMOJI);
  const [organizerText, setOrganizerText] = useState(DEFAULT_ORGANIZER_TEXT);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top * 1.05 + scrollTop;
      const offsetBottom = offsetTop + window.innerHeight + rect.height;
      setStart(offsetTop);
      setEnd(offsetBottom);
    }
  }, [ref]);

  const handleOnLeave = () => {
    setHovering(false);
    setEmoji(DEFAULT_EMOJI);
  };

  const handleOnHover = (organizer: Organizer) => {
    setOrganizerText(`${organizer.name}, ${organizer.team}`);
    setEmoji(organizer.emoji);
    setHovering(true);
  };

  return (
    <SectionWrapper>
      <ContentWrapper>
        <div tw="relative mb-48 z-10">
          <DidWeMissAnything />
        </div>
        <div tw="relative flex mt--320 w-full tb:(flex-col mt--360 items-center)">
          <img
            alt={`Hey hackers! 
            The wait is finally over! We’re so glad to be bringing back an in-person experience for Hack the North this year. We want to give every hacker the opportunity to create something they’re proud of. We can’t wait for you to feel the buzz of energy throughout Waterloo's campus, connect with fellow hackers through engaging activities, and discover the incredible workshops and speakers we have lined up. We’ll see you in Waterloo this September. We’re so excited to see all the amazing things you’ll create.
            Dream big,
            Team Hack the North 💙`}
            src={YellowSticky}
            tw="w-1/2 mr--112 mt-320 z-10 min-width[450px] md:(mr--320) tb:(min-width[0px] width[475px] mx-auto) lm:(ml--20 width[425px]) mb:(ml--28 width[375px])"
            loading="lazy"
          />
          <FooterPinkGear />
          <div
            ref={ref}
            tw="relative w-2/3 h-auto min-width[800px] tb:(min-width[680px] min-height[808px] mt--360) lm:(w-full min-width[600px] min-height[713px] ml--120)"
          >
            <img
              src={Stairs}
              alt="E5 stairs"
              tw="absolute width[74%] z-20 right-0 bottom-0"
              loading="lazy"
            />
            <motion.div
              style={{ x: translate, scale: scale }}
              tw="absolute width[97%]"
            >
              <img src={Wisps} alt="Footer Wisps" loading="lazy" />
            </motion.div>
          </div>
          <FooterPairOfGears />
        </div>
        <div tw="m-16 mb-72 flex flex-col justify-evenly items-center text-center">
          <p
            css={[isLargeMobileOrSmaller ? TWText.body : TWText.largeBodyBold]}
          >
            Made with{" "}
            <span role="img" aria-label="blue heart emoji">
              💙
            </span>{" "}
            for students by students{" "}
            <span role="img" aria-label="favourite-emoji">
              {emoji}
            </span>
          </p>
          <OrganizerText aria-hidden={!isHovering} isHidden={!isHovering}>
            {organizerText}
          </OrganizerText>
        </div>
        <OrganizerCarousel
          handleOnHover={handleOnHover}
          handleOnLeave={handleOnLeave}
        />
        <img alt="" loading="lazy" src={RainbowLine} tw="mb-32 w-full" />
        <div tw="flex justify-between mb-48">
          <div tw="flex space-x-16">
            <UnstyledLink
              css={[TWText.body, TWShared.hover]}
              tw="text-white no-underline"
              href="/code-of-conduct"
            >
              Code of Conduct
            </UnstyledLink>
            <UnstyledLink
              css={[TWText.body, TWShared.hover]}
              tw="text-white no-underline"
              href="/covid-policy"
            >
              COVID-19 Safety
            </UnstyledLink>
            <UnstyledLink
              css={[TWText.body, TWShared.hover]}
              tw="text-white no-underline"
              href="/travel-guidelines"
            >
              Travel Guidelines
            </UnstyledLink>
            <UnstyledLink
              css={[TWText.body, TWShared.hover]}
              tw="text-white no-underline"
              href="/privacy"
            >
              Privacy Policy
            </UnstyledLink>
          </div>
          <div>
            <p css={[TWText.body]}>Copyright © Techyon, 2022</p>
          </div>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

const OrganizerText = styled.h3<OrganizerTextProps>(({ isHidden }) => [
  isHidden ? tw`opacity-0` : tw`opacity-100`,
  TWText.largeBodyBold,
  tw`absolute mt-96`,
]);

export default Footer;
