export enum Role {
  FE_DEV = "feDev",
  BE_DEV = "beDev",
  DATA_SCI = "dataSci",
  SPNS_COO = "spnsCoo",
  MRKT_ORG = "mrktOrg",
  PROD_MAN = "prodMan",
  FIN_DIR = "finDir",
  LOG_TL = "logTl",
  LOG_ORG = "logOrg",
  PDES_TL = "pdesTl",
  GDES_TL = "gdesTl",
  PDES_ORG = "pdesOrg",
  GDES_ORG = "gdesOrg",
}

export const ROLES = {
  [Role.FE_DEV]: {
    label: "Frontend Developer",
    description: `
Frontend Developers shape how our audiences experience and interact with Hack the North online. Whether it&rsquo;s working with designers to craft our main website, building modern interactive web apps like our hacker application dashboard, or brainstorming and launching new initiatives like a component library, you can expect to ship plenty of quality code to tens of thousands of users worldwide while learning new skills in a supportive team that encourages growth.
    `,
    opportunities: `
- Write quality code for numerous projects, including:
    - Our main static site, [hackthenorth.com](https://hackthenorth.com/)
    - Hacker applications, [apply.hackthenorth.com](https://apply.hackthenorth.com/)
    - Attendee dashboard, [my.hackthenorth.com](https://my.hackthenorth.com/)
    - A wealth of other rich web apps and tools used by hackers, sponsors, mentors, organizers, and more
- Help the entire Frontend Team grow as developers by contributing to discussions and participating in code reviews
- Architect new projects and improvements to scale and advance our frontend architecture
- Coordinate with the Marketing, Design, and Backend Teams to build great experiences for attendees from around the globe
- Provide a healthy dose of memes to the rest of the organizing team during team-wide meetings
    `,
    skills: `
- Have some prior web development experience using HTML, CSS, and JavaScript
- Be familiar with or have an interest in:
    - Frontend frameworks such as React
    - Accessibility and responsive design best practices
    - Building data driven frontends that interface with APIs
- Be willing to learn and build with a variety of libraries and codebases
- Bonus: Familiarity with TypeScript, modern React (hooks, context), or GraphQL
- Bonus: A good understanding of accessibility best practices to cater towards the diverse audience of Hack the North
    `,
    link: "https://forms.gle/sycbQeQiTsuRrgKR9",
  },
  [Role.BE_DEV]: {
    label: "Backend Developer",
    description: `
As a Backend Developer for Hack the North, you&rsquo;ll be responsible for all the super-important tech bits which hackers don&rsquo;t see. Whether it&rsquo;s developing new features for the event, keeping our API server running, or making new internal tools to help the team, your efforts are the glue which holds Hack the North together.

Curious to learn more about what it&rsquo;s like to build backend infrastructure to handle millions of requests over the event weekend? Read our blog post about (almost) every time our servers crashed [here](http://bit.ly/3pwZZmX)!
    `,
    opportunities: `
- Design, construct, and maintain the services which power Hack the North including:
    - HackerAPI, our backend API service which supports hacker applications, event check-ins, our team dashboard, and many other services
    - New internal and external tools and dashboard features to improve team productivity
    - Web and database infrastructure - we run everything on Kubernetes!
- Use metrics, analytics, and reporting tools to optimize performance and fix bugs
- Document, refactor, and apply development best practices
- Build and take ownership of new projects requested from other teams to improve Hack the North. In the past, these have included:
    - Scanner Tool: To track event activity.
    - Slack Bots: Tooling for our participants to use for mentorship, scheduling, etc.
    - Judging: Scripts and tooling to assist our volunteers, judges and hackers for our judging process.
    - Bonus: Create 🔥 memes to compete with frontend for team-wide entertainment 😎
    `,
    skills: `
- Be familiar with or have an interest in:
    - Object-oriented programming languages (we use TypeScript)
    - Any relational databases
    - GraphQL API services
    - Containerized applications
- Bonus: Experience writing unit tests and specs
- Bonus: An understanding of how to build scalable backend services to cater to the diverse audience of Hack the North  
    `,
    link: "https://forms.gle/m2BunptQ1bBkeJ9e6",
  },
  [Role.DATA_SCI]: {
    label: "Data Scientist",
    description: `
With all of the data we&rsquo;ve collected over the years, we&rsquo;re seeking a passionate and experienced Data Scientist to help us make sense of it all by pioneering data science initiatives and driving data science as a whole at Hack the North.

As the Data Scientist, you will be the point of contact for the understanding and exploration of data at Hack the North. You will collaborate closely with the Product Manager and Backend Team to provide insights to enable informed, data-driven decisions. You will bring a data science oriented perspective to our engineering efforts on new and existing projects.

Your work will help influence the direction of Hack the North and improve the attendee experience.
    `,
    opportunities: `
- Shape the direction of data science at Hack the North by driving your own initiatives
- Develop an understanding of the existing Hack the North datasets to answer questions and form a foundation for deeper exploration
- Gather insights and present recommendations to key stakeholders across the team as a catalyst for data-driven decision making within the organization
- Design and build data pipelines to process, clean, and verify the integrity of data for analysis
- Participate in engineering design and implementation discussions as a data science advocate
- Create and maintain detailed documentation and data dictionaries    
    `,
    skills: `
- Prior data science experience through internships and/or projects is highly desirable
- Experience using Jupyter notebooks and statistical computer languages/libraries such as, but not limited to: Python, Pandas/Numpy or R
- Experience with relational databases and SQL (we use PostgreSQL)
- Experience working with and extracting insights from large volumes of data
- Strong knowledge of statistics and statistical investigation methods
- Strong problem solving skills, with out-of-the-box creativity and an affinity for experimentation
- Strong technical communication skills and experience presenting findings to stakeholders
    `,
    link: "https://forms.gle/xHR9jW5ADz9yZDRFA",
  },
  [Role.PDES_TL]: {
    label: "Product Design Team Lead",
    description: `
As the Product Design Team Lead, you&rsquo;ll be responsible for working together with the Graphic Design Team Lead to foster a tight-knit and cohesive design team for Hack the North 2023. You&rsquo;ll help guide 1-2 Product Designers in their respective projects, providing them with mentorship and support. From our website to our hacker dashboard, your user-centered mindset will unify everything that hackers interact with. As a team lead who is new to the organization, you will be working with the design advisor who will guide you smoothly into the non-traditional organization behind Canada&rsquo;s biggest hackathon.

Curious about what designing at Hack the North is like? Read our blog post here: [https://bit.ly/3k1rG6h](https://bit.ly/3k1rG6h)
    `,
    opportunities: `
- Manage all product designs needed for attendees like sponsors, hackers, mentors and more
- Coordinate with the Logistics Team, Frontend Team, and Backend Team to deliver polished user experiences
- Empower your team members to grow and excel by providing constructive feedback, support, and mentorship
- Scope out design specifications and timelines for major product milestones
- Guide the team&rsquo;s product designers to maintain a consistent brand identity in all work
- Help to shape high-level decisions regarding brand identity and organizational values with a focus on a diverse, inclusive and accessible hackathon experience
    `,
    skills: `
- Have an excellent eye for engaging designs and brand consistency
- Be extremely organized and able to track multiple projects and deadlines at once
- Have the ability to articulate and instill passion for organizational goals, especially for diverse, inclusive and accessible designs
- Have strong communication and collaboration skills to build a supportive and positive team culture
    `,
    link: "https://forms.gle/uFAEqRgAUoUYXz9H6",
  },
  [Role.GDES_TL]: {
    label: "Graphic Design Team Lead",
    description: `
As the Graphic Design Team Lead, you&rsquo;ll be responsible for working together with the Product Design Team Lead to foster a tight-knit and cohesive design team for Hack the North 2023. You&rsquo;ll help guide 1-2 Graphic Designers in their respective projects, providing them with mentorship and support. From our date launch website to social media, you unify the brand of Hack the North. As a team lead who is new to the organization, you will be working with the design advisor who will guide you smoothly into the non-traditional organization behind Canada&rsquo;s biggest hackathon.

Curious about what designing at Hack the North is like? Read our blog post here: [https://bit.ly/3k1rG6h](https://bit.ly/3k1rG6h)
    `,
    opportunities: `
- Coordinate with the Marketing Team to synthesize values into a brand that spans several mediums such as website, social media and swag!
- Empower your team members to grow and excel by providing constructive feedback, support, and mentorship
- Guide the team&rsquo;s graphic designers to maintain a consistent brand identity in all work
- Help to shape high-level decisions regarding brand identity and organizational values with a focus on a diverse, inclusive and accessible hackathon experience
    `,
    skills: `
- Have an excellent eye for engaging designs and brand consistency
- Be extremely organized and able to track multiple projects and deadlines at once
- Have the ability to articulate and instill passion for organizational goals, especially for diverse, inclusive and accessible designs
- Have strong communication and collaboration skills to build a supportive and positive team culture
    `,
    link: "https://forms.gle/RgcaDAKAUZQQLDD7A",
  },
  [Role.PDES_ORG]: {
    label: "Product Designer",
    description: `
As a Product Designer for Hack the North, you will have the opportunity to design for Canada&rsquo;s biggest hackathon. You will be responsible for crafting beautiful experiences and designing intuitive interfaces that will reach thousands of people worldwide. As a part of the Hack the North Design Team, you get to define what someone sees and experiences any time they interact with Hack the North.

Curious about what designing at Hack the North is like? Read our blog post here: [https://bit.ly/3k1rG6h](https://bit.ly/3k1rG6h)
    `,
    opportunities: `
- Design intuitive interfaces and seamless user experiences across our website and mobile offerings (that will be used by thousands of people globally!)
- Go beyond digital UI and contribute to digital solutions for the event experience; use design thinking to build an understanding for our diverse hackathon attendees
- Work closely with the rest of the Design Team to maintain a consistent brand language
- Collaborate with frontend developers to define specifications and designs, and with your fellow designers to provide and receive feedback
    `,
    skills: `
- Enjoy designing simple but effective human-centered interfaces and experiences
- Adaptable and efficient with an eagerness to iterate on designs based on feedback
- Have a passion and natural curiosity for designing for diversity, inclusion and accessibility
- Have experience working with design tools (Sketch, Figma, Adobe Creative Suite)
- Have a portfolio showcasing your web and/or mobile product design work
- Bonus: Experience working with frontend developers
    `,
    link: "https://forms.gle/uFAEqRgAUoUYXz9H6",
  },
  [Role.GDES_ORG]: {
    label: "Graphic Designer",
    description: `
As a Graphic Designer for Hack the North, you will be bringing Canada&rsquo;s biggest hackathon&rsquo;s brand to life on web, mobile, and social media platforms. You will be the go-to person for creating beautiful and polished visual work, whether it&rsquo;s the Hack the North 2023 shirt illustration, social media assets, or even a short animation for a Facebook announcement. As a part of the Hack the North Design Team, you get to define what someone sees any time they interact with Hack the North.

Curious about what designing at Hack the North is like? Read our blog post here: [https://bit.ly/3k1rG6h](https://bit.ly/3k1rG6h)
    `,
    opportunities: `
- Create and experiment with various aspects of design (ex. illustration, motion, typography) to create an impactful brand identity
- Design compelling visual assets for our website and/or mobile offerings, social media accounts, and promotional items (ex. swag, virtual photo booth)
- Work closely with the rest of the Design Team to maintain a consistent brand language that is diverse, inclusive and accessible
- Collaborate with the Marketing Team and Logistics Team to define specifications and designs, and collaborate with your fellow designers to provide and receive feedback  
    `,
    skills: `
- Proficient with Adobe Creative Suite (Illustrator, Photoshop, InDesign, After Effects)
- Adaptable and efficient with an eagerness to iterate on designs based on feedback
- Have experience creating social media assets or promotional items
- Have a portfolio showcasing strong visual design work, whether it be illustration, motion, print, etc.
- Bonus: Have experience in motion graphics and/or animation
    `,
    link: "https://forms.gle/RgcaDAKAUZQQLDD7A",
  },
  [Role.SPNS_COO]: {
    label: "Sponsorship Coordinator",
    description: `
As a Sponsorship Coordinator for Hack the North, you will be responsible for building relationships with the sponsors that support our event. Your work shaping the platform of funding is what enables hackers from all over the world to have an amazing experience. Our sponsors play an important role to our hackers, providing access to networking opportunities and mentorship from top industry professionals — you&rsquo;ll be making these connections possible. Your efforts will ensure that today&rsquo;s leading technology organizations continue to provide dream opportunities for hackers at Hack the North.
    `,
    opportunities: `
- Raise the funding that will bring Hack the North to life
- Cultivate new and existing relationships with sponsors as the first point of contact for all sponsor representatives at the event
- Coordinate with the Logistics, Marketing, Platform, and Design Teams to build great experiences for sponsors from around the world 
- Interact with a diverse set of sponsors  
    `,
    skills: `
- Have strong interpersonal, writing, and verbal skills
- Be the primary advocate for sponsors&rsquo; goals and their impact on the hacker experience within the Hack the North team
- Stay organized throughout the year and hold personal accountability for cross-functional communication
- Be enthusiastic and possess a strong work ethic (calls need to be made during regular business hours)
- Be able to manage your time wisely
- Bonus: Have prior experience planning events (the bigger the better)
- Bonus: Have previous sales or sponsorship experience
- Bonus: Have experience with CRM and lead tracking software    
    `,
    link: "https://forms.gle/Gfbkih4ERYpZmkm6A",
  },
  [Role.MRKT_ORG]: {
    label: "Marketing Organizer",
    description: `
As a Marketing Organizer, you contribute to all external communications associated with Hack the North&rsquo;s significant milestones, including hacker applications, judge and speaker announcements, website copy, and more. You&rsquo;ll have the opportunity to conceptualize, plan, and execute marketing campaigns that reach tens of thousands of people in our global audience.
    `,
    opportunities: `
- Develop inclusive social media and outreach campaigns to grow our audience, increase audience engagement, and create excitement for the event
- Understand and utilize marketing tactics to reach and enable a diverse audience to fully experience and connect with Hack the North
- Write professional, compelling, and inclusive copy for external communications, including our website, emails, sponsorship packages, and other materials
- Develop a strong understanding of Hack the North&rsquo;s brand, and convey it through written content and marketing strategies
- Ensure that published content is consistent in tone, style, content, and accuracy
- Work with designers and developers to scope out written content, quickly iterate, and respond to changing project specifications
    `,
    skills: `
- Excellent understanding of social media content and strategy
- Able to consistently write professionally and inclusively 
- Great attention to detail
- Flexible and adaptable in a fast-paced team environment
- Able to work cross functionally with designers and developers
- Bonus: Have previous experience with drafting and launching ad campaigns (e.g. on Instagram, Linkedin, etc.)
    `,
    link: "https://forms.gle/6DboBxMhJhQLe4o79",
  },
  [Role.PROD_MAN]: {
    label: "Product Manager",
    description: `
As the sole Product Manager on Hack the North, you&rsquo;ll work cross-functionally with our design, frontend, and backend teams to create that support both the attendee and internal organizer experience. You&rsquo;ll be overseeing timelines for several large-scale projects (used by thousands of people each year) at once; think of hacker applications, attendee dashboards, and any other tools that keep our hackathon running. 

Every single day will be different; some days you&rsquo;ll be helping review prototypes, others you may be conducting interviews for user research, and some you might find yourself diving into technical requirements with developers. 

Your work will have a strong, direct influence on the direction of Hack the North 2023, and the products that bring it to life!
    `,
    opportunities: `
- Managing and scoping out timelines proactively for technical projects alongside co-directors, platform leads, and platform developers
- Owning and leading the vision and scope for a majority of Hack the North&rsquo;s internal and external tools
- Cross-functionally coordinating between subteams and aligning the needs of various stakeholders (organizers, volunteers, sponsors, etc.)
- Analyzing data in business intelligence tools (Metabase) and SQL
- Helping lead or supporting user (attendee) research efforts
    `,
    skills: `
- Strong willingness to learn and aptitude for product development
- Have strong interpersonal, writing, and verbal communication skills
- Product or project management experience in leading software or logistics projects 
- Work comfortably in a team environment with changing priorities and time pressures
- Organized and relentlessly detail-oriented
- Familiarity in data analysis using SQL, Google Sheets, and/or Metabase
- Bonus: technical experience in web development and/or full stack engineering
- Bonus: product design experience (prototyping, research)
    `,
    link: "https://forms.gle/GUavcZUCawcUmWtF8",
  },
  [Role.FIN_DIR]: {
    label: "Finance Director",
    description: `
As one of two Finance Directors on the Hack the North team, you will be responsible for Hack the North&rsquo;s finances. From building budgets, to negotiating with external vendors, you will be collaborating across the entire organization to ensure the success of our event. 
    `,
    opportunities: `
- Creating and tracking annual event budget 
- Processing expenses and team reimbursements 
- Work with sponsors to process and collect sponsorship payments 
- Collaborating effectively with organizers across the team to make financial decisions 
- Aligning financial expectations within the organization and with organizational goals
- Keeping an eye on the big picture and balancing short term and long term financial needs
    `,
    skills: `
- Basic proficiency in Microsoft Excel
- Strong organization skills and attention to detail
- Strong interpersonal and communication skills 
- Work comfortably in a team environment with changing priorities and time pressures
- Be familiar with accounting principles (baseline: AFM101 - Introduction to Financial Accounting or similar courses) 
- Bonus: Experience with QuickBooks or a similar accounting software
- Bonus: Have prior experience planning events (the bigger the better)
    `,
    link: "https://forms.gle/cRmQZv6DxqNk1eoD8",
  },
  [Role.LOG_TL]: {
    label: "Logistics Team Lead",
    description: `
The Logistics Team is co-managed by two Logistics Team Leads, who work closely together to foster a tight-knit and cohesive team and pull off a successful event in all aspects. Each Logistics Team Lead directly oversees 4-5 logistics organizers and their respective projects, and provides mentorship, guidance and support to team members. As a new team lead, you will be working with an experienced team lead who will guide you smoothly into the non-traditional, fast-moving organization behind Canada&rsquo;s biggest hackathon. **Please note: you must be in Waterloo for the summer term (May - August) to be eligible for this position.**
    `,
    opportunities: `
- Empower your team members to grow to take on and excel in the responsibilities they are assigned
- Check-in regularly with the other Logistics Team Lead to stay up-to-date with all things logistics
- Communicate with other team leads to ensure the wider Hack the North team is working together cohesively and effectively
- Track progress of your team members and ensure that timelines and goals are being met
- Keep an eye on the big picture to make sure everything comes together cohesively and nothing slips through the cracks
    `,
    skills: `
- Experience working closely with and managing a team
- Be relentlessly detail-oriented
- Be creative and able to think outside the box
- Be able to handle high-pressure situations and think on your feet
- Be extremely organized and able to track multiple projects and deadlines at once
- Understand how to effectively prioritize and allocate resources
- Have prior experience planning events (the bigger the better)
- Bonus: Experience with project management systems/methodologies
- Bonus: Understand the various pieces that come together to make a successful hackathon
    `,
    link: "https://forms.gle/DiuYn7F3JnDBkcnD9",
  },
  [Role.LOG_ORG]: {
    label: "Logistics Organizer",
    description: `
As a Logistics Organizer for Hack the North, you will be directly in charge of bringing a vital component of Canada&rsquo;s biggest hackathon to life and empowering thousands of attendees from diverse backgrounds. You&rsquo;ll get complete ownership over 1-2 projects on which you&rsquo;ll get to iterate, innovate, and execute from end to end. Our projects range from organizing travel to bring hackers from over 20 countries to our event, to negotiating with vendors to book a full weekend of catered meals and snacks, to cultivating a sense of community through activities & meetups!

As a Logistics Organizer, you will also work closely with other teams to coordinate design and marketing assets, manage project budget, and scope out responsibilities for custom platform tools. Your hard work will culminate in 36 hours of perfectly planned chaos that will leave behind an unforgettable experience for you and the attendees at Hack the North 2023.
    `,
    opportunities: `
- Take ownership of one or two projects and do whatever it takes to see it through to success
    - Possible projects include Travel, Ceremonies, Workshops, Activities, Judging, Swag, and more — see the application form for more details!
- Innovate and implement new ways to provide an unforgettable experience that results in a trailblazing event in the hackathon space
- Take on new tasks, big and small, as the need arises
- Create an event and community that welcomes and empowers attendees from underrepresented backgrounds.
    `,
    skills: `
- Be relentlessly detail-oriented
- Be creative and able to think outside the box
- Be organized and keep track of multiple tasks and responsibilities at once
- Have excellent teamwork, communication, and collaboration skills
- Take initiative and be able to work autonomously
- Bonus: Strong communication and negotiation skills for working with vendors
- Bonus: An understanding of the diverse audience of Hack the North/hackathons in general
    `,
    link: "https://forms.gle/DiuYn7F3JnDBkcnD9",
  },
};

export enum RoleCategory {
  ALL = "all",
  DEVELOPMENT = "development",
  DESIGN = "design",
  PRODUCT = "product",
  SPONSORSHIP = "sponsorship",
  FINANCE = "finance",
  MARKETING = "marketing",
  LOGISTICS = "logistics",
}

export const ROLE_CATEGORIES = {
  [RoleCategory.ALL]: {
    label: "All roles",
    roles: [
      Role.LOG_TL,
      Role.LOG_ORG,
      Role.FE_DEV,
      Role.BE_DEV,
      Role.DATA_SCI,
      Role.PDES_TL,
      Role.GDES_TL,
      Role.PDES_ORG,
      Role.GDES_ORG,
      Role.PROD_MAN,
      Role.SPNS_COO,
      Role.FIN_DIR,
      Role.MRKT_ORG,
    ],
  },
  [RoleCategory.LOGISTICS]: {
    label: "Logistics",
    roles: [Role.LOG_TL, Role.LOG_ORG],
  },
  [RoleCategory.DEVELOPMENT]: {
    label: "Development",
    roles: [Role.FE_DEV, Role.BE_DEV, Role.DATA_SCI],
  },
  [RoleCategory.DESIGN]: {
    label: "Design",
    roles: [Role.PDES_TL, Role.GDES_TL, Role.PDES_ORG, Role.GDES_ORG],
  },
  [RoleCategory.PRODUCT]: { label: "Product", roles: [Role.PROD_MAN] },
  [RoleCategory.SPONSORSHIP]: { label: "Sponsorship", roles: [Role.SPNS_COO] },
  [RoleCategory.FINANCE]: { label: "Finance", roles: [Role.FIN_DIR] },
  [RoleCategory.MARKETING]: { label: "Marketing", roles: [Role.MRKT_ORG] },
};
