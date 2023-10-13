import React from "react";
import { Navbar } from "src/components";
import { Layout } from "src/components/base";

import OrganizerAppsFooter from "./OrganizerAppsFooter";
import OrganizerAppsHero from "./OrganizerAppsHero";
import OrganizerAppsRoles from "./OrganizerAppsRoles";

const IndexPage: React.FC = () => (
  <Layout>
    <Navbar />
    <OrganizerAppsHero />
    <OrganizerAppsRoles />
    <OrganizerAppsFooter />
  </Layout>
);

export default IndexPage;
