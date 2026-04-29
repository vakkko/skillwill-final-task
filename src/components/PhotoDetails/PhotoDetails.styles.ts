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

  tagCloud: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  tag: {
    padding: "4px 8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "0.8rem",
    color: "#555",
  },
} satisfies Record<string, SxProps<Theme>>;
