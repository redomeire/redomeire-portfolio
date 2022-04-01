import { IconButton, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { theme } from "../../components/Theme";
import ProjectList from "../../components/ProjectList";

function Project(){
    return(
        <div className="bg-color-background" style={{display : "flex"}}>
            <Navbar/>
            <div className="container text-left color-white">
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
    );
}

export default Project;