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

function Landingpage(){
    const navigate = useNavigate();
    return(
        <div className="bg-color-background" style={{display: "flex"}}>
            <ResponsiveAppBar/>
        </div>
    );
}

export default Landingpage;