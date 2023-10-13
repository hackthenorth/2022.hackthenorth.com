import React from "react";
import {
  Blob1,
  Blob2,
  Blob3,
  LeftBlueGear,
  Spark1,
  Spark2,
  Spark8,
  Spark9,
  Star1,
  Star2,
  Star3,
  Star3And4,
  Star3And5,
} from "src/assets/img";
import { Glow } from "src/components/base";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { AnimatedStats } from "src/components/StatBar/AnimatedStats";
import { StaticStats } from "src/components/StatBar/StaticStats";
import { useDeviceSize } from "src/utils";
import { deviceBreakpoints } from "src/utils/responsive";
import { styled } from "twin.macro";

const Showcase: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  const isLargeOrSmaller = useDeviceSize("large");

  return (
    <SectionWrapper>
      <ContentWrapper tw="tb:px-4 px-40">
        {!isLargeOrSmaller && (
          <div tw="relative">
            <img
              alt=""
              loading="lazy"
              src={Blob2}
              tw="absolute left[-375px] top[420px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Blob3}
              tw="absolute width[25px] height[40px] left[-60px] top[300px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Spark9}
              tw="absolute left[-500px] top[140px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Spark2}
              tw="absolute left[-500px] top[140px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Spark1}
              tw="absolute left[-375px] top[-150px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Spark8}
              tw="absolute left[-375px] top[-150px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Star1}
              tw="absolute left[-225px] top[375px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Star2}
              tw="absolute left[1250px] top[350px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Star3And5}
              tw="absolute left[1400px] top[200px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Blob1}
              tw="absolute left[1325px] top[-25px]"
            />
            <img
              alt=""
              loading="lazy"
              src={LeftBlueGear}
              tw="absolute left[840px] top[365px]"
            />
          </div>
        )}
        {isLargeOrSmaller && !isTabletOrSmaller && (
          <div tw="relative">
            <img
              alt=""
              loading="lazy"
              src={Blob3}
              tw="absolute width[25px] height[40px] left[-60px] top[300px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Star3And4}
              tw="absolute left[390px] top[360px]"
            />
            <img
              alt=""
              loading="lazy"
              src={Star3}
              tw="absolute left[840px] top[0px]"
            />
            <img
              alt=""
              loading="lazy"
              src={LeftBlueGear}
              tw="absolute left[840px] top[365px]"
            />
          </div>
        )}
        {window.innerWidth < deviceBreakpoints["tablet"] ? (
          <StaticStats />
        ) : (
          <AnimatedStats />
        )}
        {/* Yellow glow to right of showcase */}
        <Glow
          color="#FFE04A"
          radius={300}
          opacity={0.1}
          tw="absolute top[25%] right[0]"
          horizAlignment="right"
          vertAlignment="top"
        />
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Showcase;
