import React, { Component } from "react"; 
import logo from './logo.svg';
import Home from "./Pages/Home"
import {BrowserRouter, Route} from "react-router-dom"
import { Nav, Navbar} from "react-bootstrap"

import './App.css';

class App extends Component{
constructor(props){
  super(props)
  this.state = {
  }
}


render() {
  return(
<div className="browseBox">
    <BrowserRouter>
      <div className="navBox">
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.link href="/">Home</Nav.link>
              <Nav.link href="/products"> Products </Nav.link>
              <Nav.Link href="/blog"> Blog </Nav.Link>
            </Nav>        
        </Navbar>
          <Route path="/" exact render={() => <Home Home={Home} /> } /> 
      </div>
    </BrowserRouter>
  </div>
  )
    
    
  }
}


export default App;
