import React from "react";

import { Box } from "@mui/material";

import type { PhotoDetailsProps } from "./PhotoDetails.types";
import { PhotoDetailsStyles } from "./PhotoDetails.styles";
import UserAvatarAndName from "./UserAvatarAndName/UserAvatarAndName";
import PhotoStats from "./PhotoStats/PhotoStats";

const PhotoDetails: React.FC<PhotoDetailsProps> = ({
  profile_image,
  user_name,
  username,
  download,
  likes,
  width,
  height,
  created_at,
  asset_type,
  alternative_slugs,
}) => {
  return (
    <Box component={"aside"}>
      <Box style={PhotoDetailsStyles.userCard}>
        <UserAvatarAndName
          user_name={user_name}
          username={username}
          profile_image={profile_image}
        />
        <Box
          component={"a"}
          href={download}
          target="_blank"
          rel="noreferrer"
          style={PhotoDetailsStyles.downloadBtn}
        >
          Download
        </Box>
      </Box>

      <Box component={"hr"} style={PhotoDetailsStyles.divider} />

      <PhotoStats height={height} likes={likes} width={width} />
    </Box>
  );
};

export default PhotoDetails;
