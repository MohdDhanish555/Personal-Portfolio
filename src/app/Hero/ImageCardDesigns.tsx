"use client";
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Hub } from "@mui/icons-material";

import { PrimaryDots, LinesSvg, SecondaryDots, VerifiedBadge } from "./icons";
import {
  primaryDotContainer,
  skillsBox,
  secondaryDotContainer,
  expBox,
  logoBox,
  verifiedBadgeContainer,
} from "./style";

const ImageCardDesigns = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Box sx={primaryDotContainer}>
        <PrimaryDots
          color={theme.palette.primary.main}
          width={matches ? "70" : "50"}
          height={matches ? "70" : "50"}
        />
      </Box>
      <Box sx={skillsBox}>
        <Typography variant="subtitle1">Skills</Typography>
        <LinesSvg
          opacity={1}
          color={theme.palette.primary.main}
          width={matches ? "113" : "83"}
          height={matches ? "22" : "16"}
        />
      </Box>
      <Box sx={secondaryDotContainer}>
        <SecondaryDots
          color={theme.palette.secondary.main}
          width={matches ? "80" : "60"}
          height={matches ? "75" : "55"}
        />
      </Box>
      <Box sx={expBox}>
        <Box sx={logoBox}>
          <Hub
            color="primary"
            sx={{
              fontSize: matches ? "small" : "14px",
            }}
          />
        </Box>
        <Box>
          <Typography variant="body1" fontSize={12} color="secondary">
            Experience
          </Typography>
          <Typography variant="h3" lineHeight="120%">
            1+{" "}
            <Typography component="span" variant="subtitle1" fontWeight={700}>
              Years
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box sx={verifiedBadgeContainer}>
        <VerifiedBadge color={theme.palette.primary.main} />
      </Box>
    </>
  );
};

export default ImageCardDesigns;
