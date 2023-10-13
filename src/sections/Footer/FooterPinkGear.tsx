import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/footer/pink-gear.json");

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
  top: 594px;
  left: 458px;
  z-index: 30;
  width: 200px;
  height: 200px;

  ${mediaQueries.large} {
    left: 438px;
  }

  ${mediaQueries.medium} {
    display: none;
  }
`;

export default React.memo(YellowSparkAnimation);
