import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './carousel.css'

function IndividualIntervalsExample() {
   const dataCarrousel = [
      {
         imageSrc: "https://images.pexels.com/photos/3207628/pexels-photo-3207628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         captionTitle: "Unique Books",
         captionDescription:
            "RareBooks is a marketplace where you find the most unique second-hand books, research-technical manual and special edition",
      },
      {
         imageSrc: "https://images.pexels.com/photos/5939401/pexels-photo-5939401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         captionTitle: "What you can do",
         captionDescription: "You have access to the most especials vendors",
      },
      {
         imageSrc:
            "https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         captionTitle: "Get in contact",
         captionDescription: "Welcome to our community of book connoisseurs!",
      },
   ];
   return (
      <Carousel variant="light" className="container_carousel" style={{ borderRadius:'30px'}}>
         {dataCarrousel.map((item) => {
            return (
               <Carousel.Item interval={2000} style={{background:'black', borderRadius:'30px',overflow:'hidden'}}>
                  <div style={{width:'100%', maxHeight:'500px'}}>
                     <img className="d-block " src={item.imageSrc} alt="First slide" style={{opacity:0.4, width:'100%', borderRadius:'30px'}} />
                  </div>
                  <Carousel.Caption>
                     <h3>{item.captionTitle}</h3>
                     <p>{item.captionDescription}</p>
                  </Carousel.Caption>
               </Carousel.Item>
            );
         })}
      </Carousel>
   );
}

export default IndividualIntervalsExample;
