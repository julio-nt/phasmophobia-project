import { Box, Typography } from "@mui/material";
import React from "react";

function Custom404() {
  return (
    <Box>
      <Typography
        sx={{
          marginTop: "10%",
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "10rem",
        }}
      >
        Parece que essa página não existe ou está em construção.
      </Typography>
    </Box>
  );
}

export default Custom404;
