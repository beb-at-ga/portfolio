// Common Imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

// Styles
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

// Content Components
import Header from "./components/Navigation/Header";
import Home from "./components/Home";
import StartupChecklist from "./components/StartupChecklist";
// import About from "./components/About/About";
import Projects from "./components/About/Projects";
import Blog from "./components/Blog/Blog";

import Footer from "./components/Navigation/Footer";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// import purple from '@material-ui/core/colors/purple';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3c557b"
    },
    secondary: { main: "#00b0ff" }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Router>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/qrscan"> {<Redirect to="/" />} </Route>
            <Route path="/startupchecklist" render={() => <StartupChecklist />} />
            {/* <Route exact path="/" render={() => <About />} /> */}
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/blog" render={() => <Blog />} />
          </Router>
          <Footer />
        </div>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
