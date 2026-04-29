import { Box } from "@mui/material";

import type { PhotoDetailsProps } from "../PhotoDetails.types";

import { InfoBoxStyles } from "./InfoBox.styles";

const InfoBox: React.FC<
  Pick<PhotoDetailsProps, "created_at" | "asset_type">
> = ({ created_at, asset_type }) => {
  return (
    <Box style={InfoBoxStyles.infoBox}>
      <Box component={"h3"} style={InfoBoxStyles.infoTitle}>
        Photo Info
      </Box>
      <Box component={"p"}>
        <Box component={"strong"}>Published:</Box>{" "}
        {new Date(created_at).toLocaleDateString()}
      </Box>
      <Box component={"p"}>
        <Box component={"strong"}>Type:</Box> {asset_type}
      </Box>
    </Box>
  );
};

export default InfoBox;
