import React from "react";
import { TWText } from "src/styles";
import "twin.macro";
import { styled } from "twin.macro";

const Grid = styled.div`
  /* Grid Fallback */
  display: flex;
  flex-wrap: wrap;

  /* Supports Grid */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  grid-auto-rows: minmax(30px, auto);
  grid-gap: 1em;
`;

const IconLibrary: React.FC = (props) => (
  <div {...props}>
    <h1 css={[TWText.title]} tw="mb-8">
      Icon Library
    </h1>
    <Grid></Grid>
  </div>
);

export default IconLibrary;
