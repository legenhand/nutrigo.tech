import {
    createMuiTheme
} from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        primary: {
            main: '#3FB49D',
            contrastText: "white",
        },
        secondary: {
            main: '#EDF5E1',
        },
        background: {
            default: "#ffffff",
        },
        text: {
            secondary: '#00221B',
        }
    },
});