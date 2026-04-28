import React, { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { Box } from "@mui/material";

import { InputStyles } from "./InputField.styles";
import { useDebounce } from "use-debounce";

const InputField: React.FC = () => {
  const [value, setValue] = useState<string>();

  const [debouncedValue] = useDebounce(value, 500);

  async function fetchData(query: string) {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=cvsc_ts30Fz40q2V-mNmF2fyFZy-0eVTVlZfjzQ6DC4`,
      );
    } catch (err) {
      console.error(err);
    }
  }

  const sendRequest = useCallback((query: string) => {
    fetchData(query);
  }, []);

  useEffect(() => {
    if (debouncedValue) {
      sendRequest(debouncedValue);
    }
  }, [debouncedValue, sendRequest]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <Box
      sx={InputStyles}
      onChange={handleChange}
      value={value}
      component={"input"}
      type="text"
      placeholder="Search"
    />
  );
};

export default InputField;
