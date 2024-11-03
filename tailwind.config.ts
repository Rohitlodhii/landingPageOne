import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container : {
      center  : true ,
      padding : {
        DEFAULT : "20px",
        lg : "80px",
      },
      screens : {
        sm : "375px",
        md :"768px",
        lg :"1200px",
      },

    },
    screens : {
      sm : '375px',
      md : '768px',
      lg : '1200px'
    }
  },
  plugins: [],
};
export default config;
