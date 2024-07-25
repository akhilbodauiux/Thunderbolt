
import "../components/Navbar.css"
import React from 'react';
import { RiWhatsappFill } from "react-icons/ri";
import { CiSearch,CiUser,CiShoppingCart } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";







function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg m-lg-3 bg-body-tertiary">
  <div class="container-fluid nav">
  
    <div>
    <button class="navbar-toggler navbutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button><a class="navbar-brand" href="#"><img style={{width:"50 px" , height:"50px", }} src={require("../images/1.png")} alt=''/>
    <span style={{fontFamily:"cursive",color:"black"}}>THUNDERBOLT</span></a>
    
    </div>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#smartwatches">SMART WATCHES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#newlaunches">NEW LAUNCHES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#earphones">EARPHONES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#speakers">SPEAKERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#keyboards">KEYBOARDS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experiencethunder">EXPERIENCE THUNDER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#partners">PARTNERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#press" >PRESS</a>
        </li>
        
      </ul>
    </div>
    
    <div className="icons mx-auto">
       <a href="#"><RiWhatsappFill /></a>
       <a href="#"><CiSearch /></a>
       <a href="#"><CiUser /></a>
       <a href="#"><CiShoppingCart  /></a>

       </div>

  </div>

  
</nav>









    



    
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="400">
    <h6 className="text">Zero Cost Emi Options Available</h6>
    </div>
    <div class="carousel-item" data-bs-interval="800">
    <h6 className="text"><span><FaShippingFast/></span>Free Shipping in India</h6>
    </div>
    <div class="carousel-item" data-bs-interval="1200">
    <h6 className="text">Shop Now for the Best Prices</h6>
    </div>
  </div>
  
</div>






  
    
    
    
    </>
  );
}

export default Navbar