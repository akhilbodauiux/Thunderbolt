import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  return (
    <>
    <Carousel className='mx-lg-5' >
<Carousel.Item className='border border-rounded' interval={1000}>
        <img  src={require("../images/2.webp")} className='image1 rounded img-fluid' text="First slide" />
       
      </Carousel.Item>
      <Carousel.Item className='border border-rounded' interval={500}>
      <img src={require("../images/3.webp")} className='image2 rounded img-fluid' text="First slide" />
    
      </Carousel.Item>
      <Carousel.Item className='border border-rounded' interval={1000}>
      <img src={require("../images/4.webp")} className='image3 rounded img-fluid' text="First slide" />
   
      </Carousel.Item>
    </Carousel>










    
    
    
    
    
    
    </>
  )
}

export default Banner