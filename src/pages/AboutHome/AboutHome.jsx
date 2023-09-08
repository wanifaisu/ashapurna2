
import './AboutHome.css';
import aboutus from './images/aboutus.webp'
import img2 from './images/img2.png'
import property from './images/property.svg'
import happy from './images/happy.png'
import tape from './images/tape.png'
import units from './images/units.png'
import { IncreCounter1, IncreCounter2, IncreCounter3, IncreCounter4, IncreCounter5 } from './Counter';


export function AboutHome (){

 return(
 <>
   <div className='container-fluid bgAboutHome py-5' >
   <div className='container'>
    <div className='row' style={{paddingTop:50}}>
    <div className='col-lg-5 col-md-10 col-sm-12'>
     <div className='imageAbout'>
       <img src={aboutus} alt='img1' />
     </div>
    </div>
    <div className='col-lg-7'>
     <div className='contentHead'>
      <h5 className='con-head'>ABOUT US</h5> 
      <span className='con-headspa'></span>
       </div>
     <h2 className='head'>Welcome to Ashapurna</h2>
     <p>Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.</p>
     <p>In a relatively short period of time, Ashapurna has grown and gained a trustworthy real estate name in the entire Rajasthan. The company always tried hard to deliver everything best to its customers and built all their categories-Luxury, Mix segments, and affordable homes.</p>
    </div>
  </div>
    <div className='row row-cols-lg-5 row-cols-2 px-3 py-4 allitem'style={{position:'absolute',width:[950],height:[150]
  }}>
     <div className='col text-center d-flex justify-content-center align-item-center '>
      <div className='item'>
        <div className='imageBox d-flex justify-content-center align-item-center'>
       <img src={img2} alt='image2'/>
       </div>
       <IncreCounter1/>
       <h4 className='item-title'>Years Of Experience</h4>
       </div>
     </div>
     <div className='col text-center d-flex justify-content-center align-item-center'>
     <div className='item'>
     <div className='imageBox d-flex justify-content-center align-item-center'>
       <img src={property} alt='image3'/>
       </div>
    <IncreCounter2/>
       <h4 className='item-title'>Projects</h4>
     </div>
     </div>
     <div className='col text-center d-flex justify-content-center align-item-center'>
      <div className='item'>
      <div className='imageBox d-flex justify-content-center align-item-center'>
       <img src={happy} alt='image3'/>
       </div>
     <IncreCounter3/>
       <h4 className='item-title'>Happy Families</h4>
     </div>
     </div>
     <div className='col text-center d-flex justify-content-center align-item-center'>
     <div className='item'>
     <div className='imageBox d-flex justify-content-center align-item-center'>
       <img src={tape} alt='image4'/>
       </div>
     <IncreCounter4/>
       <h4 className='item-title'>Lakh Sq.Ft Delivered</h4>
     </div>
     </div>
     <div className='col text-center d-flex justify-content-center align-item-center'>
     <div className='item'>
     <div className='imageBox d-flex justify-content-center align-item-center'>
       <img src={units} alt='image4'/>
       </div>
       <IncreCounter5/>
       <h4 className='item-title'>Units</h4>
     </div>
 </div>
 
    </div>
 
 
   </div>
 </div>
 </>
)




}