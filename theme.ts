import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    red: [
      "#ffeae9",
      "#fed5d3",
      "#f5a9a6",
      "#ee7a76",
      "#e7524d",
      "#e43933",
      "#e4312b", // Palestine Red (6)
      "#ca1d19",
      "#b51614",
      "#9f090e",
    ],
    green: [
      "#edfdf5",
      "#daf8e8",
      "#b0f2cf",
      "#83ebb3",
      "#60e69c",
      "#4be38e",
      "#40e185",
      "#33c772",
      "#28b165",
      "#149954", // Palestine Green (9)
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 5px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: "36px" },
    },
  },
});
