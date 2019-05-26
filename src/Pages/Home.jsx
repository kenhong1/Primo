import React, { Component } from "react"; 
import {Carousel, Image, Col, Row} from "react-bootstrap"
import david1 from "../Media/Suit1.jpg"
import david2 from "../Media/suit2.jpeg"
import david3 from "../Media/suit3.jpeg"
import pro from "../Media/pro.jpeg"
import pro2 from "../Media/pro2.jpeg"
import pro3 from "../Media/pro3.jpeg"
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
                  <h3>Story Of You </h3>
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
            <br /> 
            <div className="productPreviewBox">
               <h1 className="productPreviewHeader"> Discover Your Potential </h1> 
               <br /> 
                  <Row>
                     <Col>
                        <Image className="proImage" src={pro} fluid />
                     </Col>
                     <Col>
                        <Image className="proImage" src={pro2} fluid />
                     </Col>
                     <Col>
                        <Image className="proImage" src={pro3} fluid /> 
                     </Col>
                  </Row>

            </div>   


         </div> 
      )
   }

}

export default Home;  
