import React from "react";
import { MOBILE_STATS_SET } from "src/copy/stats";
import { styled } from "twin.macro";

import StatBar from "./StatBar";

export const StaticStats: React.FC = () => {
  return (
    <div tw="flex w-full justify-between mt-40">
      <StatCol tw="pt-100 mr-16">
        {MOBILE_STATS_SET[0].map((bar) => (
          <StatBar
            key={bar.text}
            {...bar}
            barHeight={bar.height}
            barOffset={0}
            roundLeft={false}
            roundRight={true}
          />
        ))}
      </StatCol>
      <StatCol tw="pt-160">
        {MOBILE_STATS_SET[1].map((bar) => (
          <StatBar
            key={bar.text}
            {...bar}
            barHeight={bar.height}
            barOffset={0}
            roundLeft={true}
            roundRight={true}
          />
        ))}
      </StatCol>
      <StatCol tw="ml-16">
        {MOBILE_STATS_SET[2].map((bar) => (
          <StatBar
            key={bar.text}
            {...bar}
            barHeight={bar.height}
            barOffset={0}
            roundLeft={true}
            roundRight={false}
          />
        ))}
      </StatCol>
    </div>
  );
};

const StatCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;
