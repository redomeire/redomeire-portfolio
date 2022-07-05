import { Box, Card, CardContent, Typography } from "@mui/material";
import "../Profile/Profile.css";
import { Container } from "../LandingPage/Landingpage";
import ResponsiveAppBar from "../../components/AppBar";
import styled from "styled-components";
import TravellingImage from "../../assets/travelling_image.svg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CustomButton from "../../components/CustomButton";
import Footer from "../../components/Footer";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Jumbotron = styled.div`
    // background-color: #21A099;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const EducationCard = styled(Card)`
    padding: 30px 30px 10px 30px;
    border-radius: 10px;
    width: 70%;
    margin: 20px 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const experienceData = [
    {
        id: 1,
        title: "Member of Front End Department",
        place: "BCC Fakultas Ilmu Komputer Universitas Brawijaya",
        body: "BCC FILKOM is a tech-based community in Faculty of Computer Science, University of Brawijaya. BCC consist of 4 departments, they are Product, Front-End, Back-End, and Computational Intelligence.",
        duration: "Mar 2022 - Now"
    },
    {
        id: 2,
        title: "Staff Muda Research and Development",
        place: "Eksekutif Mahasiswa TI",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        duration: "Oct 2021 - Jan 2022"
    },
    {
        id: 3,
        title: "Wakil Koordinator Desain Web",
        place: "Ambis UTBK",
        body: "I responsible to make design and developing the website I responsible to make design and developing the website",
        duration: "Aug 2021 - Now"
    }
];

function Profile() {
    return (
        <div>
            <ResponsiveAppBar color="black" />
            <Container style={{ marginTop: "10px" }}>
                <div className="content-container-profile">
                    <Jumbotron style={{textAlign: "left"}}>
                        <div className="jumbotron-content-profile">
                            <Typography variant="body1" sx={{ color: "#21A099", marginBottom: "10px" }}>
                                MY JOURNEY
                            </Typography>
                            <Typography variant="h5" sx={{ lineHeight: "48px", fontSize: "38px", fontWeight: "500", marginBottom: "20px" }}>My Journey</Typography>
                            <Typography variant="body2" sx={{ color: "#828282", width: {sm: "50%", xs: "100%"}, fontFamily: "Inter", lineHeight: "32px" }}>Sometimes journey brought us to unexpected situations. And that's what make journey tasted really challenging </Typography>
                        </div>
                        <div className="jumbotron-image-profile">
                            <img src={TravellingImage} alt="travelling" width="300" />
                            <div className="circle-profile" />
                        </div>
                    </Jumbotron>
                    <a href="#profile" style={{ textDecoration: "none" }}>
                        <CustomButton variant="contained" style={{ backgroundColor: "#21A099", color: "white", marginTop: "20px", textTransform: "capitalize", fontFamily: "Source Sans Pro", padding: "10px" }} endIcon={<ArrowDownwardIcon />}>Discover</CustomButton>
                    </a>
                </div>
            </Container>
            <div id="profile">

                {/* <div style={{ marginBottom: "-5px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#21A099" fill-opacity="1" d="M0,288L80,261.3C160,235,320,181,480,176C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <Container style={{ backgroundColor: "#21A099", marginTop: "0" }}>
                    Test Hello
                </Container>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#21A099" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,122.7C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </div> */}

                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "40px" }}>
                    {
                        experienceData.map(item => {
                            return (
                                <EducationCard key={item.id}>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="h6" color="#21A099">
                                            {item.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1">
                                        {item.place}
                                    </Typography>
                                    <CardContent sx={{ padding: "20px 0 0 0" }}>
                                        <Typography variant="body2" sx={{ lineHeight: "30px" }}>{item.body}</Typography>
                                        <Typography variant="body2" sx={{ marginTop: "20px", color: "#21A099" }}>{item.duration}</Typography>
                                    </CardContent>
                                </EducationCard>
                            );
                        })

                    }
                </Box>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", margin: "50px 0" }}>
                    <a href="https://www.linkedin.com/in/redo-meire-821325209/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                        <CustomButton style={{ backgroundColor: "#21A099", color: "white", textTransform: "capitalize", fontFamily: "Source Sans Pro", padding: "10px" }} endIcon={<LinkedInIcon />}>See my LinkedIn</CustomButton>
                    </a>
                </Box>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;