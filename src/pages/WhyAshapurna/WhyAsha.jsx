import './WhyAsha.css';
import Care from './Care.svg'
import transparent from './transparent.svg'
import Hospitality from './Hospitality.svg'
import Homes from './Homes.svg'
import ScrollCards from './ScrollCards';

export function WhyAsha() {

  
    return (
        <>
<div class="container">
  <div class="row">
  <div className='col-lg-4 con'>
     <div className='contentHead'>
      <h5 className='con-head'>WHY US</h5> 
      <span className='con-headspa'></span>
       </div>
       <h2 className='head'>Why Ashapurna Is <br/>The Best Choice</h2>
     <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>
     
                        </div>

                        <div className='col-lg-8' style={{height:436}}>
        <div className='"whyAshapurnaBlocks-wrapper'style={{position:'absolute',height:711}}>
        <div className='row cardRow fullscreen'>
            <div className='col-lg-6'style={{height:360}}>
    <div className="card" my-3 style={{width:350,height:320}}>
  <img className='Cardimage' src={Care} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Property Care<br/> Service</h5>
    <div class="titleunderline"></div>
    <p className="card-text">We take care of your home like a<br/> true custodian. Our support team</p>
    <a href="#" className="btn">Read More</a>
      </div>
</div> 
</div>
<div className='col-lg-6'style={{height:360}}>
<div className="card" my-3 style={{width:350,height:320}}>
  <img className='Cardimage' src={transparent} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Transparent<br/>Dealing</h5>
    <div class="titleunderline"></div>
    <p className="card-text">We practice all transparency of<br/> the highest order to deal with our</p>
    <a href="#" className="btn">Read More</a>
  </div>
</div> 
</div>
<div className='col-lg-6'style={{height:360}}>
    <div className="card" my-3 style={{width:350,height:320}}>
  <img className='Cardimage' src={Hospitality} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Hospitality</h5>
    <div class="titleunderline"></div>
    <p className="card-text">A warm welcome to our valuable<br/> customers is what we take on as</p>
    <a href="#" className="btn">Read More</a>
  </div>
</div> 
</div>
<div className='col-lg-6' style={{height:360}}>
<div className="card" my-3 style={{width:350,height:320}}>
  <img className='Cardimage' src={Homes} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Sustainable Homes<br/> Service</h5>
    <div class="titleunderline"></div>
    <p className="card-text">In the present world, Our Aim is to<br/> deliver environmental - friendly</p>
    <a href="#" className="btn">Read More</a>
  </div>
</div> 
</div>
</div> 


</div>
 </div>
  </div>
  </div>
           
        </>


    )
}