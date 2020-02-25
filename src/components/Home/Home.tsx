import React from "react";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import './Home.scss';
export default function Home(){
        return (
            <div className='home-wrap'>
                <div className='hero-area'>
                    <Container>
                        1
                    </Container>
                </div>
                <div className='icon-area'>
                    <Container>
                        <Typography variant="h5" align="center">Welcome to DV ONLINE Banking</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <Paper>xs</Paper>
                            </Grid>
                            <Grid item xs>
                                <Paper>xs</Paper>
                            </Grid>
                            <Grid item xs>
                                <Paper>xs</Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className='benefit-area'>
                    <Container>
                        3
                    </Container>
                </div>
                <div className='products-area'>
                    <Container>

                    </Container>
                </div>
                <div className='volunteer-area'>
                    <Container>

                    </Container>
                </div>
            </div>
        );
}