import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Demo", icon: "discover", link: "/demo/" },
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "Roadmap",
    icon: "note",
    link: "https://droneit.canny.io/feature-requests",
  },
  {
    text: "Changelog",
    icon: "note",
    link: "https://droneit.canny.io/changelog",
  },
  {
    text: "Go to Visionhub",
    icon: "note",
    link: "https://app.visionhub.es",
  },
]);
