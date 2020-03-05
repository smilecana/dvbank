import React from 'react';
import Box from '@material-ui/core/Box';
import {Button, ButtonGroup, Container} from "@material-ui/core";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import CustomizedExpansionPanels from "./Elemt/Expasion";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5ee279',
            main: '#1aaf4b',
            dark: '#007e1d',
            contrastText: '#444',
        },
        secondary: {
            main: '#1bb14c',
        },
    },

});
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        minHeight: '950px',
        paddingTop: '5%'
    },
    view:{
        marginTop:'50px'
    },
    btn:{
       backgroundColor: "#1aaf4b",
        color: "#ffffff"
    },
    btnGroup:{
        textAlign:'center',
    }
}));


export default function Faq() {
    const classes = useStyles();

    return (
        <Container component="main" className={classes.root} maxWidth="lg">
            <ThemeProvider theme={theme}>
                <Box className={classes.btnGroup}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button className={classes.btn}>Accounts</Button>
                        <Button>Card</Button>
                        <Button>Transfer</Button>
                        <Button>ETC</Button>
                    </ButtonGroup>
                </Box>

                <Box className={classes.view}>
                    <CustomizedExpansionPanels/>
                </Box>

            </ThemeProvider>
        </Container>
    );
}

