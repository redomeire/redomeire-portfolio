import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import "../Profile/Profile.css";
import Education from "../../components/Education";
import SchoolIcon from '@mui/icons-material/School';
import WhatIDo from "../../components/WhatIDo";
import WorkIcon from '@mui/icons-material/Work';
import Experience from "../../components/Experience";
import { Container } from "../LandingPage/Landingpage";
import ResponsiveAppBar from "../../components/AppBar";
import styled from "styled-components";
import TravellingImage from "../../assets/travelling_image.svg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Jumbotron = styled.div`
    // background-color: #21A099;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const DiscoverButton = styled(Button)({
    color: "white",
    textTransform: "capitalize",
    fontSize: "18px",
    fontFamily: "Inter",
    backgroundColor: "#21A099",
    '&:hover': {
        backgroundColor: "#207A75"
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
        outline: "none"
    }
});

function Profile() {
    return (
        <div>
            <ResponsiveAppBar />
            <Container style={{marginTop: "10px"}}>
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
                    <DiscoverButton variant="contained" sx={{marginTop: "20px"}} endIcon={<ArrowDownwardIcon/>}>Discover</DiscoverButton>
                </div>
            </Container>
            <Container>
            </Container>
        </div>
    );
}

export default Profile;