import React from "react";
import { LEADERS_SET } from "src/copy/leaders";
import { useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

import { Leader } from "./Leader";

interface BlendProps {
  isMobileOrSmaller: boolean;
}

export const MobileLeaderCarousel: React.FC = () => {
  const isMobileOrSmaller = useDeviceSize("largeMobile");

  return (
    <div tw="flex justify-start">
      {isMobileOrSmaller && (
        <Blend
          isMobileOrSmaller={isMobileOrSmaller}
          tw="left-0 bg-gradient-to-r to-transparent from-background-blue-gray"
        />
      )}
      <div
        tw="flex justify-start overflow-auto px-80 lm:px-40"
        css={
          "::-webkit-scrollbar {display:none;} scrollbar-width: none; -ms-overflow-style: none;"
        }
      >
        {LEADERS_SET.map((leader) => (
          <Leader key={leader.name} {...leader} opacity={1} />
        ))}
      </div>
      {isMobileOrSmaller && (
        <Blend
          isMobileOrSmaller={isMobileOrSmaller}
          tw="right-0 bg-gradient-to-r from-transparent to-background-blue-gray"
        />
      )}
    </div>
  );
};

const Blend = styled.div<BlendProps>(
  ({ isMobileOrSmaller }) => `
    position: absolute;
    width: ${isMobileOrSmaller ? "20px" : "80px"};
    height: ${isMobileOrSmaller ? "124px" : "176px"};
    `
);
