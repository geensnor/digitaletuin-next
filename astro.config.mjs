import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
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
          label: "Lijsten",
          collapsed: true,
          autogenerate: { directory: "lijsten" },
        },
      ],
    }),
  ],
});
