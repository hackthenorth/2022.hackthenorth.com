import { useViewportScroll, motion, useTransform } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import {
  UWEngImg,
  UWEngBox,
  BoxWisps,
  StarSmall,
  StarBig,
  SparkOrange,
  SparkPink,
} from "src/assets/img";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import SectionWrapper from "src/components/base/Layout/SectionWrapper";
import { TWText } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

const UWEngineering: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const rotate = useTransform(scrollY, [start, end], [0, 20]);
  const translate = useTransform(scrollY, [start, end], [0, 90]);
  const scale = useTransform(scrollY, [start, end], [1, 1.2]);
  const starLeft = useTransform(scrollY, [start, end], [0, -30]);
  const starRight = useTransform(scrollY, [start, end], [0, 100]);

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top * 0.92 + scrollTop;
      const offsetBottom = offsetTop + window.innerHeight;
      setStart(offsetTop);
      setEnd(offsetBottom);
    }
  }, [ref]);

  return (
    <SectionWrapper tw="mb-160 w-full">
      <ContentWrapper>
        <div tw="flex tb:(block)" ref={ref}>
          <div tw="relative w-3/5 h-2/5 ml--160 tb:(m-auto w-4/5 flex-col) lg:w-5/6 height[516px] width[800px] md:width[1000px] lm:(w-full height[250px] left[15px]) mb:(left[0px] height[220px]) sm:height[200px]">
            <img
              alt=""
              loading="lazy"
              src={SparkOrange}
              tw="absolute lg:hidden left[-410px] top[280px] "
            />
            <img
              alt=""
              loading="lazy"
              src={SparkPink}
              tw="absolute lg:hidden left[-450px] top[100px] "
            />
            <motion.div
              tw="absolute w-256 top[280px] md:(left[150px] width[35%]) tb:left--20 lm:(width[150px] top[125px] left[20px]) mb:(width[125px]) sm:(width[100px] top[110px])"
              style={{ rotate: rotate }}
            >
              <img alt="" loading="lazy" src={UWEngBox} />
            </motion.div>
            <motion.div
              style={{ x: translate, scale: scale }}
              tw="absolute w-480 top[38px] left[154px] transform rotate-6 md:(left[280px] top[90px] width[55%]) tb:left[134px] lm:(width[230px] left[110px] top[15px]) mb:(width[220px] left[95px] top[16px]) sm:(width[180px] left[80px] top[20px])"
            >
              <img alt="" loading="lazy" src={BoxWisps} />
            </motion.div>
            <motion.div
              style={{ x: starLeft }}
              tw="absolute top[210px] left[64px] md:left[214px] tb:left[44px] lm:(left[70px] top[110px] width[25px]) mb:(left[60px] top[100px]) sm:(left[45px] top[85px] width[20px])"
            >
              <img alt="" loading="lazy" src={StarSmall} tw="lm:w-full" />
            </motion.div>
            <motion.div
              style={{ x: starRight }}
              tw="absolute top[390px] left[444px] md:left[500px] tb:left[424px] lm:(left[250px] top[170px] width[40px]) mb:(left[240px] top[165px]) sm:(left[190px] top[135px] width[35px])"
            >
              <img alt="" loading="lazy" src={StarBig} tw="lm:w-full" />
            </motion.div>
          </div>
          <UWEngineeringTextWrapper>
            <img
              src={UWEngImg}
              alt="University of Waterloo Engineering Logo"
              loading="lazy"
            />
            <div tw="h-20"></div>
            <p css={[TWText.body]} tw="text-medium-emphasis">
              Our partner for over 8 years, Waterloo Engineering continues to
              support Hack the North to build a creative, diverse, and unique
              experience for hackers. The University of Waterloo is home to
              Canada’s largest engineering school — a pipeline for engineering
              talent for the world’s leading companies.
            </p>
            <br />
            <p css={[TWText.body]} tw="text-medium-emphasis">
              Ranked among the top 50 engineering schools in the world, the
              school’s reputation for excellence is built on the foundation of
              co-op education and a bold history of innovation.
            </p>
          </UWEngineeringTextWrapper>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

const UWEngineeringTextWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 22%;
  width: 60%;
  z-index: 10;

  ${mediaQueries.tablet} {
    text-align: center;
    width: 80%;
    margin-top: 8%;
  }

  ${mediaQueries.largeMobile} {
    width: 90%;
  }
`;

export default UWEngineering;
