import ResponsiveAppBar from "../../components/AppBar";
import { Container } from "../LandingPage/Landingpage";
import CustomSlider from "../../components/CustomSlider";
import "./Project.css";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import AmbisUtbkMockup from "../../assets/Ambis_utbk_mockup.svg";
import InfoCovidMockup from "../../assets/infocovid_mockup.svg";
import styled from "styled-components";

const CustomCard = styled(Card)({
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    cursor: 'pointer',
    maxWidth: '300px',
    '&:hover' : {
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    }
})

function Project() {
    return (
        <div>
            <ResponsiveAppBar color="black" />
            <Container style={{ flexDirection: "column" }}>
                <Box sx={{width: {sm: "50%", xs: "100%"}, textAlign: {sm : "center", xs: "left"}, marginBottom : "20px", alignItems: { sm: "center", xs: "flex-start"}}} display="flex" flexDirection="column">
                    <Typography sx={{ color: "#21A099", marginBottom: "10px" }}>PROJECTS</Typography>
                    <Typography variant="h5" sx={{lineHeight: "48px", fontSize: "38px", fontWeight: "500", marginBottom: "20px"}}>Here come my <br/> projects</Typography>
                    <Typography variant="body2" sx={{color: "#828282", fontFamily: "Inter", lineHeight: "32px"}}>Community development is often linked with community work or community planning, and may involve stakeholders, foundations,</Typography>
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    <CustomCard sx={{borderRadius: "30px", margin: "20px"}}>
                        <CardMedia
                        component="img"
                        height="160"
                        image={AmbisUtbkMockup}
                        sx={{opacity: "0.7"}}
                        alt="paela"
                        />
                        <CardContent>
                            <Typography sx={{fontWeight: "700", marginBottom: "20px", fontFamily: "Source Sans Pro"}} variant="body1">
                                Card Title
                            </Typography>
                            <Typography variant="body2" sx={{color: "#828282"}}>
                                lorem ipsum dolor sit amet constecteur adispliscit elit
                            </Typography>
                            <Box>
                                {/* <Typography>Tech Used :</Typography> */}
                                <Box display="flex" sx={{width: "100%"}}>
                                    <Typography variant="body2" sx={{margin: "15px 5px 5px 0"}}>Laravel</Typography>
                                    <Typography variant="body2" sx={{margin: "15px 5px 5px 5px"}}>React</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </CustomCard>
                    <CustomCard sx={{borderRadius: "30px", minWidth: "300px", margin: "20px"}}>
                        <CardMedia
                        component="img"
                        height="160"
                        image={InfoCovidMockup}
                        sx={{opacity: "0.7"}}
                        alt="paela"
                        />
                        <CardContent>
                        <Typography sx={{fontWeight: "700", marginBottom: "20px", fontFamily: "Source Sans Pro"}} variant="body1">
                                Card Title
                            </Typography>
                            <Typography variant="body2" sx={{color: "#828282"}}>
                                lorem ipsum dolor sit amet constecteur adispliscit elit
                            </Typography>
                            <Box>
                                {/* <Typography>Tech Used :</Typography> */}
                                <Box display="flex" sx={{width: "100%"}}>
                                    <Typography variant="body2" sx={{margin: "15px 5px 5px 0"}}>Laravel</Typography>
                                    <Typography variant="body2" sx={{margin: "15px 5px 5px 5px"}}>React</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </CustomCard>
                </Box>
            </Container>
            <Container style={{ flexDirection: "column" }}>
                <Box sx={{width: {sm: "50%", xs: "100%"}, textAlign: {sm : "center", xs: "left"}, marginBottom : "20px", alignItems: { sm: "center", xs: "flex-start"}}} display="flex" flexDirection="column">
                    <Typography sx={{ color: "#21A099", marginBottom: "10px" }}>TESTIMONIALS</Typography>
                    <Typography variant="h5" sx={{lineHeight: "48px", fontSize: "38px", fontWeight: "500", marginBottom: "20px"}}>What my trusted <br/> client say</Typography>
                    <Typography variant="body2" sx={{color: "#828282", fontFamily: "Inter", lineHeight: "32px"}}>Community development is often linked with community work or community planning, and may involve stakeholders, foundations,</Typography>
                </Box>
                <CustomSlider />
            </Container>
            <Footer style={{marginTop: "40px"}}/>
        </div>
    );
}

export default Project;