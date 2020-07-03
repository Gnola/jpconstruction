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
    display:'Nav',
  }

  // Change Page View
  changePage = page => {
    switch (page) {
      case "home":
        this.setState({ view: "home" });
        console.log("Hey");
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
      this.setState({ display:'Nav2'})
    } else {
      this.setState({ display:'Nav'})
    }
  }

  // COMPONENT DID MOUNT
  componentDidMount() {
  this.setState({ display:'Nav'})
    window.addEventListener('scroll', this.listenScrollEvent) // ON SCROLL
  }


  render() {
    return (
      <div className='App'>
        <Header changePage={this.changePage} />
        <Nav
          view={this.state.view}
          display={this.state.display}
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
