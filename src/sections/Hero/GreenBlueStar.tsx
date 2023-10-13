import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/hero/GreenBlueStar.json");

const GreenBlueStarAnimation: React.FC = () => (
  <Wrapper>
    <div tw="relative h-full w-full">
      <div tw="absolute h-full w-full">
        <Animation load={load} />
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  top: -14%;
  left: 59%;
  max-width: 16vh;
  width: 100%;
  height: 100%;
  z-index: -10;

  ${mediaQueries.tablet} {
    top: 5%;
    left: 50%;
    max-width: 13vh;
  }

  ${mediaQueries.largeMobile} {
    top: 2%;
    left: -6%;
    max-width: 11vh;
  }
`;

export default React.memo(GreenBlueStarAnimation);
