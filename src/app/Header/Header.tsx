"use client";
import React, { useState } from "react";
import {
  Box,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { Palette, Cancel, DataUsage } from "@mui/icons-material";
import { HeaderStyle, LogoText, LogoTextInitial } from "./style";
import { skillsBox } from "../Hero/style";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setTheme } from "@/Redux/reducers/themeSlice";

const Header = () => {
  const [showThemes, setShowThemes] = useState(false);
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleTheme = (_: any, newColor: string | null) => {
    if (newColor !== null) {
      dispatch(setTheme(newColor));
    }
  };

  const handleThemeClick = () => {
    setShowThemes((prev) => !prev);
  };

  return (
    <Box sx={HeaderStyle}>
      {/* <Box position="relative">
        <Typography sx={LogoTextInitial}>MAHAMMED</Typography>
        <Typography
          component="span"
          variant="h3"
          color="primary"
          sx={LogoText}
          mr="2px"
        >
          D
        </Typography>
        <Typography component="span" variant="h4" sx={LogoText}>
          hanish
        </Typography>
      </Box> */}
      <Box
        sx={{
          ...skillsBox,
          position: "static",
          transform: "translate(0px,0px)",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {!showThemes ? (
          <Tooltip
            title="Change Theme"
            disableInteractive
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgba(0,0,0,0.3)",
                },
              },
            }}
          >
            <IconButton onClick={handleThemeClick}>
              <Palette color="primary" />
            </IconButton>
          </Tooltip>
        ) : (
          <IconButton onClick={handleThemeClick}>
            <Cancel color="primary" />
          </IconButton>
        )}
        {showThemes && (
          <ToggleButtonGroup
            size="small"
            value={theme}
            exclusive
            onChange={handleTheme}
          >
            <ToggleButton value="tomato" aria-label="left aligned">
              <DataUsage htmlColor="#e94a49" />
            </ToggleButton>
            <ToggleButton value="yellowGreen" aria-label="centered">
              <DataUsage htmlColor="yellowgreen" />
            </ToggleButton>
            <ToggleButton value="yellow" aria-label="right aligned">
              <DataUsage htmlColor="yellow" />
            </ToggleButton>
          </ToggleButtonGroup>
        )}
      </Box>
    </Box>
  );
};

export default Header;
