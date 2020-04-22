import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Collapse, Container, Divider, Icon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import data from "../../constants/data";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import { useProtectedPath } from "../useProtectedPath";
import { Redirect } from "react-router";

const drawerWidth = 270;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawerPaper: {
            width: drawerWidth,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);
export default function SideBar() {
    const classes = useStyles();
    const accessGrant = useProtectedPath();
    const [open, setOpen] = useState(0);
    if (!accessGrant) {
      return <Redirect to="/signIn" />;
    }
    return (
        <Container className={classes.root}>
            <Drawer
                variant="permanent" >
                {data.menus.map((menu:any, index: number) => {
                    return (
                        <div  className={classes.drawerPaper}>
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
                                        menu.items.map((item:any, index: number) => {
                                            return (
                                                <Collapse in={index === open} timeout="auto" unmountOnExit key={index}>
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
