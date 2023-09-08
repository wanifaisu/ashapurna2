import React from 'react'
import Slider from 'react-slick'

export default function ScrollCards() {

    const settings14 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <div>
        <div className='col-sm-12 '>
     <div className='contentHead'>
      <h5 className='con-head'>WHY US</h5> 
      <span className='con-headspa'></span>
       </div>
       <h2 className='head'>Why Ashapurna Is <br/>The Best Choice</h2>
     <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>
     
                        </div>
      <Slider  {...settings14} style={{ height: '360px', }}>
     
    <div className='col-sm-12'style={{height:360}}>
    <div className="card" my-3 style={{width:350,height:320}}>
  {/* <img className='Cardimage' src={Care} alt="Card image cap"/> */}
  <div className="card-body">
    <h5 className="card-title">Property Care<br/> Service</h5>
    <div class="titleunderline"></div>
    <p className="card-text">We take care of your home like a<br/> true custodian. Our support team</p>
    <a href="#" className="btn">Read More</a>
      </div>
</div> 
</div>
<div className='col-sm-12'style={{height:360}}>
    <div className="card" my-3 style={{width:350,height:320}}>
  {/* <img className='Cardimage' src={Care} alt="Card image cap"/> */}
  <div className="card-body">
    <h5 className="card-title">Property Care<br/> Service</h5>
    <div class="titleunderline"></div>
    <p className="card-text">We take care of your home like a<br/> true custodian. Our support team</p>
    <a href="#" className="btn">Read More</a>
      </div>
</div> 
</div>
<div className='col-sm-12'style={{height:360}}>
    <div className="card" my-3 style={{width:350,height:320}}>
  {/* <img className='Cardimage' src={Care} alt="Card image cap"/> */}
  <div className="card-body">
    <h5 className="card-title">Property Care<br/> Service</h5>
    <div class="titleunderline"></div>
    <p className="card-text">We take care of your home like a<br/> true custodian. Our support team</p>
    <a href="#" className="btn">Read More</a>
      </div>
</div> 
</div>

      </Slider>
    </div>
  )
}
