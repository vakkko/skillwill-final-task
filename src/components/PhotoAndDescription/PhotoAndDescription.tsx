import { Box } from "@mui/material";
import React from "react";
import { PhotoAndDescriptionStyles } from "./PhotoAndDescription.styles";
import type { PhotoAndDescriptionProps } from "./PhotoAndDescription.types";

const PhotoAndDescription: React.FC<PhotoAndDescriptionProps> = ({
  color,
  regular,
  description,
  alt_description,
}) => {
  return (
    <Box component={"section"} style={PhotoAndDescriptionStyles.sectionStyles}>
      <Box
        style={{
          ...PhotoAndDescriptionStyles.imageWrapper,
          backgroundColor: color,
        }}
      >
        <img
          src={regular}
          alt={alt_description}
          style={PhotoAndDescriptionStyles.mainImage}
        />
      </Box>
      <Box style={PhotoAndDescriptionStyles.textHeader}>
        <h1>{description}</h1>
        <p>{alt_description}</p>
      </Box>
    </Box>
  );
};

export default PhotoAndDescription;
