import React from "react";
import {
  AuditoriumImg,
  ClimbingImg,
  CoffeeImg,
  CollaborateImg,
  CrowdImg,
  CupsImg,
  ExploreImg,
  GrowImg,
  HackerImg,
  IgniteImg,
  OpeningImg,
  PresentingImg,
  ThreeHackersImg,
  TrudeauImg,
  TwoHackersImg,
  UnleashImg,
  YogaImg,
} from "src/assets/img";
import GradientText from "src/components/base/GradientText";
import { TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

const AboutCarousel: React.FC = () => {
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  return isLargeMobileOrSmaller ? (
    <div>
      <CarouselImg
        src={TrudeauImg}
        alt="Canadian Prime Minister Justin Trudeau waves to the Hack the North crowd."
        tw="height[40vw] mb-16 ml-16"
      />
      <div tw="flex height[45vw] -ml-16">
        <CarouselImg
          src={TwoHackersImg}
          alt="Two hackers solder wiring while working on a hardware hack."
          tw="mr-16"
        />
        <CarouselImg
          src={PresentingImg}
          alt="A hacker presents their hardware hack on stage while their teammate looks on."
        />
      </div>
      <div tw="mt-16 -ml-48 flex">
        <div tw="height[80vw] mr-16 flex flex-col">
          <KeywordWrapper tw="-mt-16 ml-64">
            <h2
              css={[TWText.h2]}
              tw="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-white"
            >
              <GradientText tw="bg-gradient-to-r from-accent-yellow to-white">
                Ignite
              </GradientText>
            </h2>
            <img alt="" loading="lazy" src={IgniteImg} tw="w-64 -mt-8" />
          </KeywordWrapper>
          <CarouselImg
            src={HackerImg}
            alt="A hacker concentrates closely on his hardware hack."
          />
        </div>
        <CarouselImg
          src={CupsImg}
          alt="At a cup stacking competition, a hacker sits on the shoulders of a teammate to stack a final cup in a huge tower."
          tw="height[80vw] mr-16"
        />
      </div>
      <div tw="mt-16 -ml-8 flex">
        <div tw="height[65vw] mr-16 flex flex-col">
          <CarouselImg
            src={ClimbingImg}
            alt="A hacker climbs an outdoor climbing wall against a clear blue sky. They have almost reached the top."
            tw="height[40vw]"
          />
          <KeywordWrapper tw="ml-16">
            <h2
              css={[TWText.h2]}
              tw="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-yellow"
            >
              <GradientText tw="bg-gradient-to-r from-accent-pink to-accent-yellow">
                Explore
              </GradientText>
            </h2>
            <img
              alt=""
              src={ExploreImg}
              tw="absolute w-96 -mt-48"
              loading="lazy"
            />
          </KeywordWrapper>
        </div>
        <div tw="height[65vw] -mr-8 flex flex-col">
          <KeywordWrapper tw="-mt-16 -ml-8">
            <h2
              css={[TWText.h2]}
              tw="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue2 to-primary-blue1"
            >
              <GradientText tw="bg-gradient-to-r from-primary-blue2 to-primary-blue1">
                Unleash
              </GradientText>
            </h2>
            <img alt="" loading="lazy" src={UnleashImg} tw="w-96 -mt-4" />
          </KeywordWrapper>
          <CarouselImg
            src={AuditoriumImg}
            alt="A crowd of hackers fills each level of an auditorium. They wait for a speaker to begin their session."
          />
        </div>
      </div>
      <div tw="mt-16 ml-16 flex">
        <CarouselImg
          src={CrowdImg}
          alt="A long exposure shot of the first floor of the event. The crowd blurs as hackers move between various booths."
          tw="height[50vw]"
        />
        <div tw="height[50w] ml-16 -mr-8 flex flex-col">
          <CarouselImg
            src={YogaImg}
            alt="A large room of hackers partakes in group yoga."
          />
          <KeywordWrapper tw="mt-16 -ml-16">
            <h2
              css={[TWText.h2]}
              tw="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-primary-blue1"
            >
              <GradientText tw="bg-gradient-to-r from-accent-green to-primary-blue1">
                Grow
              </GradientText>
            </h2>
            <img
              alt=""
              src={GrowImg}
              tw="absolute w-80 -mt-24"
              loading="lazy"
            />
          </KeywordWrapper>
        </div>
      </div>
      <div tw="mt-16 -ml-72 flex">
        <CarouselImg
          src={ThreeHackersImg}
          alt="A team of hackers crowds around a laptop to solve a problem, one kneels while the other two stand behind them."
          tw="height[50vw] mr-16"
        />
        <div tw="height[50vw] flex flex-col">
          <CarouselImg
            src={CoffeeImg}
            alt="A side view of two hackers chatting over cups of coffee. One of them smiles while the other talks."
            tw="height[30vw]"
          />
          <KeywordWrapper>
            <h2
              css={[TWText.h2]}
              tw="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-primary-blue2"
            >
              <GradientText tw="bg-gradient-to-r from-accent-pink to-primary-blue2">
                Collaborate
              </GradientText>
            </h2>
            <img alt="" src={CollaborateImg} tw="w-128 -mt-8" loading="lazy" />
          </KeywordWrapper>
        </div>
        <CarouselImg
          src={OpeningImg}
          alt="A Hack the North organizer delivers opening remarks on stage."
          tw="height[65vw] ml-16 -mr-72"
        />
      </div>
    </div>
  ) : (
    <div tw="px-32 flex items-stretch">
      <ImageColWrapper>
        <CarouselImg
          src={TrudeauImg}
          alt="Canadian Prime Minister Justin Trudeau waves to the Hack the North crowd."
          tw="width[325px] height[184px] mb-16"
        />
        <div tw="flex items-stretch">
          <CarouselImg
            src={TwoHackersImg}
            alt="Two hackers solder wiring while working on a hardware hack."
            tw="width[153px] height[142px] mr-16"
          />
          <KeywordWrapper>
            <h2
              css={[TWText.h2]}
              tw="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-white"
            >
              <GradientText tw="bg-gradient-to-r from-accent-yellow to-white">
                Ignite
              </GradientText>
            </h2>
            <img alt="" loading="lazy" src={IgniteImg} />
          </KeywordWrapper>
        </div>
      </ImageColWrapper>
      <CarouselImg
        src={PresentingImg}
        alt="A hacker presents their hardware hack on stage while their teammate looks on."
        tw="width[406px] height[342px] mr-16"
      />
      <ImageColWrapper>
        <KeywordWrapper>
          <h2
            css={[TWText.h2]}
            tw="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-blue2 to-primary-blue1"
          >
            <GradientText tw="bg-gradient-to-r from-primary-blue2 to-primary-blue1">
              Unleash
            </GradientText>
          </h2>
          <img alt="" loading="lazy" src={UnleashImg} />
        </KeywordWrapper>
        <CarouselImg
          src={HackerImg}
          alt="A hacker concentrates closely on his hardware hack."
          tw="width[277px] height[233px]"
        />
      </ImageColWrapper>
      <CarouselImg
        src={CupsImg}
        alt="At a cup stacking competition, a hacker sits on the shoulders of a teammate to stack a final cup in a huge tower."
        tw="width[236px] height[342px] mr-16"
      />
      <ImageColWrapper>
        <CarouselImg
          src={ClimbingImg}
          alt="A hacker climbs an outdoor climbing wall against a clear blue sky. They have almost reached the top."
          tw="width[271px] height[256px]"
        />
        <KeywordWrapper>
          <h2
            css={[TWText.h2]}
            tw="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-yellow"
          >
            <GradientText tw="bg-gradient-to-r from-accent-pink to-accent-yellow">
              Explore
            </GradientText>
          </h2>
          <img alt="" src={ExploreImg} tw="absolute -mt-64" loading="lazy" />
        </KeywordWrapper>
      </ImageColWrapper>
      <ImageColWrapper>
        <CarouselImg
          src={AuditoriumImg}
          alt="A crowd of hackers fills each level of an auditorium. They wait for a speaker to begin their session."
          tw="width[350px] height[190px] mb-16"
        />
        <CarouselImg
          src={YogaImg}
          alt="A large room of hackers partakes in group yoga."
          tw="width[350px] height[136px]"
        />
      </ImageColWrapper>
      <ImageColWrapper>
        <KeywordWrapper>
          <h2
            css={[TWText.h2]}
            tw="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-primary-blue1"
          >
            <GradientText tw="bg-gradient-to-r from-accent-green to-primary-blue1">
              Grow
            </GradientText>
          </h2>
          <img alt="" src={GrowImg} tw="absolute -mt-32" loading="lazy" />
        </KeywordWrapper>
        <CarouselImg
          src={CrowdImg}
          alt="A long exposure shot of the first floor of the event. The crowd blurs as hackers move between various booths."
          tw="width[185px] height[223px]"
        />
      </ImageColWrapper>
      <CarouselImg
        src={ThreeHackersImg}
        alt="A team of hackers crowds around a laptop to solve a problem, one kneels while the other two stand behind them."
        tw="width[305px] height[341px] mr-16"
      />
      <ImageColWrapper>
        <CarouselImg
          src={CoffeeImg}
          alt="A side view of two hackers chatting over cups of coffee. One of them smiles while the other talks."
          tw="width[286px] height[214px]"
        />
        <KeywordWrapper>
          <h2
            css={[TWText.h2]}
            tw="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-primary-blue2"
          >
            <GradientText tw="bg-gradient-to-r from-accent-pink to-primary-blue2">
              Collaborate
            </GradientText>
          </h2>
          <img alt="" src={CollaborateImg} loading="lazy" />
        </KeywordWrapper>
      </ImageColWrapper>
      <CarouselImg
        src={OpeningImg}
        alt="A Hack the North organizer delivers opening remarks on stage."
        tw="width[212px] height[341px] mr-16"
      />
    </div>
  );
};

const ImageColWrapper = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: none;
`;

const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 0%;
`;

const CarouselImg = styled.img`
  opacity: 0.7;
  transition-property: opacity;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px;
  object-fit: cover;
  &:hover {
    opacity: 1;
  }
`;

export default AboutCarousel;
