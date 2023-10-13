import debounce from "lodash.debounce";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { theme } from "twin.macro";

interface AvatarProps extends ComponentPropsWithoutRef<"img"> {
  name: string;
  size?: number;
  isSquare?: boolean;
  color?: string;
}

interface AvatarWrapperProps {
  size: number;
  color?: string;
  hovered: boolean;
  isSquare: boolean;
}

interface AvatarColorOverlayProps {
  hovered: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  name,
  srcSet,
  color,
  size = 100,
  isSquare = false,
  ...rest
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div {...rest}>
      <div
        tw="py-24"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AvatarWrapper
          className={className}
          size={size}
          color={color}
          hovered={hovered}
          isSquare={isSquare}
        >
          <AvatarColorOverlay alt="" color={color} hovered={hovered} />
          <AvatarImage src={src} srcSet={srcSet} alt={`Headshot of ${name}`} />
        </AvatarWrapper>
      </div>
    </div>
  );
};

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 3px solid ${({ color, hovered }) => (hovered ? color : "white")};
  border-radius: ${({ isSquare }) => (isSquare ? "5px" : "50%")};
  animation: ${({ hovered }) => (hovered ? theme`animation.bounce` : "none")};
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AvatarColorOverlay = styled.img<AvatarColorOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  background-color: ${({ color }) => color};
  opacity: ${({ hovered }) => (hovered ? 0.3 : 0)};
  pointer-events: none;
`;

export default Avatar;
