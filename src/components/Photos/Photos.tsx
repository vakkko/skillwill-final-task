import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import axios from "axios";

import type { PhotoTypes } from "./Photos.types";

import { containerStyles, imageStyles } from "./Photos.styles";

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoTypes[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=cvsc_ts30Fz40q2V-mNmF2fyFZy-0eVTVlZfjzQ6DC4",
        );
        setPhotos(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

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
