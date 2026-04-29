import React from "react";

import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { containerStyles, imageStyles } from "./Photos.styles";
import type { PhotoProps } from "./Photos.types";
import Loading from "../Loading/Loading";
import { Link } from "react-router";

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
            <Link
              ref={lastImageElementRef}
              key={photo.id}
              style={{ cursor: "pointer" }}
              to={photo.id}
            >
              <ImageListItem>
                <Box
                  component={"img"}
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                  sx={imageStyles}
                />
              </ImageListItem>
            </Link>
          );
        }
        return (
          <Link key={photo.id} to={photo.id}>
            <ImageListItem>
              <Box
                component={"img"}
                src={photo.urls.regular}
                alt={photo.alt_description || "Unsplash Photo"}
                sx={imageStyles}
              />
            </ImageListItem>
          </Link>
        );
      })}
    </ImageList>
  );
};

export default Photos;
