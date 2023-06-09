/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#06223F",
        bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#a991f7",
  //         secondary: "#f6d860",
  //         accent: "#37cdbe",
  //         neutral: "#3d4451",
  //         "base-100": "#ffffff",
  //       },
  //     },
  //     "dark",
  //     "cupcake",
  //   ],
  // },
  plugins: [],
};
