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
import Form from "../../components/Form";

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
           <Form/>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Contact;
