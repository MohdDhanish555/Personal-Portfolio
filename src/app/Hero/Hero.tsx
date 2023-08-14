import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";

import { container, imageCard, imageWrapper, leftBlock } from "./style";
import SocialLinks from "./SocialLinks";
import ImageCardDesigns from "./ImageCardDesigns";
import HeroDesigns from "./HeroDesigns";
import Image from "next/image";
import profileImg from "./profile.png";

const Hero = () => {
  return (
    <Box sx={container}>
      <HeroDesigns />
      <Box sx={leftBlock}>
        <Typography variant="h2" color="primary" mb={3} mt={4}>
          {`<Hello />`}
        </Typography>
        <Box ml={2}>
          <Typography
            variant="h1"
            sx={{
              textTransform: "uppercase",
              lineHeight: "120%",
              mb: 2,
            }}
          >
            I'm Mahammed Dhanish
          </Typography>
          <Typography variant="subtitle2" color="secondary" mb={5}>
            Software Engineer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Button variant="outlined">Hire Me</Button>
          <Button variant="text" sx={{ ml: 2 }} endIcon={<Download />}>
            Download CV
          </Button>
        </Box>
      </Box>
      <Box sx={imageWrapper}>
        <Box sx={imageCard}>
          <Image src={profileImg} alt="profile" />
        </Box>
        <ImageCardDesigns />
      </Box>

      {/* <SocialLinks /> */}
    </Box>
  );
};

export default Hero;
