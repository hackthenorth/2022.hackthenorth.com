import React from "react";
import { InfoPage } from "src/components/base";
import { content, title } from "src/copy/covidPolicy";

const sections = [
  { id: "key-points", title: "Key Points" },
  { id: "introduction", title: "Introduction" },
  { id: "minimum-safety-protocols", title: "Minimum safety protocols" },
  {
    id: "possible-additional-safety-protocols",
    title: "Possible additional safety protocols",
  },
];

const CovidPolicy: React.FC = () => (
  <InfoPage sections={sections} content={content} title={title} />
);
export default CovidPolicy;
