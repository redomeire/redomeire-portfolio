import {
  Box,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import "./Contact.css";
import ResponsiveAppBar from "../../components/AppBar";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import styled from "styled-components";
import CustomButton from "../../components/CustomButton";
import Footer from "../../components/Footer";
import React from "react";

const Jumbotron = styled.div`
  background-color: #21a099;
  text-align: center;
  padding: 30px 30px 250px 30px;
  color: white;
`;

const Circle = styled(Box)`
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,0.7151902997527135) 0%, rgba(255,255,255,0.4182715322457108) 100%);
width: 200px; 
height: 200px; 
border-radius: 50%;
margin-left: 150px; 
margin-top: -200px;
margin-bottom: -40px;
z-index: -1;
opacity: 0.8;
`;

const CustomForm = styled.form`
display: flex; 
flex-direction: column; 
width: 50%;
@media (max-width: 900px) {
  width: 100%;
  margin-top: 40px;
  padding: 20px;
}
`;

function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const showMessage = () => {
    console.log(`${name} ${email} ${subject} ${message}`);
  }

  return (
    <div>
      <ResponsiveAppBar style={{ position: "absolute", top: "0" }} color="white"/>
      <Jumbotron>
        <Box sx={{ margin: "auto", width: "70%" }}>
          <Typography sx={{marginTop: "120px"}}>CONTACT ME</Typography>
          <Typography variant="h4" sx={{ fontWeight: "700", fontFamily: "Source Sans Pro", marginBottom: "20px", marginTop: "20px"}}>Get In Touch</Typography>
          <Typography variant="body2" sx={{ lineHeight: "32px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
        </Box>
      </Jumbotron>
      <Box display="flex" sx={{ flexDirection: { md: "row", sm: "column", xs: "column"}, padding: {sm: "40px", xs: "10px"}, width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "-200px",boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', backgroundColor: "white", borderRadius: "30px", marginBottom: "100px" }} justifyContent="space-between">
        <Box sx={{ backgroundColor: "#21A099", color: "white", width: {md: "40%", sm: "100%", xs: "100%"}, borderRadius: "30px", boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding: "30px", overflow: "hidden" }}>
          <Typography variant="h6" sx={{ fontFamily: "Source Sans Pro", fontWeight: "700", marginBottom: "20px" }}>Contact Information</Typography>
          <Typography variant="body2" sx={{ lineHeight: "25px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Typography>
          <Box display="flex" alignItems="center" sx={{ marginBottom: "10px", marginTop: "20px" }}>
            <IconButton size="medium">
              <LocalPhoneIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography variant="body2">+62 857-8515-3695</Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ marginBottom: "10px" }}>
            <IconButton size="medium">
              <EmailIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography variant="body2">redomeire@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ marginBottom: "20px" }}>
            <IconButton size="medium">
              <PersonPinCircleIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography variant="body2">Mojokerto, East java, Indonesia</Typography>
          </Box>
          <Circle />
        </Box>
        <CustomForm onSubmit={e => e.preventDefault()}>
          <Box display="flex" sx={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom : "40px" }}>
            <TextField id="name" label="Your Name" variant="outlined" type="text" required sx={{width: "48%"}} onChange={e => setName(e.target.value)}/>
            <TextField id="email" label="Your Email" variant="outlined" type="email" required  sx={{width: "48%"}} onChange={e => setEmail(e.target.value)}/>
          </Box>
          <TextField id="subject" label="Your Subject" variant="outlined" type="text" required sx={{marginBottom: "40px"}} onChange={e => setSubject(e.target.value)}/>
          <TextField id="message" label="Your Message" variant="outlined" type="text" required sx={{marginBottom: "40px"}} onChange={e => setMessage(e.target.value)}/>
          <CustomButton type="submit" style={{ width: "100%" ,backgroundColor: "#21A099", color: "white", textTransform: "capitalize", padding: "10px", fontFamily: "Inter" }} onClick={showMessage}>Send Message</CustomButton>
        </CustomForm>
      </Box>
      <Footer/>
    </div>
  );
}

export default Contact;
