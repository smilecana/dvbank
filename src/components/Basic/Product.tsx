import React from 'react';
import {Button, Container, Grid, Typography} from "@material-ui/core";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import StarsIcon from '@material-ui/icons/Stars';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CustomizedTables from "./Elemt/CustomizedTables";

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
    root: {
        flexGrow: 1
    },
    productWrap: {
        height: 'auto'
    },
    heroArea: {
        height: 'auto',
        padding: '2% 0',
    },
    productsArea: {
        backgroundColor: '#eee',
        height: 'auto',
        padding: '50px 0',
    },
    paysArea: {
        height: 'auto',
        backgroundColor: '#FFFFFF',
        padding: '2% 0',
    },
    productItem: {
        height: '100%',
        margin: '3% auto'
    },
    infoArea: {
        height: 'auto',
        backgroundColor: '#F7F7F7',
        padding: '2% 0',
    },
    infoItem: {
        textAlign: 'center',
        margin: '3% auto'
    },
    title: {
        margin: '120px 50px 80px 50px',
    },
    desc: {
        margin: '0 100px',
        textAlign: 'center'
    },
    productDesc: {
        textAlign: 'left'
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        width: '300px'
    },
    desc2: {
        margin: '50px 100px',
        textAlign: 'center'
    },
    table:{
        margin:'auto'
    }

}));


export default function Product() {
    const classes = useStyles();

    return (
        <div className={classes.productWrap}>
            <ThemeProvider theme={theme}>
                <div className={classes.heroArea}>
                    <Container maxWidth='md'>
                        <Typography variant="h4" align="center" className={classes.title}>DV Bank ONLINE <br/>Checking
                            Accounts</Typography>
                        <Typography variant="body2" className={classes.desc}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions
                            of
                            Lorem Ipsum.
                        </Typography>
                    </Container>
                </div>
                <div className={classes.productsArea}>
                    <Container maxWidth='lg'>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <img src="https://i.picsum.photos/id/1043/600/400.jpg"/>
                            </Grid>
                            <Grid item xs className={classes.productItem}>
                                <Typography variant="body2" className={classes.productDesc}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley
                                    of type and scrambled it to make a type specimen book. It has survived not only five
                                    centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It
                                    was
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of
                                    Lorem Ipsum.
                                </Typography>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}>
                                    Open account
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className={classes.infoArea}>
                    <Container maxWidth='lg'>
                        <Typography variant="subtitle1">
                            Product Information
                        </Typography>
                        <Grid container spacing={3} className={classes.infoItem}>
                            <Grid item xs>
                                <StarsIcon fontSize="large" style={{ fontSize: 70, color: '#007e1d'}}/>
                                <Typography variant="body2" className={classes.desc2}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <PermPhoneMsgIcon  color="primary" style={{ fontSize: 70, color: '#007e1d'}}/>
                                <Typography variant="body2" className={classes.desc2}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <AccountBalanceIcon  color="primary" style={{ fontSize: 70, color: '#007e1d'}}/>
                                <Typography variant="body2" className={classes.desc2}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className={classes.paysArea}>
                    <Container maxWidth='lg'>
                        <Typography variant="subtitle1">
                            What you pay
                        </Typography>
                        <Grid container spacing={3} className={classes.productItem}>
                            <Grid item xs>
                                <img src="https://i.picsum.photos/id/1043/600/400.jpg"/>
                            </Grid>
                            <Grid item xs className={classes.table}>
                                <CustomizedTables />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </ThemeProvider>
        </div>
    );
}

