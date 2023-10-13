import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/talking-points/PinkStar.json");

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
  top: 16%;
  left: -10%;
  max-width: 15vw;
  width: 100%;
  height: 100%;
  ${mediaQueries.tablet} {
    top: 15%;
    left: 0%;
    max-width: 20vh;
  }
  ${mediaQueries.largeMobile} {
    top: 10%;
    left: 0%;
    max-width: 14vh;
  }
`;

export default React.memo(PinkStarAnimation);
