import { Box } from "@mui/material";

import Photos from "../../components/Photos/Photos";
import InputField from "../../components/InputField/InputField";

const Landing: React.FC = () => {
  return (
    <Box component={"main"} sx={{ margin: "0 100px" }}>
      <InputField />
      <Photos />
    </Box>
  );
};

export default Landing;
