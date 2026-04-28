import React from "react";

import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { containerStyles, imageStyles } from "./Photos.styles";
import type { PhotoProps } from "./Photos.types";

const Photos: React.FC<PhotoProps> = ({ photos }) => {
  if (!photos) return;

  return (
    <ImageList sx={containerStyles} cols={3} gap={50}>
      {photos.map((photo) => (
        <ImageListItem key={photo.id}>
          <Box
            component={"img"}
            src={photo.urls.regular}
            alt={photo.alt_description || "Unsplash Photo"}
            sx={imageStyles}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Photos;
