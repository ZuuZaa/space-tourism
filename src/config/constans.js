import moon from "../../public/images/destination/image-moon.png";
// import mars from "images/destination/image-mars.png";
// import europa from "images/destination/image-europa.png";
// import titan from "images/destination/image-titan.png";

export const NAV_LINKS = {
  HOME: {
    name: "home",
    order: "00",
    link: "/",
    description: "",
    background: {
      mobile: "images/home/background-home-mobile.jpg",
      tablet: "images/home/background-home-tablet.jpg",
      desktop: "images/home/background-home-desktop.jpg",
    },
    active: true,
  },
  DESTINATION: {
    name: "destination",
    order: "01",
    link: "/destination",
    description: "Pick your destination",
    background: {
      mobile: "images/destination/background-destination-mobile.jpg",
      tablet: "images/destination/background-destination-tablet.jpg",
      desktop: "images/destination/background-destination-desktop.jpg",
    },
    items: [
      {
        name: "moon",
        image: "images/destination/image-moon.png",
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400",
        duration: "3 days",
      },
      {
        name: "mars",
        image: "../../public/images/destination/image-mars.png",
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil.",
        duration: "9 months",
      },
      {
        name: "europa",
        image: "../../public/images/destination/image-europa.png",
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil.",
        duration: "3 years",
      },
      {
        name: "titan",
        image:  "../../public/images/destination/image-titan.png",
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil.",
        duration: "7 years",
      },
    ],
    active: false,
  },
  CREW: {
    name: "crew",
    order: "02",
    link: "/crew",
    description: "Meet your crew",
    background: {
      mobile: "images/crew/background-crew-mobile.jpg",
      tablet: "images/crew/background-crew-tablet.jpg",
      desktop: "images/crew/background-crew-desktop.jpg",
    },
    active: false,
  },
  TECHNOLOGY: {
    name: "technology",
    order: "03",
    link: "/technology",
    description: "SPACE LAUNCH 101",
    background: {
      mobile: "images/technology/background-technology-mobile.jpg",
      tablet: "images/technology/background-technology-tablet.jpg",
      desktop: "images/technology/background-technology-desktop.jpg",
    },
    active: false,
  },
};
