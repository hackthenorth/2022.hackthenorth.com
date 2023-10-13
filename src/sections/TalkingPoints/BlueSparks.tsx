import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/talking-points/BlueSparks.json");

const BlueSparksAnimation: React.FC = () => (
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
  top: -20%;
  left: 75%;
  max-width: 15vw;
  width: 100%;
  height: 100%;
  ${mediaQueries.tablet} {
    top: -18%;
    left: 70%;
    max-width: 17vh;
  }
  ${mediaQueries.largeMobile} {
    top: -10%;
    left: 70%;
    max-width: 12vh;
  }
`;

export default React.memo(BlueSparksAnimation);
