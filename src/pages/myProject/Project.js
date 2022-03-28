import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import { theme } from "../../components/Theme";

function Project(){
    return(
        <div className="bg-color-background" style={{display : "flex"}}>
            <Navbar/>
            <ThemeProvider theme={theme}>
                <div className="container">
                    <Typography variant="h2" color="primary" sx={{fontWeight: "500", textAlign: "left", marginTop: "20px"}}>This is Project</Typography>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Project;