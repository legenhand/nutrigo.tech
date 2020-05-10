import React from "react"
import Typography from "@material-ui/core/Typography";

export default function CovidBanner(props) {

    return (
        <Typography variant="body2" gutterBottom>
            Confirmed : {props.confirmed} <br></br>
            Recovered : {props.recovered}
        </Typography>
    );
}
