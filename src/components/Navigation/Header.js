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
  border: {
    height: '25px',
    width: '100%',
    'background-color': 'black',
  }
}));


const Header = (props) => {

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar >
          <TopNav />
            <Typography variant="h6" className={classes.title}>
              bryanbrinson.info
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <div className={classes.border}></div>
    </div>)
}

export default Header;