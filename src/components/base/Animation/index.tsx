import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import { useHoverEvents, useDeviceSize } from "src/utils";
import { useReducedMotion } from "src/utils/hooks/useReducedMotion";
import { styled } from "twin.macro";

import { TextureProps, maskVariants, MaskVariant } from "./constants";

export type AnimationProps = React.ComponentPropsWithoutRef<"div"> &
  TextureProps & {
    isPaused?: boolean;
    loop?: boolean;
    speed?: number;
    load: () => Promise<any>;
  };

const Container = styled.span`
  position: relative;
  display: inline-block;
`;

const Animation: React.FC<AnimationProps> = ({
  speed,
  isPaused,
  loop = true,
  texture,
  mask,
  load,
  ...rest
}) => {
  const [isPlaying, setIsPlaying] = useState(!isPaused);
  const [animationData, setAnimationData] = useState();
  const { onHoverStart, toggleHover } = useHoverEvents(setIsPlaying);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    load().then(setAnimationData);
  }, [load]);

  return (
    <Container
      aria-hidden
      tw="h-full w-full"
      onMouseEnter={!isPlaying ? onHoverStart : undefined}
      onClick={toggleHover}
      {...rest}
    >
      <TexturedAsset
        play={!isPaused && !prefersReducedMotion}
        speed={speed}
        texture={texture}
        mask={mask}
        loop={loop}
        animationData={animationData}
        tw="h-full w-full"
      />
    </Container>
  );
};

// only render texture mask if specified
const TexturedAsset = styled(Lottie)<TextureProps>`
  ${({ texture }) =>
    texture &&
    `
      -webkit-mask-image: url(${texture});
      -o-mask-image: url(${texture});
      -moz-mask-image: url(${texture});
      mask-image: url(${texture});
    `}
  ${({ mask }) =>
    mask &&
    `
      mask-image: ${maskVariants[mask as MaskVariant].maskImage};
      filter: ${maskVariants[mask as MaskVariant].filter};
    `}
`;

export default React.memo(Animation);
