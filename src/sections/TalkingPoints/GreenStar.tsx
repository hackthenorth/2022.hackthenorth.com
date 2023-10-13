import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/talking-points/GreenStar.json");

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
  top: 20%;
  left: 22%;
  max-width: 3vw;
  width: 100%;
  height: 100%;
  ${mediaQueries.tablet} {
    top: 18%;
    left: 27%;
    max-width: 5vh;
  }
  ${mediaQueries.largeMobile} {
    top: 12%;
    left: 27%;
    max-width: 4vh;
  }
`;

export default React.memo(GreenStarAnimation);
