import React, { Component } from 'react';

// COMPONENTS //
import Header from './components/Header.js';
import Nav from './components/Nav.js';
  import Home from './components/Home.js';
  import Contact from './components/Contact.js';
  import Services from './components/Services.js';
  import About from './components/About.js';
import Footer from './components/Footer.js';


// TEMP COMPONENTS //
// import TempLanding from './components/TempLanding.js';




// STYLING //
import './App.css';

// APP --> HOME
class App extends Component {

  state = {
    home: true,
    services: false,
    about: false,
    contact: false,
    color:'',
    display:'none'
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


  // LISTEN TO SCROLL
  listenScrollEvent = e => {
    if (window.scrollY > 400) { // WHEN SCROLLING
      this.setState({
        // color: 'black', // NAV
        display:'inline', // NAV-HEADER
        sticky:'sticky' // NAV
      })
    } else {
      this.setState({ // ON LOAD
        // color: 'snow', // NAV
        display:'none' // NAV-HEADER
      })
    }
  }

  // COMPONENT DID MOUNT
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent) // ON SCROLL
  }

  render() {
    return (
      <div className='App'>
        <Header toggleView={this.toggleView} />
        <Nav
          display={this.state.display}
          color={this.state.color}
          toggleView={this.toggleView}
          home={this.state.home}
          services={this.state.services}
          gallery={this.state.gallery}
          about={this.state.about}
          contact={this.state.contact}
        />
          {this.state.home ? <Home toggleView={this.toggleView}/> : null}
          {this.state.services ? <Services /> : null}
          {this.state.about ? <About jason={this.state.jason} /> : null}
          {this.state.contact ? <Contact /> : null}
        <Footer toggleView={this.toggleView}/>
      </div>
    );
  }
}

export default App;

// <TempLanding />
//   <footer>
//     Liscense #10644287 | Bonded and Insured <br/> Designed by Gianni Nola
//   </footer>
