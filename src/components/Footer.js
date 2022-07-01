import { Button, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #21A099;
    padding: 30px 40px 30px 40px;
`;

const Subcontainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    // @media (max-width: 1000px) {
    //     flex-direction: column;
    // }
`;

const FooterButton = styled(Button)({
    backgroundColor: "white",
    color: "black",
    textTransform: "capitalize",
    '&:hover': {
        backgroundColor: "#d6d6d6"
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    }
})


function Footer() {
    return (
        <Container>
            <Subcontainer>
                <List className="footer-service">
                    <ListItem>
                        <Typography variant="h6" sx={{ fontWeight: "600" }}>Service</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Graphic Design
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Web Development
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Engineering
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Marketing
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List className="footer-Resource">
                    <ListItem>
                        <Typography variant="h6" sx={{ fontWeight: "600" }}>Resource</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Virtual Assistants
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Accountants
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Bookkeeper
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Free Trial
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List className="footer-company">
                    <ListItem>
                        <Typography variant="h6" sx={{ fontWeight: "600" }}>Company</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Partnerships
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Terms of use
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Privacy
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Sitemap
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Typography variant="h6" sx={{ fontWeight: "600" }}>Get In Touch</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body2">You'll find your next freelance value you prefer.</Typography>
                    </ListItem>
                    <form onSubmit={e => e.preventDefault()}>
                    <ListItem>
                        <TextField required type="email" placeholder="Enter your mail" variant="outlined" color="primary" sx={{ backgroundColor: "white", borderRadius: "5px", outline: "none" }} />
                    </ListItem>
                    <ListItem>
                        <FooterButton type="submit">Submit</FooterButton>
                    </ListItem>
                    </form>
                </List>
            </Subcontainer>
            <Subcontainer style={{marginTop: "50px", padding: "10px 10px 5px 10px", alignItems: "center"}}>
                <Typography variant="h6" sx={{fontWeight: "600", fontSize: "30px"}}>REDO</Typography>
                <Typography variant="body2" sx={{ fontSize: "14px", color: "#FAFAFA"}}>Copyright Redomeire-portfolio.com, All rights reserved.</Typography>
            </Subcontainer>
        </Container>
    );
}

export default Footer;