import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/hero/GreenGear.json");

const GreenGearAnimation: React.FC = () => (
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
  top: 17%;
  left: 54%;
  max-width: 38vh;
  width: 100%;
  height: 100%;
  z-index: -10;

  ${mediaQueries.tablet} {
    top: 27%;
    left: 28%;
    max-width: 25vh;
  }

  ${mediaQueries.largeMobile} {
    top: 13%;
    left: 6%;
    max-width: 20vh;
  }
`;

export default React.memo(GreenGearAnimation);
