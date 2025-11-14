import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Dimas",
  DESCRIPTION: "Personal site featuring my blogs and projects.",
  EMAIL: "dev@dimas.xyz",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A collection of blogs and projects exploring coding, software development, and digital creativity.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/dimmy2k",
  },
  {
    NAME: "Credly",
    HREF: "https://www.credly.com/users/dimasbayusjw",
  },
  {
    NAME: "Spotify",
    HREF: "https://open.spotify.com/user/31tib4by2uyaug2ct747s6p3khfy",
  },
  {
    NAME: "Letterboxd",
    HREF: "https://boxd.it/gY3JN",
  },
];
