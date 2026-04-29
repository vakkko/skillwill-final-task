import { Box } from "@mui/material";
import { PhotoStatsStyles } from "./PhotoStats.styles";
import type { PhotoDetailsProps } from "../PhotoDetails.types";

const PhotoStats: React.FC<
  Pick<PhotoDetailsProps, "likes" | "width" | "height">
> = ({ likes, width, height }) => {
  return (
    <Box style={PhotoStatsStyles.statsGrid}>
      <Box>
        <Box component={"span"} style={PhotoStatsStyles.label}>
          Likes
        </Box>
        <Box component={"p"} style={PhotoStatsStyles.statValue}>
          {likes.toLocaleString()}
        </Box>
      </Box>
      <Box>
        <Box component={"span"} style={PhotoStatsStyles.label}>
          Dimensions
        </Box>
        <Box component={"p"} style={PhotoStatsStyles.statValue}>
          {width} × {height}
        </Box>
      </Box>
    </Box>
  );
};

export default PhotoStats;
