import ResponsiveAppBar from "../../components/AppBar";
import { Container } from "../LandingPage/Landingpage";
import CustomSlider from "../../components/CustomSlider";
import "./Project.css";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import AmbisUtbkMockup from "../../assets/Ambis_utbk_mockup.svg";
import InfoCovidMockup from "../../assets/infocovid_mockup.svg";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ProjectImage from "../../assets/undraw_project.svg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { IKImage } from 'imagekitio-react';
// firebase
import { getDocs } from 'firebase/firestore';

import React from "react";
import { colRef } from "../../firebase/firebase";

const CustomCard = styled(Card)({
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    cursor: 'pointer',
    maxWidth: '300px',
    '&:hover': {
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    }
});

const ButtonLink = styled(Button)({
    paddingLeft: '0',
    color: '#21A099',
    marginLeft: '-10px',
    marginTop: '5px'
})

function Project() {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        getDocs(colRef)
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    // datas.push({ ...doc.data(), id: doc.id });
                    setProjects((prev) => [...prev, { ...doc.data(), id: doc.id }])
                })
                // setProjects(datas);
                // console.log(projects)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <ResponsiveAppBar color="black" />
            <Container style={{ flexDirection: "column", marginTop: "0" }}>
                <div className="jumbotron-image-profile">
                    <img src={ProjectImage} alt="project" width="200" />
                    <div className="circle-profile" />
                </div>
                <Box sx={{ width: { sm: "50%", xs: "100%" }, textAlign: { sm: "center", xs: "left" }, marginBottom: "20px", alignItems: { sm: "center", xs: "flex-start" } }} display="flex" flexDirection="column">
                    <Typography sx={{ color: "#21A099", marginBottom: "10px" }}>PROJECTS</Typography>
                    <Typography variant="h5" sx={{ lineHeight: "48px", fontSize: "38px", fontWeight: "500", marginBottom: "20px" }}>My projects</Typography>
                    <Typography variant="body2" sx={{ color: "#828282", fontFamily: "Inter", lineHeight: "32px" }}>Community development is often linked with community work</Typography>
                    <a style={{ textDecoration: "none" }} href="#project">
                        <CustomButton endIcon={<ArrowDownwardIcon />} style={{ margin: "20px 0 40px 0", backgroundColor: "#21A099", color: "white", padding: "10px 20px 10px 20px", fontFamily: "Source Sans Pro", textTransform: "capitalize" }}>Discover</CustomButton>
                    </a>
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent="center" id="project" sx={{ paddingTop: "50px" }}>
                    {
                        projects.map((project, index) => {
                            return (
                                <CustomCard key={index} sx={{ borderRadius: "30px", margin: "20px" }}>
                                    <IKImage
                                        // publicKey={process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY}
                                        urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT}
                                        path={project?.imageUrl}
                                        style={{width: '100%'}}
                                    />
                                    <CardContent>
                                        <Typography sx={{ fontWeight: "700", marginBottom: "20px", fontFamily: "Source Sans Pro" }} variant="body1">
                                            {project?.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#828282" }}>
                                            {project?.description}
                                        </Typography>
                                        <ButtonLink href={project?.url} target="_blank">Visit</ButtonLink>
                                        <Box>
                                            {/* <Typography>Tech Used :</Typography> */}
                                            <Box display="flex" sx={{ width: "100%" }}>
                                                {
                                                    project.techStack.map((tech, index) => {
                                                        return(
                                                            <Typography key={index} variant="body2" sx={{ margin: "15px 5px 5px 0" }}>{tech}</Typography>
                                                        );
                                                    })
                                                }
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </CustomCard>
                            )
                        })
                    }
                </Box>
                <a href="https://github.com/redomeire" rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}>

                    <CustomButton style={{ margin: "70px 0 50px 0", backgroundColor: "#21A099", color: "white", textTransform: "capitalize" }} endIcon={<OpenInNewIcon />}>See More Shots</CustomButton>
                </a>
            </Container>
            <Container style={{ flexDirection: "column" }}>
                <Box sx={{ width: { sm: "50%", xs: "100%" }, textAlign: { sm: "center", xs: "left" }, marginBottom: "20px", alignItems: { sm: "center", xs: "flex-start" } }} display="flex" flexDirection="column">
                    <Typography sx={{ color: "#21A099", marginBottom: "10px" }}>TESTIMONIALS</Typography>
                    <Typography variant="h5" sx={{ lineHeight: "48px", fontSize: "38px", fontWeight: "500", marginBottom: "20px" }}>What my trusted <br /> client say</Typography>
                    <Typography variant="body2" sx={{ color: "#828282", fontFamily: "Inter", lineHeight: "32px" }}>Community development is often linked with community work or community planning, and may involve stakeholders, foundations,</Typography>
                </Box>
                <CustomSlider />
            </Container>
            <Footer style={{ marginTop: "40px" }} />
        </div>
    );
}

export default Project;