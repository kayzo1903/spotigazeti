import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        "skin1" : "#01473E" ,
        "skin2" : "#005E53" ,
        "main" : "#007D6E" ,
        "text" : "#99CBC5" ,
        "skin3" : "#CCE5E2"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
