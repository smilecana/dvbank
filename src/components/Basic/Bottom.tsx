import React from 'react';
import {Container, Grid} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {dvTheme} from "../../constants/theme";

const theme = dvTheme;
const useStyles = makeStyles(theme => ({
    footer: {
        height: '350',
        backgroundColor: '#444444',
        color: 'white',
        textAlign: 'center',
        transform: 'translateZ(0)',
        width: '100',
        '& ul': {
            display: 'inline-block',
            marginTop: '5%',
            padding: '0',
            '& li': {
                margin: '75px 30px',
                display: 'inline-block',
                '& a': {
                    color: '#ffffff',
                    display: 'inline-block',
                    '&:hover': {
                        color: '#ffffff'
                    }
                },
                '& svg': {
                    fontSize: '2em'
                }
            }
        }
    },
    private: {
        margin:'0',
        '& a': {
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
                color: 'white',
                textDecoration: 'underline'
            }
        }
    }
}));

export default function Bottom() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.footer}>
                <Container>
                    <ul>
                        <li><a href="#"><FacebookIcon/></a></li>
                        <li><a href="#"><TwitterIcon/></a></li>
                        <li><a href="#"><InstagramIcon/></a></li>
                        <li><a href="#"><YouTubeIcon/></a></li>
                        <li><a href="#"><LinkedInIcon/></a></li>
                    </ul>
                    <Grid container spacing={1} className={classes.private}>
                        <Grid item xs>
                            <a href="#" title="Terms of Use">Terms of Use</a>
                        </Grid>
                        <Grid item xs>
                            <a href="#" title="Privacy">Privacy</a>
                        </Grid>
                        <Grid item xs>
                            <a href="#" title="California Privacy">California Privacy</a>
                        </Grid>
                        <Grid item xs>
                            <a href="#" title="Security">Security</a>
                        </Grid>
                        <Grid item xs>
                            <a href="#" title="About Us">About Us</a>
                        </Grid>
                        <Grid item xs>
                            <a href="#" title="Accessibility">Accessibility</a>
                        </Grid>
                        <Grid item xs>
                            <a href="#" title="Careers">Careers</a>
                        </Grid>
                        <Grid item xs>
                            <a href="#" title="Site Map">Site Map</a>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ThemeProvider>
    );
}


