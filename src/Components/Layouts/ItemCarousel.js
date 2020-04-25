import {Paper} from "@material-ui/core";
import React from "react";
import Button from '@material-ui/core/Button';

export default function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}