import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/talking-points/Gears.json");

const GearsAnimation: React.FC = () => (
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
  top: 15%;
  left: 89%;
  max-width: 8vw;
  width: 100%;
  height: 100%;
  ${mediaQueries.tablet} {
    top: 15%;
    left: 77%;
    max-width: 11vh;
  }
  ${mediaQueries.largeMobile} {
    top: 9%;
    left: 75%;
    max-width: 7vh;
  }
`;

export default React.memo(GearsAnimation);
