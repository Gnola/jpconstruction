import React, { Component } from 'react';

// COMPONENTS //
import Header from './components/Header.js';
import Nav from './components/Nav.js';
  import Home from './components/Home/Home.js';
  import Services from './components/Services/Services.js';
import Footer from './components/Footer.js';


// TEMP COMPONENTS //
// import TempLanding from './components/TempLanding.js';

// STYLING //
import './App.css';

// APP --> HOME
class App extends Component {

  state = {
    view:'home',
    color:'',
    display:'none',
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
