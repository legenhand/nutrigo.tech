import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
            <Tab label="Copyright" />
        </Tabs>
    </Paper>
    );
}
