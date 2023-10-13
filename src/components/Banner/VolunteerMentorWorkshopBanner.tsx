import React, { useState } from "react";
import { TWShared, TWText } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";
import tw from "twin.macro";

import Banner from "./index";

const StyledFlex = styled.div`
  ${mediaQueries.largeMobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const VOLUNTEER_APP_LINK = "https://tinyurl.com/htnvolunteer2022";

const VolunteerMentorWorkshopBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <Banner show={showBanner} toggleShow={() => setShowBanner(false)}>
      <StyledFlex>
        <span css={[TWText.body]}>
          Interested in being a part of Hack the North 2022? Apply to be a{" "}
          <a
            css={[TWText.bodyBold, TWShared.hover]}
            href={VOLUNTEER_APP_LINK}
            tw="text-primary-blue1 underline"
            target="_blank"
            rel="noreferrer"
          >
            volunteer
          </a>{" "}
          today!
        </span>
      </StyledFlex>
    </Banner>
  );
};

export default VolunteerMentorWorkshopBanner;
