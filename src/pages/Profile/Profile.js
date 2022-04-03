import { IconButton, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import "../Profile/Profile.css";
import Education from "../../components/Education";
import SchoolIcon from '@mui/icons-material/School';
import WhatIDo from "../../components/WhatIDo";
import WorkIcon from '@mui/icons-material/Work';
import Experience from "../../components/Experience";
import ButtonAppBar from "../../components/AppBar";

function Profile(){
    return(
        <div className="bg-color-background profile" style={{display : "flex"}}>
            <Navbar/>
            <div className="content-container">
                <ButtonAppBar/>
                <div className="profile-container text-left color-white">
                    <div className="container-profile-2">
                        <div className="title-section">
                            <Typography variant="h2" sx={{marginTop: "50px", fontWeight: "bold", marginRight: 2}} className="landing-page-title fs-64">Let's See My Journey</Typography>
                            {/* <Tooltip title="Hello everyone!!" placement="right">
                                <img src={wavingHand} alt="waving hand"/>
                            </Tooltip> */}
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

                        {/* <img className="random-shape" src={AnimatedShape} alt="random shape"></img> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;