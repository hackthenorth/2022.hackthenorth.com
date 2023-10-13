import React from "react";
import { Button, Link } from "src/components/base";
import { TWText } from "src/styles";
import { styled } from "twin.macro";

const Grid = styled.div`
  /* Grid Fallback */
  display: flex;
  flex-wrap: wrap;

  /* Supports Grid */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(60px, auto);
  grid-gap: 1em;
`;

const Card = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Components: React.FC = () => (
  <div>
    <h1 css={[TWText.h1]} tw="mb-24">
      Components
    </h1>
    <h2 css={[TWText.h2]} tw="mb-24">
      Base
    </h2>
    <Grid tw="mb-24">
      <Card>
        <Button onClick={() => alert("kick zafin")} variant="primary">
          Primary
        </Button>
      </Card>

      <Card>
        <Button onClick={() => alert("kick kelvin")} variant="secondary">
          Secondary
        </Button>
      </Card>

      <Card>
        <Button onClick={() => alert("kick kelvin")} variant="none">
          Raw Button
        </Button>
      </Card>

      <Card>
        <Link href="/">Internal Link</Link>
      </Card>
      <Card>
        <Link href="https://hackthenorth.com/" newTab>
          External Link
        </Link>
      </Card>
    </Grid>
  </div>
);

export default Components;
