import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => {
    return {
        palette: {
            mode,
            ...(
                mode === 'light'
                    ? {
                        primary: {
                            main: "rgb(33, 160, 153)",
                            contrastText: '#ffffff'
                        },
                        secondary: {
                            main: "#FFFFFF"
                        },
                        success: { 
                            main: "#2e7d32"
                        },
                        error: { 
                            main: "#EB455F"
                        },
                        warning: { 
                            main: "#ffeb3b" 
                        },
                        info: { 
                            main: "#03a9f4" 
                        },
                        white: {
                            main: "#FFFFFF"
                        }
                    } :
                    {
                        primary: {
                            main: "#334155"
                        },
                        secondary: {
                            main: "#cbd5e1"
                        },
                        success: { 
                            main: "#2e7d32"
                        },
                        error: { 
                            main: "#EB455F"
                        },
                        warning: { 
                            main: "#ffeb3b" 
                        },
                        info: { 
                            main: "#03a9f4" 
                        },
                        white: {
                            main: "#FFFFFF"
                        }
                    }
            )
        }
    }
}

export const theme = createTheme(getDesignTokens('light'))

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});