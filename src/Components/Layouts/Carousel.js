import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: '18px 5%',
        maxWidth: 1280,
        background: '#EDF5E1',
        color: theme.palette.text.secondary,
    },
    image: {
        width: 200,
        height: 200,
        align: 'center',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function Example(props) {
    const classes = useStyles();
    const items = [{
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },{
        name: "Random Name #2",
        description: "Probably the most random thing you have ever seen!"
    }];

    return  (<Carousel>
        {items.map((item) =>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} align="center">
                            <ButtonBase className={classes.image}>
                                <ImageIcon className={classes.img}/>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm={6} container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography variant="body2" color="textSecondary">
                                        ID: 1030114
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {item.description}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        SIGN UP FOR FREE
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )}

            </Carousel>
    );
}


