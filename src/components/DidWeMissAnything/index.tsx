import { trackGoal } from "fathom-client";
import React from "react";
import { MailingListSignup } from "src/components";
import { Icon } from "src/components/base";
import { SOCIALS } from "src/constants/social";
import { TWShared, TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import tw from "twin.macro";

const DidWeMissAnything: React.FC = () => {
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  return (
    <div>
      <h1 css={[TWText.h1]} tw="mb-36">
        Did we miss anything?
      </h1>
      <div tw="mb-16" css={[TWText.largeBodyBold]}>
        Reach out to us at{" "}
        <a
          css={[TWText.largeBodyBold, TWShared.hover]}
          href="mailto:hello@hackthenorth.com"
          tw="text-primary-blue1"
        >
          hello@hackthenorth.com
        </a>{" "}
        <span role="img" aria-label="heart emoji">
          😊
        </span>
      </div>
      <div tw="flex mb-48">
        {Object.entries(SOCIALS).map(
          ([id, { icon, link, fathomEventCode }]) => (
            <a
              key={id}
              href={link}
              aria-label={id}
              target="_blank"
              tw="mr-24"
              rel="noopener noreferrer"
              onClick={() => trackGoal(fathomEventCode, 0)}
            >
              <Icon name={icon} width={24} height={24} hover={true} />
            </a>
          )
        )}
      </div>
      <MailingListSignup placeholder="Sign up for updates!">
        {isLargeMobileOrSmaller !== undefined && <p>Submit</p>}
      </MailingListSignup>
    </div>
  );
};

export default DidWeMissAnything;
