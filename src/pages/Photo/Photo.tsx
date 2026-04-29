import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

import axios from "axios";

import { Box } from "@mui/material";

import PhotoAndDescription from "../../components/PhotoAndDescription/PhotoAndDescription";
import Loading from "../../components/Loading/Loading";

import type { PhotoTypes } from "../../components/Photos/Photos.types";

import { PhotoStyles } from "./Photo.styles";

const Photo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [photoData, setPhotoData] = useState<PhotoTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/photos/${id}/?client_id=cvsc_ts30Fz40q2V-mNmF2fyFZy-0eVTVlZfjzQ6DC4`,
        );
        setLoading(false);
        setPhotoData(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPhotoData();
  }, [id]);

  if (!photoData || loading)
    return (
      <Box sx={PhotoStyles.center}>
        <Loading />
      </Box>
    );

  return (
    <Box component={"main"} sx={PhotoStyles.container}>
      <Box style={PhotoStyles.layout}>
        <PhotoAndDescription
          alt_description={photoData.alt_description}
          color={photoData.color}
          description={photoData.description}
          regular={photoData.urls.regular}
        />
      </Box>
    </Box>
  );
};

export default Photo;
