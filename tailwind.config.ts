import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      mainColors: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        'major': {'max': '1260px'},
        'major1': {'max': '1240px'},
        'majortwo': {'max': '1235px'},
        'majortwomin': {'min': '1235px'},
        'majortwo0.1': {'max': '1200px'},
        'majortwo1': {'max': '1148px'},
        'majortwo1-2': {'max': '1048px'},
        'majortwo2': {'max': '1122px'},
        'majortwo3': {'max': '1034px'},
        'majortwo3.1': {'max': '990px'},
        'majortwo4': {'max': '940px'},
        'majorthree': {'max': '890px'},
        'majorthree1': {'max': '800px'},
        'majorthree2': {'max': '772px'},
        'majorfour': {'max': '761px'},
        'majorfour1': {'max': '700px'},
        'majorfour2': {'max': '680px'},
        'midtw': {'max': '648px'},
        'midtwo': {'max': '553px'},
        'midtwo2': {'max': '538px'},
        'midtwo3': {'max': '516px'},
        'midtwo4': {'max': '485px'},
        'midthree': {'max': '600px'},
        'midfour': {'max': '452px'},
        'midfour1': {'max': '420px'},
        'low': {'max': '400px'},
        'lowone': {'max': '382px'},
        'lowtwo': {'max': '370px'},
        'lowtwo1': {'max': '348px'},
        'lowtwo2': {'max': '325px'},
        'lowtwo2-1': {'max': '306px'},
        'lowtwo3': {'max': '293px'},
        'lowthree': {'max': '275px'},
        'lowthreetwo':{'max': '234px'},
      },
    },
  },
  plugins: [],
};
export default config;
