import React from "react";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Copyright from "../Copyright";


export default function ButtonSignin (props){
    return (
        <div>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{margin: '14px 0 18px 0'}}
        >
            Sign In
        </Button>
        <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2" color="inherit">
                    Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="/signup" variant="body2" color="inherit">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
        </Grid>
        <Box mt={5}>
            <Copyright />
        </Box>
        </div>
        
    );
}