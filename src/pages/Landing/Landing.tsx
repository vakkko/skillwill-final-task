import { useEffect, useState } from "react";

import axios from "axios";

import { useDebounce } from "use-debounce";

import { Box } from "@mui/material";

import Photos from "../../components/Photos/Photos";
import InputField from "../../components/InputField/InputField";

import type { PhotoTypes } from "../../components/Photos/Photos.types";

const Landing: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [photos, setPhotos] = useState<PhotoTypes[]>([]);
  const [debouncedValue] = useDebounce(value, 500);

  useEffect(() => {
    const controller = new AbortController();
    console.log(controller);

    const fetchData = async () => {
      try {
        const url = debouncedValue
          ? "https://api.unsplash.com/search/photos"
          : "https://api.unsplash.com/photos";

        const response = await axios.get(url, {
          signal: controller.signal,
          params: {
            client_id: "cvsc_ts30Fz40q2V-mNmF2fyFZy-0eVTVlZfjzQ6DC4",
            ...(debouncedValue && { query: debouncedValue }),
            per_page: 20,
          },
        });

        const data = debouncedValue ? response.data.results : response.data;
        setPhotos(data);
      } catch (err) {
        if (axios.isCancel(err)) return;
        console.error(err);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [debouncedValue]);

  return (
    <Box component="main" sx={{ margin: "0 100px", pt: 4 }}>
      <InputField value={value} setValue={setValue} />
      <Photos photos={photos} />
    </Box>
  );
};

export default Landing;
