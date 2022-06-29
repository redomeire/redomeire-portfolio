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
    @media (max-width: 1000px){
        flex-direction: column;
    }
`;

function Landingpage(){
    const navigate = useNavigate();
    return(
        <div className="bg-color-background">
            <ResponsiveAppBar/>
            <Jumbotron>
                <div className="jumbotron-content">
                    {/* <Typography variant="h6" sx={{backgroundColor: "white"}}>
                        SMART PAYMENTS
                    </Typography> */}
                </div>
            </Jumbotron>
        </div>
    );
}

export default Landingpage;