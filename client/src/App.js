import React, { Component } from 'react';
import './App.css';

// COMPONENTS //
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
// import TempLanding from './components/TempLanding/TempLanding.js';


// APP --> HOME
class App extends Component {

  state = {
    view:'home',
    navDisplay:'Nav',
  }

  // Change Page View
  changePage = page => {
    switch (page) {
      case "home":
        this.setState({ view: "home" });
        break;
      case "services":
        this.setState({ view: "services" });
        break;
      case "about":
        this.setState({ view: "about" });
        break;
      case "contact":
        this.setState({ view: "contact" });
        break;
      default:
        return;
    }
  };


  // LISTEN TO SCROLL
  listenScrollEvent = e => {
    if (window.scrollY > 350) {
      this.setState({ navDisplay:'Nav2'})
    } else {
      this.setState({ navDisplay:'Nav'})
    }

    if (window.scrollY < 1150) {
      this.setState({ view: "home" });
    } else if (window.scrollY > 1150 && window.scrollY < 3450) {
      this.setState({ view: "services" });
    } else if (window.scrollY > 3450 && window.scrollY < 4150) {
      this.setState({ view: "contact" });
    } else if (window.scrollY > 4150) {
      this.setState({ view: "about" });
    }
  }

  // COMPONENT DID MOUNT
  componentDidMount() {
    this.setState({ navDisplay:'Nav'})
    window.addEventListener('scroll', this.listenScrollEvent) // ON SCROLL
  }


  render() {
    return (
      <div className='App'>
        <Header
          changePage={this.changePage}
        />
        <Nav
          view={this.state.view}
          navDisplay={this.state.navDisplay}
          color={this.state.color}
          changePage={this.changePage}
        />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

// <TempLanding />
//   <footer>
//     Liscense #10644287 | Bonded and Insured <br/> Designed by Gianni Nola
//   </footer>
// {this.state.view === 'services' ? <Services toggleView={this.toggleView}/> : null}
// {this.state.view === 'about' ? <About jason={this.state.jason} /> : null}
// {this.state.view === 'contact' ? <Contact /> : null}
