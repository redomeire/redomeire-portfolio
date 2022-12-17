import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/page_not_found.svg";
import UnderConstructionImage from "../assets/under_construction.svg";
import CustomButton from "./CustomButton";
import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import { ColorModeContext } from "../App";

function PageNotFound(props){
    const theme = useTheme();

    const { isDark } = React.useContext(ColorModeContext);

    return(
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh", backgroundColor: isDark ? theme.palette.primary.main : 'white'}}>
            <img src={props?.value === "not found" ? PageNotFoundImage : UnderConstructionImage} alt="hero" width="300" style={{marginBottom: "20px"}}/>
            <Typography variant="h4" sx={{marginBottom: "10px", fontWeight: "700", fontFamily: "Source Sans Pro", color: isDark ? theme.palette.secondary.main : 'black'}}>Oops...</Typography>
            <Typography variant="h6" sx={{marginBottom: "20px", fontFamily: "Source Sans Pro", color: isDark ? theme.palette.secondary.main : 'black'}}>{props?.value === "not found" ? "There is nothing here" : "website under construction"}</Typography>
            <Link to="/" style={{textDecoration: "none"}}>
                <CustomButton startIcon={<HomeIcon/>} variant="outlined" style={{color: isDark ? theme.palette.secondary.main : '#21A099', borderColor: "#21A099",fontFamily: "Source Sans Pro",textTransform: "capitalize", padding: "10px"}}>Go to Home</CustomButton>
            </Link>
        </div>
    );
}

export default PageNotFound;