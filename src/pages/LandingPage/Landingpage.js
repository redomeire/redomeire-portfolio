import { Button, TextField, Typography } from "@mui/material";
import "../../components/style/GLobal.css";
import "./Landingpage.css";
import ResponsiveAppBar from "../../components/AppBar";
import styled from "styled-components";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import JumbotronVector from '../../assets/jumbotron-vector.svg';
import CheckLogo from '../../assets/check-logo.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomCard from "../../components/CustomCard";
import Statistics from "../../assets/statistic.svg";
import { darkTheme } from "../../components/Theme";
import { useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px 10px 90px;
    // background-color: white;
    margin-top: 60px;
    @media (max-width: 1000px){
        flex-direction: column;
        padding: 20px;
    }
`;

function Landingpage() {
    const [likedUp, setLikedUp] = useState(false);
    const [likedDown, setLikedDown] = useState(false);
    return (
        <div>
            <ResponsiveAppBar />
            <Container>
                <div className="container">
                    <Typography variant="body1" sx={{ color: "#21A099", fontSize: "18px" }}>
                        INTRODUCTION
                    </Typography>
                    <Typography variant="h3" sx={{ fontFamily: "Source Sans Pro", fontSize: {s: "20px", md: "64px"}, marginTop: "20px", fontWeight: "700", lineHeight: {s: "50px", md: "74px"} }}>
                        Hello there ! <br /> I am <span style={{ color: "#21A099" }}>Redomeire</span>
                    </Typography>
                    <Typography sx={{ marginTop: "30px", lineHeight: "32px", color: "#828282" }}>
                        Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
                    </Typography>
                    <div className="jumbotron-buttons" style={{ marginTop: "30px" }}>
                        <a style={{ textDecoration: "none" }} href="#about">
                            <Button variant="contained" sx={{ backgroundColor: "#21A099", color: "white", fontSize: "12px", fontFamily: "Inter", fontWeight: "400", padding: "15px", textTransform: "capitalize" }}>Get Started</Button>
                        </a>
                        <Link to="/project" style={{ textDecoration: "none" }}>
                            <Button startIcon={<PlayArrowIcon />} variant="outlined" sx={{ border: "1px solid #21A099", fontSize: "12px", fontFamily: "Inter", fontWeight: "400", mx: 2, padding: "14px", color: "#21A099", textTransform: "capitalize" }}>See My Project</Button>
                        </Link>
                    </div>
                </div>
            </Container>
            <img style={{ position: "absolute", right: "0", top: "0", zIndex: "-1", width: "40%" }} src={JumbotronVector} alt="vector" />
            <Container style={{ marginTop: "100px" }} id="about">
                <div className="content-container">
                    <Typography variant="body1" sx={{ color: "#21A099", fontSize: "18px" }}>
                        ABOUT
                    </Typography>
                    <Typography variant="h3" sx={{ fontFamily: "Inter", fontSize: "38px", marginTop: "20px", fontWeight: "500", lineHeight: "48px" }}>
                        Getting One Step Closer to Me
                    </Typography>
                    <Typography sx={{ marginTop: "30px", lineHeight: "32px", color: "#828282", marginBottom: "20px" }}>
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
                        <img className="statistics-image" src={Statistics} alt="statistics"/>
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
                    <Typography variant="h3" sx={{ fontFamily: "Inter", fontSize: "38px", marginTop: "20px", fontWeight: "500", lineHeight: "48px" }}>
                        What Exactly I Am Doing When Nothing Comes to Mind
                    </Typography>
                    <Typography sx={{ marginTop: "30px", lineHeight: "32px", color: "#828282", marginBottom: "20px" }}>
                        I am willing to make the web look attractive and good. I am a person who enjoys working in a team because of the many positive feedbacks that go into it.
                    </Typography>
                    <div className="service-req-landing">
                        <div>
                            <div className="service-reg-section-landing">
                                <img src={CheckLogo} alt="check-logo" width='24' />
                                <p style={{ marginLeft: "10px", fontWeight: "500" }}>Front End</p>
                            </div>
                            <div className="service-reg-section-landing">
                                <img src={CheckLogo} alt="check-logo" width='24' />
                                <p style={{ marginLeft: "10px", fontWeight: "500" }}>UI/UX</p>
                            </div>
                        </div>
                        <div style={{ marginLeft: "30px" }}>
                            <div className="service-reg-section-landing">
                                <img src={CheckLogo} alt="check-logo" width='24' />
                                <p style={{ marginLeft: "10px", fontWeight: "500" }}>Et cetera</p>
                            </div>
                            <div className="service-reg-section-landing">
                                <img src={CheckLogo} alt="check-logo" width='24' />
                                <p style={{ marginLeft: "10px", fontWeight: "500" }}>Et Cetera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container style={{ marginBottom: "80px" }}>
                <div className="subscription-landing-page">
                    <Typography variant="h4" sx={{ fontWeight: "600", fontFamily: "Inter", marginBottom: "20px"}}>Subscribe to our Newsletter</Typography>
                    <Typography variant="body2" sx={{ color: "#828282" }}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</Typography>
                    <form className="subscription-form" onSubmit={e => e.preventDefault()}>
                        <TextField type="email" id="outlined-basic" variant="standard" placeholder="Enter your email" sx={{ border: "none" }} required />
                        <div className="button-subscription">
                        <Button type="submit" variant="contained" sx={{backgroundColor: "#21A099", color: "white", borderRadius: "0", fontSize: "16px", fontFamily: "Inter", textTransform: "capitalize", padding: "10px 15px" }}>Subscribe</Button>
                        </div>
                    </form>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Landingpage;