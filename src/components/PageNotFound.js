import { Button, Link, Typography } from "@mui/material";
import PageNotFoundImage from "../assets/page_not_found.svg";
import UnderConstructionImage from "../assets/under_construction.svg";

function PageNotFound(props){
    return(
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "100vh"}}>
            <img src={props?.value === "not found" ? PageNotFoundImage : UnderConstructionImage} alt="hero" width="300" style={{marginBottom: "20px"}}/>
            <Typography variant="h4" sx={{marginBottom: "10px", fontWeight: "700", fontFamily: "Source Sans Pro"}}>Oops...</Typography>
            <Typography variant="h6" sx={{marginBottom: "20px", fontFamily: "Source Sans Pro"}}>{props?.value === "not found" ? "There is nothing here" : "website under construction"}</Typography>
            <Link href="/" sx={{textDecoration: "none"}}>
                <Button variant="outlined" sx={{textTransform: "capitalize"}}>Go to Home</Button>
            </Link>
        </div>
    );
}

export default PageNotFound;