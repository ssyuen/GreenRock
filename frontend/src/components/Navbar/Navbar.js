import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import logo from '../../Images/landrlogo.png'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // border: '5px solid red'
    },
    logo: {
        marginRight: theme.spacing(2),
        width: '150px',
        height: '45px',
    },
    fullHeight: {
        ...theme.mixins.toolbar,
    },
}));

export const Navbar = () => {
    const theme = useTheme();

    const [value, setValue] = useState("home");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static" style={{ background: "#212121" }}>
                <Toolbar>
                    <Link to='/Home'>
                        <img className={classes.logo} src={logo} value="home" onClick={handleChange}/>
                    </Link>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            {/* <IconButton edge="start" className={classes.logo} color="inherit" aria-label="Home"> */}


                            {/* <Typography color="inherit" variant="title">LANDR</Typography> */}
                            {/* </IconButton> */}
                        </Grid>
                        <Grid item>
                            <Tabs className={classes.fullHeight} onChange={handleChange} value={value}>
                                <Tab className={classes.fullHeight} label="Home" icon={<HomeIcon />} value="home" to='/Home' component={Link} />
                                <Tab className={classes.fullHeight} label="Portfolio" icon={<FolderIcon />} value="portfolio" to='/Portfolio' component={Link} />
                                <Tab className={classes.fullHeight} label="Learning" icon={<LibraryBooksIcon />} value="learning" to='/Learning' component={Link} />
                                <Tab className={classes.fullHeight} label="About" icon={<InfoIcon />} value="about" to='/About' component={Link} />
                            </Tabs>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
