import React, { useEffect, useState } from "react";

import axios from "axios";

import type { PhotoTypes } from "./Photos.types";

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

  return (
    <div className="photos-container">
      {photos?.map((photo) => (
        <React.Fragment key={photo.id}>
          <img src={photo.urls.regular} alt="" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Photos;
