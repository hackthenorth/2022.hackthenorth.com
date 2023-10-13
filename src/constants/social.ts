import { IconName } from "src/components/base/Icon";

export enum SocialPlatforms {
  INSTA = "Instagram",
  FACEBOOK = "Facebook",
  TWITTER = "Twitter",
  LINKEDIN = "LinkedIn",
  TIKTOK = "TikTok",
  MEDIUM = "Medium",
}

type TSocialInfo = {
  icon: IconName;
  link: string;
  fathomEventCode: string;
};

export const SOCIALS: Record<SocialPlatforms, TSocialInfo> = {
  [SocialPlatforms.INSTA]: {
    icon: "instagram",
    link: "https://www.instagram.com/hackthenorth",
    fathomEventCode: "7XSOVKVV",
  },
  [SocialPlatforms.FACEBOOK]: {
    icon: "facebook",
    link: "https://www.facebook.com/hackthenorth/",
    fathomEventCode: "XVYOHU8D",
  },
  [SocialPlatforms.TWITTER]: {
    icon: "twitter",
    link: "https://twitter.com/hackthenorth",
    fathomEventCode: "JNMTEUJ2",
  },
  [SocialPlatforms.LINKEDIN]: {
    icon: "linkedin",
    link: "https://www.linkedin.com/company/hack-the-north",
    fathomEventCode: "5NN1IHTM",
  },
  [SocialPlatforms.TIKTOK]: {
    icon: "tiktok",
    link: "https://www.tiktok.com/@hackthenorth",
    fathomEventCode: "VXLYDCD3",
  },
  [SocialPlatforms.MEDIUM]: {
    icon: "medium",
    link: "https://hackthenorth.medium.com/",
    fathomEventCode: "L26FHYRZ",
  },
};
