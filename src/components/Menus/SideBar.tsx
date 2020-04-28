import React, {useState} from 'react';
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Collapse, Container, Divider, Icon, IconButton} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import data from "../../constants/data";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import { useProtectedPath } from "../useProtectedPath";
import { Redirect } from "react-router";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';

const drawerWidth = 270;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawerPaper: {
            width: drawerWidth
        },
        elemt1: {
            width: drawerWidth,
            // marginTop: 65
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        toolbar: {
            marginTop: 65,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: 0
        },
    }),
);
export default function SideBar(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const accessGrant = useProtectedPath();
    const [open, setOpen] = useState(0);
    if (!accessGrant) {
      return <Redirect to="/signIn" />;
    }
    return (
        <Container className={classes.root}>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.action,
                    [classes.drawerClose]: !props.action,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.action,
                        [classes.drawerClose]: !props.action,
                    }),
                }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={props.drawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                {data.menus.map((menu:any, index: number) => {
                    return (
                        <div  className={(index===0)? classes.elemt1 : classes.drawerPaper} key={index}>
                            <List key={index}>
                                <ListItem button  onClick={()=> (index === open)?setOpen(-1):setOpen(index)}>
                                    <ListItemIcon>
                                        <Icon>{menu.icon}/</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary={menu.title}/>
                                    {(menu.items.length > 0) ? ((index === open) ? <ExpandLess/> : <ExpandMore/>) : ''}
                                </ListItem>
                                {(menu.items.length > 0) ?
                                    (
                                        menu.items.map((item:any, idx: number) => {
                                            return (
                                                <Collapse in={index === open} timeout="auto" key={idx}>
                                                    <List component="div" disablePadding >
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
