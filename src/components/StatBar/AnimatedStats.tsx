import React, { useEffect, useRef, useState } from "react";
import AnimatedStatBar from "src/components/StatBar/AnimatedStatBar";
import { STATS_SET } from "src/copy/stats";
import { useDeviceSize } from "src/utils";
import "twin.macro";

export const AnimatedStats: React.FC = () => {
  const [scrollAmt, setScrollAmt] = useState(0);
  const containerRef = useRef(null);

  const VISIBILITY_PADDING = useDeviceSize("tablet") ? 0 : 300;

  const applyScrollListener = (ref: any, setScrollAmt: any) => {
    document?.getElementById("container")?.addEventListener("scroll", () => {
      const offsetTop = ref.current.getBoundingClientRect().top;
      setScrollAmt(window.innerHeight - offsetTop - VISIBILITY_PADDING);
    });
  };

  useEffect(() => {
    applyScrollListener(containerRef, setScrollAmt);
  }, [document]);

  const maxHeight = Math.max(...STATS_SET.map((o) => o.height));
  const startOffset = scrollAmt > maxHeight;

  return (
    <div tw="mt-220 h-480 flex justify-center" ref={containerRef}>
      {STATS_SET.map((stat) => (
        <AnimatedStatBar
          key={stat.text}
          {...stat}
          startOffset={startOffset}
          scrollAmount={startOffset ? scrollAmt - maxHeight : scrollAmt}
        ></AnimatedStatBar>
      ))}
    </div>
  );
};
