import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, css } from "styled-components";
import { GlobalStyles } from "twin.macro";

import App from "./App";

const fonts = css`
  @font-face {
    font-family: "Castledown";
    src: url("/fonts/castledown-heavy.eot");
    src: url("/fonts/castledown-heavy.eot#iefix") format("embedded-opentype"),
      url("/fonts/castledown-heavy.woff2") format("woff2"),
      url("/fonts/castledown-heavy.woff") format("woff"),
      url("/fonts/castledown-heavy.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Satoshi-Regular.woff2") format("woff2"),
      url("/fonts/Satoshi-Regular.woff") format("woff");
  }
  @font-face {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Satoshi-Medium.woff2") format("woff2"),
      url("/fonts/Satoshi-Medium.woff") format("woff");
  }
  @font-face {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/Satoshi-Bold.woff2") format("woff2"),
      url("/fonts/Satoshi-Bold.woff") format("woff");
  }
`;

const resetStyles = css`
  html,
  body {
    overflow-x: hidden;
  }
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body > div:first-of-type,
  div#__next,
  div#__next > div {
    height: 100%;
  }
  ::selection {
    background: #0d2c44;
    color: #43afde;
  }
  ::-moz-selection {
    background: #0d2c44;
    color: #43afde;
  }
`;

const CustomStyles = createGlobalStyle`
  ${fonts}
  ${resetStyles}
`;

ReactDOM.render(
  <React.StrictMode>
    <CustomStyles />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
