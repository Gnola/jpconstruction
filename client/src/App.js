import React, { Component } from 'react';

// COMPONENTS //
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';

import TempLanding from './components/TempLanding.js';
import Jason from './imgs/Jason.JPG'

// STYLING //
import './App.css';

// APP --> HOME
class App extends Component {
  constructor(props) {
      super(props);
  }
  state = {
    jason: Jason,
    home: true,
    services: false,
    gallery: false,
    about: false,
    contact: false,
  }


  render() {
    return (
      <div className='App'>
        <TempLanding />
          <footer>
            Liscense #10644287 | Bonded and Insured <br/> Designed by Gianni Nola
          </footer>
      </div>
    );
  }
}

export default App;


// <Header />
// <Nav />
// <Home jason={this.state.jason} />
// <Footer />
