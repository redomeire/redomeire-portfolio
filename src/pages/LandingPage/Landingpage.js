import { Button, IconButton, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import "../../components/style/GLobal.css";
import "./Landingpage.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import { useNavigate } from "react-router-dom";
import ButtonAppBar from "../../components/AppBar";
import { ThemeProvider } from "@mui/system";
import { darkTheme } from "../../components/Theme";
import ResponsiveAppBar from "../../components/AppBar";
import styled from "styled-components";

const Jumbotron = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px 10px 90px;
    background-color: white;
    margin-top: 60px;
    @media (max-width: 1000px){
        flex-direction: column;
    }
`;

function Landingpage(){
    const navigate = useNavigate();
    return(
        <div>
            <ResponsiveAppBar/>
            <Jumbotron>
                <div className="jumbotron-content">
                    <Typography variant="body1" sx={{color: "#21A099", fontSize: "18px"}}>
                        SMART PAYMENTS
                    </Typography>
                    <Typography variant="h3" sx={{fontFamily: "Source Sans Pro", fontSize: "64px", marginTop: "20px", fontWeight: "700", lineHeight: "74px"}}>
                        The Next Generation Payment <span style={{color: "#21A099"}}>Method</span>
                    </Typography>
                    <Typography sx={{marginTop : "30px", lineHeight: "32px", color: "#828282"}}>
                    Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
                    </Typography>
                    <div className="jumbotron-buttons" style={{marginTop: "30px"}}>
                        <Button variant="contained" sx={{backgroundColor: "#21A099", color: "white", fontSize: "10px", fontFamily: "Inter", fontWeight: "400", padding: "15px"}}>Get Started</Button>
                        <Button variant="outlined" sx={{border: "1px solid #21A099", fontSize: "10px", fontFamily: "Inter", fontWeight: "400", mx: 2, padding: "14px", color: "#21A099"}}>Watch Video</Button>
                        
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}

export default Landingpage;