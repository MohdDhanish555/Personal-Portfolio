import { SxProps } from "@mui/material";

export const container: SxProps = {
  height: "calc(100vh - 100px)",
  width: "100%",
  pt: "10%",
  position: "relative",

  display: "flex",
  justifyContent: {
    xs: "center",
    sm: "space-between",
  },
  rowGap: 5,
  flexWrap: "wrap",
};

export const leftBlock: SxProps = {
  maxWidth: {
    sm: "50%",
  },
};

export const imageWrapper: SxProps = {
  height: ["300px", "300px", "350px", "450px"],
  width: ["230px", "230px", "275px", "375px"],
  position: "relative",

  borderTopLeftRadius: ["30px", "40px", "60px"],
  borderBottomLeftRadius: ["30px", "40px", "60px"],
  borderTopRightRadius: "2px",
  borderBottomRightRadius: "2px",

  bgcolor: "rgba(255,255,255,0.05)",
};
export const imageCard: SxProps = {
  height: "100%",
  width: "100%",

  borderTopLeftRadius: ["30px", "40px", "60px"],
  borderBottomLeftRadius: ["30px", "40px", "60px"],
  borderTopRightRadius: "2px",
  borderBottomRightRadius: "2px",
  overflow: "hidden",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
};

export const skillsBox: SxProps = {
  background: "rgba(31, 42, 85, 0.33)",
  width: "145px",
  height: "65px",
  position: "absolute",
  top: "50%",
  left: "-90px",
  p: "10px 16px",

  borderRadius: "8px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.4px)",
  transform: "translate(-10px,-10px)",
  "@media (max-width : 600px)": {
    width: "105px",
    height: "50px",
    top: "45%",
    left: "-50px",
    p: "7px 10px",
  },
};

export const expBox: SxProps = {
  background: "rgba(31, 42, 85, 0.33)",
  width: "145px",
  height: "85px",
  position: "absolute",
  bottom: "-50px",
  right: "-30px",
  display: "flex",
  p: 1.25,

  borderRadius: "8px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.4px)",
  clipPath: "polygon(0 0, 100% 0, 100% 63%, 0 85%)",
  "@media (max-width : 600px)": {
    width: "115px",
    height: "60px",
    bottom: "-30px",
    right: "-25px",
    p: "2px 7px",
  },
};

export const logoBox: SxProps = {
  bgcolor: "rgba(0,0,0,0.3)",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  p: 1,
  mr: 1,
  mt: 1,

  borderRadius: 2,
};

export const primaryDotContainer = {
  // width: "70px",
  // height: "70px",
  position: "absolute",
  top: "-20px",
  right: {
    xs: "-20px",
    sm: "-30px",
  },
  // "@media (max-width : 600px)": {
  //   display: "flex",
  //   width: "50px",
  //   height: "50px",
  // },
};

export const secondaryDotContainer = {
  position: "absolute",
  top: "calc(50% + 20px)",
  left: "-50px",
  zIndex: "-999",
  "@media (max-width : 600px)": {
    top: "50%",
    left: "-30px",
  },
};

export const verifiedBadgeContainer: SxProps = {
  position: "absolute",
  bottom: "-10px",
  left: "-10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "rgba(0,0,0,0.2)",
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  p: 1,
  "@media (max-width : 600px)": {
    bottom: "-10px",
    left: "-10px",
    width: "40px",
    height: "40px",
  },
};

export const socialLinksContainer: SxProps = {
  height: "30px",
  position: "fixed",
  top: "50%",
  right: "-10px",
  display: "flex",
  rotate: "-90deg",
};

export const iconStyle: SxProps = {
  transitionDuration: "0.3s",
  transitionProperty: "transform",
  "&:hover": {
    color: "primary.main",
    transform: "translateY(-5px)",
  },
  "&:focus": {
    color: "primary.main",
    transform: "translateY(-5px)",
  },
  "&:active": {
    color: "primary.main",
    transform: "translateY(-5px)",
  },
};
