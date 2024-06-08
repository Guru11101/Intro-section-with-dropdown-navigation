import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   
    },
    container:{
      center:true,
      padding:{
        sm:"1rem",
        lg:"1.rem",
      },
    }
  },
  plugins: [],
};
export default config;
