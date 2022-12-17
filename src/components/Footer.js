import { List, ListItem, ListItemButton, ListItemText, TextField, Typography, useTheme } from "@mui/material";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import SendIcon from '@mui/icons-material/Send';
import { useContext } from "react";
import { ColorModeContext } from "../App";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    background-color: ${({ color }) => color};
    padding: 30px 40px 30px 40px;
`;

const Subcontainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    color: ${({ color }) => color};
    // @media (max-width: 1000px) {
    //     flex-direction: column;
    // }
`;

function Footer(props) {
    const { isDark } = useContext(ColorModeContext);
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Container style={props.style} color={isDark ? theme.palette.primary.light : theme.palette.primary.main}>
            <Subcontainer color={ isDark && theme.palette.secondary.main }>
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
                    <ListItem>
                        <CustomButton onClick={() => {
                            navigate('/contact')
                        }} endIcon={<SendIcon/>} style={{backgroundColor: "white", fontFamily: "Inter", textTransform: "capitalize", color: "black", padding: "10px"}} >Contact Me</CustomButton>
                    </ListItem>
                </List>
            </Subcontainer>
            <Subcontainer color={isDark && theme.palette.secondary.main} style={{marginTop: "50px", padding: "10px 10px 5px 10px", alignItems: "center"}}>
                <Typography variant="h6" sx={{fontWeight: "600", fontSize: "30px"}}>REDO</Typography>
                <Typography variant="body2" sx={{ fontSize: "14px", color: "#FAFAFA"}}>Copyright Redomeire-portfolio.com, All rights reserved.</Typography>
            </Subcontainer>
        </Container>
    );
}

export default Footer;