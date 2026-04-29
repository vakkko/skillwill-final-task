import type { SxProps, Theme } from "@mui/material";

export const PhotoStatsStyles = {
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "24px",
  },

  label: {
    color: "#666",
    fontSize: "0.8rem",
    textTransform: "uppercase",
  },

  statValue: {
    fontSize: "1.2rem",
    fontWeight: "600",
    margin: "4px 0",
  },
} satisfies Record<string, SxProps<Theme>>;
