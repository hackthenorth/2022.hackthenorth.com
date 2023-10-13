import React from "react";
import { LeftChevron, RightChevron, SelectedDot } from "src/assets/img";
import { styled } from "twin.macro";

const InlineButton = styled.button`
  display: inline;
  background: transparent;
  border-style: none;
  box-shadow: none;
`;

export type CarouselNavProps = {
  numSlides: number;
  backCallback: () => void;
  forwardCallback: () => void;
  selectCallback: (num: number) => void;
  selected: number;
};

export const CarouselNav: React.FC<CarouselNavProps> = (props) => {
  // display selected page
  const selection = Array.from({ length: props.numSlides }, () => false);
  selection[props.selected] = true;

  // opacity values
  const ENABLED_OPACITY = 1;
  const SELECTED_OPACITY = 0.9;
  const DISABLED_OPACITY = 0.5;

  const firstSlide = props.selected == 0;
  const lastSlide = props.selected == props.numSlides - 1;

  return (
    <div tw="w-full flex justify-center items-center pb-2">
      <StyledChevronWrapper
        aria-label="Previous slide"
        tw="md:mx-20 mx-40"
        disabled={firstSlide}
        style={{
          opacity: firstSlide ? DISABLED_OPACITY : ENABLED_OPACITY,
        }}
        onClick={props.backCallback}
      >
        <img alt="" loading="lazy" src={LeftChevron} tw="min-w-8 min-h-8" />
      </StyledChevronWrapper>
      {selection.map((sel, i) => (
        <InlineButton
          aria-label={`Go to slide ${i + 1}`}
          tw="mx-4 cursor-pointer"
          key={i}
          style={{
            opacity: sel ? SELECTED_OPACITY : DISABLED_OPACITY,
            cursor: props.selected !== i ? "pointer" : "default",
          }}
          onClick={() => {
            props.selectCallback(i);
          }}
        >
          <img alt="" loading="lazy" src={SelectedDot} tw="min-w-3 min-h-3" />
        </InlineButton>
      ))}
      <StyledChevronWrapper
        aria-label="Next slide"
        tw=" md:mx-20 mx-40"
        disabled={lastSlide}
        style={{
          opacity: lastSlide ? DISABLED_OPACITY : ENABLED_OPACITY,
        }}
        onClick={props.forwardCallback}
      >
        <img alt="" loading="lazy" src={RightChevron} tw="min-w-8 min-h-8" />
      </StyledChevronWrapper>
    </div>
  );
};

const StyledChevronWrapper = styled.button`
  cursor: default;
  border-radius: 50%;
  background: transparent;
  padding: 2px;
  transition: background 0.1s ease-in-out;
  &:hover:not([disabled]) {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }
`;
