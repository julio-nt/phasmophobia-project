import Footer from "@/src/components/footer/Footer";
import NavBar from "@/src/components/navbar/NavBar";
import "@/styles/globals.css";
import { Box, Button, Typography } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const currentYear = new Date().getFullYear();

  return (
    <Box minHeight={"90vh"}>
      <NavBar />
      <Component {...pageProps} />
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
        }}
      >
        <Typography
          sx={{
            //   marginTop: "10%",
            textAlign: "center",
            //   opacity: '.8'
          }}
        >
          Copyright © 2022 - {currentYear}{" "}
          <span
            style={{
              color: "#0055ff",
            }}
          >
            Hakulino
          </span>{" "}
          - Última atualização:{" "}
          <span
            style={{
              color: "#0055ff",
            }}
          >
            29/12/2023
          </span>
        </Typography>
        <Typography textAlign={"center"} color={"red"} fontSize={".8rem"}>
          Projeto em construção
        </Typography>
      </Box>
    </Box>
  );
}
