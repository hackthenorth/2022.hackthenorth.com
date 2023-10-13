import React from "react";
import { deviceBreakpoints } from "src/utils/responsive";
import styled from "styled-components";

interface Props {
  image: string;
  alt: string;
}

const HackerStoryImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${deviceBreakpoints.tablet}px) {
    position: static;
    transform: none;
    max-width: 373px;
    max-height: 373px;
  }

  @media (max-width: ${deviceBreakpoints.mobile}px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: ${deviceBreakpoints.smallMobile}px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

const StoriesImgWrapper: React.FC<Props> = ({ image, alt }) => {
  return <HackerStoryImage src={image} alt={alt} />;
};

export default StoriesImgWrapper;
