import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Button, Container} from "@material-ui/core";
import {createStyles, makeStyles, Theme, ThemeProvider} from "@material-ui/core/styles";
import {dvTheme} from "../../constants/theme";
import {useStore} from "react-stores";
import {store} from '../store';
import axios from "axios";
import {setCustomer} from "../authActions";



const theme = dvTheme;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(4),
            paddingBottom: '2%',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            border: '1px solid #eeeeee',
            marginTop: '1%'
        },
        title: {
            marginBottom: theme.spacing(2),
            borderLeft: "3px solid green",
            paddingLeft: "10px"
        },
        formControl: {
            minWidth: '100%',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        btn: {
            marginBottom: '16px'
        },
        button: {
            margin: theme.spacing(1),
            backgroundColor: '#1bb14c'
        },
    }),

);
const Detail = () => {
    const classes = useStyles();
    const [user, setUsers] = useState<any>({});
    const customer = useStore(store).customer;
    useEffect(() => {
        setUsers(customer);
    }, []);
    const handleChange = (e: any) => {
        // @ts-ignore
        setUsers({...user,[e.target.name]: e.target.value});
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        axios.put(`/customer/${customer['id']}/update`, user)
            .then((response) => {
                setCustomer(user);
                alert('Saved!');
            }, (error) => {
                console.log(error);
            });
    }
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={'lg'} className={classes.root}>
                <Typography component="h3" variant="h5" className={classes.title}>
                    Personal Information
                </Typography>
                <form id='UserFrom' onSubmit={onSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                value={user['firstName']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                value={user['lastName']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Phone Number"
                                fullWidth
                                value={user['phoneNumber']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                InputProps={{
                                    readOnly: true,
                                }}
                                fullWidth
                                value={user['email']}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                autoComplete="billing address-line1"
                                value={user['address']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="postalCode"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="billing postal-code"
                                value={user['postalCode']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="province"
                                name="province"
                                label="Province"
                                fullWidth
                                autoComplete="billing province"
                                value={user['province']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}  sm={6}>
                            <Button variant="outlined" color="primary"  type="submit" className={classes.btn}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </ThemeProvider>
    );
}
export default Detail