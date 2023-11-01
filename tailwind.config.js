import colors from "tailwindcss/colors";

export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
  colors: {
    ...colors,
    success: "#43AC63",
    error: "#E55757",
    white: "#fff",
  },
};
export const plugins = [];
