import React from "react";

import { Box } from "@mui/material";

import type { InputFieldProps } from "./InputField.types";

import { InputStyles } from "./InputField.styles";

const InputField: React.FC<InputFieldProps> = ({
  value,
  setValue,
  setPhotos,
  setLoading,
  setPage,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setLoading(true);
    setPage(1);
    setPhotos([]);
  };

  return (
    <Box
      sx={InputStyles}
      onChange={handleChange}
      value={value}
      component={"input"}
      type="text"
      placeholder="Search"
      name="search"
    />
  );
};

export default InputField;
