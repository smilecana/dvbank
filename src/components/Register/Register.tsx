import React from 'react';
import Button from '@material-ui/core/Button';
import {Divider} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';

import './Register.scss';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5ee279',
            main: '#1aaf4b',
            dark: '#007e1d',
            contrastText: '#fff',
        },
        secondary: {
            main: '#1bb14c',
        },
    },
});
const useStyles = makeStyles(theme => ({
    main: {
        margin: '8% auto 0 auto',
        border: '1px solid #eee',
        borderRadius: '5px',
        boxShadow: '5px 7px 16px #f0f0f0',
        backgroundColor: '#ffffff',
    },
    form: {
        width: '80%', // Fix IE 11 issue.
        margin: '15% auto'
    },
    register: {
        borderRight: '1px solid #eeeeee'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    typography: {
        color: '#444444',
        fontSize: '1rem',
        marginBottom: '13px',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        }
    },
    imif: {
        color: '#444444',
        fontSize: '0.8rem',
    },
    info:{
        margin: '2% auto 1% auto',
    }
}));

export default function Register() {
    const classes = useStyles();
    return (<>
            <Container component="main" className={classes.main} maxWidth='md'>
                <ThemeProvider theme={theme}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} className={classes.register}>
                            <form className={classes.form}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            autoComplete="fname"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            size="small"
                                            autoFocus
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            size="small"
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            size="small"
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            size="small"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            size="small"
                                            name="confirm_password"
                                            label="Confirm Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                            label="Yes, I'd like to be the first to know about DVBank rates,news, and update. I can unsubscribe at any time"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Get Started
                                </Button>
                            </form>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="info-wrap">
                                <Typography variant="subtitle1" className={classes.typography}>
                                    Ready for better banking?
                                </Typography>
                                <Divider/>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                    it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English.
                                </p>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                    it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English.
                                </p>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Container>
            <Container maxWidth='md' className={classes.info}>
                <p className={classes.imif}>*Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.</p>
                <p className={classes.imif}>**Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book.</p>
            </Container>
        </>
    );
}