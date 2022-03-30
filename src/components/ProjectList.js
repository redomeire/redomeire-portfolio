import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/system';
import { darkTheme } from './Theme';
import AmbisUtbkMockup from "../assets/Ambis_utbk_mockup.svg";
import InfoCovidMockup from "../assets/infocovid_mockup.svg";
import HTMLLogo from "../assets/html-5-logo-svgrepo-com.svg";
import CSSLogo from "../assets/CSS3_logo_and_wordmark.svg";

export const projectList = [
    {
        id: 0,
        title: "InfoCovid19",
        description: "This is a project that i made to check the number of infected. Also, this website can find the nearest health facility to gain vaccine",
        image: InfoCovidMockup,
        link: "https://redomeire.github.io/InfoCovid19",
        technology: [
            {
                name: "HTML",
                logo: <img src={HTMLLogo} alt="html" height="30"></img>,
            }, 
            {
                name: "CSS",
                logo: <img src={CSSLogo} alt="html" height="30"></img>,
            }, 
            {
                name: "Javascript",
                logo: "Javascript",
            }
        ]
    },
    {
        id: 1,
        title: "Ambis UTBK",
        description: "As a Web Design Chief Coordinator, i responsible to design and develop the website for Ambis UTBK.",
        image: AmbisUtbkMockup,
        link: "https://redomeire.github.io/web-under-construction/",
        technology: [
            {
                name: "HTML",
                logo: <img src={HTMLLogo} alt="html" width="30"></img>,
            }, 
            {
                name: "SASS",
                logo: "SASS",
            }, 
            {
                name: "Javascript",
                logo: "Javascript",
            }
        ]
    }, 
]

function ProjectList(){
    return(
        <ThemeProvider theme={darkTheme}>
            { 
                projectList.map((item) => (
                    <div style={{marginLeft: "20px"}}>
                        <Typography sx={{marginBottom : 5}}>{item.id + 1}. {item.title}</Typography>
                        <Card sx={{ width: "90%", marginBottom: 8 }}>
                            <CardMedia
                                component="img"
                                height="500"
                                image={item.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                                <div className="technologies" style={{display: "flex",width: "70%"}}>
                                    {
                                        item.technology.map((item) => (
                                        <div>
                                            <Button variant="outlined" color="info" startIcon={item.logo} style={{marginRight: "10px"}}>{item.name}</Button>
                                        </div>
                                        ))
                                    }
                                </div>
                                <div className="visit-link" style={{marginRight: "10px"}}>
                                    <Button variant="contained">
                                        <a href={item.link} style={{textDecoration: "none", color: "black"}}>Visit</a>
                                    </Button>
                                </div>
                            </CardActions>
                        </Card>
                    </div>
                ))
            }
    </ThemeProvider>
    );
}

export default ProjectList;