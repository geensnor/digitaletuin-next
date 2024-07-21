import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "De Digitale Tuin",
      social: {
        github: "https://github.com/geensnor/dedigitaletuin",
        mastodon: "https://mastodon.xyz/@geensnor",
        telegram: "https://t.me/geensnor",
      },
      logo: {
        src: "./src/assets/desnor.svg",
      },
      favicon: "./src/assets/desnor.svg",
      tableOfContents: false,
      components: {
        PageTitle: "./src/components/KopTuin.astro",
      },
      customCss: ["./src/styles/custom.css"],
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
