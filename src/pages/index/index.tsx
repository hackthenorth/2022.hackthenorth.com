import React from "react";
import { Navbar } from "src/components";
// import OrganizerBanner from "src/components/Banner/OrganizerBanner";
// import VolunteerMentorWorkshopBanner from "src/components/Banner/VolunteerMentorWorkshopBanner";
import { Layout } from "src/components/base";
import About from "src/sections/About";
import FAQ from "src/sections/FAQ";
import Footer from "src/sections/Footer";
import Hero from "src/sections/Hero"; // Disable lazy loading
import Judges from "src/sections/Judges";
import Showcase from "src/sections/Showcase";
import Sponsors from "src/sections/Sponsors/";
import Stories from "src/sections/Stories";
import TalkingPoints from "src/sections/TalkingPoints";
import UWEngineering from "src/sections/UWEngineering";

const IndexPage: React.FC = () => (
  <Layout>
    <Navbar />
    <Hero />
    <Showcase />
    <About />
    <TalkingPoints />
    <Stories />
    <UWEngineering />
    <Judges />
    <Sponsors />
    <FAQ />
    <Footer />
  </Layout>
);

export default IndexPage;
