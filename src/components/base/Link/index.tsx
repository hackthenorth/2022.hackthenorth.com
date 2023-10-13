import React, { ComponentPropsWithRef, useMemo } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { TWText } from "src/styles";
import tw, { styled, theme } from "twin.macro";

export type LinkProps = ComponentPropsWithRef<"a"> & {
  /**
   *
   */
  newTab?: boolean;
};

const isRelativeHref = (href: string) => {
  try {
    new URL(href);
    return false;
  } catch (err) {
    return true;
  }
};

const RawLink = styled.a`
  color: inherit;
  width: fit-content;
  text-decoration: none;
`;

const Link: React.FC<LinkProps> = ({
  newTab,
  href = "",
  children,
  ...rest
}) => {
  const isInternal: boolean = useMemo(() => isRelativeHref(href), [href]);
  const target = newTab ? "_blank" : undefined;
  const rel = newTab ? "noopener noreferrer" : "";

  return isInternal ? (
    <RouterLink to={href}>
      <a target={target} href={href} rel={rel} {...rest}>
        {children}
      </a>
    </RouterLink>
  ) : (
    <RawLink
      href={href}
      target={target}
      rel={rel}
      {...(rest as ComponentPropsWithRef<"a">)}
    >
      {children}
    </RawLink>
  );
};

// source: https://codepen.io/mteplitski/pen/NWGQRZV
const UnderlineWrapper = styled.span`
  outline: none;
  width: fit-content;
  text-decoration: underline;
  &:hover,
  &:focus {
    color: ${theme`colors.primary.blue1`};
    cursor: pointer;
  }
`;

const StyledLink: React.FC<LinkProps> = ({ children, ...rest }) => (
  <Link {...(rest as any)}>
    <p tw="inline-block outline-none text-white font-heading">
      <UnderlineWrapper>{children}</UnderlineWrapper>
    </p>
  </Link>
);

export { StyledLink as Link, Link as UnstyledLink };
