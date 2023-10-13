import React from "react";
import { TWText } from "src/styles";
import "twin.macro";

const Typography: React.FC = (props) => (
  <div {...props}>
    <h1 css={[TWText.title]} tw="mb-8">
      Title
    </h1>
    <h2 css={[TWText.h1]} tw="mb-8">
      Header 1
    </h2>
    <h3 css={[TWText.h2]} tw="mb-8">
      Header 2
    </h3>
    <h4 css={[TWText.h3]} tw="mb-8">
      Header 3
    </h4>
    <p css={[TWText.largeBody]} tw="mb-8">
      Large Body
    </p>
    <p css={[TWText.largeBodyMed]} tw="mb-8">
      Large Body Med
    </p>
    <p css={[TWText.largeBodyBold]} tw="mb-8">
      Large Body Bold
    </p>
    <p css={[TWText.body]} tw="mb-8">
      Body
    </p>
    <p css={[TWText.bodyBold]} tw="mb-8">
      Body bold
    </p>
    <p css={[TWText.overline]} tw="mb-8">
      OVERLINE
    </p>
    <p css={[TWText.caption]} tw="mb-8">
      Caption
    </p>
    <p css={[TWText.cta]} tw="mb-8">
      CTA
    </p>
    <p css={[TWText.link]} tw="mb-8">
      Link
    </p>
    <p css={[TWText.note]} tw="mb-8 text-high-emphasis">
      Note
    </p>
  </div>
);

export default Typography;
