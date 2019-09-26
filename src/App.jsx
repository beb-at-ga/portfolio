// Common Imports
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

// Styles
import { CssBaseline } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

// Content Components
import Header from './components/Navigation/Header';
import Home from './components/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Footer from './components/Navigation/Footer';

// Other Content
import { articles, projects } from './articles.js';

function App() {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
      {/* <div className="App"> */}
        <Router>
          <Header />

          <main>
            <Route exact path='/' component={Home} />

            <Route path='/projects' render={
              () => <Projects projects={projects} />
            } />

            <Route path='/blog' render={
              () => <Blog articles={articles} />} />

            <Route path='/about' render={
              () => <About name="Dr. Toothy" phone="425-555-1212" />
            } />

          </main>

          <Footer />
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;