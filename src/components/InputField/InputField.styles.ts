import type { SxProps, Theme } from "@mui/material";

export const InputStyles: SxProps<Theme> = {
  backgroundColor: "#f0f0f0",
  color: "#333333",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "8px 12px",
  outline: "none",
  fontSize: "1rem",

  "&:focus": {
    borderColor: "#1976d2",
    backgroundColor: "#e8e8e8",
  },

  "&::placeholder": {
    color: "#888",
  },
};
