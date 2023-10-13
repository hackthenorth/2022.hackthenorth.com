import React, { ComponentPropsWithoutRef } from "react";
import { TWTransition, TWShared } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { DefaultTheme, ThemeProps } from "styled-components";
import tw, { styled, TwStyle } from "twin.macro";

type Variant = "primary" | "secondary" | "none";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
};

// TODO: secondary button
export const TWButton: Record<Variant, TwStyle> = {
  primary: tw`bg-gradient-to-r from-primary-blue2 to-primary-blue1 border border-color[#69C9F2]`,
  secondary: tw`bg-background-blue-gray border-2 border-white`,
  none: tw`bg-transparent border-none`,
};

const Button: React.FC<Props> = ({ children, variant, ...props }) =>
  variant === "secondary" ? (
    <SecondaryButton>{children}</SecondaryButton>
  ) : (
    <StyledButton css={[TWShared.hover]} {...props}>
      {children}
    </StyledButton>
  );

const StyledButton = styled.button<Props & ThemeProps<DefaultTheme>>`
  ${tw`flex justify-center align-items[center] rounded-100  cursor-pointer outline-none text-white font-heading`}
  ${({ variant }: Props) => TWButton[variant || "primary"]};
  /* ${TWShared.focus}
  ${TWShared.hover}
  ${TWShared.disabled} */

  &:focus {
    outline: none;
  }
`;

const SecondaryButton = styled.button`
  margin-top: auto;
  margin-bottom: auto;
  color: white;

  height: 48px;

  background: linear-gradient(#182027, #182027) padding-box,
    linear-gradient(to right, #037ff3, #43afde) border-box;
  border-radius: 100px;

  border: 2px solid transparent;

  &:hover,
  &:focus {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    cursor: pointer;
    outline: none;
    background: linear-gradient(#182027, #182027) padding-box,
      conic-gradient(from 30deg, #fd73c5, #16e912, #ffe04a, #43afde, #fd73c5)
        border-box;
  }
`;

export default Button;
