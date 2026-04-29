import type { SxProps, Theme } from "@mui/material";

export const PhotoDetailsStyles = {
  userCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
  },

  downloadBtn: {
    marginLeft: "auto",
    padding: "8px 16px",
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none",
  },

  divider: {
    border: "0",
    borderTop: "1px solid #eee",
    margin: "24px 0",
  },
} satisfies Record<string, SxProps<Theme>>;
