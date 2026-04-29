import type { SxProps, Theme } from "@mui/material";

export const UserAvatarAndNameStyles = {
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
  },

  userName: {
    fontWeight: "bold",
    margin: 0,
  },

  handle: {
    color: "#666",
    fontSize: "0.9rem",
    margin: 0,
  },
} satisfies Record<string, SxProps<Theme>>;
