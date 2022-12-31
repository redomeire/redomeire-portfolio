import { Container } from "../LandingPage/Landingpage";
import CustomSlider from "../../components/CustomSlider";
import "./Project.css";
import { Box, Button, Card, CardContent, Skeleton, Typography, useTheme } from "@mui/material";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ProjectImage from "../../assets/undraw_project.svg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// firebase
import { getDocs } from 'firebase/firestore';

import React from "react";
import { colRef } from "../../firebase/firebase";
import AppLayout from "../../components/layout/AppLayout";
import { ColorModeContext } from "../../App";
import Popup from "../../components/project/Popup";

const CustomCard = styled(Card)`
    background-color: ${({ backgroundColor }) => backgroundColor};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
    max-width: 300px;
    &:hover: {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`

const ButtonLink = styled(Button)({
    paddingLeft: '0',
    color: '#21A099',
    marginLeft: '-10px',
    marginTop: '5px'
})

function Project() {
    const [projects, setProjects] = React.useState([]);
    const [id, setId] = React.useState({
        isOpen: false,
        id: ''
    });
    const { isDark } = React.useContext(ColorModeContext);

    const theme = useTheme();

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
        <AppLayout>
            <Container style={{ flexDirection: "column", marginTop: "0" }}>
                <div className="jumbotron-image-profile">
                    <img src={ProjectImage} alt="project" width="200" />
                    <div className="circle-profile" />
                </div>
                <Box sx={{ width: { sm: "50%", xs: "100%" }, textAlign: { sm: "center", xs: "left" }, marginBottom: "20px", alignItems: { sm: "center", xs: "flex-start" } }} display="flex" flexDirection="column">
                    <Typography sx={{ color: "#21A099", marginBottom: "10px" }}>PROJECTS</Typography>
                    <Typography variant="h5" sx={{ lineHeight: "48px", fontSize: "38px", fontWeight: "500", marginBottom: "20px", color: isDark ? theme.palette.secondary.main : 'black' }}>My projects</Typography>
                    <Typography variant="body2" sx={{ color: isDark ? theme.palette.secondary.main : '#828282', fontFamily: "Inter", lineHeight: "32px" }}>Community development is often linked with community work</Typography>
                    <a style={{ textDecoration: "none" }} href="#project">
                        <CustomButton endIcon={<ArrowDownwardIcon />} style={{ margin: "20px 0 40px 0", backgroundColor: "#21A099", padding: "10px 20px 10px 20px", fontFamily: "Source Sans Pro", textTransform: "capitalize", color: isDark ? theme.palette.secondary.main : 'white' }}>Discover</CustomButton>
                    </a>
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent="center" id="project" sx={{ paddingTop: "50px" }}>
                    {
                        projects.length !== 0 ?
                            projects.map((project, index) => {
                                return (
                                    <>
                                        <Popup id={id} setId={setId} project={project} />
                                        <CustomCard
                                            key={index}
                                            backgroundColor={isDark ? theme.palette.primary.light :
                                                'white'}
                                            sx={{ borderRadius: "30px", margin: "20px", minWidth: '300px' }}>
                                            {/* <IKImage
                                        // publicKey={process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY}
                                        urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT}
                                        path={project?.imageUrl}
                                        style={{width: '100%', maxHeight: '100px'}}
                                    /> */}
                                            <div
                                                style={{
                                                    backgroundImage: `url(${process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT + project?.imageUrl})`,
                                                    backgroundSize: 'cover',
                                                    width: '100%',
                                                    minHeight: '200px'
                                                }}
                                            />
                                            <CardContent>
                                                <Typography sx={{ fontWeight: "700", marginBottom: "20px", fontFamily: "Source Sans Pro" }} variant="body1">
                                                    {project?.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: isDark ? theme.palette.secondary.main : "#828282" }}>
                                                {project?.description.substring(0,60)} {project?.description.length > 60 && '...'}
                                        </Typography>
                                                <ButtonLink target="_blank" href={`/project/${project.id}`}>Open</ButtonLink>
                                                <Box>
                                                    {/* <Typography>Tech Used :</Typography> */}
                                                    <Box display="flex" sx={{ width: "100%" }}>
                                                        {
                                                            project.techStack.map((tech, index) => {
                                                                return (
                                                                    <Typography key={index} variant="body2" sx={{ margin: "15px 5px 5px 0" }}>{tech}</Typography>
                                                                );
                                                            })
                                                        }
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </CustomCard>
                                    </>
                                )
                            })
                            :
                            <>
                            <CustomCard style={{ margin: '15px' }} backgroundColor={ isDark ? '#404258' : 'white' }>
                                <Box display="flex" flexDirection="column" boxShadow={"revert"}>
                                    <Skeleton sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', width: { sm: '300px', xs: '250px' } }} variant="rectangular" height={180} />
                                    <Box sx={{ pt: 0.5, padding: '10px' }}>
                                        <Skeleton width="40%" sx={{ marginTop: '10px' }} />
                                        <Skeleton width="20%" sx={{ marginTop: '10px' }} />
                                        <Skeleton width="60%" sx={{ marginTop: '15px' }} />
                                    </Box>
                                </Box>
                            </CustomCard>
                            <CustomCard style={{ margin: '15px' }} backgroundColor={ isDark ? '#404258' : 'white' }>
                                <Box display="flex" flexDirection="column" boxShadow={"revert"}>
                                    <Skeleton sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', width: { sm: '300px', xs: '250px' } }} variant="rectangular" height={180} />
                                    <Box sx={{ pt: 0.5, padding: '10px' }}>
                                        <Skeleton width="40%" sx={{ marginTop: '10px' }} />
                                        <Skeleton width="20%" sx={{ marginTop: '10px' }} />
                                        <Skeleton width="60%" sx={{ marginTop: '15px' }} />
                                    </Box>
                                </Box>
                            </CustomCard>
                            <CustomCard style={{ margin: '15px' }} backgroundColor={ isDark ? '#404258' : 'white' }>
                                <Box display="flex" flexDirection="column" boxShadow={"revert"}>
                                    <Skeleton sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', width: { sm: '300px', xs: '250px' } }} variant="rectangular" height={180} />
                                    <Box sx={{ pt: 0.5, padding: '10px' }}>
                                        <Skeleton width="40%" sx={{ marginTop: '10px' }} />
                                        <Skeleton width="20%" sx={{ marginTop: '10px' }} />
                                        <Skeleton width="60%" sx={{ marginTop: '15px' }} />
                                    </Box>
                                </Box>
                            </CustomCard>
                            <CustomCard style={{ margin: '15px' }} backgroundColor={ isDark ? '#404258' : 'white' }>
                                <Box display="flex" flexDirection="column" boxShadow={"revert"}>
                                    <Skeleton sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', width: { sm: '300px', xs: '250px' } }} variant="rectangular" height={180} />
                                    <Box sx={{ pt: 0.5, padding: '10px' }}>
                                        <Skeleton width="40%" sx={{ marginTop: '10px' }} />
                                        <Skeleton width="20%" sx={{ marginTop: '10px' }} />
                                        <Skeleton width="60%" sx={{ marginTop: '15px' }} />
                                    </Box>
                                </Box>
                            </CustomCard>
                            </>
                    }
                </Box>
                <a href="https://github.com/redomeire" rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}>

                    <CustomButton style={{ margin: "70px 0 50px 0", backgroundColor: "#21A099", color: "white", textTransform: "capitalize" }} endIcon={<OpenInNewIcon />}>See More Shots</CustomButton>
                </a>
            </Container>
            <Container style={{ flexDirection: "column", paddingBottom: '100px' }}>
                <Box sx={{ width: { sm: "50%", xs: "100%" }, textAlign: { sm: "center", xs: "left" }, marginBottom: "20px", alignItems: { sm: "center", xs: "flex-start" } }} display="flex" flexDirection="column">
                    <Typography sx={{ color: "#21A099", marginBottom: "10px" }}>TESTIMONIALS</Typography>
                    <Typography variant="h5" sx={{ lineHeight: "48px", fontSize: "38px", fontWeight: "500", marginBottom: "20px", color: isDark ? theme.palette.secondary.main : 'black' }}>What my trusted <br /> client say</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "Inter", lineHeight: "32px", color: isDark ? theme.palette.secondary.main : '#828282' }}>Community development is often linked with community work or community planning, and may involve stakeholders, foundations,</Typography>
                </Box>
                <CustomSlider />
            </Container>
        </AppLayout>
    );
}

export default Project;