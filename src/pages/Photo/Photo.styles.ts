import type { SxProps, Theme } from "@mui/material";

export const PhotoStyles = {
  container: {
    margin: "0 100px",
    padding: "40px 20px",
    fontFamily: "sans-serif",
  },

  layout: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    marginTop: "20px",
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  back: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#333",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",

    "& svg": {
      transition: "transform 0.2s ease",
    },

    "&:hover": {
      "& svg": {
        transform: "translateX(-4px)",
      },
    },
  },
} satisfies Record<string, SxProps<Theme>>;
