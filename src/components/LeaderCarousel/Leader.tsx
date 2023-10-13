import React from "react";
import { LeaderProfile } from "src/copy/leaders";
import { TWText } from "src/styles";
import { styled } from "twin.macro";

export interface LeaderProps extends LeaderProfile {
  opacity: number;
}

export const Leader: React.FC<LeaderProps> = (profile) => {
  return (
    <div
      tw="flex flex-col mx-32 lm:mx-12 flex-shrink-0"
      style={{ opacity: profile.opacity }}
    >
      <img
        src={profile.imgUrl}
        alt={"Headshot of " + profile.name}
        tw="height[176px] width[176px] lm:(height[124px] width[124px]) rounded-16 object-cover mb-16"
        loading="lazy"
      ></img>
      <p css={[TWText.largeBodyBold]} tw="width[176px] lm:width[124px]">
        {profile.name}
      </p>
      <p
        css={[TWText.body]}
        tw="text-medium-emphasis width[176px] lm:width[124px]"
      >
        {profile.description}
      </p>
    </div>
  );
};
