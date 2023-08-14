import { Box, Container } from "@mui/material";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          px: {
            lg: "5%",
          },
        }}
      >
        <Header />
        <Hero />
      </Box>
    </Container>
  );
}
