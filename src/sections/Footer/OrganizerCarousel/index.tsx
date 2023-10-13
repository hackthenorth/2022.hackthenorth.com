import React, { useState } from "react";
import { Avatar, InfiniteCarousel } from "src/components";
import { TWShared } from "src/styles";
import { randomize, useDeviceSize } from "src/utils";
import tw, { styled, theme } from "twin.macro";

import { ORGANIZERS, Organizer } from "./organizers";
interface OrganizerCarouselRowProps {
  handleOnHover: (organizer: Organizer) => void;
  handleOnLeave: () => void;
}

const RANDOM_ORGANIZERS = randomize<Organizer>(ORGANIZERS);
const COLORS = [
  theme`colors.secondary.pink`,
  theme`colors.secondary.yellow`,
  theme`colors.accent.yellow`,
  theme`colors.accent.green`,
  theme`colors.primary.blue1`,
  theme`colors.primary.blue2`,
];

const OrganizerCarousel: React.FC<OrganizerCarouselRowProps> = ({
  handleOnHover,
  handleOnLeave,
}) => {
  const isMediumOrSmaller = useDeviceSize("medium");

  return (
    <div>
      <StyledInfiniteCarousel
        name={`organizers-carousel`}
        stopOnHover
        direction={"right"}
        aria-label="Organizers Carousel"
        speed={35}
        tw="py-8 mb-8"
      >
        {RANDOM_ORGANIZERS.map((data, i) => {
          const color = COLORS[i % COLORS.length];

          return (
            <Avatar
              key={data.name}
              src={data.img}
              srcSet={data.srcSet}
              isSquare={data.isSquare}
              onMouseEnter={() => handleOnHover(data)}
              onMouseLeave={handleOnLeave}
              size={isMediumOrSmaller ? 48 : 64}
              name={data.name}
              color={color}
              tw="ml-10 mr-10"
              css={[TWShared.avatar]}
            />
          );
        })}
      </StyledInfiniteCarousel>
    </div>
  );
};

const StyledInfiniteCarousel = styled(InfiniteCarousel)`
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;
  mask-image: linear-gradient(
    to right,
    transparent,
    black,
    black,
    black,
    black,
    black,
    black,
    transparent
  );
`;

export default OrganizerCarousel;
