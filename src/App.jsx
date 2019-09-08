// Common Imports
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

// Styles
import { CssBaseline } from '@material-ui/core';
import './App.css';

// Content Components
import Header from './components/Navigation/Header';
import Home from './components/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Footer from './components/Navigation/Footer';

// Other Content
import { articles } from './articles.js';

function App() {

  let projects = [
    {
      service: 'Whitening',
      desc: 'Whitening fast! 30 min or less. Guranteed.'
    },
    {
      service: 'This',
      desc: '.this?'
    },
    {
      service: 'That',
      desc: 'what?'
    },
    {
      service: 'The other',
      desc: 'all the rest'
    }
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Router>
          <Header />

          <main>
            <Route exact path='/' component={Home} />

            <Route path='/projects' render={
              () => <Projects projects={projects} />
            } />

            <Route path='/blog' render={
              () => <Blog articles={articles}/>} />

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