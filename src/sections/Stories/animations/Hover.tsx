import React from "react";
import { Animation } from "src/components/base";
import { styled } from "twin.macro";

type TProps = {
  load: () => Promise<any>;
};

const HoverAnimation: React.FC<TProps> = ({ load }) => (
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
  top: 75%;
  height: 25px;
  width: 70px;
  z-index: -999;
`;

export default React.memo(HoverAnimation);
