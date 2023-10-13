import "twin.macro";
import React, { ComponentPropsWithoutRef } from "react";
import { NoiseTextureImg } from "src/assets/img";
import { theme, styled } from "twin.macro";

import PageWrapper from "./PageWrapper";

type Props = ComponentPropsWithoutRef<"div">;

const Layout: React.FC<Props> = ({ children }) => (
  <div id="container" tw="overflow-x-hidden overflow-y-scroll h-screen">
    <PageWrapperWithNoise>{children}</PageWrapperWithNoise>
  </div>
);

const PageWrapperWithNoise = styled(PageWrapper)`
  background-color: ${theme`colors.background.blue-gray`};
  background-image: url(${NoiseTextureImg});
`;

export default Layout;
