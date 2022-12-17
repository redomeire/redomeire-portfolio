import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../../components/style/GLobal.css";
import "./Landingpage.css";
import styled from "styled-components";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import JumbotronVector from '../../assets/jumbotron-vector.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import CustomCard from "../../components/CustomCard";
import Statistics from "../../assets/statistic.svg";
import { darkTheme } from "../../components/Theme";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import AppLayout from "../../components/layout/AppLayout";
import { ColorModeContext } from "../../App";
import { TypeAnimation } from "react-type-animation";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 150px 40px 10px 90px;
    background-color: ${props => props.color};
    // margin-top: 60px;
    @media (max-width: 1000px){
        flex-direction: column;
        padding: 20px;
        padding-top: 100px;
    }
`;

function Landingpage() {
    const { isDark } = React.useContext(ColorModeContext);
    const [likedUp, setLikedUp] = useState(false);
    const [likedDown, setLikedDown] = useState(false);
    const theme = useTheme();

    return (
        <AppLayout>
            <div style={{ backgroundColor: !isDark ? theme.palette.secondary.main : theme.palette.primary.main }}>
                <Container>
                    <div className="container">
                        <Typography variant="body1" sx={{ color: "#21A099", fontSize: "18px" }}>
                            INTRODUCTION
                        </Typography>
                        <Typography variant="h3" sx={{ fontFamily: "Source Sans Pro", fontSize: { s: "20px", md: "64px" }, marginTop: "20px", fontWeight: "700", lineHeight: { s: "50px", md: "74px" }, color: isDark ? theme.palette.secondary.main : '' }}>
                            Hello there ! <br />
                            <Box display='flex' alignItems='center' flexWrap='wrap'>
                            <Typography variant="h3" sx={{ fontWeight: '700', fontSize: { s: "20px", md: "64px" }, marginRight: '10px' }}>I'm </Typography>
                            <TypeAnimation
                            sequence={[
                                'Redomeire',
                                2000,
                                'Front End Engineer',
                                2000,
                                'IT Enthusiast',
                                2000,
                            ]}
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontFamily: 'Source Sans Pro', color: "#21A099" }}
                        />
                        </Box>
                        </Typography>
                        <Typography sx={{ marginTop: "30px", lineHeight: "32px", color: isDark ? theme.palette.secondary.main : "#828282" }}>
                            Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
                        </Typography>
                        <div className="jumbotron-buttons" style={{ marginTop: "30px" }}>
                            <a style={{ textDecoration: "none" }} href="#about">
                                <CustomButton bg="#21A099" clr="white" variant="contained" style={{ backgroundColor: "#21A099", color: isDark ? theme.palette.secondary.main : "white", fontSize: "12px", fontFamily: "Inter", fontWeight: "400", padding: "15px", textTransform: "capitalize" }}>Get Started</CustomButton>
                            </a>
                            <Link to="/project" style={{ textDecoration: "none" }}>
                                <CustomButton startIcon={<PlayArrowIcon />} variant="outlined" style={{ border: "1px solid #21A099", fontSize: "12px", fontFamily: "Inter", fontWeight: "400", marginLeft: "1rem", padding: "14px", color: isDark ? theme.palette.secondary.main : "#21A099", textTransform: "capitalize" }}>See My Project</CustomButton>
                            </Link>
                        </div>
                    </div>
                </Container>
                <img style={{ position: "absolute", right: "0", top: "0", width: "40%" }} src={JumbotronVector} alt="vector" />
                <Container style={{ marginTop: "100px" }} id="about">
                    <div className="content-container">
                        <Typography variant="body1" sx={{ color: "#21A099", fontSize: "18px" }}>
                            ABOUT
                        </Typography>
                        <Typography variant="h3" sx={{ fontFamily: "Inter", fontSize: "38px", marginTop: "20px", fontWeight: "500", lineHeight: "48px", color: isDark && theme.palette.secondary.main }}>
                            Getting One Step Closer to Me
                        </Typography>
                        <Typography sx={{ marginTop: "30px", lineHeight: "32px", color: isDark ? theme.palette.secondary.main : "#828282", marginBottom: "20px" }}>
                            Hi! My name is Redomeire or you can call me Redo. I'm currently a student in University of Brawijaya majoring Information Technology.

                            For additional information, I'm really passionate in developing apps, especially on front-end side.
                        </Typography>
                        <Link style={{ textDecoration: "none" }} to="/profile">
                            <Button endIcon={<ArrowForwardIcon />} sx={{ color: "#21A099" }}>
                                Learn more about me
                            </Button>
                        </Link>
                    </div>
                    <div className="about-box">
                        <div className="about-card-landingPage-up">
                            <CustomCard setLiked={setLikedUp} liked={likedUp} user="Rafli Ardiansyah" opacity="0.9" thumbnailColor="red" title="GoPro unveils its foldable drone 'Karma'" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </div>
                        <div className="about-card-landingPage-container">
                            <div className="about-card-landingPage-down">
                                <CustomCard setLiked={setLikedDown} liked={likedDown} user="Gilang Khrismahaq" themes={darkTheme} opacity="0.5" thumbnailColor="purple" title="Tech in Africa : Google's Allo Messenger and a taxi war app" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..." />
                            </div>
                            <img className="statistics-image" src={Statistics} alt="statistics" />
                        </div>
                    </div>
                </Container>
                <Container style={{ margin: "100px 0 150px 0" }}>
                    <div className="box">
                        <div className="box-video">
                            <p>Watch Video</p>
                            <Button variant="contained" color="secondary" sx={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }} className="box-play-button">
                                <PlayArrowIcon color="black" sx={{ color: "#21A099" }} />
                            </Button>
                        </div>
                    </div>
                    <div className="content-container">
                        <Typography variant="body1" sx={{ color: "#21A099", fontSize: "18px" }}>
                            WHAT I DO
                        </Typography>
                        <Typography variant="h3" sx={{ fontFamily: "Inter", fontSize: "38px", marginTop: "20px", fontWeight: "500", lineHeight: "48px", color: isDark && theme.palette.secondary.main }}>
                            What Exactly I Am Doing When Nothing Comes to Mind
                        </Typography>
                        <Typography sx={{ marginTop: "30px", lineHeight: "32px", color: isDark ? theme.palette.secondary.main : "#828282", marginBottom: "20px" }}>
                            I am willing to make the web look attractive and good. I am a person who enjoys working in a team because of the many positive feedbacks that go into it.
                        </Typography>
                        <div className="service-req-landing">
                            <div>
                                <div className="service-reg-section-landing">
                                    <IconButton>
                                        <LibraryAddCheckOutlinedIcon />
                                    </IconButton>
                                    <p style={{ marginLeft: "10px", fontWeight: "500", color: isDark && theme.palette.secondary.main }}>Front End</p>
                                </div>
                                <div className="service-reg-section-landing">
                                    <IconButton>
                                        <LibraryAddCheckOutlinedIcon />
                                    </IconButton>
                                    <p style={{ marginLeft: "10px", fontWeight: "500", color: isDark && theme.palette.secondary.main }}>UI/UX</p>
                                </div>
                            </div>
                            <div style={{ marginLeft: "30px" }}>
                                <div className="service-reg-section-landing">
                                    <IconButton>
                                        <LibraryAddCheckOutlinedIcon />
                                    </IconButton>
                                    <p style={{ marginLeft: "10px", fontWeight: "500", color: isDark && theme.palette.secondary.main }}>Et cetera</p>
                                </div>
                                <div className="service-reg-section-landing">
                                    <IconButton>
                                        <LibraryAddCheckOutlinedIcon />
                                    </IconButton>
                                    <p style={{ marginLeft: "10px", fontWeight: "500", color: isDark && theme.palette.secondary.main }}>Et Cetera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container style={{ paddingBottom: "150px" }}>
                    <div className="subscription-landing-page">
                        <Typography variant="h4" sx={{ fontWeight: "600", fontFamily: "Inter", marginBottom: "20px", color: isDark && theme.palette.secondary.main }}>Subscribe to our Newsletter</Typography>
                        <Typography variant="body2" sx={{ color: isDark ? theme.palette.secondary.main : "#828282" }}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</Typography>
                        <form className="subscription-form" onSubmit={e => e.preventDefault()}>
                            <TextField type="email" id="outlined-basic" variant="standard" placeholder="Enter your email" sx={{ border: "none" }} required />
                            <div className="button-subscription">
                                <CustomButton type="submit" variant="contained" style={{ backgroundColor: "#21A099", color: "white", fontSize: "16px", fontFamily: "Inter", textTransform: "capitalize", padding: "10px 15px" }}>Subscribe</CustomButton>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </AppLayout>
    );
}

export default Landingpage;