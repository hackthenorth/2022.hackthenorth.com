import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/hero/PinkGear.json");

const PinkGearAnimation: React.FC = () => (
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
  top: -7%;
  left: 84%;
  max-width: 28vh;
  width: 100%;
  height: 100%;
  z-index: -10;

  ${mediaQueries.tablet} {
    top: -2%;
    left: 72%;
    max-width: 17vh;
  }

  ${mediaQueries.largeMobile} {
    display: none;
  }
`;

export default React.memo(PinkGearAnimation);
