import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/hero/GreenYellowStar.json");

const GreenYellowStarAnimation: React.FC = () => (
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
  top: 3%;
  left: 74%;
  max-width: 18vh;
  width: 100%;
  height: 100%;
  z-index: -10;

  ${mediaQueries.tablet} {
    top: 23%;
    left: 74%;
    max-width: 13vh;
  }

  ${mediaQueries.largeMobile} {
    top: 10%;
    left: 28%;
    max-width: 11vh;
  }
`;

export default React.memo(GreenYellowStarAnimation);
