import React from "react";
import "twin.macro";
import {
  AdhawkImg,
  AirMilesImg,
  AssemblyAIImg,
  CohereImg,
  DRWImg,
  EthGlobalImg,
  HypeLabsImg,
  IMCImg,
  OldMissionImg,
  OTPPImg,
  RBCImg,
  SonrImg,
  SquareImg,
  VeevaImg,
  TechyonImg,
  UWEngineeringImg,
  CommunitechImg,
  VenaImg,
  CockroachLabsImg,
  CitadelImg,
  BloombergImg,
  IntactLabImg,
  WarpImg,
  CansofcomImg,
  CiscoImg,
  IntelImg,
  SunlifeImg,
  CEDImg,
  GSoftImg,
  HypertrackImg,
  IBMImg,
  MetaImg,
  StripeImg,
  TDImg,
  AlturaImg,
  DropbaseImg,
  NEXTImg,
  DeloitteImg,
  KPMGImg,
  HRTImg,
  ReplItImg,
  VoiceflowImg,
  InoviaImg,
  VelocityImg,
  AxelarImg,
  UbisoftImg,
  UWMathImg,
  UWImg,
} from "src/assets/img";
import { UnstyledLink } from "src/components/base";
import { TWShared } from "src/styles";

// link, src, alt, title

export interface Sponsor {
  link: string;
  src: string;
  alt: string;
  title: string;
  text?: JSX.Element;
}

// Gold Sponsors

const ethGlobal: Sponsor = {
  link: "https://www.ethglobal.com/?ref=htn",
  src: EthGlobalImg,
  alt: "Eth Global Logo",
  title: "ETHGlobal",
  text: (
    <>
      <p>
        ETHGlobal is the most valuable builder&apos;s community in Web3. Started
        by the founders of Hack the North we support Web3 builders at any point
        in their journey through virtual and in-person hackathons and
        educational summits.
      </p>
      <br />
      <p>
        Join the community and our events today:{" "}
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://ethglobal.com/?ref=htn"
          target="_blank"
          rel="noreferrer"
        >
          https://ethglobal.com.
        </UnstyledLink>
      </p>
    </>
  ),
};

const RBC: Sponsor = {
  link: "https://www.rbcroyalbank.com/",
  src: RBCImg,
  alt: "Royal Bank of Canada Logo",
  title: "RBC",
  text: (
    <>
      <p>
        You may already know that RBC is Canada’s largest bank, with 89,000+
        employees and 17 million clients globally. But did you know we are also
        one of Canada’s largest tech employers? With over 10,000 employees
        working across different technical roles, our teams apply imagination,
        insight and cutting-edge technology to create solutions that lead to
        better experiences for our clients, colleagues and communities.
      </p>
      <br />
      <p>
        Tech @ RBC offers hundreds of student and new grad roles, with
        opportunities to learn, grow and work with purpose.
      </p>
      <br />
      <p>
        From Developers to Data Scientists, from Cyber Threat Hunters to AI and
        ML Specialists, we inspire the next generation of brilliant minds to Be
        What’s Next.
      </p>
      <br />
      <p>
        If you’re interesting in exploring a broad range of exciting technology
        career paths, click below to view our Student Co Op and New Graduate
        Full Time job opportunities.
      </p>
      <br />
      <UnstyledLink
        css={[TWShared.hover]}
        tw="text-white underline"
        href="https://jobs.rbc.com/ca/en/be-whats-next"
        target="_blank"
        rel="noreferrer"
      >
        Be Whats Next (rbc.com)
      </UnstyledLink>
    </>
  ),
};

const cohere: Sponsor = {
  link: "https://cohere.ai/",
  src: CohereImg,
  alt: "Cohere Logo",
  title: "co:here",
  text: (
    <>
      <p>
        Cohere gives developers and businesses access to NLP, now. With large
        language models that generate, categorize and organize text at a scale
        that was previously unimaginable. And, with products that can be used by
        any developer, no matter your experience with machine learning.
      </p>
      <br />
      <p>
        Get started for free:{" "}
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://cohere.ai/"
          target="_blank"
          rel="noreferrer"
        >
          https://cohere.ai/
        </UnstyledLink>
      </p>
    </>
  ),
};

export const goldSponsors = [ethGlobal, RBC, cohere];

// Silver Sponsors

const cockroachLabs: Sponsor = {
  link: "https://www.cockroachlabs.com/",
  src: CockroachLabsImg,
  alt: "Cockroach Labs Logo",
  title: "Cockroach Labs",
  text: (
    <>
      <p>
        Cockroach Labs is the creator of CockroachDB, the most highly evolved
        cloud-native, distributed SQL database on the planet. Helping companies
        of all sizes—and the apps they develop— to scale fast, survive anything,
        and thrive everywhere.
      </p>
      <br />
      <p>
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://www.cockroachlabs.com/"
          target="_blank"
          rel="noreferrer"
        >
          Cockroach Labs
        </UnstyledLink>
      </p>
    </>
  ),
};

const citadel: Sponsor = {
  link: "https://www.citadelsecurities.com/careers/open-roles/",
  src: CitadelImg,
  alt: "Citadel Logo",
  title: "Citadel",
  text: (
    <>
      <p>
        Citadel is a global investment firm built around world-class talent,
        sound risk management, and innovative leading-edge technology. For
        thirty years, Citadel’s hedge funds have delivered meaningful and
        measurable results to top-tier investors around the world, including
        sovereign wealth funds, public institutions, corporate pensions,
        endowments and foundations.
      </p>
      <br />
      <p>
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://www.citadelsecurities.com/careers/open-roles/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.citadel.com/careers/open-positions/
        </UnstyledLink>
      </p>
      <br />
      <p>
        Citadel Securities is an award-winning global market maker that helps
        meet the liquidity needs of asset managers, banks, broker-dealers, hedge
        funds, government agencies, and public pension programs. We offer a
        broad array of fixed income and equity products, utilizing a unique set
        of capabilities and tools designed to drive down the cost of
        transactions. We strive to provide the most efficient execution and
        highest caliber of client services, making markets more fair and
        accessible for all.
      </p>
      <br />
      <p>
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://www.citadelsecurities.com/careers/open-roles/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.citadelsecurities.com/careers/open-roles
        </UnstyledLink>
      </p>
    </>
  ),
};

const bloomberg: Sponsor = {
  link: "https://www.bloomberg.com/company/",
  src: BloombergImg,
  alt: "Bloomberg Logo",
  title: "Bloomberg",
  text: (
    <>
      <p>Stop by our booth to learn more!</p>
      <br />
      <p>
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://www.bloomberg.com/company/careers/working-here/engineering/"
          target="_blank"
          rel="noreferrer"
        >
          Engineering Career Page
        </UnstyledLink>
      </p>
    </>
  ),
};

const cansofcom: Sponsor = {
  link: "https://www.canada.ca/en/special-operations-forces-command.html",
  src: CansofcomImg,
  alt: "CANSOFCOM and IDEaS Logo",
  title: "CANSOFCOM and IDEaS",
  text: (
    <>
      <p>
        The Canadian Special Operations Forces Command (CANSOFCOM) and
        Innovation for Defence Excellence and Security (IDEaS) are partnering on
        behalf of the Department of National Defence (DND) for this year’s Hack
        the North.
      </p>
      <br />
      <p>
        CANSOFCOM is a high-readiness organization, able to deploy special
        operations forces on very short notice to protect Canadians from threats
        at home and abroad. CANSOFCOM provides the Government of Canada with
        agile, high-readiness special operations forces.
      </p>
      <br />
      <p>
        IDEaS is DND’s and the Canadian Armed Forces (CAF) access to innovation
        program. With its five funding elements, IDEaS supports the development
        of solutions by helping push technology forward to increase defence
        capabilities. IDEaS is for all Canadian innovators, from defence primes
        to academia, Small and Medium sized enterprises to not-for-profits,
        municipal/provincial/territorial entities to individuals. Further
        details of the program and well as announcements of opportunities are
        available on the website: www.canada.ca/Defence-IDEaS
      </p>
    </>
  ),
};

const cisco: Sponsor = {
  link: "https://jobs.cisco.com/jobs/Home",
  src: CiscoImg,
  alt: "Cisco Logo",
  title: "Cisco",
  text: (
    <>
      <p>
        At Cisco, each person brings their unique talents to work as a team and
        make a difference.
      </p>
      <br />
      <p>
        Yes, our technology changes the way the world works, lives, plays and
        learns, but our edge comes from our people.
      </p>
      <br />
      <p>
        Colorful hair? Don’t care. Tattoos? Show off your ink. Like polka dots?
        That’s cool. Pop culture geek? Many of us are. Be you, with us!
        #WeAreCisco
      </p>
      <br />
      <p>
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://jobs.cisco.com/jobs/Home"
          target="_blank"
          rel="noreferrer"
        >
          Cisco Job Site
        </UnstyledLink>
      </p>
    </>
  ),
};

const intel: Sponsor = {
  link: "https://www.intel.com/content/www/us/en/jobs/locations/canada.html",
  src: IntelImg,
  alt: "Intel Logo",
  title: "Intel",
  text: (
    <>
      <p>
        We are changing the face of technology. To do that, we have gathered
        some of the most brilliant minds, and we’d like you to join us. Intel of
        Canada offers a variety of positions working with some of the fastest
        moving fields in both hardware and software solutions. We’re developing
        new modem technologies that will enable heterogenous computing, next
        level networking, redefine graphics solutions, and create new
        experiences worldwide. If you would love to work on amazing technology,
        then Intel is for you.
      </p>
      <br />
      <p>
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://www.intel.com/content/www/us/en/jobs/locations/canada.html"
          target="_blank"
          rel="noreferrer"
        >
          View our jobs in Canada
        </UnstyledLink>
      </p>
    </>
  ),
};

const sunlife: Sponsor = {
  link: "https://www.sunlife.ca/en/careers/digital-jobs/",
  src: SunlifeImg,
  alt: "Sunlife Logo",
  title: "Sunlife",
  text: (
    <>
      <p>
        Sun Life is a fantastic place to grow your career in Tech! This year
        alone, we hired over 200 IT Co-ops and offered many New Grad
        opportunities. Our IT Co-ops & New Grads get to work in cool areas such
        as Data, Dev, Cloud, Digital & Cyber just to name a few. Our Tech team
        is at the forefront of Sun Life’s Digital Enterprise shift. Here, you
        will drive this evolution by building new systems and infrastructure and
        enhancing existing processes. With a wide variety of interesting
        projects on the go and countless opportunities to create positive change
        for our clients and employees, you can push the boundaries of our
        industry and put your innovative mind to good use.
      </p>
      <br />
      <p>
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://www.sunlife.ca/en/careers/digital-jobs/"
          target="_blank"
          rel="noreferrer"
        >
          Digital Jobs at Sun Life
        </UnstyledLink>
      </p>
    </>
  ),
};

const td: Sponsor = {
  link: "https://jobs.td.com/en-CA/campus-recruitment/",
  src: TDImg,
  alt: "TD Logo",
  title: "TD",
  text: (
    <>
      <p>
        Welcome Hackers! We are excited to have you all attend HTN and hope to
        have a great weekend with everyone. TD is currently expanding our
        Technology function with many roles, innovative projects, and new
        technologies for all of you to work with. We have our recruitment team
        along with business representatives to talk about our future hiring and
        all the new technical projects taking place in the best bank in Canada.
      </p>
      <br />
      <p>
        <UnstyledLink
          css={[TWShared.hover]}
          tw="text-white underline"
          href="https://jobs.td.com/en-CA/campus-recruitment/"
          target="_blank"
          rel="noreferrer"
        >
          Careers page for all Co-op/Intern & Associate opportunities
        </UnstyledLink>
      </p>
    </>
  ),
};

export const silverSponsors = [
  cisco,
  cansofcom,
  cockroachLabs,
  bloomberg,
  citadel,
  td,
  sunlife,
  intel,
];

// Bronze Sponsors

const airMiles: Sponsor = {
  link: "https://www.loyalty.com/",
  src: AirMilesImg,
  alt: "Air Miles Logo",
  title: "Loyalty One",
};

const IMC: Sponsor = {
  link: "https://careers.imc.com/us/en",
  src: IMCImg,
  alt: "IMC Logo",
  title: "IMC Trading",
};

const oldMission: Sponsor = {
  link: "https://www.oldmissioncapital.com/",
  src: OldMissionImg,
  alt: "Old Mission Logo",
  title: "Old Mission Capital",
};

const DRW: Sponsor = {
  link: "https://www.drw.com/",
  src: DRWImg,
  alt: "DRW Logo",
  title: "DRW",
};

const square: Sponsor = {
  link: "https://www.squareup.com/",
  src: SquareImg,
  alt: "Square Logo",
  title: "Square",
};

const veeva: Sponsor = {
  link: "https://www.veeva.com/",
  src: VeevaImg,
  alt: "Veeva Systems Logo",
  title: "Veeva Systems",
};

const sonr: Sponsor = {
  link: "https://www.sonr.io/",
  src: SonrImg,
  alt: "Sonr Logo",
  title: "Sonr",
};

const OTPP: Sponsor = {
  link: "https://www.otpp.com/en-ca/",
  src: OTPPImg,
  alt: "OTPP Logo",
  title: "Ontario Teachers Pension Plan",
};

const adhawk: Sponsor = {
  link: "https://www.adhawkmicrosystems.com/",
  src: AdhawkImg,
  alt: "Adhwak Logo",
  title: "Adhwak Microsystems",
};

const vena: Sponsor = {
  link: "https://www.venasolutions.com/",
  src: VenaImg,
  alt: "Vena Logo",
  title: "Vena Solutions",
};

const intactLab: Sponsor = {
  link: "https://www.intactlab.ca/",
  src: IntactLabImg,
  alt: "Intact Lab Logo",
  title: "Intact Lab",
};

const ced: Sponsor = {
  link: "https://www.calgaryeconomicdevelopment.com/",
  src: CEDImg,
  alt: "Calgary Economic Development Logo",
  title: "Calgary Economic Development",
};

const gsoft: Sponsor = {
  link: "https://www.gsoft.com/en/internships/?utm_source=hackthenorth&utm_medium=referral&utm_campaign=HTN",
  src: GSoftImg,
  alt: "GSoft Logo",
  title: "GSoft",
};

const hypertrack: Sponsor = {
  link: "https://hypertrack.com/",
  src: HypertrackImg,
  alt: "Hypertrack Logo",
  title: "Hypertrack",
};

const IBM: Sponsor = {
  link: "https://www.ibm.com/ca-en/employment/entrylevel/",
  src: IBMImg,
  alt: "IBM Logo",
  title: "IBM",
};

const meta: Sponsor = {
  link: "https://www.metacareers.com/",
  src: MetaImg,
  alt: "Meta Logo",
  title: "Meta",
};

const stripe: Sponsor = {
  link: "https://stripe.com/",
  src: StripeImg,
  alt: "Stripe Logo",
  title: "Stripe",
};

const next: Sponsor = {
  link: "https://www.nextcanada.com/",
  src: NEXTImg,
  alt: "NEXT Canada Logo",
  title: "NEXT Canada",
};

const deloitte: Sponsor = {
  link: "https://www.deloitte.ca/",
  src: DeloitteImg,
  alt: "Deloitte Logo",
  title: "Deloitte",
};

const KPMG: Sponsor = {
  link: "https://home.kpmg/ca/en/home.html",
  src: KPMGImg,
  alt: "KPMG Logo",
  title: "KPMG",
};

const HRT: Sponsor = {
  link: "https://www.hudsonrivertrading.com/careers/?_4118765=Internship",
  src: HRTImg,
  alt: "HRT Logo",
  title: "HRT",
};

const ReplIt: Sponsor = {
  link: "https://replit.com/",
  src: ReplItImg,
  alt: "Replit Logo",
  title: "Replit",
};

const Axelar: Sponsor = {
  link: "https://axelar.network",
  src: AxelarImg,
  alt: "Axelar Logo",
  title: "Axelar",
};

const Ubisoft: Sponsor = {
  link: "https://www.ubisoft.com/en-us/company/careers/locations/montreal/ubisoft-canada",
  src: UbisoftImg,
  alt: "Ubisoft Logo",
  title: "Ubisoft",
};
export const bronzeSponsors = [
  airMiles,
  IMC,
  oldMission,
  DRW,
  square,
  veeva,
  sonr,
  OTPP,
  adhawk,
  vena,
  intactLab,
  ced,
  gsoft,
  hypertrack,
  KPMG,
  IBM,
  meta,
  stripe,
  deloitte,
  next,
  HRT,
  ReplIt,
  Axelar,
  Ubisoft,
];

// Startup Sponsors

const hypeLabs: Sponsor = {
  link: "https://hypotenuse.ca/",
  src: HypeLabsImg,
  alt: "Hype Labs Logo",
  title: "Hype Labs",
};

const AssemblyAI: Sponsor = {
  link: "https://www.assemblyai.com/",
  src: AssemblyAIImg,
  alt: "Assembly AI Logo",
  title: "Assembly AI",
};

const warp: Sponsor = {
  link: "https://www.warp.dev/",
  src: WarpImg,
  alt: "Warp Logo",
  title: "Warp",
};

const altura: Sponsor = {
  link: "https://www.alturanft.com/",
  src: AlturaImg,
  alt: "Altura NFT Logo",
  title: "Altura NFT",
};

const dropbase: Sponsor = {
  link: "https://www.dropbase.io/",
  src: DropbaseImg,
  alt: "Dropbase Logo",
  title: "Dropbase",
};

const voiceflow: Sponsor = {
  link: "https://www.voiceflow.com/",
  src: VoiceflowImg,
  alt: "Voiceflow Logo",
  title: "Voiceflow",
};

export const startupSponsors = [
  hypeLabs,
  AssemblyAI,
  warp,
  altura,
  dropbase,
  voiceflow,
];

// Partners

const UWEngineering: Sponsor = {
  link: "https://uwaterloo.ca/engineering/",
  src: UWEngineeringImg,
  alt: "University of Waterloo Faculty of Engineering Logo",
  title: "University of Waterloo Faculty of Engineering",
};

const Techyon: Sponsor = {
  link: "https://techyon.org/",
  src: TechyonImg,
  alt: "Techyon Logo",
  title: "Techyon",
};

const communitech: Sponsor = {
  link: "https://www.communitech.ca/",
  src: CommunitechImg,
  alt: "Communitech Logo",
  title: "Communitech",
};

const inovia: Sponsor = {
  link: "https://www.inovia.vc/",
  src: InoviaImg,
  alt: "Inovia Capital Logo",
  title: "Inovia Capital",
};

const velocity: Sponsor = {
  link: "https://velocityincubator.com/",
  src: VelocityImg,
  alt: "Velocity Logo",
  title: "Velocity",
};

const UWMath: Sponsor = {
  link: "https://uwaterloo.ca/math/",
  src: UWMathImg,
  alt: "University of Waterloo Faculty of Mathematics Logo",
  title: "University of Waterloo Faculty of Mathematics",
};

const UW: Sponsor = {
  link: "https://uwaterloo.ca/",
  src: UWImg,
  alt: "University of Waterloo Logo",
  title: "University of Waterloo",
};

export const partners = [
  UWEngineering,
  Techyon,
  communitech,
  inovia,
  velocity,
  UWMath,
  UW,
];
