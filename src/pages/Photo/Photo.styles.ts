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
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
} satisfies Record<string, SxProps<Theme>>;
