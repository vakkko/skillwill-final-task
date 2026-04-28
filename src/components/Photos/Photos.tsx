import React from "react";

import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { containerStyles, imageStyles } from "./Photos.styles";
import type { PhotoProps } from "./Photos.types";
import Loading from "../Loading/Loading";

const Photos: React.FC<PhotoProps> = ({
  photos,
  lastImageElementRef,
  loading,
}) => {
  if (!photos || loading) return <Loading />;

  return (
    <ImageList sx={containerStyles} cols={3} gap={50}>
      {photos.map((photo, index) => {
        if (index + 1 === photos.length) {
          return (
            <ImageListItem ref={lastImageElementRef} key={photo.id}>
              <Box
                component={"img"}
                src={photo.urls.regular}
                alt={photo.alt_description || "Unsplash Photo"}
                sx={imageStyles}
              />
            </ImageListItem>
          );
        }
        return (
          <ImageListItem key={photo.id}>
            <Box
              component={"img"}
              src={photo.urls.regular}
              alt={photo.alt_description || "Unsplash Photo"}
              sx={imageStyles}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default Photos;
