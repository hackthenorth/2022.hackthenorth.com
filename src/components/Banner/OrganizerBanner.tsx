import React, { useState } from "react";
import { TWShared, TWText } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

import Banner from "./index";

const StyledFlex = styled.div`
  ${mediaQueries.largeMobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const ORGANIZER_APP_LINK = "/join";

const OrganizerBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <Banner show={showBanner} toggleShow={() => setShowBanner(false)}>
      <StyledFlex>
        <span css={[TWText.body]}>
          <a
            css={[TWText.bodyBold, TWShared.hover]}
            href={ORGANIZER_APP_LINK}
            tw="text-primary-blue1 underline"
            rel="noreferrer"
          >
            Organizer Applications
          </a>{" "}
          for Hack the North 2023 are now open!
        </span>
      </StyledFlex>
    </Banner>
  );
};

export default OrganizerBanner;
