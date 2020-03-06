import React from 'react';
import {createMuiTheme, createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Collapse, Container, Divider, Icon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import data from "../../store/data";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

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
const drawerWidth = 270;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawerPaper: {
            paddingTop: 64,
            width: drawerWidth,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);
export default function SideBar() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                {data.menus.map(menu => {
                    return (
                        <div>
                            <List>
                                <ListItem button component={props => <Link {...props} to={`${menu.path}`}/>}>
                                    <ListItemIcon>
                                        <Icon>{menu.icon}/</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary={menu.title}/>
                                    {(menu.items.length > 0) ? (`true` ? <ExpandLess/> : <ExpandMore/>) : ''}
                                </ListItem>
                                {(menu.items.length > 0) ?
                                    (
                                        menu.items.map(item => {
                                            return (
                                                <Collapse in={true} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        <ListItem button className={classes.nested}
                                                                  component={props => <Link {...props}
                                                                                            to={`${item.path}`}/>}>
                                                            <ListItemText primary={item.title}/>
                                                        </ListItem>
                                                    </List>
                                                </Collapse>
                                            )
                                        })
                                    ) : ''}
                            </List>
                            {(menu.title === 'Home') ? (<Divider/>) : ''}
                        </div>
                    )
                })}
            </Drawer>
        </Container>)
}
