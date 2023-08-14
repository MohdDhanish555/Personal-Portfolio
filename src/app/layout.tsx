import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "@/Redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Dhanish - Portfolio",
  description: "Personal portfolio of Mahammed Dhanish",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
