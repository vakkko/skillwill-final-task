import { Box, CircularProgress } from "@mui/material";

import { loadingStyles } from "./Loading.styles";

const Loading: React.FC = () => {
  return (
    <Box sx={loadingStyles}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
