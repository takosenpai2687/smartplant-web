import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "var(--font-lato)",
    },
    palette: {
        secondary: {
            main: "#9ccc65",
            contrastText: "#FFFFFF",
        },
        primary: {
            main: "#026b39",
            contrastText: "#FFFFFF",
        },
    },
});

export default theme;
