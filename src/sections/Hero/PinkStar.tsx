import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/hero/PinkStar.json");

const PinkStarAnimation: React.FC = () => (
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
  top: -30%;
  left: 55%;
  max-width: 9vh;
  width: 100%;
  height: 100%;
  z-index: -10;

  ${mediaQueries.tablet} {
    display: none;
  }

  ${mediaQueries.largeMobile} {
    top: -3%;
    left: 9%;
    max-width: 22vh;
  }
`;

export default React.memo(PinkStarAnimation);
