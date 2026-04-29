import type { SxProps, Theme } from "@mui/material";

export const PhotoAndDescriptionStyles = {
  sectionStyles: { flex: "2 1 600px" },

  imageWrapper: {
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  mainImage: { width: "100%", display: "block", height: "auto" },
  textHeader: { marginTop: "24px" },
} satisfies Record<string, SxProps<Theme>>;
