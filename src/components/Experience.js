import { Button, Card, CardContent, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useNavigate } from "react-router-dom";
import BCCLogo from "../assets/BCC-Logo.svg";
import KBMTILogo from "../assets/logo-kbmti.svg";
import AMBISUTBKLogo from "../assets/logo-ambisutbk.png";
import { darkTheme } from "./Theme";
import "../components/style/GLobal.css";

export const experience = [
    {
        name: "Member of Front End Department",
        agency: "BCC FILKOM",
        description: "BCC FILKOM is a tech-based community in Faculty of Computer Science, University of Brawijaya. BCC consist of 4 departments, they are Product, Front-End, Back-End, and Computational Intelligence.",
        startDate: "Mar 2022",
        endDate: "present",
        link: "https://bccfilkom.net",
        image: <img src={BCCLogo} alt="logo bcc"></img>
    },
    {
        name: "Staff Muda of Research And Development",
        agency: "Eksekutif Mahasiswa TI",
        description: "Staff muda is not staff tua",
        startDate: "Oct 2021",
        endDate: "Jan 2022",
        link: "http://kbmti.filkom.ub.ac.id",
        image: <img src={KBMTILogo} alt="logo KBMTI"></img>
    }, {
        name: "Wakil Koordinator Desain Web",
        agency: "Ambis UTBK",
        description: "I responsible to make design and developing the website",
        startDate: "Aug 2021",
        endDate: "Mar 2022",
        link: null,
        image: <img src={AMBISUTBKLogo} alt="logo Ambis UTBK" width="100"></img>
    }
]

function Experience(){

    return(
        <ThemeProvider theme={darkTheme}>
        <div style={{marginLeft: "30px"}}>
            {experience.map((item) => (
                <Card style={{backgroundColor: "rgba(5, 105, 204, 0.29)", width: "80%", marginBottom : "10px"}}>
                    <CardContent style={{display: "flex", flexDirection: "row-reverse", justifyContent: "space-evenly"}}>
                        <div className="item-title" style={{display: "flex", flexDirection:"column", width : "60%", justifyContent: "center"}}>
                            <Typography sx={{fontSize: "15px"}}>{item.name} - {item.agency}</Typography>
                            <Typography className="color-secondary-dark" sx={{fontSize: "12px", marginTop: 2}}>{item.startDate} - {item.endDate}</Typography>
                        </div>
                        <div className="item-image" style={{width: "25%"}}>
                            <Button variant="text" onClick={() => { window.location.replace(`${item.link}`) }}>
                                {item.image}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
        </ThemeProvider>
    );
}

export default Experience;