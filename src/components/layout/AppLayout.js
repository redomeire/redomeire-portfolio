import { useTheme } from "@mui/material";
import React from "react";
import { ColorModeContext } from "../../App";
import ResponsiveAppBar from "../AppBar";
import Footer from "../Footer";

const AppLayout = ({ children }) => {
    const { isDark } = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <div>
            <ResponsiveAppBar />
            <div style={{ minHeight: '100vh', backgroundColor: isDark ? theme.palette.primary.main : 'white' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default AppLayout;