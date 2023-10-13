import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/talking-points/PinkBlobs.json");

const PinkBlobsAnimation: React.FC = () => (
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
  top: -35%;
  left: 63%;
  max-width: 5vw;
  width: 100%;
  height: 100%;
  ${mediaQueries.tablet} {
    top: -23%;
    left: 63%;
    max-width: 5vh;
  }
  ${mediaQueries.largeMobile} {
    top: -15%;
    left: 62%;
    max-width: 4vh;
  }
`;

export default React.memo(PinkBlobsAnimation);
