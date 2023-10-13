import Alkesh from "src/assets/img/stories/Alkesh.svg";
import Hazel from "src/assets/img/stories/Hazel.svg";
import Plett from "src/assets/img/stories/Plett.svg";
import Yugantar from "src/assets/img/stories/Yugantar.svg";

export type THackerStoriesData = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

const hackerStoriesData: THackerStoriesData[] = [
  {
    id: 0,
    name: "Yugantar",
    tagline: "Experienced Hacker",
    description:
      "For me, the best part about Hack the North was the magnitude of the event; in every way, from the number of hackers and companies to the activities and tons of swag! It was the best. I met a lot of new people, and got a lot of opportunities and inspiration. I also loved the countless events including the carnival, the helicopter landing, and of course the amazing food! Hack the North also allowed me to visit Canada which was priceless in its own way, and the team made it really simple for many of us to experience it with all the help in funding, visa application, buses, and so on. Thank you very much for everything!",
    image: Yugantar,
  },
  {
    id: 1,
    name: "Hazel",
    tagline: "First-time Hacker",
    description:
      "It was amazing the amount of work we put in with only three days to make a project that would normally take 1-3 months. I developed the whole design of the app using design software while both of my teammates coded it. I learned a lot as this was my first time designing an app! It was an interesting process and I learned how encouragement and teamwork are super essential! It was a long three days with little to no sleep but we did it - I'm super proud of the work we produced within that time frame!",
    image: Hazel,
  },
  {
    id: 2,
    name: "Alkesh",
    tagline: "Experienced Hacker",
    description:
      "When you see so many students building cool projects, their energy is so infectious! I made some cool friends and networked with other teams from around the world, like Texas A&M University, University of Waterloo, VIT, and BITS. Overall I had a really good experience at Hack the North. I’m really looking forward to the 2022 event!",
    image: Alkesh,
  },
  {
    id: 3,
    name: "Josiah",
    tagline: "First-time Hacker",
    description:
      "Creating a fully-fledged game from scratch was an awesome experience. Staying awake 24 hours straight, building a custom physics engine, and bonding with my best friend were some of the many great memories that Hack the North gave me. (P.S. - a version of the game we made just got bought by a game company!)",
    image: Plett,
  },
];

export default hackerStoriesData;
