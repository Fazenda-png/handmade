import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import Firebase from '../Services/FirebaseConnect'
import { useHistory } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));


export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const history = useHistory();

    const nomeTitle = localStorage.getItem('email')

    const sair = () => {
        sessionStorage.removeItem("uuid")
        Firebase
            .auth()
            .signOut()
            .then(() => {
                history.push("/")
            }).catch(function (error) {
                history.push("/")
            });
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar
                    style={{ background: "#fa7d7d" }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Bem-vindo(a) {nomeTitle} ao Handmade
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Home'].map((text, index) => (
                        <Button href={text.toLowerCase()} style={{ width: "100%" }} key={text}>
                            <ListItem button >
                                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Button>
                    ))}
                </List>
                <List>
                    {['Adicionar'].map((text, index) => (
                        <Button href={text.toLowerCase()} style={{ width: "100%" }} key={text}>
                            <ListItem button >
                                <ListItemIcon>{<AddIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Button>
                    ))}
                </List>
                <List>
                    {['Pedidos'].map((text, index) => (
                        <Button href={text.toLowerCase()} style={{ width: "100%" }} key={text}>
                            <ListItem button >
                                <ListItemIcon>{<MenuBookIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Button>
                    ))}
                </List>
                <List>
                    {['Contato'].map((text, index) => (
                        <Button href={text.toLowerCase()} style={{ width: "100%" }} key={text}>
                            <ListItem button >
                                <ListItemIcon>{<EmailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Button>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Sair'].map((text, index) => (
                        <Button onClick={sair} style={{ width: "100%" }} key={text}>
                            <ListItem button key={text}>
                                <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Button>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
