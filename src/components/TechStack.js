import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HTML5Logo from "../assets/html-5-logo-svgrepo-com.svg";
import CSS3Logo from "../assets/CSS3_logo_and_wordmark.svg";

export const TechArray = [{
    name: "HTML5",
    source: <img src={HTML5Logo} alt="html" width="100" height="100"></img>,
}, {
    name: "CSS3",
    source: <img src={CSS3Logo} alt="html" height="100" width="100"></img>
}, {
    name: "JavaScript",
    source: <img src={HTML5Logo} alt="html" width="100" height="100"></img>
}]

function TechStack(){
    return (
        <ListItem sx={{display: "flex", flexWrap: "wrap"}}>
            { 
                TechArray.map((item) => (
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <ListItemText sx={{marginBottom : 5}}>{item.name}</ListItemText>
                        <ListItemIcon>{item.source}</ListItemIcon>
                    </div>
                ))
            }
        </ListItem>
    );
}

export default TechStack;