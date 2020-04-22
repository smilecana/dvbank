import React, {useState } from 'react';
import {Divider} from '@material-ui/core';
import { TextField, Button , FormControlLabel, Checkbox, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ThemeProvider} from '@material-ui/core/styles';
import {dvTheme} from "../constants/theme";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const theme = dvTheme;
const useStyles = makeStyles(theme => ({
    main: {
        margin: '8% auto',
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
    infoWrap:{
        padding: '8%',
        '& hr':{
            width: '70%',
            textAlign:'left'
        },
        '& p':{
            height:'auto',
            fontSize:'0.8em',
            color:'#444',
            lineHeight:'23px'
        }
    },
    info:{
        margin: '2% auto 4% auto',
    }
}));
export default function Register(){
    let history = useHistory();
    const [user, setUsers] = useState<any>({email: "", firstName: "", lastName: "", password: ""});
    const classes = useStyles();
    const handleChange = (e: any) => {
        // @ts-ignore
        setUsers({...user,[e.target.name]: e.target.value});
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        axios.post('/customer/addCustomer', user)
        .then((response) => {
            alert("success");
            history.push('/signIn');
        }, (error) => {
            console.log(error);
        });
    }
    return (
        <>
            <Container component="main" className={classes.main} maxWidth='md'>
                <ThemeProvider theme={theme}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} className={classes.register}>
                            <form className={classes.form} id='UserFrom' onSubmit={onSubmit} >
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
                                            onChange={handleChange}
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
                                            onChange={handleChange}
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
                                            onChange={e => setUsers({...user, email: e.target.value })}
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
                                            onChange={handleChange}
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
                            <div className={classes.infoWrap}>
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
        </>
    );
}
