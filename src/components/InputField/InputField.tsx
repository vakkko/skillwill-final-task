import React from "react";

import { Box } from "@mui/material";

import { InputStyles } from "./InputField.styles";

const InputField: React.FC = () => {
  return (
    <Box
      sx={InputStyles}
      component={"input"}
      type="text"
      placeholder="Search"
    />
  );
};

export default InputField;
