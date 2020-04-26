import React, {useState, useEffect } from 'react';
import {Divider} from '@material-ui/core';
import { Button , FormControlLabel, Checkbox, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ThemeProvider} from '@material-ui/core/styles';
import {dvTheme} from "../constants/theme";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
    const [user, setUsers] = useState<any>({email: "", firstName: "", lastName: "", password: "", repeatPassword: ""});
    const [registerFailed, setRegisterFailed] = useState('');
    const classes = useStyles();
    const handleChange = (e: any) => {
        // @ts-ignore
        setUsers({...user,[e.target.name]: e.target.value});
        setRegisterFailed("");
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        axios.post('/customer/add', user)
        .then((response) => {
            alert("Success");
            history.push('/signIn');
        }, (error) => {
            console.log(error);
            setRegisterFailed('This email address exists.')
        });
    }
    useEffect(() =>{
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== user.password) {
                return false;
            }
            return true;
        });
    })
    
    return (
        <>
            <Container component="main" className={classes.main} maxWidth='md'>
                <ThemeProvider theme={theme}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} className={classes.register}>
                            {/* <form className={classes.form} id='UserFrom' onSubmit={onSubmit} > */}
                            <ValidatorForm onSubmit={onSubmit} onError={errors => console.log(errors)} className={classes.form} id='UserFrom'>
                            <Typography variant="subtitle1" color="error" >{registerFailed}</Typography>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} sm={6}>
                                        <TextValidator
                                            variant="outlined"
                                            autoComplete="fname"
                                            name="firstName"
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            size="small"
                                            autoFocus
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={user.firstName}
                                            onChange={handleChange}
                                            validators={['required']}
                                            errorMessages={['This field is required']}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextValidator
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={user.lastName}
                                            onChange={handleChange}
                                            validators={['required']}
                                            errorMessages={['This field is required']}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextValidator
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={user.email}
                                            onChange={e => setUsers({...user, email: e.target.value })}
                                            validators={['required', 'isEmail']}
                                            errorMessages={['this field is required', 'Email is not valid']}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextValidator
                                            variant="outlined"
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
                                            value={user.password}
                                            onChange={handleChange}
                                            validators={['required']}
                                            errorMessages={['This field is required']}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextValidator
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            name="repeatPassword"
                                            label="Confirm Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={user.repeatPassword}
                                            onChange={handleChange}
                                            validators={['isPasswordMatch', 'required']}
                                            errorMessages={['Password mismatch', 'This field is required']}
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
                            </ValidatorForm>
                            {/* </form> */}
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
