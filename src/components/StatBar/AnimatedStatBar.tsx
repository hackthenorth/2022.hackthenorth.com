import React from "react";
import { TStatBar } from "src/copy/stats";
import { useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

import StatBar from "./StatBar";

interface AnimatedStatBarProps extends TStatBar {
  scrollAmount: number;
  startOffset: boolean;
}

const AnimatedStatBar: React.FC<AnimatedStatBarProps> = (props) => {
  const height = useDeviceSize("tablet") ? props.tabletHeight : props.height;

  const barHeight =
    props.startOffset || props.scrollAmount > height
      ? height // height is maxed out
      : Math.max(props.scrollAmount, 0); // while animating bar height with scroll

  const offsetAmt =
    props.offset > 0
      ? Math.min(props.scrollAmount, props.offset) // gradient for positive offsets
      : Math.max(-props.scrollAmount, props.offset); // gradient for neggative offsets
  const barOffset = props.startOffset
    ? 240 - Math.floor(barHeight / 2) + offsetAmt
    : 240 - Math.floor(barHeight / 2);

  const config = {
    ...props,
    barHeight: barHeight,
    barOffset: barOffset,
    roundLeft: true,
    roundRight: true,
  };

  return <StatBar {...config} />;
};

export default AnimatedStatBar;
