import React, { Component } from 'react';

// COMPONENTS //
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Services from './components/Services.js';
import Gallery from './components/Gallery.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

// TEMP COMPONENTS //
import TempLanding from './components/TempLanding.js';
import Jason from './imgs/Jason.JPG'


// STYLING //
import './App.css';

// APP --> HOME
class App extends Component {

  state = {
    jason: Jason,
    home: true,
    services: false,
    gallery: false,
    about: false,
    contact: false
  }

  // Toggle View
  toggleView = (currentView) => {
    if (currentView === 'home') {
      this.setState({
        home: true,
        services: false,
        gallery: false,
        about: false,
        contact: false
      })
    } else if (currentView === 'services') {
      this.setState({
        home: false,
        services: true,
        gallery: false,
        about: false,
        contact: false
      })
    } else if (currentView === 'gallery') {
      this.setState({
        home: false,
        services: false,
        gallery: true,
        about: false,
        contact: false
      })
    } else if (currentView === 'about') {
      this.setState({
        home: false,
        services: false,
        gallery: false,
        about: true,
        contact: false
      })
    } else if (currentView === 'contact') {
      this.setState({
        home: false,
        services: false,
        gallery: false,
        about: false,
        contact: true
      })
    }
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
// <Nav toggleView={this.toggleView} home={this.state.home} services={this.state.services} gallery={this.state.gallery} about={this.state.about} contact={this.state.contact}/>
//   {this.state.home ? <Home /> : null}
//   {this.state.services ? <Services /> : null}
//   {this.state.about ? <About jason={this.state.jason} /> : null}
//   {this.state.gallery ? <Gallery /> : null}
//   {this.state.contact ? <Contact /> : null}
// <Footer />
