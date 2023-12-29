import { Box, Typography, Button } from "@mui/material";
import Head from "next/head";

import favicon from "../public/light/favicon.ico";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Phasmophobia Project</title>
        <meta
          name="description"
          content="You will become a pro in the game Phasmophobia"
        />
        <link rel="icon" href={favicon.src} sizes="any" type="image/x-icon" />
      </Head>
      <Box
        sx={{
          textAlign: "center",
          paddingTop: "2rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginBottom: "5rem",
        }}
      >
        <Typography variant="h3">Bem-Vindo ao Phasmophobia Project</Typography>
        <Typography variant="h6">
          Aqui você vai aprender TUDO sobre o jogo Phasmophobia.
        </Typography>
      </Box>
    </>
  );
}
