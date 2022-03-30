import {
  Button,
  Card,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import wavingHand from "../../assets/noto-v1_waving-hand.svg";
import { darkTheme, theme } from "../../components/Theme";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  return (
    <div className="bg-color-background" style={{ display: "flex" }}>
      <Navbar />
      <div className="container text-left color-white">
        <div className="title-section">
          <Typography
            variant="h2"
            sx={{ marginTop: "50px", fontWeight: "bold", marginRight: 2 }}
            className="landing-page-title fs-64"
          >
            Contact Me
          </Typography>
          {/* <Tooltip title="Hello everyone!!" placement="right" arrow>
                            <img src={wavingHand} alt="waving hand"/>
                        </Tooltip> */}
        </div>
        <p
          className="color-secondary-dark fs-24"
          style={{ marginBottom: "50px" }}
        >
          If you need me, i'll go there
        </p>
        <div id="about">
          <div className="about-title">
            <h2># About</h2>
            <IconButton color="primary">
              <InfoOutlinedIcon />
            </IconButton>
          </div>
          <div className="subtitle">
            <p className="color-secondary-dark">
              Getting one step closer to me!
            </p>
          </div>
        </div>
        <ThemeProvider theme={darkTheme}>
          <form
            style={{ display: "flex", flexDirection: "column", width: "90%" }}
          >
            <div
              className="fullname"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
              }}
            >
              <TextField
                label="Name"
                id="filled-size-normal"
                variant="outlined"
              />
            </div>
            <div
              className="email"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
              }}
            >
              <TextField
                label="Email"
                id="filled-size-normal"
                variant="outlined"
                type="email"
              />
            </div>
            <div
              className="fullname"
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Message"
                multiline
                maxRows={4}
                minRows={3}
                variant="outlined"
              />
            </div>
            <Button
              style={{ width: "10%" }}
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Contact;
