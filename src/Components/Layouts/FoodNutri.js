import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '18px 5%',
        maxWidth: 1280,
        background: '#EDF5E1',
    },
    papernutri: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '2px 2%',
        maxWidth: 1280,
        background: '#8EE4AF',

    },
    image: {
        width: 75,
        height: 75,
        align: 'center',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
}));

export default function FoodNutri() {
    const classes = useStyles();
    const items = [{
        name: "Random Name #1",
        calories: "XXX",
        nutrients : "XXX"
    },{
        name: "Random Name #2",
        calories: "XXX",
        nutrients : "XXX"
    },{
        name: "Random Name #2",
        calories: "XXX",
        nutrients : "XXX"
    },{
        name: "Random Name #2",
        calories: "XXX",
        nutrients : "XXX"
    }];


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    {items.map((item) =>
                        <Grid item xs={3}>
                            <Paper className={classes.papernutri}>
                                <Typography gutterBottom variant="subtitle1">
                                    {item.name}
                                </Typography>
                                <ButtonBase className={classes.image}>
                                    <ImageIcon className={classes.img}/>
                                </ButtonBase>
                                <Typography variant="body2" color="textSecondary">
                                    {item.calories}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.nutrients}
                                </Typography>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            </Paper>
        </div>
    );
}
