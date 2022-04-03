import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import BCCLogo from "../assets/BCC-Logo.svg";
import KBMTILogo from "../assets/logo-kbmti.svg";
import AMBISUTBKLogo from "../assets/logo-ambisutbk.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { darkTheme } from "./Theme";
import "../components/style/GLobal.css";
import "./style/Experience.css";

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
        name: "Staff Muda Research and Development",
        agency: "Eksekutif Mahasiswa TI",
        description: "Staff muda is not staff tua",
        startDate: "Oct 2021",
        endDate: "Jan 2022",
        link: "http://kbmti.filkom.ub.ac.id",
        image: <img src={KBMTILogo} alt="logo KBMTI"></img>
    }, {
        name: "Wakil Koordinator Desain Web",
        agency: "Ambis UTBK",
        description: "I responsible to make design and developing the website I responsible to make design and developing the website",
        startDate: "Aug 2021",
        endDate: "Mar 2022",
        link: null,
        image: <img src={AMBISUTBKLogo} alt="logo Ambis UTBK" width="100"></img>
    }
]

function Experience(){

    return(
        <ThemeProvider theme={darkTheme}>
        <div className="experience-container">
            {experience.map((item) => (
                <Card className="data-experience-card" style={{marginBottom : "10px"}}>
                    <Accordion color="secondary" sx={{background: "rgba(5, 105, 204, 0.16)", backdropFilter: "blur(20px)"}}>
                        <AccordionSummary
                         expandIcon={<ExpandMoreIcon/>}
                         aria-controls="panella-content"
                         id="panella-header"
                        >
                        <CardContent className="content">
                            <div className="item-title" style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
                                <Typography sx={{fontSize: "15px"}}>{item.name} - {item.agency}</Typography>
                                <Typography className="color-secondary-dark" sx={{fontSize: "12px", marginTop: 2}}>{item.startDate} - {item.endDate}</Typography>
                            </div>
                            <div className="item-image" style={{width: "25%"}}>
                                <Button variant="text" onClick={() => { window.location.replace(`${item.link}`) }}>
                                    {item.image}
                                </Button>
                            </div>
                        </CardContent>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider/>
                            <Typography sx={{marginTop : 3}}>{item.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            ))}
        </div>
        </ThemeProvider>
    );
}

export default Experience;