import React, { Component } from "react"; 
import {Carousel} from "react-bootstrap"
import david1 from "../Media/Suit1.jpg"
import david2 from "../Media/suit2.jpeg"
import david3 from "../Media/suit3.jpeg"
// import primoLogoDark from "./Media/primoLogoDark.svg"


class Home extends Component {
   constructor(props){
      super(props)
      this.state = {
      }
   }

   render(){
      return(
         <div className="homeBox">
            {/* <br />  */}
            <div className="carouselBox">
            <Carousel>
               <Carousel.Item>
                  <img
                     className="suitPics"
                     src={david1}
                     alt="First slide"
                     />
               <Carousel.Caption>
                  <h3>David Gandy </h3>
               </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="suitPics"
                     src={david2}
                     alt="Third slide"
                     />
               <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="suitPics"
                     src={david3}
                     alt="Third slide"
                     />
               <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
            </div>


         </div> 
      )
   }

}

export default Home;  
