import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import { theme } from "../../components/Theme";

function Contact(){
    return(
        <div className="bg-color-background" style={{display : "flex"}}>
            <Navbar/>
            <ThemeProvider theme={theme}>
                <div className="container">
                    <Typography color="primary" sx={{marginX: "auto"}}>Ini halaman Contact</Typography>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Contact;