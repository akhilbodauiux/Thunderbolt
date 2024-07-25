import React from 'react';
import "../components/items.css";

function items() {
  return (
    <>
    <h2 className='container' id='newlaunches'>New Launches</h2>
    <div className='watch'>
    <div className='watchitem' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/10.webp")} alt=''/>
      <p className='launch'>NEW LAUNCH</p>
      
      <img className='small' src={require("../images/12.avif")} alt=''/>
      <img className='small' src={require("../images/11.avif")} alt=''/>
      
      <h4>Thunder Cosmos Luxe 3</h4>
      <div className='smallpic'>
      <p className='highlights'>Amoled Display</p><p className='highlights'>BT Calling</p>
      </div>
      <div className='description'>1.43" Amoled Display, BT Calling, Heart Rate Monitoring, SpO2 Monitoring, Multiple Watch Faces, Full Touch Screen, Multiple Sports Mode, Sleep Monitoring, Alarm & Notification, DIY Watch Faces, In-Built Games, World Clock</div>
      <div className='price'><h4 className='rate'>Rs 1,899</h4><p className='cutprice'>Rs 7,499 </p><h6 className='offer'>(75%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 1,804 with Bank Offer
    </div>

    <div className='watchitem' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/20.webp")} alt=''/>
      
      <img className='small' src={require("../images/21.webp")} alt=''/>
      <img className='small' src={require("../images/22.avif")} alt=''/>
      <p className='launch'>NEW LAUNCH</p>
      
      <h4>Thunder Rio</h4>
      <div className='smallpic'>
      <p className='highlights'>Premium Metal Body</p><p className='highlights'>True Hd Display</p>
      </div>
      <div className='description'>1.39" HD Display, Polygonal Dial Design, Bluetooth Calling, Health Suite, Premium Build, Multiple Watch Faces, Alarm & Notification, DIY Watch Faces, Multi Sports Modes, Metal Body, In-Build Games, World Clock</div>
      <div className='price'><h4 className='rate'>Rs 1,999</h4><p className='cutprice'>Rs 6,499 </p><h6 className='offer'>(70%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 1,899 with Bank Offer
    </div>

    <div className='watchitem' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/14.webp")} alt=''/>
      <p className='launch'>NEW LAUNCH</p>
      <img className='small' src={require("../images/15.avif")} alt=''/>
      <img className='small' src={require("../images/16.avif")} alt=''/>
      
      <h4>Thunder Vienna</h4>
      <div className='smallpic'>
      <p className='highlights'>1.27" HD Display</p><p className='highlights'>BT Calling</p>
      </div>
      <div className='description'>1.27" HD Display, Polygonal Dial Design, Bluetooth Calling, Health Suite, Premium Build, Multiple Watch Faces, Alarm & Notification, DIY Watch Faces, Multi Sports Modes, Metal Body, In-Build Games, World Clock</div>
      <div className='price'><h4 className='rate'>Rs 2,299</h4><p className='cutprice'>Rs 6,999 </p><h6 className='offer'>(68%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 2,184 with Bank Offer
    </div>

    <div className='watchitem' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/17.jpg")} alt=''/>
      <p className='launch'>NEW LAUNCH</p>
      <img className='small' src={require("../images/18.webp")} alt=''/>
      <img className='small' src={require("../images/19.webp")} alt=''/>
      
      <h4>Thunder Mega</h4>
      <div className='smallpic'>
      <p className='highlights'>Premium Metal Body</p><p className='highlights'>True Hd Display</p><p className='highlights'>Diamond Cut Design</p>
      </div>
      <div className='description'>1.39" HD Display, Polygonal Dial Design, Bluetooth Calling, Health Suite, Premium Build, Multiple Watch Faces, Alarm & Notification, DIY Watch Faces, Multi Sports Modes.</div>
      <div className='price'><h4 className='rate'>Rs 2,699</h4><p className='cutprice'>Rs 7,999 </p><h6 className='offer'>(67%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 2,564 with Bank Offer
    </div>






    </div>
    
    <hr/>

    <div className='status container'>
    <div>
    <img className='img-fluid' src={require("../images/23.webp")} alt=''/>
    <p>4 Units Sold <br/>Every Minute</p>
    </div>
    <div>
    <img  src={require("../images/24.webp")} alt=''/>
    <p>4.3+Rated <br/> Products</p>
    </div>
    <div>
    <img  src={require("../images/25.webp")} alt=''/>
    <p>10 Mn+ Happy <br/>Customers</p>
    </div>


    </div>
    <hr/>
    


    <div className='container-fluid  earbuds' id='earphones'>

      <div className='earbuds1'>
        <div><img className='img1 w-25 rounded img-fluid' src={require("../images/30.webp")} alt=''/></div>
        <div><img className='img2 w-25 rounded img-fluid' src={require("../images/31.webp")} alt=''/></div>
        <div><img className='img3 w-25 rounded img-fluid' src={require("../images/32.webp")} alt=''/></div>
        <div><img className='img4 rounded w-50 img-fluid' src={require("../images/33.webp")} alt=''/></div>




      </div>
      <div className='earbuds2'>
        <h2>Thunder Blissbuds Ace</h2>
        <div className='amount'>
        <h5>&#8377; 1,500/-</h5>
       <p className='mrp'>M.R.P:<strike>5,999/-</strike></p>
       <p className='off'>(74% off)</p>
       </div>
       <p>inclusive of all taxes</p>
       <h5 className='mrp'>Color</h5>
       <div className='color'>
        <div className='color1'><img className=' rounded w-25' src={require("../images/33.webp")} alt=''/> Black</div>
        <div className='color2'><img className=' rounded w-25' src={require("../images/34.webp")} alt=''/>Blue</div>
        <div className='color3'><img className=' rounded w-25' src={require("../images/35.webp")} alt=''/>Gold</div>
       </div>
       <div className='amount'>
        <div className='count1 rounded'>-</div>
        <div className='count2'>1</div>
        <div className='count3 rounded'>+</div>
       </div>
       <div className='add'>Add to Cart</div>
       <div className='buy'>Buy it Now</div>
        

      </div>
  






    </div>
    <hr/>


    <h2 className='container' id='speakers'>Speakers</h2>
    <div className='watch'>
    <div className='speaker' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/52.webp")} alt=''/>
      <p className='launch'>NEW LAUNCH</p>
      
      
      
      <h4>Glide Bluetooth Speaker</h4>
      <div className='smallpic'>
      <p className='highlights'>True Bass clear sound</p><p className='highlights'>USB Play Support</p>
      </div>
      <div className='price'><h4 className='rate'>Rs 2,899</h4><p className='cutprice'>Rs 7,499 </p><h6 className='offer'>(75%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 1,804 with Bank Offer
    </div>

    <div className='speaker' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/53.webp")} alt=''/>
      
      <p className='launch'>NEW LAUNCH</p>
      
      <h4>Thunder Encare Pro</h4>
      <div className='smallpic'>
      <p className='highlights'>20W Bluetooth Speaker</p>
      </div>
      <div className='price'><h4 className='rate'>Rs 2,499</h4><p className='cutprice'>Rs 6,499 </p><h6 className='offer'>(70%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 1,899 with Bank Offer
    </div>

    <div className='speaker' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/54.webp")} alt=''/>
      <p className='launch'>NEW LAUNCH</p>
      
      <h4>Thunder Arena6</h4>
    
      <div className='price'><h4 className='rate'>Rs 2,299</h4><p className='cutprice'>Rs 6,999 </p><h6 className='offer'>(68%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 2,184 with Bank Offer
    </div>

    <div className='speaker' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/55.webp")} alt=''/>
      <p className='launch'>NEW LAUNCH</p>
      
      
      <h4>Thunder Arena4</h4>
      
      <div className='price'><h4 className='rate'>Rs 2,699</h4><p className='cutprice'>Rs 7,999 </p><h6 className='offer'>(67%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 2,564 with Bank Offer
    </div>






    </div>


    <h2 className='container' id='keyboards'>Keyboards</h2>
    <div className='container watch1'>
    <div className='speaker' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/56.webp")} alt=''/>
      
      
      <img className='small' src={require("../images/12.avif")} alt=''/>
      <img className='small' src={require("../images/11.avif")} alt=''/>
      
      <h4>Thunder Digit 003</h4>
      <div className='smallpic'>
      <p className='highlights'>POP Retro Keys</p><p className='highlights'>Round Keycaps</p>
      </div>
      <div className='price'><h4 className='rate'>Rs 2,899</h4><p className='cutprice'>Rs 7,499 </p><h6 className='offer'>(65%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 1,804 with Bank Offer
    </div>

    <div className='speaker' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/57.webp")} alt=''/>
      
      
      <h4>Thunder Digit 002</h4>
      <div className='smallpic'>
      <p className='highlights'>104 Keys Full sized</p>
      </div>
      <div className='price'><h4 className='rate'>Rs 1,999</h4><p className='cutprice'>Rs 6,499 </p><h6 className='offer'>(70%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 1,899 with Bank Offer
    </div>

    <div className='speaker' style={{ width: '18rem' }}>
      <img className='main' src={require("../images/58.webp")} alt=''/>
      
      
      <h4>Thunder Digit 001</h4>
      <div className='smallpic'>
      <p className='highlights'>Soft Keys</p><p className='highlights'>Retro Keys</p>
      </div>
      <div className='price'><h4 className='rate'>Rs 2,299</h4><p className='cutprice'>Rs 6,999 </p><h6 className='offer'>(68%off)</h6> </div>
      <img className='wow'  src={require("../images/13.avif")} alt=''/> Rs 2,184 with Bank Offer
    </div>

    






    </div>
    
    
    
    </>
  )
}

export default items