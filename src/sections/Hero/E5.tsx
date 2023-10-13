import React from "react";
import { HeroE5 } from "src/assets/img";
import { Animation, Glow } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const load = () => import("src/assets/img/hero/E5Building.json");
const E5Animation: React.FC = () => (
  <Wrapper>
    <div tw="relative h-full w-full">
      <div tw="absolute h-full w-full">
        <Animation load={load} placeholder={HeroE5} />
        {/* Pink glow behind E5 */}
        <Glow
          color="#FD73C5"
          radius={300}
          opacity={0.18}
          tw="absolute bottom[50%] right[50%]"
          horizAlignment="right"
          vertAlignment="bottom"
        />
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 60%;
  max-width: 80vh;
  width: 100%;
  height: 100%;
  z-index: -10;

  ${mediaQueries.tablet} {
    top: 25%;
    left: 30%;
    max-width: 55vh;
  }

  ${mediaQueries.largeMobile} {
    top: 10%;
    left: 18%;
    max-width: 45vh;
  }
`;

export default React.memo(E5Animation);
