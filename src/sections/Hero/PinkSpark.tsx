import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/hero/PinkSpark.json");

const PinkSparkAnimation: React.FC = () => (
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
  top: -15%;
  left: 85.5%;
  max-width: 23vh;
  width: 100%;
  height: 100%;
  z-index: -10;

  ${mediaQueries.tablet} {
    top: 7%;
    left: 90%;
    max-width: 18vh;
  }

  ${mediaQueries.largeMobile} {
    top: 0%;
    left: 59%;
    max-width: 17vh;
  }
`;

export default React.memo(PinkSparkAnimation);
