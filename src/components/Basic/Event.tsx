import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Container, Grid} from "@material-ui/core";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import MediaCard from './Elemt/Media';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5ee279',
            main: 'rgba(247, 247, 247, 0.99)',
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
        height: 'auto',
        paddingTop: '5%'
    },
    menuBtn: {
        marginRight: '15%'
    },
    menuBtnL: {
        marginLeft: '15%'
    },
    item: {
        paddingLeft: '80px'
    }
}));

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Event() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container component="main" className={classes.root} maxWidth="lg" >
            <ThemeProvider theme={theme}>
                <Tabs value={value} onChange={handleChange} aria-label="Events" centered>
                    <Tab label="Progress" {...a11yProps(0)} className={classes.menuBtn}/>
                    <Tab label="Completed" {...a11yProps(1)} className={classes.menuBtnL}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className={classes.root}>
                        <Grid spacing={3} container
                              direction="row"
                              justify="center"
                              alignItems="center">
                            <Grid item xs={6} spacing={0} justify="center" className={classes.item}>
                                <MediaCard titleProp="Progress Event #1" dateProp="2020/03/01 ~ 2020/03/15"/>
                            </Grid>
                            <Grid item xs={6} spacing={0} justify="center" className={classes.item}>
                                <MediaCard titleProp="Progress Event #2" dateProp="2020/03/10 ~ 2020/03/15"/>
                            </Grid>

                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div>
                        <Grid spacing={3} container
                              direction="row"
                              justify="center"
                              alignItems="center">
                            <Grid item xs={6} spacing={0} justify="center" className={classes.item}>
                                <MediaCard titleProp="Completed Event #1" dateProp="2019/03/01 ~ 2019/03/15"/>
                            </Grid>
                            <Grid item xs={6} spacing={0} justify="center" className={classes.item}>
                                <MediaCard titleProp="Completed Event #2" dateProp="2019/04/01 ~ 2019/04/15"/>
                            </Grid>
                            <Grid item xs={6} spacing={0} justify="center" className={classes.item}>
                                <MediaCard titleProp="Completed Event #3" dateProp="2019/12/01 ~ 2019/12/15"/>
                            </Grid>
                            <Grid item xs={6} spacing={0} justify="center" className={classes.item}>
                                <MediaCard titleProp="Completed Event #4" dateProp="2019/12/16 ~ 2019/12/20"/>
                            </Grid>
                        </Grid>
                    </div>
                </TabPanel>
            </ThemeProvider>
        </Container>
    );
}
