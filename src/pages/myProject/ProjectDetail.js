import React from "react";
import { Box, Button, Chip, Rating, Skeleton, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ColorModeContext } from "../../App";
import AppLayout from "../../components/layout/AppLayout";
import { Container } from "../LandingPage/Landingpage";
import CustomButton from "../../components/CustomButton";
import { getDocs } from "firebase/firestore";
import { colRef } from "../../firebase/firebase";

const Image = styled.div`
    background-image: url(${({ backgroundImage }) => backgroundImage});
    width: 100%;
    border-radius: 30px;
    height: 300px;
    background-size: cover;
    background-position: center;
    transition: ease 0.3s;
    margin-bottom: 20px;
    // &:hover {
    //     box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    // }
    @media (min-width: 900px) {
        width: 45%;
        margin-bottom: 0;
        height: 400px;
    }
`

export default function ProjectDetail() {
    const { id } = useParams();
    const { isDark } = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [project, setProject] = React.useState({});

    const getProjectDetail = async () => {
        const docSnap = await getDocs(colRef);

        docSnap.forEach((doc) => {
            if (doc.id === id)
                setProject(doc.data());
        });
    }

    React.useEffect(() => {
        getProjectDetail();
    }, [id])

    return (
        <AppLayout>
            <Container>
                <Box alignItems={'stretch'} sx={{ display: 'flex', width: '100%', flexDirection: { xs: 'column', md: 'row' } }} justifyContent={'space-between'}>
                    {
                        typeof (project?.imageUrl) === 'undefined' ?
                            <Skeleton sx={{ width: { md: '45%', xs: '100%' } }} height={400} />
                            :
                            <Image
                                backgroundImage={
                                    process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT + `${project?.imageUrl}`
                                }
                            />
                    }
                    <Box sx={{ width: { md: '45%' }, marginBottom: { md: '0', xs: '50px' } }}>
                        <Typography fontWeight='700' fontFamily='Inter' sx={{ color: 'rgb(33, 160, 153)', fontSize: { md: '35px', xs: '25px' } }}>{project?.name || <Skeleton width={300} />}</Typography>
                        <Box display='flex' alignItems='center'>
                            {
                                Object.keys(project).length === 0 ?
                                    <>
                                        <Skeleton width={30} height={40} sx={{ marginRight: '5px' }} />
                                        <Skeleton width={30} height={40} sx={{ marginRight: '5px' }} />
                                        <Skeleton width={30} height={40} sx={{ marginRight: '5px' }} />
                                        <Skeleton width={30} height={40} sx={{ marginRight: '5px' }} />
                                        <Skeleton width={30} height={40} sx={{ marginRight: '10px' }} />
                                        <Skeleton width={50} sx={{ marginRight: '5px' }} />
                                    </>
                                    :
                                    <>
                                        <Rating readOnly defaultValue={5} sx={{ marginY: "15px", marginRight: '10px' }} />
                                        <Typography variant='body2' sx={{ color: isDark && theme.palette.secondary.main }}>5.0</Typography>
                                    </>
                            }
                        </Box>
                        {/* <Typography variant="h6" fontFamily='Inter' sx={{ marginBottom: '10px', fontWeight: '600' }}> {id} </Typography> */}
                        {
                            Object.keys(project).length === 0 ?
                                <Skeleton width={50} sx={{ marginRight: '5px', marginY: '20px' }} />
                                :
                                <Chip label="Project" color={isDark ? "secondary" : "primary"} sx={{ marginTop: '10px', marginBottom: '20px', fontWeight: '500' }} size="medium" />
                        }
                        <Typography variant="body1" fontFamily='Inter' sx={{ color: isDark && theme.palette.secondary.main }}> {
                            project?.description?.substring(0, 400)
                            ||
                            <Box display="flex" flexDirection="column">
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </Box>
                        } {project?.description?.length > 400 && '...'} </Typography>
                        <Box display='flex' alignItems='center' sx={{ marginTop: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
                            {
                                Object.keys(project).length === 0 ?
                                    <Skeleton width={50} sx={{ marginRight: '20px' }} />
                                    :
                                    <Typography variant="subtitle1" fontFamily='Inter' fontWeight='600' sx={{ color: isDark && theme.palette.secondary.main, marginRight: '5px' }}> Tech Stack : </Typography>
                            }
                            <Box display='flex' alignItems='center' sx={{}}>
                                {
                                    project?.techStack?.length > 0 ?
                                        project?.techStack?.map((item, index) => {
                                            return (
                                                <Button key={index} variant="contained" sx={{ marginRight: '5px' }} disabled>{item}</Button>
                                            )
                                        })
                                        :
                                        <>
                                            <Skeleton sx={{ marginRight: '5px' }} width={50} height={40} />
                                            <Skeleton sx={{ marginRight: '5px' }} width={50} height={40} />
                                            <Skeleton sx={{ marginRight: '5px' }} width={50} height={40} />
                                        </>
                                }
                                {/* <Button variant="contained" sx={{ marginRight: '5px' }} disabled>Node js</Button>
                                <Button variant="contained" sx={{ marginRight: '5px' }} disabled>Node js</Button> */}
                            </Box>
                        </Box>
                        {
                            Object.keys(project).length === 0 ?
                                <Skeleton sx={{ width: '100%' }} height={80} />
                                :
                                <a href={project?.url} style={{ textDecoration: 'none' }}>
                                    <CustomButton style={{ backgroundColor: 'rgb(33, 160, 153)', width: '100%', marginX: 'auto' }} clr='white'>Visit link</CustomButton>
                                </a>
                        }
                    </Box>
                </Box>
            </Container>
        </AppLayout>
    )
}