import React from 'react';
import TopNav from './Nav';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Header = (props) => {

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar >
          <TopNav />
            <Typography variant="h6" className={classes.title}>
              Bryan Brinson
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>)
}

export default Header;