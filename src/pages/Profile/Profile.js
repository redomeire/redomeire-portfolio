import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import "../Profile/Profile.css";
import Education from "../../components/Education";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Experience from "../../components/Experience";
import { Container } from "../LandingPage/Landingpage";
import ResponsiveAppBar from "../../components/AppBar";
import styled from "styled-components";
import TravellingImage from "../../assets/travelling_image.svg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CustomButton from "../../components/CustomButton";

const Jumbotron = styled.div`
    // background-color: #21A099;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

function Profile() {
    return (
        <div>
            <ResponsiveAppBar />
            <Container style={{ marginTop: "10px" }}>
                <div className="content-container-profile">
                    <Jumbotron>
                        <div className="jumbotron-content-profile">
                            <Typography variant="body1" sx={{ color: "#21A099", fontSize: "18px" }}>
                                MY JOURNEY
                            </Typography>
                            <Typography variant="h3" sx={{ fontFamily: "Source Sans Pro", fontSize: { s: "20px", md: "64px" }, marginTop: "5px", fontWeight: "700", lineHeight: { s: "50px", md: "74px" } }}>My Journey</Typography>
                            <Typography variant="body1" sx={{ lineHeight: "32px", color: "#828282", marginTop: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</Typography>
                        </div>
                        <div className="jumbotron-image-profile">
                            <img src={TravellingImage} alt="travelling" width="300" />
                            <div className="circle-profile" />
                        </div>
                    </Jumbotron>
                    <a href="#profile" style={{textDecoration: "none"}}>
                    <CustomButton variant="contained" style={{ backgroundColor: "#21A099", color: "white", marginTop: "20px", textTransform: "capitalize", fontFamily: "Source Sans Pro", padding: "10px" }} endIcon={<ArrowDownwardIcon />}>Discover</CustomButton>
                    </a>
                </div>
            </Container>
            <div id="profile">
                <div style={{ marginBottom: "-5px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#21A099" fill-opacity="1" d="M0,288L80,261.3C160,235,320,181,480,176C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <Container style={{ backgroundColor: "#21A099", marginTop: "0" }}>
                    Test Hello
                </Container>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#21A099" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,122.7C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </div>
            </div>
        </div>
    );
}

export default Profile;