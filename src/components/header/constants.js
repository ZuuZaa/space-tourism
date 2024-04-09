import { nanoid } from "nanoid";

export const navLinks = [
  {
    id: nanoid(),
    name: "home",
    order: "00",
    link: "/",
    active: true,
  },
  {
    id: nanoid(),
    name: "destination",
    order: "01",
    link: "/destination",
    active: false,
  },
  {
    id: nanoid(),
    name: "crew",
    order: "02",
    link: "/crew",
    active: false,
  },
  {
    id: nanoid(),
    name: "technology",
    order: "03",
    link: "/technology",
    active: false,
  },
];
