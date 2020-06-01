import React from 'react'
import { Paper, Tabs} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Copyright from "../Layouts/Copyright";
const useStyles = makeStyles((theme) => ({
    paper: {
        background: '#379683',
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();

    return (
    <Paper className={classes.paper}>
        <Tabs
            value="0"
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Copyright/>
        </Tabs>
    </Paper>
    );
}
