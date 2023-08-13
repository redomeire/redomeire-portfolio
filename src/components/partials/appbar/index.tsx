import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/router";

const navbarDatas = [
  {
    name: "my project",
    url: "/",
  },
  {
    name: "project",
    url: "/project",
  },
  {
    name: "contact",
    url: "/contact",
  },
];

const Appbar = () => {
  const router = useRouter();

  return (
    <>
      <Stack
        component="nav"
        direction={{ md: "row", xs: "column" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          padding: "25px 50px",
          margin: "20px",
          position: "fixed",
          backgroundColor: "black",
          borderRadius: "50px",
          color: "white",
          borderBottom: "1px solid hsla(0,0%,100%,.3)",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 6,
        }}>
        <Box
          component="ul"
          display="flex"
          justifyContent="space-evenly"
          sx={{ width: "33%", paddingLeft: "0px" }}>
          {navbarDatas.map((data, index) => {
            return (
              <Box
                key={index}
                sx={{
                  cursor: "pointer",
                  color: router.pathname === data.url ? orange[500] : "#ababab",
                  transition: "ease 0.3s",
                  borderBottom: router.pathname === data.url ? `1.5px solid${orange[500]}` : "",
                  "&:hover": {
                    color: orange[500],
                  },
                }}>
                <Link href={data.url}>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{ fontSize: "15px", textTransform: "capitalize" }}>
                    {data.name}
                  </Typography>
                </Link>
              </Box>
            );
          })}
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ width: "33%", textAlign: "center" }}>
          • Redomeire •
        </Typography>
        <Stack direction="row" justifyContent="space-evenly" sx={{ width: "33%" }}>
          <IconButton>
            <FacebookIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <GitHubIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};

export default Appbar;
