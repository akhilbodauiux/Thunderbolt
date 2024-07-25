import React from 'react';
import "../components/Footer.css";

function footer() {
  return (
    <>

<div className='container-fluid foot'>
            <div >
            <div><img style={{width:"50 px" , height:"50px", }} src={require("../images/1.png")} alt=''/>
            <span style={{fontFamily:"cursive",color:"black"}}>THUNDERBOLT</span></div>
            <p>Since inception in 2013, there has been one principle that we, at Pebble have held as holy grail – build experiences crafted around ‘you’. We are a technology brand that endeavours to get the perfect blend of innovation, technology and design in each of our products.</p>
            </div>

            <div>
                <h5>PRODUCTS</h5>
                <div ><a href='' className='footclass'>New launches</a></div>
                <div ><a href='' className='footclass'>Best Sellers</a></div>
                <div ><a href='' className='footclass'>Earphones</a></div>
                <div ><a href='' className='footclass'>Keyboards</a></div>


            </div>

            <div>
                <h5>COMPANY</h5>
                <div ><a  className='footclass' href=''>corporate Orders</a></div>
                <div ><a  className='footclass' href=''>contact Us</a></div>
            </div>

            <div>
                <h5>SUPPORT</h5>
                <div ><a href='' className='footclass'>Track Your Order</a></div>
                <div ><a href='' className='footclass'>Service Center List</a></div>
                <div ><a href='' className='footclass'>Raise A warranty Complaint</a></div>
                <div ><a href='' className='footclass'>Warranty Policy</a></div>
                <div><a href='' className='footclass'>Shipping Policy</a></div>
                <div ><a href='' className='footclass'>Replacement & Return Policy</a> </div>

            </div>


            <div>
            <h5>GET IN TOUCH</h5>
                <div>
                TECH MAHINDRA SMART ACADEMY
                <br/>
                Ohri Towers Secunderabad,Hyderabad 500003.
                </div>
                <div>
                    For quaries and feedback: <br/>
                    Email:chintuakhil608@gmail.com <br/>
                    Phone: +91 9347168475
                </div>
                <div>
                    <input type='email' className='email' placeholder='your email address'/>
                    <input type='submit' className='submit' />
                    <div className='register'>Register Your Product</div>
                </div>


            </div>
            <div>&copy;Thunderbolt, All Rights Reserved 2024.</div>

   </div>




    </>
  )
}

export default footer