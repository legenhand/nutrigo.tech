import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App.js"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#379683',
        },
        secondary: {
            main: '#05386B',
        },
        background: {
            default: "#5CDB95",
        },
        text: {
            secondary: '#05386B',
        }
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App/>
    </MuiThemeProvider>,
    document.getElementById("root")
);