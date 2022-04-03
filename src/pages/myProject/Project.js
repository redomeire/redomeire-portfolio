import { IconButton, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ProjectList from "../../components/ProjectList";
import ButtonAppBar from "../../components/AppBar";
import "./Project.css";

function Project(){
    return(
        <div className="bg-color-background project">
            <Navbar/>
            <div className="content-container">
                <ButtonAppBar/>
            <div className="project-container text-left color-white">
            <div className="title-section">
                    <Typography variant="h2" sx={{marginTop: "50px", fontWeight: "bold", marginRight: 2}} className="landing-page-title fs-64">My Project</Typography>
                </div>
                <p className="color-secondary-dark fs-24" style={{marginBottom: "50px"}}>Where all my project lies</p>
                
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
                {/* projects div */}
                <div id="projects">
                    <div>
                        <ProjectList/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Project;