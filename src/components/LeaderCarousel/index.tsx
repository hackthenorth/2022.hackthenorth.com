import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { LEADERS_SET } from "src/copy/leaders";
import { styled } from "twin.macro";

import { CarouselNav } from "../base/CarouselNav";

import { Leader } from "./Leader";

export const LeaderCarousel: React.FC = () => {
  const L_PER_PAGE = 5;
  const NUM_PAGES = 15 / L_PER_PAGE;

  const [idx, setIdx] = useState(0);
  const [changed, setChanged] = useState(true);

  // the x leaders currently displayed
  const working_set = LEADERS_SET.slice(
    idx * L_PER_PAGE,
    (idx + 1) * L_PER_PAGE
  );

  // display selected page
  const selection = Array.from({ length: NUM_PAGES }, () => false);
  selection[idx] = true;

  // this is the jankiest thing ever but the animations don't play properly
  // without the single ms delay so here we are :))
  const next = () => {
    if (idx < NUM_PAGES - 1) {
      setIdx(idx + 1);

      setChanged(true);
      setTimeout(() => {
        setChanged(false);
      }, 1);
    }
  };

  const prev = () => {
    if (idx > 0) {
      setIdx(idx - 1);

      setChanged(false);
      setTimeout(() => {
        setChanged(true);
      }, 0.5);
    }
  };

  const select = (num: number) => {
    // can't select navigate to the currently selected page
    if (num !== idx && num >= 0 && num < NUM_PAGES) {
      setIdx(num);

      // control the slide animation direction
      if (num > idx) {
        setChanged(true);
        setTimeout(() => {
          setChanged(false);
        }, 1);
      } else {
        setChanged(false);
        setTimeout(() => {
          setChanged(true);
        }, 1);
      }
    }
  };

  interface ShadowProps {
    ineligible: number;
    start: number;
    before: boolean;
  }

  const Shadow: React.FC<ShadowProps> = (props) => {
    const padding =
      window.innerWidth > 1280 ? (window.innerWidth - 1280) / 2 : 0;

    if (idx === props.ineligible)
      return <div style={{ width: `${padding}px` }}></div>;

    const shadow_set = LEADERS_SET.slice(props.start, props.start + 4);

    return (
      <LeaderPage
        style={{
          justifyContent: props.before ? "flex-end" : "flex-start",
          width: `${padding}px`,
        }}
      >
        {shadow_set.map((leader, s_idx) => (
          <Leader
            key={leader.name}
            {...leader}
            opacity={-0.1 + (props.before ? s_idx : 3 - s_idx) * 0.2}
          />
        ))}
      </LeaderPage>
    );
  };

  return (
    <div>
      <Animated
        animationIn="slideInLeft"
        animationInDuration={200}
        animationOut="slideInRight"
        animationOutDuration={400}
        isVisible={changed}
        tw="w-max flex justify-center mb-40 h-320"
      >
        <Shadow ineligible={0} start={idx * L_PER_PAGE - 4} before={true} />
        <LeaderPage>
          {working_set.map((leader) => (
            <Leader key={leader.name} {...leader} opacity={1} />
          ))}
        </LeaderPage>
        <Shadow
          ineligible={NUM_PAGES - 1}
          start={(idx + 1) * L_PER_PAGE}
          before={false}
        />
      </Animated>
      <CarouselNav
        numSlides={NUM_PAGES}
        backCallback={prev}
        forwardCallback={next}
        selectCallback={select}
        selected={idx}
      />
    </div>
  );
};

const LeaderPage = styled.div`
  display: flex;
  justify-content: center;
`;
