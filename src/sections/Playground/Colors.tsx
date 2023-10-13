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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 1em;
`;

const Card = styled.div`
  width: 350px;
  height: 200px;
`;

const Colors: React.FC = (props) => (
  <div {...props}>
    <h1 css={[TWText.h1]} tw="mb-24">
      Color Palette
    </h1>
    <h2 css={[TWText.h2]} tw="mb-24">
      Primary
    </h2>
    <Grid tw="mb-32">
      <Card tw="rounded-4 bg-primary-blue1 flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Primary Blue1
        </p>
      </Card>
      <Card tw="rounded-4 bg-primary-blue2 flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Primary Blue2
        </p>
      </Card>
    </Grid>
    <h2 css={[TWText.h2]} tw="mb-24">
      Accent
    </h2>
    <Grid tw="mb-32">
      <Card tw="rounded-4 bg-accent-pink flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Accent Pink
        </p>
      </Card>
      <Card tw="rounded-4 bg-accent-green flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Accent Green
        </p>
      </Card>
      <Card tw="rounded-4 bg-accent-yellow flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Accent Yellow
        </p>
      </Card>
    </Grid>
    <h2 css={[TWText.h2]} tw="mb-24">
      Secondary Accents
    </h2>
    <Grid tw="mb-32">
      <Card tw="rounded-4 bg-secondary-pink flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Secondary Pink
        </p>
      </Card>
      <Card tw="rounded-4 bg-secondary-green flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Secondary Green
        </p>
      </Card>
      <Card tw="rounded-4 bg-secondary-yellow flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Secondary Yellow
        </p>
      </Card>
    </Grid>
    <h2 css={[TWText.h2]} tw="mb-24">
      Background
    </h2>
    <Grid tw="mb-32">
      <Card tw="rounded-4 bg-background-blue-gray flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Background Blue Gray
        </p>
      </Card>
      <Card tw="rounded-4 bg-background-elevation flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-white">
          Background Elevation
        </p>
      </Card>
    </Grid>
    <h2 css={[TWText.h2]} tw="mb-24">
      Text
    </h2>
    <Grid tw="mb-32">
      <Card tw="rounded-4 bg-background-blue-gray flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-high-emphasis">
          High Emphasis Text
        </p>
      </Card>
      <Card tw="rounded-4 bg-background-blue-gray flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-medium-emphasis">
          Medium Emphasis Text
        </p>
      </Card>
      <Card tw="rounded-4 bg-background-blue-gray flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-disabled">
          Disabled Text
        </p>
      </Card>
      <Card tw="rounded-4 bg-white flex justify-center items-center">
        <p css={[TWText.h3]} tw="text-blue-gray">
          Blue-Gray Text
        </p>
      </Card>
    </Grid>
  </div>
);

export default Colors;
