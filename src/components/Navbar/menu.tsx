import { trackGoal } from "fathom-client";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import tw, { styled } from "twin.macro";
import "styled-components/macro";

import Icon from "src/components/base/Icon";
import { SOCIALS } from "src/constants/social";
import { TWShared, TWText } from "src/styles";

import { Button } from "../base";

import { NavBarProps, SECTIONS, WEBSITE2021URL } from "./constants";

const Menu: React.FC<NavBarProps> = ({ notMainPage }) => {
  return (
    <div tw="flex justify-end items-center w-screen max-w-[1202px] gap-x-24 h-80 pl-32">
      {!notMainPage &&
        Object.entries(SECTIONS).map(([id, name]) => {
          return (
            <div tw="self-center ml-8 mr-8" key={id}>
              <Link to={"/#" + id} css={[TWText.bodyBold, TWShared.hover]}>
                <span>{name}</span>
              </Link>
            </div>
          );
        })}
      {!notMainPage ? (
        <div tw="self-center ml-8 mr-auto">
          <a href={WEBSITE2021URL} css={[TWText.bodyBold]}>
            2021
          </a>
        </div>
      ) : null}
      {Object.entries(SOCIALS).map(([id, { icon, link, fathomEventCode }]) => (
        <div tw="self-center" key={id}>
          <a
            aria-label={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGoal(fathomEventCode, 0)}
          >
            <Icon name={icon} hover={true}></Icon>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Menu;
