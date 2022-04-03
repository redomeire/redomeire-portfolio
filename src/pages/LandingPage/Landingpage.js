import { Alert, Button, IconButton, Tooltip, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import "../../components/style/GLobal.css";
import "./Landingpage.css";
import wavingHand from "../../assets/noto-v1_waving-hand.svg";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import { useNavigate } from "react-router-dom";
import AnimatedShape from "../../assets/AnimatedShape1.svg";
import ButtonAppBar from "../../components/AppBar";
import { ThemeProvider } from "@mui/system";
import { darkTheme, theme } from "../../components/Theme";

function Landingpage(){
    const navigate = useNavigate();
    return(
        <div className="bg-color-background" style={{display: "flex"}}>
            <Navbar/>
            <div className="content-container">
                <ButtonAppBar/>
                <div className="container text-left color-white">
                    <div className="container-2">
                        <div className="title-section">
                            <Typography variant="h2" sx={{marginTop: "50px", fontWeight: "bold", marginRight: 2}} className="landing-page-title fs-64">Hi, I Am Redo</Typography>
                            {/* <Tooltip title="Hello everyone!!" placement="right" arrow>
                                <img className="waving-hand" src={wavingHand} alt="waving hand"/>
                            </Tooltip> */}
                        </div>
                        <p className="color-secondary-dark landing-page-subtitle" style={{marginBottom: "50px", width: "100%"}}>I'm a first year student at University of Brawijaya that interested in web technologies.</p>
                        <div id="about">
                            <div className="about-title">
                                <h2># About</h2>
                                <IconButton color="primary">
                                    <InfoOutlinedIcon/>
                                </IconButton>
                            </div>
                            <div className="subtitle">
                                <p className="color-secondary-dark">Getting one step closer to me!</p>
                            </div>
                        </div>
                        <p className="color-secondary-dark">I am willing to make the web look attractive and good. I am a person who enjoys working in a team because of the many positive feedbacks that go into it. </p>
                        <p className="color-secondary-dark" style={{marginBottom : "50px"}}>Please consider to reach me via the contact form at the bottom of the page if you want! </p>
                        <ThemeProvider theme={darkTheme}>
                            <Button variant="contained" endIcon={<ForumIcon />} onClick={() => { navigate("/contact") }}>
                                Contact Me
                            </Button>
                        </ThemeProvider>

                    {/* <img className="random-shape" src={AnimatedShape} alt="random shape"></img> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;