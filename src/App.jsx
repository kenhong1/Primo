import React, { Component } from "react"; 
import {BrowserRouter, Route} from "react-router-dom"
import { Nav, Navbar, Image} from "react-bootstrap"
import primoLogoDark from "./Media/primoLogoDark.svg"
import './App.css';
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import AboutMe from "./Pages/AboutMe"
import Blog from "./Pages/Blog" 


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
            <Nav.Link href="/about" className="navFont"> 
              <h3 className="navHeader"> About </h3> 
            </Nav.Link>
            <Nav.Link href="/products" className="navFont"> 
              <h3 className="navHeader"> Products </h3>
            </Nav.Link>
            <Nav.Link href="/blog" className="blog">
              <h3 className="navHeader"> Blog </h3> 
            </Nav.Link>
        </Navbar>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/products" render={() => <Products Products={Products} /> }/> 
          <Route exact path="/about" render={() => <AboutMe AboutMe={AboutMe} /> } /> 
          <Route exact path="/blog" render={() => <Blog Blog={Blog} /> } /> 

      </div>
      </BrowserRouter>
    );
  }
  }


export default App;
