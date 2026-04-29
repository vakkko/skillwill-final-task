import { useEffect, useState, useRef, useCallback } from "react";

import axios from "axios";

import { useDebounce } from "use-debounce";

import { Box } from "@mui/material";

import Photos from "../../components/Photos/Photos";
import InputField from "../../components/InputField/InputField";

import type { PhotoTypes } from "../../components/Photos/Photos.types";

const Landing: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [photos, setPhotos] = useState<PhotoTypes[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [debouncedValue] = useDebounce(value, 500);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastImageElementRef = useCallback((node: HTMLAnchorElement | null) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const url = debouncedValue
          ? "https://api.unsplash.com/search/photos"
          : "https://api.unsplash.com/photos";

        const response = await axios.get(url, {
          signal: controller.signal,
          params: {
            client_id: "cvsc_ts30Fz40q2V-mNmF2fyFZy-0eVTVlZfjzQ6DC4",
            ...(debouncedValue && { query: debouncedValue }),
            page,
            per_page: 20,
          },
        });
        setLoading(false);
        const data = debouncedValue ? response.data.results : response.data;
        setPhotos((prev) => [...prev, ...data]);
      } catch (err) {
        if (axios.isCancel(err)) return;
        console.error(err);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [debouncedValue, page]);

  return (
    <Box component="main" sx={{ margin: "0 100px", pt: 4 }}>
      <InputField
        setPhotos={setPhotos}
        setPage={setPage}
        setLoading={setLoading}
        value={value}
        setValue={setValue}
      />
      <Photos
        loading={loading}
        lastImageElementRef={lastImageElementRef}
        photos={photos}
      />
    </Box>
  );
};

export default Landing;
