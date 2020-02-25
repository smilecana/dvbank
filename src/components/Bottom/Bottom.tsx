import React from 'react';
import './Bottom.scss';
import {Container, Grid} from "@material-ui/core";
export default function Bottom() {
    return (
        <div className='footer'>
            <Container>
                <ul className='social-area'>
                    <li>FaceBook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                    <li>LinkedIn</li>
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


