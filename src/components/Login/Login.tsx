import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import  { useState } from 'react';
import './Login.scss';
import { CssBaseline, Container, Typography, TextField, Button, Link, Divider } from '@material-ui/core';
import { login, logout } from '../authActions';


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
    root:{

    },
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
        // alignItems: 'center',
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
    // check login or not
   
    //set state in hook function
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(email === "user" && password === "test")
          {
            login();
            console.log("success login");
            window.location.href = "/";
          }
    }


    // state = {
    //     email: "",
    //     password: "",
        
    //   };
    
    //   handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     // No longer need to cast to any - hooray for react!
    //     this.setState({[e.target.name]: e.target.value});
    //   }

    //   submit(){
    //       if(this.state.email == "user" && this.state.password == "password")
    //       {
    //         // login();
    //         console.log("success login")
    //       }
    //   }


    // render(){
        const classes = useStyles();
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
                                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Online ID"
                                        name="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                    />

                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
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

                                </form>
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
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    href="/register"
                                >
                                    Register
                                </Button>
                                <Typography variant="h6" className={classes.subtitle}>
                                    Sign and register help:
                                </Typography>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="caption">
                                            Custmer Service
                                            </Link>
                                        <br></br>
                                        <Link href="#" variant="caption">
                                            Forgot ID / password?
                                            </Link>
                                    </Grid>

                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
    );
    // }
}

// export default Login;