import React from "react";
import { Animation } from "src/components/base";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

type TProps = {
  load: () => Promise<any>;
};

const ClickedAnimation: React.FC<TProps> = ({ load }) => (
  <Wrapper>
    <div tw="relative h-full w-full">
      <div tw="absolute h-full w-full">
        <Animation load={load} loop={false} />
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  top: -75%;
  height: 90px;
  width: 75px;
  z-index: -999;

  ${mediaQueries.largeMobile} {
    top: -82.5%;
    height: 65px;
    width: 50px;
  }

  ${mediaQueries.mobile} {
    top: -70%;
    height: 60px;
    width: 45px;
  }
`;

export default React.memo(ClickedAnimation);
