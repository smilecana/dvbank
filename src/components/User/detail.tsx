import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@material-ui/core";
import {createStyles, makeStyles, Theme, ThemeProvider} from "@material-ui/core/styles";
import {dvTheme} from "../../constants/theme";
import {useStore} from "react-stores";
import {store} from '../store';
import axios from "axios";

const theme = dvTheme;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: '5%',
            padding: theme.spacing(4),
            paddingBottom: '2%',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
            border: '1px solid #eeeeee',
            marginLeft: theme.spacing(35),
        },
        title: {
            marginTop: theme.spacing(4),
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
    }),
);
const Detail = () => {
    const classes = useStyles();
    const [user, setUsers] = useState<any>({});
    const customer = useStore(store).customer;
    const handleChange = (e: any) => {
        // @ts-ignore
        setUsers({...customer,[e.target.name]: e.target.value});
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        axios.post(`/customer/${customer['id']}`, user)
            .then((response) => {
                alert("success");
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
                    <Button variant="outlined" color="primary"  type="submit" className={classes.btn}>
                        Save
                    </Button>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                value={customer['firstName']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                value={customer['lastName']}
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
                                value={customer['email']}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="billing address-line1"
                                value={customer['address1']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                autoComplete="billing address-line2"
                                value={customer['address2']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                value={customer['city']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="province"
                                name="province"
                                label="Province"
                                fullWidth
                                autoComplete="billing address-level2"
                                value={customer['province']}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="billing postal-code"
                                value={customer['postalCode']}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </ThemeProvider>
    );
}
export default Detail