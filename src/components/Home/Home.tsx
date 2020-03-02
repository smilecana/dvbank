import React from "react";
import {Button, Container, Grid, Link, Typography} from "@material-ui/core";
import './Home.scss';
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import StarsIcon from "@material-ui/icons/Stars";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

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
        flexGrow: 1,
        height: 'auto',
        paddingTop: '5%'
    },
    vitem: {
        margin: '5% 0'
    },
    infoItem: {
        textAlign: 'center',
        margin: '3% auto'
    },
    desc2: {
        margin: '30px 50PX',
        textAlign: 'center'
    },
    heroDesc: {
        margin: '3% 5% 0 0',
        textAlign:'right',
        color: '#444444'
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        width: '300px'
    },
    benefit:{
        margin:'10% 0',
        color: '#007e1d'
    },
    benefitDesc:{
        margin:'auto 5%',

    },
    products:{
        margin:'5% 0',
        color: '#FFFFFF'
    },
    productsDesc:{
        margin:'auto 0',
    },
    link:{
        '&:hover':{
            color: '#ffffff',
            textDecorationColor: '#ffffff'
        }
    }
}));
export default function Home() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <div className='home-wrap'>
            <div className='hero-area'>
                <Container maxWidth='lg'>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <img src="https://i.picsum.photos/id/1043/400/300.jpg"/>
                        </Grid>
                        <Grid item xs className={classes.heroDesc}>
                            <Typography variant="h6">
                                Unlimited backing transcriptions
                            </Typography>
                            <Typography variant="h6">
                                Annual fee rebate on select DV credit cards
                            </Typography>
                            <Typography variant="h6">
                                Free cheques, drafts & more
                            </Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                JOIN NOW
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='icon-area'>
                <Container>
                    <Typography variant="h5" align="center">Welcome to DV ONLINE Banking</Typography>
                    <Grid container spacing={3} className={classes.infoItem}>
                        <Grid item xs>
                            <StarsIcon fontSize="large" style={{fontSize: 60, color: '#FFFFFF'}}/>
                            <Typography variant="body2" className={classes.desc2}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <PermPhoneMsgIcon color="primary" style={{fontSize: 60, color: '#FFFFFF'}}/>
                            <Typography variant="body2" className={classes.desc2}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <AccountBalanceIcon color="primary" style={{fontSize: 60, color: '#FFFFFF'}}/>
                            <Typography variant="body2" className={classes.desc2}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='benefit-area'>
                <Container>
                    <Grid container spacing={3} className={classes.benefit}>
                        <Grid item xs>
                            <img src="https://i.picsum.photos/id/1043/600/400.jpg"/>
                        </Grid>
                        <Grid item xs className={classes.benefitDesc}>
                            <Typography variant="h4" style={{marginBottom: '60px',  fontWeight:"bold"}}>
                                Easier to transfer
                            </Typography>
                            <Typography variant="body2" >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a galley
                                of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='products-area'>
                <Container>
                    <Grid container spacing={3} className={classes.products}>
                        <Grid item xs className={classes.productsDesc}>
                            <Typography variant="h5" style={{marginBottom: '15px', fontWeight:"bold"}}>
                               DV EVERY DAY <br/> SAVING ACCOUNT
                            </Typography>
                            <Typography variant="subtitle1" style={{marginBottom: '15px', fontWeight:"bold"}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Typography>

                            <table>
                                <tr>
                                    <td style={{width: '350px'}}>
                                        <Typography variant="subtitle1" >
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography variant="subtitle1" >
                                            Monthly
                                        </Typography>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Typography variant="h5" style={{fontWeight:'bold'}}>
                                            Unlimited
                                        </Typography>
                                    </td>
                                    <td style={{borderLeft:'1px solid #ffffff', padding:'15px'}}>
                                        <Typography variant="h5" style={{fontWeight:'bold'}}>
                                            $0
                                        </Typography>
                                    </td>
                                </tr>
                            </table>
                            <Link
                                className={classes.link}
                                component="button"
                                variant="h6"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                <Typography variant="h6" style={{margin: '30px 0', fontWeight:"bold", color:"#FFFFFF",fontStyle:'italic'}}>
                                    Open account >>
                                </Typography>
                            </Link>

                        </Grid>
                        <Grid item xs>
                            <img src="https://i.picsum.photos/id/1043/600/400.jpg"/>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='volunteer-area'>
                <Container>
                    <Typography variant="h5" align="left" style={{color: '#007e1d', fontWeight:"bold"}}>DV BANK</Typography>
                    <Typography variant="h5" align="left" style={{color: '#007e1d', fontStyle: 'italic', fontWeight:"bold"}}>ANY WARE, ANY
                        TIME</Typography>
                    <Grid spacing={3} container
                          direction="row"
                          justify="center"
                          alignItems="center">
                        <Grid item xs={6} spacing={0} className={classes.vitem}>
                            <img src='https://i.picsum.photos/id/164/400/300.jpg'/>
                            <Typography variant="subtitle2" align="left">Travel</Typography>
                        </Grid>
                        <Grid item xs={6} spacing={0}>
                            <img src='https://i.picsum.photos/id/164/400/300.jpg'/>
                            <Typography variant="subtitle2" align="left">Diversity</Typography>
                        </Grid>
                        <Grid item xs={6} spacing={0}>
                            <img src='https://i.picsum.photos/id/164/400/300.jpg'/>
                            <Typography variant="subtitle2" align="left">Children's Library</Typography>
                        </Grid>
                        <Grid item xs={6} spacing={0}>
                            <img src='https://i.picsum.photos/id/164/400/300.jpg'/>
                            <Typography variant="subtitle2" align="left">Treedays</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
        </ThemeProvider>
    );
}