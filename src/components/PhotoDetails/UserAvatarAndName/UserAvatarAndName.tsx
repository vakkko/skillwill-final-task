import { Box } from "@mui/material";

import type { PhotoDetailsProps } from "../PhotoDetails.types";

import { UserAvatarAndNameStyles } from "./UserAvatarAndName.styles";

const UserAvatarAndName: React.FC<
  Pick<PhotoDetailsProps, "profile_image" | "user_name" | "username">
> = ({ profile_image, user_name, username }) => {
  return (
    <>
      <Box
        component={"img"}
        src={profile_image}
        alt={user_name}
        style={UserAvatarAndNameStyles.avatar}
      />
      <Box>
        <Box component={"p"} style={UserAvatarAndNameStyles.userName}>
          {user_name}
        </Box>
        <Box component={"p"} style={UserAvatarAndNameStyles.handle}>
          @{username}
        </Box>
      </Box>
    </>
  );
};

export default UserAvatarAndName;
