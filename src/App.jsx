import React, { Component } from "react"; 
import {BrowserRouter, Route} from "react-router-dom"
import { Nav, Navbar, Image} from "react-bootstrap"
import primoLogoDark from "./Media/primoLogoDark.svg"
import './App.css';
import Home from "./Pages/Home"


class App extends Component {


  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar className="navBar" bg="light" variant="light">
            {/* <Navbar.Brand href="/"> Logo </Navbar.Brand> */}
            <Nav.Link href="/"> 
            <Image className="primoLogoImage" src={primoLogoDark} type="svg" /> 
            </Nav.Link>
            <Nav.Link href="/about-me"> 
            About 
            </Nav.Link>
            <Nav.Link href="/products"> 
            Products
            </Nav.Link>
        </Navbar>
          <Route exact path="/" component={Home} /> 
      </div>
      </BrowserRouter>
    );
  }
  }


export default App;
