import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/hero/GreenStar.json");

const GreenStarAnimation: React.FC = () => (
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
  top: -28%;
  left: 0%;
  max-width: 12vh;
  width: 100%;
  height: 100%;
  z-index: -10;

  ${mediaQueries.tablet} {
    display: none;
  }

  ${mediaQueries.largeMobile} {
    display: none;
  }
`;

export default React.memo(GreenStarAnimation);
