"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { EightCircles, LinesSvg, SecondaryDots, TwoCircles } from "./icons";

const HeroDesigns = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: {
            xs: "0",
            md: "5%",
          },
          left: {
            xs: "20%",
            md: "25%",
          },
          zIndex: -999,
        }}
      >
        <EightCircles
          color={theme.palette.primary.main}
          width={matches ? "150" : "95"}
          height={matches ? "100" : "65"}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: {
            xs: "45%",
            sm: "5%",
          },
          right: {
            xs: "10%",
            sm: "25%",
          },
          zIndex: -999,
        }}
      >
        <TwoCircles
          primaryColor={theme.palette.primary.main}
          secondaryColor={theme.palette.secondary.main}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          zIndex: -999,
        }}
      >
        <LinesSvg
          opacity={0.2}
          color={theme.palette.primary.main}
          width={matches ? "113" : "0"}
          height={matches ? "22" : "0"}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          zIndex: -999,
        }}
      >
        <SecondaryDots
          color={theme.palette.secondary.main}
          width={matches ? "80" : "0"}
          height={matches ? "75" : "0"}
        />
      </Box>
    </>
  );
};

export default HeroDesigns;
