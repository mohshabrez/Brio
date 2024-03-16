export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  extend: {
    colors: {
      'custom-dark': '#0B1220',
    },
    backgroundImage: theme => ({
      'gradient-radial': 'radial-gradient(132.89% 954.29% at 43.87% 40.79%, #C4CCD4 0%, #607185 100%)',
    }),
  },
  fontFamily: {
    sans: ["Segoe UI", "Poppins", "sans-serif"],
  },
};
export const darkMode = "class";
export const plugins = [];
