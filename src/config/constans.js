import moon from "../../public/images/destination/image-moon.png";
import mars from "../../public/images/destination/image-mars.png";
import europa from "../../public/images/destination/image-europa.png";
import titan from "../../public/images/destination/image-titan.png";
import commander from "../../public/images/crew/image-douglas-hurley.png";
import specialist from "../../public/images/crew/image-mark-shuttleworth.png";
import pilot from "../../public/images/crew/image-victor-glover.png";
import engineer from "../../public/images/crew/image-anousheh-ansari.png";
import launchLandscape from "../../public/images/technology/image-launch-vehicle-landscape.jpg";
import portLandscape from "../../public/images/technology/image-spaceport-landscape.jpg";
import capsuleLandscape from "../../public/images/technology/image-space-capsule-landscape.jpg";

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
        id: "moon",
        name: "Moon",
        tabTitle: "moon",
        image: moon,
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400",
        duration: "3 days",
      },
      {
        id: "mars",
        name: "Mars",
        tabTitle: "mars",
        image: mars,
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil.",
        duration: "9 months",
      },
      {
        id: "europa",
        name: "Europa",
        tabTitle: "europa",
        image: europa,
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil.",
        duration: "3 years",
      },
      {
        id: "titan",
        name: "Titan",
        tabTitle: "titan",
        image: titan,
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
    items: [
      {
        id: "commander",
        name: "Douglas Hurley",
        tabTitle: "",
        image: commander,
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      },
      {
        id: "specialist",
        name: "Mark Shuttleworth",
        tabTitle: "",
        image: specialist,
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      },
      {
        id: "pilot",
        name: "Victor Glover",
        tabTitle: "",
        image: pilot,
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      },
      {
        id: "engineer",
        name: "Anousheh Ansari",
        tabTitle: "",
        image: engineer,
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
    ],
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
    items: [
      {
        id: "launch",
        tabTitle: "1",
        name: "Launch vehicle",
        image: launchLandscape,
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      {
        id: "port",
        name: "Spaceport",
        tabTitle: "2",
        image: portLandscape,
        description:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      },
      {
        id: "capsule",
        name: "Space capsule",
        tabTitle: "3",
        image: capsuleLandscape,
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },
    ],
    active: false,
  },
};
