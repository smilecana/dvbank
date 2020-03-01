import React from 'react';
import './Bottom.scss';
import {Box, Container, Grid} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Bottom() {
    return (
        <div className='footer'>
            <Container>
                <ul className='social-area'>
                    <li><a href="#"><FacebookIcon/></a></li>
                    <li><a href="#"><TwitterIcon/></a></li>
                    <li><a href="#"><InstagramIcon/></a></li>
                    <li><a href="#"><YouTubeIcon/></a></li>
                    <li><a href="#"><LinkedInIcon/></a></li>
                </ul>
                <Grid container spacing={1} className="privacy-area">
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
    );
}


