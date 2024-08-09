import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import yaml from "@rollup/plugin-yaml";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()],
  },
  integrations: [
    starlight({
      editLink: {
        baseUrl: "https://github.com/geensnor/DigitaleTuin/edit/master",
      },
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
        }),
      ],
      title: "De Digitale Tuin",
      locales: {
        root: {
          label: "Nederlands",
          lang: "nl",
        },
      },
      social: {
        github: "https://github.com/geensnor/dedigitaletuin",
        mastodon: "https://mastodon.xyz/@geensnor",
        telegram: "https://t.me/geensnor",
      },
      pagination: false,
      lastUpdated: true,
      logo: {
        src: "./src/assets/desnor.svg",
      },
      favicon: "./src/assets/desnor.svg",
      tableOfContents: false,
      components: {
        PageTitle: "./src/components/KopTuin.astro",
      },
      customCss: [
        "./src/styles/custom.css",
        "@fontsource/zilla-slab/500.css",
        "@fontsource-variable/work-sans",
      ],
      sidebar: [
        {
          label: "Wielrennen",
          autogenerate: { directory: "wielrennen" },
        },
        {
          label: "Soft- en hardware",
          collapsed: true,
          autogenerate: { directory: "soft-en-hardware" },
        },
        {
          label: "Lijsten",
          collapsed: false,
          autogenerate: { directory: "lijsten" },
        },
        {
          label: "Eten en drinken",
          collapsed: true,
          autogenerate: { directory: "eten-en-drinken" },
        },
        {
          label: "Overig",
          collapsed: true,
          autogenerate: { directory: "overig" },
        },
        {
          label: "Abonnementen",
          collapsed: true,
          autogenerate: { directory: "abonnementen" },
        },
      ],
    }),
  ],
});
