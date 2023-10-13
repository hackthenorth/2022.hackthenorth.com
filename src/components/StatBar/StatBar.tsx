import React from "react";
import { TStatBar } from "src/copy/stats";
import { TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

interface StatBarProps extends TStatBar {
  barHeight: number;
  barOffset: number;
  roundRight: boolean;
  roundLeft: boolean;
}

const StatBar: React.FC<StatBarProps> = (props) => {
  const isMobile = useDeviceSize("largeMobile");

  const style = {
    height: `${props.barHeight}px`,
    marginTop: `${props.barOffset}px`,
    borderTopRightRadius: props.roundRight ? "8px" : "0px",
    borderBottomRightRadius: props.roundRight ? "8px" : "0px",
    borderTopLeftRadius: props.roundLeft ? "8px" : "0px",
    borderBottomLeftRadius: props.roundLeft ? "8px" : "0px",
  };

  return (
    <BarDiv
      tw="p-8 md:p-4 my-10 mx-10 md:m-4 lm:-mx-4"
      css={props.style} // for programatically setting bar colour
      style={style} // for dynamically animating bar position
    >
      <div tw="flex flex-col h-full justify-center">
        <h1
          css={isMobile ? [TWText.title] : [TWText.h1]}
          style={{
            paddingTop: props.offsetText
              ? `${Math.floor(props.height / 4)}px`
              : "0",
          }}
        >
          {props.num}
          <sup>+</sup>
        </h1>
        <p css={[TWText.cta]}> {props.text} </p>
      </div>
    </BarDiv>
  );
};

export const BarDiv = styled.div`
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
`;

export default StatBar;
