import React, { Component } from "react"; 

class Home extends Component {
   constructor(props){
      super(props)
      this.state = {
      }
   }

   render(){
      return(
         <div className="homeBox">
            <br /> 
            <p> The Story Of You </p> 
            <p className="ptag"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic recusandae soluta eius numquam voluptatibus alias, provident itaque iure libero neque excepturi obcaecati. Rem tempore quasi, maiores cumque nesciunt quas quidem. </p>
         </div> 
      )
   }

}

export default Home;  
