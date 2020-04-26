import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from '@material-ui/core/styles';
import {useState} from 'react';
import { CssBaseline, Container, Typography,  Button,  Divider } from '@material-ui/core';
import { login, setCustomer } from './authActions';
import {dvTheme} from "../constants/theme";
import axios from "axios";
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const theme = dvTheme;
const useStyles = makeStyles(theme => ({
    main: {
        border: '1px solid #eee',
        borderRadius: '5px',
        boxShadow: '5px 7px 16px #f0f0f0',
        backgroundColor: '#ffffff',
        margin:'10% auto'
    },
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(5),
        
    },
    verticalLine: {
        borderRight: '1px solid #eeeeee',
    },
    title: {
        marginBottom: theme.spacing(4),
        fontWeight: "bold"
    },
    subtitle: {
        marginTop: theme.spacing(2),

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {
    //set state in hook function
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setLoginFailed] = useState("");
    const classes = useStyles();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        axios.post('/customer/login', {email:email, password:password})
            .then((response) => {

                login();
                setCustomer(response.data);
                window.location.href='/accounts/summary';
            }, (error) => {
                setLoginFailed("User name or password you entered is incorrect.")
                console.log(error);
        });
    }
    
        return (
            <ThemeProvider theme={theme} >
                
                <Container className={classes.main} component="main" maxWidth="md" >
                    <CssBaseline />
                    <Grid container spacing={4}>
                        <Grid item xs={6} className={classes.verticalLine}>
                            <div className={classes.paper}>
                                <Typography component="h3" variant="h5" className={classes.title}>
                                    Sign in to Online Banking
                                </Typography>
                                {/* <form className={classes.form} noValidate onSubmit={handleSubmit}> */}
                                <ValidatorForm onSubmit={handleSubmit} onError={errors => console.log(errors)}>

                                    <TextValidator
                                        variant="outlined"
                                        margin="normal"
                                        // required
                                        fullWidth
                                        id="email"
                                        label="Online ID"
                                        name="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={e => {setEmail(e.target.value);setLoginFailed('')}}
                                        autoFocus
                                        validators={['required', 'isEmail']}
                                        errorMessages={['This field is required', 'Email is not valid']}
                                    />
                                    <TextValidator
                                        variant="outlined"
                                        margin="normal"
                                        // required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={e => {setPassword(e.target.value);setLoginFailed('')}}
                                        autoComplete="current-password"
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                    />

                                    <Grid container>
                                        <Grid item xs>                                            
                                            <Typography variant="body2" color="primary" className={classes.title}>
                                                Forgot password?
                                            </Typography>
                                            
                                            <Typography variant="subtitle1" color="error" >
                                                {loginFailed}
                                            </Typography>
                                        </Grid>

                                    </Grid>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        // onClick={this.submit}
                                    >
                                        Sign In
                                    </Button>
                                </ValidatorForm>
                                {/* </form> */}
                            </div>
                        </Grid>
                        <Grid item xs={6} >
                            <div className={classes.paper}>
                                <Typography variant="h5" className={classes.title}>
                                    Register for online banking
                                </Typography>
                                <Divider />
                                <Typography variant="h6" className={classes.subtitle}>
                                    DV Bank Card Holder:
                                </Typography>
                                <p>To access DV Online Banking you will need your DV Bank Card and the account numbers linked to your card.</p>
                                <Link to="/register"><Button
                                    variant="outlined"
                                    color="secondary"
                                >
                                    Register
                                </Button></Link>
                                <Typography variant="h6" className={classes.subtitle}>
                                    Sign and register help:
                                </Typography>
                                <Grid container>
                                    <Grid item xs>
                                    <Typography variant="caption" color="primary" className={classes.subtitle}>
                                    Custmer Service
                                    </Typography>
                                    <br/>
                                    <Typography variant="caption" color="primary" className={classes.subtitle}>
                                    Forgot ID / password?
                                    </Typography>
                                       
                                    </Grid>

                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                
            </ThemeProvider>
    );
}

