"use client";
import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  PlayArrow,
  Instagram,
  FacebookOutlined,
  LinkedIn,
} from "@mui/icons-material";
import { iconStyle, socialLinksContainer } from "./style";

const SocialLinks = () => {
  return (
    <Box sx={socialLinksContainer}>
      <Typography variant="subtitle2" color="secondary">
        Follow Me
      </Typography>
      <Typography variant="subtitle2" color="secondary" paddingX={1.5}>
        -
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton color="primary" sx={iconStyle}>
          <LinkedIn color="secondary" />
        </IconButton>
        <IconButton color="primary" sx={iconStyle}>
          <Instagram color="primary" />
        </IconButton>
        <IconButton color="primary" sx={iconStyle}>
          <FacebookOutlined color="secondary" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SocialLinks;
