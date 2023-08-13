import EmailIcon from "@mui/icons-material/Email";
import { Box, Button, Stack, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";

const Home = () => {
  return (
    <>
      <Box component="div">
        <Typography
          sx={{
            marginX: "auto",
            width: "fit-content",
            marginTop: "50px",
            color: "#0a0a0a99",
          }}>
          Holla 👋, I&apos;m Redomeire and I&apos;m a
        </Typography>
        <Typography
          component="h1"
          fontWeight={700}
          sx={{
            marginX: "auto",
            width: "70%",
            marginBottom: "30px",
            paddingX: "50px",
            textAlign: "center",
            fontSize: "70px",
          }}>
          Web Developer Based in Indonesia
        </Typography>
        <Typography sx={{ width: "70%", marginX: "auto", textAlign: "center", color: "#0a0a0a99" }}>
          I am also up-to-date on the latest trends in frontend development, so I can help you
          create a website or web application that is both user-friendly and cutting-edge. If you
          are looking for a frontend developer who can make your website or web application simple,
          then I am the developer for you. Contact me today to learn more about my services!
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{ width: "fit-content", marginX: "auto", marginTop: "30px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: orange[700],
              boxShadow: "none",
              padding: "10px",
              borderRadius: 50,
              "&:hover": {
                backgroundColor: orange[700],
              },
            }}>
            <Typography variant="button" fontWeight={500} sx={{ textTransform: "capitalize" }}>
              Check My Project 🚀
            </Typography>
          </Button>
          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            sx={{
              border: `2px solid ${orange[700]}`,
              color: orange[700],
              borderRadius: 50,
              "&:hover": {
                backgroundColor: orange[700],
                color: "white",
                border: `2px solid ${orange[600]}`,
              },
            }}>
            <Typography variant="button" fontWeight={500} sx={{ textTransform: "capitalize" }}>
              contact me
            </Typography>
          </Button>
        </Stack>
      </Box>
      <Stack
        component="div"
        direction={{ md: "row", xs: "column" }}
        sx={{
          marginTop: "100px",
          marginX: "auto",
          justifyContent: "center",
          width: "fit-content",
        }}></Stack>
    </>
  );
};

export default Home;
