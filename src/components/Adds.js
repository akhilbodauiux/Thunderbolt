import React from 'react';
import "../components/Adds.css"

function Adds() {
  return (
    <div>
        <h2 className='container' id='experiencethunder'>Experience Thunder</h2>
        <div className='container experiencethunder  mx-auto my-lg-4'>
            <div ><img className='w-50  experience1' src={require("../images/36.webp")} alt=''/><br/><div className='experience'>10+ years <br/> legacy</div></div>
            <div><img className='w-50 experience1 ' src={require("../images/37.webp")} alt=''/><div className='experience'>Trusted <br/> Product</div></div>
            <div ><img className='w-50 experience1' src={require("../images/38.webp")} alt=''/><div className='experience'>Hassle Free<br/> Replacement</div></div>
            <div ><img className='w-50 experience1' src={require("../images/39.webp")} alt=''/><div className='experience'>Assured <br/> Warranty</div></div>
            <div ><img className='w-50 experience1' src={require("../images/40.webp")} alt=''/><div className='experience'>Fast & <br/> Free Delivery</div></div>
            <div><img className='w-50 experience1' src={require("../images/41.webp")} alt=''/><div className='experience'>Quick <br/> Support</div></div>
        </div>

        <hr/>
        <h2 className='container'id='partners'>Official Partners</h2>
        <div className='container partner  mx-auto my-lg-4'>
            <div ><img className='w-100  ' src={require("../images/42.avif")} alt=''/></div>
            <div ><img className='w-100  ' src={require("../images/43.avif")} alt=''/></div>
            <div ><img className='w-100  ' src={require("../images/44.avif")} alt=''/></div>
            <div ><img className='w-100  ' src={require("../images/45.avif")} alt=''/></div>
            <div ><img className='w-100  ' src={require("../images/46.avif")} alt=''/></div>
            <div ><img className='w-100  ' src={require("../images/47.avif")} alt=''/></div>
            <div ><img className='w-100  ' src={require("../images/48.avif")} alt=''/></div>
            <div ><img className='w-100 ' src={require("../images/49.avif")} alt=''/></div>
            </div>



         <hr/>
         <h2 className='container' id='press'>In The Press</h2>
         <div className='container press mx-auto my-lg-4'>
            <div ><img className='w-100  ' src={require("../images/49.webp")} alt=''/></div>
            <div ><img className='w-100  ' src={require("../images/50.avif")} alt=''/></div>
            <div ><img className='w-100  ' src={require("../images/51.avif")} alt=''/></div>
            </div>

        
        <hr/>

        
        









    </div>
  )
}

export default Adds