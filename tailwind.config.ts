import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1C4670",
      secondary: "#FFA229",
      tertiary: "#1C4670",
      white: "#FFFFFF",
      graylight: "#D1D1D199",
      cyanblue: "#272D37",
      primarydark: "#011B5B",
      texttwo: "#AAB5CD",
      copper: "#3C2109",
      yellowlight: "#EB8D15",
      blacklight: "#181617",
      blacktext: "#0D1216",
      blackblog: "#1A1A1A"
    },
  },
  plugins: [],
};
export default config;
