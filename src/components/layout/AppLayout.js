import { IconButton, useTheme } from "@mui/material";
import React from "react";
import { ColorModeContext } from "../../App";
import ResponsiveAppBar from "../AppBar";
import Footer from "../Footer";

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styled from "styled-components";

const AppLayout = ({ children }) => {
    const { isDark } = React.useContext(ColorModeContext);
    const theme = useTheme();
    const [scrollTop, setScrollTop] = React.useState(false);

    const CustomIconButton = styled(IconButton)`
    position: fixed;
    bottom: 50px;
    zIndex: 5;
    right: 20px;
    color: ${!isDark ? '#FFFFFF' : 'black'};
    &:hover {
        color: ${isDark ? '#FFFFFF' : 'black'};
    }
    `

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500)
            setScrollTop(true)

        else setScrollTop(false)
    })

    return (
        <div id="up">
            <ResponsiveAppBar />
            <div style={{ minHeight: '100vh', backgroundColor: isDark ? theme.palette.primary.main : 'white' }}>
                {children}
            </div>
            {
                scrollTop &&
                <a href="#up">
                    <CustomIconButton color="primary" size="large" sx={{ position: 'fixed', bottom: '50px', zIndex: 5, right: '20px', backgroundColor: isDark ? theme.palette.secondary.main : theme.palette.primary.main }}>
                        <ExpandLessIcon />
                    </CustomIconButton>
                </a>
            }
            <Footer />
        </div>
    );
}

export default AppLayout;