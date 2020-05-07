import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App.js"
import Theme from "./Components/Theme/Theme"
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

ReactDOM.render(
    <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <App/>
    </MuiThemeProvider>,
    document.getElementById("root")
);