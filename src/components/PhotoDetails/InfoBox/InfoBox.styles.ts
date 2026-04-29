import type { SxProps, Theme } from "@mui/material";

export const InfoBoxStyles = {
  infoBox: {
    padding: "16px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "24px",
  },

  infoTitle: {
    margin: "0 0 12px 0",
    fontSize: "1rem",
  },
} satisfies Record<string, SxProps<Theme>>;
