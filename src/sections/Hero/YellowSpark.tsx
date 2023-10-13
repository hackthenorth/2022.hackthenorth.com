import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/hero/YellowSpark.json");

const YellowSparkAnimation: React.FC = () => (
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
  left: 67%;
  max-width: 37vh;
  width: 100%;
  height: 100%;
  z-index: -10;

  ${mediaQueries.tablet} {
    top: 9%;
    left: 56%;
    max-width: 30vh;
  }

  ${mediaQueries.largeMobile} {
    top: 0%;
    left: 15%;
    max-width: 23vh;
  }
`;

export default React.memo(YellowSparkAnimation);
