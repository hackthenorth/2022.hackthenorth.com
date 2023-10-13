import tw from "twin.macro";
import { css } from "twin.macro";

export const TWText = {
  // mobile not finalized
  // Unfixed : https://github.com/tailwindlabs/tailwindcss/issues/2920
  title: tw`font-heading font-weight[900] text-high-emphasis text-56 leading-normal tb:(text-56) lm:(text-36!) mb:(text-36!)`,
  h1: tw`font-heading font-weight[900] text-high-emphasis text-48 leading-normal tb:(text-36) lm:(text-32!)`,
  h2: tw`font-heading font-weight[900] text-high-emphasis text-36 leading-normal tb:(text-32) lm:(text-28! leading-relaxed)`,
  h3: tw`font-heading font-weight[900] text-high-emphasis text-28 leading-normal tb:(text-24 leading-relaxed) lm:(text-18!) mb:(text-16!)`,
  largeBody: tw`font-body font-weight[400] text-high-emphasis text-20 leading-relaxed lm:(text-18)`,
  largeBodyMed: tw`font-body font-weight[500] text-high-emphasis text-20 leading-relaxed lm:(font-weight[400] text-16)`,
  largeBodyBold: tw`font-body font-weight[700] text-high-emphasis text-20 leading-relaxed`,
  body: tw`font-body font-weight[400] text-high-emphasis text-16 leading-relaxed tb:(text-14 leading-extra)`,
  button: tw`font-heading font-weight[400] text-high-emphasis text-16 leading-relaxed tb:(text-14 leading-extra)`,
  bodyBold: tw`font-body font-weight[700] text-high-emphasis text-16 leading-relaxed tb:(text-14 leading-extra)`,
  overline: tw`font-body font-weight[500] text-high-emphasis text-16 tracking-wide leading-relaxed`,
  caption: tw`font-body font-weight[400] text-high-emphasis text-14 leading-loose tb:(text-10)`,
  note: tw`font-note font-weight[400] text-blue-gray text-20 leading-relaxed`,
  cta: tw`font-body font-weight[500] text-high-emphasis text-16 leading-extra tb:(text-10)`,
  link: tw`font-body font-weight[700] underline text-high-emphasis text-16 leading-extra tb:(text-14)`,
};

export const TWTransition = {
  hover: tw`hover:opacity-80 transition-all duration-100 ease-linear`,
};

export const TWGradient = {
  default: css`
    background: linear-gradient(128deg, #edeaf1 0%, rgba(255, 255, 255, 0) 100%),
      #d1deef;
  `,
};

export const TWShared = {
  hover: css`
    &:hover {
      transition: opacity 200ms;
      &:not(:disabled) {
        opacity: 0.85;
      }
    }
  `,
  avatar: css`
    transform: scale(1);
    opacity: 1;
    transition: all 150ms ease-in-out;

    &:hover {
      transform: scale(1.05);
      opacity: 0.85;
    }
  `,
  focus: css``,
  disabled: css`
    &:disabled {
      cursor: not-allowed;
      filter: grayscale(1);
    }
  `,
};

export const TWAnimation = {
  underline: css`
    position: relative;

    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      transition: width 250ms;
    }
  `,
};

export const TWFade = {
  fadeUp: css`
    opacity: 1;
  `,
  fadeDown: css`
    opacity: 0;
  `,
};
