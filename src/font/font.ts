import localFont from "next/font/local";
import { Roboto, Josefin_Sans } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const killarney = localFont({
  src: "./Killarney DEMO.otf",
  display: "swap",
});

export const josefin = Josefin_Sans({
  display: "swap",
  subsets: ["latin"],
});
