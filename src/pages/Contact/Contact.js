import {
  IconButton,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import "./Contact.css";
import { darkTheme } from "../../components/Theme";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Form from "../../components/Form";
import ButtonAppBar from "../../components/AppBar";

function Contact() {
  return (
    <div className="bg-color-background">
      <Navbar />
      <div className="content-container">
        <ButtonAppBar/>
        <div className="contact-container text-left color-white">
          <div className="pad-40"  style={{display: "flex", flexDirection: "column"}}>
          <div className="title-section">
            <Typography
              sx={{ marginTop: "50px", fontWeight: "bold", marginRight: 2 }}
              className="contact-page-title"
            >
              Contact Me
            </Typography>
          </div>
          <p
            className="color-secondary-dark contact-page-subtitle"
          >
            Feel free to contact me whenever you want
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
      </div>
    </div>
  );
}

export default Contact;
