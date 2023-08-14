import { SxProps } from "@mui/material";
import { killarney } from "../../font/font";

export const HeaderStyle: SxProps = {
  width: "100%",
  height: ["75px", "100px"],

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  borderBottom: "1px solid #262B40",
};

export const LogoText: SxProps = {
  fontFamily: killarney.style.fontFamily,
};

export const LogoTextInitial: SxProps = {
  position: "absolute",
  left: "33px",
  top: "9px",

  fontSize: "0.5rem",
  textTransform: "uppercase",
  letterSpacing: "5px",
};
