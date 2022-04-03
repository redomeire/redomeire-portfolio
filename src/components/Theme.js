import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main : "#3399FF"
        },
        secondary: {
            main: "rgba(5, 105, 204, 0.29)",
        },
        success: {
            main: "#2e7d32",
        },  
        error: {
            main: "#f44336"
        },
        warning: {
            main: "#ffeb3b"
        },
        info: {
            main: "#03a9f4"
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});