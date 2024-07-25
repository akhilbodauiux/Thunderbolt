
import "./Cards.css"

function card() {
  return (
    <>
    

<h2 className="container" id="smartwatches">Smart Watches</h2>
<div className="itembox">
    <div className="items">
       <div><img className="pic" src={require("../images/5.avif")} alt=""/></div> 
       <h6>Luxe Edition</h6>
    </div>

    <div className="items">
       <div><img className="pic" src={require("../images/6.avif")} alt=""/></div> 
       <h6>Best Sellers</h6>
    </div>

    <div className="items">
       <div><img className="pic" src={require("../images/7.avif")} alt=""/></div> 
       <h6>Women's Edition</h6>
    </div>

    <div className="items">
       <div><img className="pic" src={require("../images/8.avif")} alt=""/></div> 
       <h6>Value Edition</h6>
    </div>
    






</div>
<hr/>


    
    
    
    
    
    
    
    </>
  )
}

export default card