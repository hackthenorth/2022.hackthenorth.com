import React, { ComponentPropsWithRef } from "react";
import tw from "twin.macro";
import { styled } from "twin.macro";

import { Icon } from "../base";

export interface BannerProps extends ComponentPropsWithRef<"div"> {
  show?: boolean;
  toggleShow?: () => void;
}

const Container = styled.div<BannerProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  z-index: 100;
  & > .contents {
    margin: auto;
  }
  border-top: 1px solid rgba(255, 255, 255, 0.6);
`;

const CloseButton = styled.button`
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  cursor: pointer;
  transform: rotate(45deg);
`;

const Banner: React.FC<BannerProps> = ({
  show,
  toggleShow,
  children,
  ...rest
}) => (
  <Container show={show} {...rest} tw="bg-background-elevation">
    <div className="contents">{children}</div>
    <CloseButton
      tabIndex={show ? 0 : -1}
      aria-hidden={show ? undefined : "true"}
      aria-label="Close"
    >
      <Icon
        name="plus"
        width={24}
        height={24}
        onClick={toggleShow}
        tw="rotate-45"
      />
    </CloseButton>
  </Container>
);

export default Banner;
