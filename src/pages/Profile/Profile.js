import { IconButton, Tooltip, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import "../Profile/Profile.css";
import { theme } from "../../components/Theme";
import AnimatedShape from "../../assets/AnimatedShape.svg";
import wavingHand from "../../assets/noto-v1_waving-hand.svg";
import Education from "../../components/Education";
import SchoolIcon from '@mui/icons-material/School';
import WhatIDo from "../../components/WhatIDo";
import DnsIcon from '@mui/icons-material/Dns';
import TechStack from "../../components/TechStack";
import WorkIcon from '@mui/icons-material/Work';
import Experience from "../../components/Experience";

function Profile(){
    return(
        <div className="bg-color-background" style={{display : "flex"}}>
            <Navbar/>
            <div className="container text-left color-white">
                <div className="title-section">
                    <Typography variant="h2" sx={{marginTop: "50px", fontWeight: "bold", marginRight: 2}} className="landing-page-title fs-64">Let's See My Journey</Typography>
                    <Tooltip title="Hello everyone!!" placement="right">
                        <img src={wavingHand} alt="waving hand"/>
                    </Tooltip>
                </div>
                <p className="color-secondary-dark fs-24" style={{marginBottom: "50px"}}>My Journey</p>

                <Education/>


                <div id="what-i-do" style={{marginTop : "50px"}}>
                    <div className="item-title">
                        <h2># What i do</h2>
                        <IconButton color="primary">
                            <SchoolIcon/>
                        </IconButton>
                    </div>
                    <div className="subtitle">
                        <p className="color-secondary-dark">What i am doing when nothing comes to mind</p>
                    </div>
                </div>

                <WhatIDo/>

                <div id="tech-stack" style={{marginTop : "50px"}}>
                    <div className="item-title">
                        <h2># Experience</h2>
                        <IconButton color="primary">
                            <WorkIcon/>
                        </IconButton>
                    </div>
                    <div className="subtitle">
                        <p className="color-secondary-dark">Here's my professional experience</p>
                    </div>

                    {/* <TechStack/> */}
                    <Experience/>
                </div>

                <img className="random-shape" src={AnimatedShape} alt="random shape"></img>
            </div>
        </div>
    );
}

export default Profile;