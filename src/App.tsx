import React from "react";
import Photos from "./components/Photos/Photos";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box component={"main"} sx={{ margin: "0 100px" }}>
      <Photos />
    </Box>
  );
};

export default App;
