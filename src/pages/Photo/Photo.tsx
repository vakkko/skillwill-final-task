import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";

import axios from "axios";

import { Box } from "@mui/material";

import PhotoAndDescription from "../../components/PhotoAndDescription/PhotoAndDescription";
import Loading from "../../components/Loading/Loading";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";

import type { PhotoTypes } from "../../components/Photos/Photos.types";

import { PhotoStyles } from "./Photo.styles";

const photoCache: Record<string, PhotoTypes> = {};

const Photo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [photoData, setPhotoData] = useState<PhotoTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPhotoData = async () => {
      if (!id) return;
      if (photoCache[id]) {
        setPhotoData(photoCache[id]);
        return;
      }
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/photos/${id}/?client_id=cvsc_ts30Fz40q2V-mNmF2fyFZy-0eVTVlZfjzQ6DC4`,
        );
        setLoading(false);
        photoCache[id] = response.data;
        setPhotoData(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPhotoData();
  }, [id]);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!photoData || loading)
    return (
      <Box sx={PhotoStyles.center}>
        <Loading />
      </Box>
    );

  return (
    <Box component={"main"} sx={PhotoStyles.container}>
      <Box component={"a"} sx={PhotoStyles.back} onClick={handleBackClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </Box>
      <Box style={PhotoStyles.layout}>
        <PhotoAndDescription
          alt_description={photoData.alt_description}
          color={photoData.color}
          description={photoData.description}
          regular={photoData.urls.regular}
        />
        <PhotoDetails
          width={photoData.width}
          height={photoData.height}
          asset_type={photoData.asset_type}
          created_at={photoData.created_at}
          download={photoData.links.download}
          likes={photoData.likes}
          profile_image={photoData.user.profile_image?.medium}
          user_name={photoData.user.name}
          username={photoData.user.username}
        />
      </Box>
    </Box>
  );
};

export default Photo;
