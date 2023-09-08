import { Header } from "../common/Header/Header";
import { AboutHome } from "./AboutHome/AboutHome"
import React, { useEffect, useRef } from 'react';
import '../index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from './Bannerimages/slider1.webp'
import slider2 from './Bannerimages/slider2.webp'
import slider3 from './Bannerimages/slider3.webp'
import slider4 from './Bannerimages/slider4.webp'
import slider5 from './Bannerimages/slider5.webp'
import slider6 from './Bannerimages/slider6.webp'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Form from 'react-bootstrap/Form';
import F1 from './Feature/F1.webp'
import F21 from './Feature/F21.webp'
import F4 from './Feature/F4.webp'
import logoF from './Feature/logoF.webp'
import cctv from './Feature/cctv.svg'
import om from './Feature/om.svg'
import meet from './Feature/meet.svg'
import F4logo from './Feature/F4logo.webp'
import { useState } from "react";
import { WhyAsha } from "./WhyAshapurna/WhyAsha";
import { Link } from "react-router-dom";
function Home() {
  let [input1, setInput1] = useState('');
  let [input2, setInput2] = useState('');
  let [input3, setInput3] = useState('');
  let [input4, setInput4] = useState('');
  let [input5, setInput5] = useState('');

  let [msg1, setMsg1] = useState('');
  let [msg2, setMsg2] = useState('');
  let [msg3, setMsg3] = useState('');
  let [msg4, setMsg4] = useState('');
  let [msg5, setMsg5] = useState('');

  let getData = (e) => {
    let checkstatus = 0;
    if (input1 === '') {
      checkstatus = 1;
    }
    if (checkstatus === 1) {
      setMsg1('Please fill name')
      setTimeout(() => {
        setMsg1('')
      }, 2000)
    }
    if (input2 === '') {
      checkstatus = 1;
    }
    if (checkstatus === 1) {
      setMsg2('Please fill email address')
      setTimeout(() => {
        setMsg2('')
      }, 2000)
    }
    if (input3 === '') {
      checkstatus = 1;
    }
    if (checkstatus === 1) {
      setMsg3('Please fill phone number')
      setTimeout(() => {
        setMsg3('')
      }, 2000)
    }
    if (input4 === '') {
      checkstatus = 1;
    }
    if (checkstatus === 1) {
      setMsg4('Pplease fill select Property')
      setTimeout(() => {
        setMsg4('')
      }, 2000)
    }
    if (input5 === '') {
      checkstatus = 1;
    }
    if (checkstatus === 1) {
      setMsg5('Please fill message')
      setTimeout(() => {
        setMsg5('')
      }, 2000)
    }
    e.preventDefault();
  }


  const sliderRef = useRef(null)
  let settings = {

    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handlePre = () => {
    sliderRef.current.slickPrev()

  }
  const handleNext = () => {
    sliderRef.current.slickNext()
  }

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };


  return (
    <>
     <Header/>
   
<div style={{marginTop:'6rem'}}>
  
      <div className="container" style={{ position: "relative", maxWidth: '1170px', height: '350px', margin: 'auto',}}>
        <div className="row row-cols-1">
          <Slider ref={sliderRef} {...settings} style={{ height: '360px', }}>
            <div className="banner1">

              <img src={slider1} alt="SL1" style={{ height: '360px', width: '100%' }} />

            </div>
            <div className="banner2">

              <img src={slider2} alt="SL2" style={{ height: '360px', width: '100%' }} />

            </div>


            <div className="banner3 ">

              <img src={slider3} alt="SL3" style={{ height: '360px', width: '100%' }} />

            </div>
            <div className="banner4">

              <img src={slider4} alt="SL4" style={{ height: '360px', width: '100%' }} />

            </div>
            <div className="banner5">

              <img src={slider5} alt="SL5" style={{ height: '360px', width: '100%' }} />

            </div>
            <div className="banner6">

              <img src={slider6} alt="SL6" style={{ height: '360px', width: '100%' }} />

            </div>
          </Slider>
          <div className="arrowicon"><ChevronLeftIcon onClick={handlePre} style={{ fontSize: 60, position: "absolute", top: '50%', left: 10, color: "white" }} /></div>
          <div className="arrowicon"><ChevronRightIcon onClick={handleNext} color="red" style={{ fontSize: 60, position: "absolute", top: '50%', right: 10, color: "white" }} /></div>

        </div>
      </div>
      </div>
      <Form className="en" onSubmit={getData} >
        <div className="row row-cols-lg-5 mt-6 mx-auto flexWrap:'wrap" style={{ alignItems: 'center', height: '80px' }} >
          <Form.Group className="col mb-3">
            <div className="text-danger">{msg1}</div>
            <Form.Control type="text" placeholder="Name" onChange={(e) => setInput1(e.target.value)} value={input1} style={{ height: '43px' }} />
          </Form.Group>
          <Form.Group className="col mb-3">
            <div className="text-danger">{msg2}</div>
            <Form.Control type="email" placeholder="Email" onChange={(e) => setInput2(e.target.value)} value={input2} style={{ height: '43px' }} />
          </Form.Group>
          <Form.Group className="col mb-3" >
            <div className="text-danger">{msg3}</div>
            <Form.Control type="tel" placeholder="Phone" onChange={(e) => setInput3(e.target.value)} value={input3} style={{ height: '43px' }} />
          </Form.Group>
          <Form.Group className="col">
            <Form.Select className="col mb-3" >
              <div className="text-danger">{msg4}</div>
              <option onChange={(e) => setInput4(e.target.value)} value={input4} style={{ height: '43px', backgroundColor: 'goldenrod', fontWeight: 'Bold' }}>
                Select Property</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="col mb-3" >
            <div className="text-danger">{msg5}</div>
            <Form.Control type="text" placeholder="Explain Your Query" onChange={(e) => setInput5(e.target.value)} value={input5} style={{ height: '43px' }} />
          </Form.Group>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <button className="btnsub2 text-center" style={{ height: '43px' }}>SUBMIT</button>
          </div>
        </div>
       </Form>

      <AboutHome />
       <WhyAsha />

       <div className='container-fluid Feature py-3'>
         <div className="container">
         <div className="row">
       <div className="col-12 Feature">
         <h5 className='con-head'>Our Works</h5>
         <span className='con-headspa'></span>
         <h2 className='headF text-white'>Featured Projects</h2>
       </div>
     </div>
     <div className="row">
       <div className="col-12">
         <Slider {...settings1}>
           <div>
             <div className="row row-cols-2 gap-30px align-item-center">
               <div className="col Fimage">
                 <img src={F1} alt="f1img" style={{ width: '426px', height: '165px' }} />
                     </div>
                     <div className="col content">
                      <div className='panch d-flex align-item-center'>
                         <div className='panchimg w-130px h-50px'>
                           <img src={logoF} />
                         </div>
                        <div className='heading'>
                           <h3 className="text-white fs-30px fw-500px">Ashapurna Pachpadra</h3>
                       </div>

                       </div>
                       <p className="text-white">
                       Ashapurna Township Pachpadra is the address of a life that welcomes you with all modernity and grandeur. The imposing gate of the township gives a sense of luxury to its visitors. The township houses everything that makes life comfortable and luxurious. Ashapura Township Pachpadra is a complete world in itself where life experiences a new joy everyday. The township is not a fresh beginning in Pachpadra only but it’s also the dawn of a new era in Barmer as a whole.
                 </p>
                 <div className='row row-cols-lg-3'>
                   <div col>
                     <div className='panchitem'>
                       <img src={cctv} />
                       <div className='para'>
                        <h4>CCTV</h4>
                               <p className="text-white">SECURITY SYSTEM</p>
                           </div>
                     </div>
                         </div>

                         <div col>
                           <div className='panchitem'>
                             <img src={om} />
                             <div className='para'>
                               <h4>TEMPLE</h4>
                               <p className="text-white">NEAR BY</p>
                             </div>
                           </div>
                         </div>
                         <div col>
                           <div className='panchitem'>
                             <img src={meet} />
                             <div className='para'>
                               <h4>COMMUNITY</h4>
                               <p className="text-white">HALL</p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-12 mb-3">
                     <Link to={"/residential/ashapurna-nri"} className="bg-golden-color text-white rounded py-2 px-3"> See All</Link>

                   </div>

                 </div>


                 <div>
                   <div className="row row-cols-2 gap-30px align-item-center">
                     <div className="col Fimage">
                       <img src={F4} alt="f1img" style={{ width: '426px', height: '162px' }} />
                     </div>
                     <div className="col content">
                       <div className='panch d-flex align-item-center'>
                         <div className='panchimg w-47px h-50px'>
                           <img src={F4logo} className="w-47px h-50px" />
                         </div>
                         <div className='heading'>
                           <h3 className="text-white fs-30px fw-500px">Ashapurna Pachpadra</h3>
                         </div>

                       </div>
                       <p className="text-white">
                         Ashapurna NRI is the 38th project of Ashapurna Buildcon Ltd. The project hosts classy Luxury Villas in Jodhpur that come in a package of European architecture villas in Jodhpur with 5-star luxury amenities like club house full of activities
                       </p>
                       <div className='row row-cols-lg-3'>
                         <div col>
                           <div className='panchitem'>
                             <img src={om} />
                             <div className='para'>
                               <h4>RERA</h4>
                               <p className="text-white">APPROVED</p>
                             </div>
                           </div>
                         </div>

                         <div col>
                           <div className='panchitem'>
                             <img src={om} />
                             <div className='para'>
                               <h4>TEMPLE</h4>
                               <p className="text-white">NEAR BY</p>
                             </div>
                           </div>
                         </div>
                         <div col>
                           <div className='panchitem'>
                             <img src={meet} />
                             <div className='para'>
                               <h4>COMMUNITY</h4>
                               <p className="text-white">HALL</p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-12 mb-3">
                     <Link to={"/residential/ashapurna-nri"} className="bg-golden-color text-white rounded py-2 px-3"> See All</Link>

                   </div>
                 </div>


                 <div>
                   <div className="row row-cols-2 gap-30px align-item-center">
                     <div className="col Fimage">
                       <img src={F21} alt="f1img" style={{ width: '426px', height: '162px' }} />
                     </div>
                     <div className="col content">
                       <div className='panch d-flex align-item-center'>
                         <div className='panchimg w-47px h-50px'>
                           <img src={F4logo} className="w-47px h-50px" />
                         </div>
                         <div className='heading'>
                           <h3 className="text-white fs-30px fw-500px">Ashapurna Pachpadra</h3>
                         </div>

                       </div>
                       <p className="text-white">
                         Ashapurna NRI is the 38th project of Ashapurna Buildcon Ltd. The project hosts classy Luxury Villas in Jodhpur that come in a package of European architecture villas in Jodhpur with 5-star luxury amenities like club house full of activities
                       </p>
                       <div className='row row-cols-lg-3'>
                         <div col>
                           <div className='panchitem'>
                             <img src={om} />
                             <div className='para'>
                               <h4>RERA</h4>
                               <p className="text-white">APPROVED</p>
                             </div>
                           </div>
                         </div>

                         <div col>
                           <div className='panchitem'>
                             <img src={om} />
                             <div className='para'>
                               <h4>TEMPLE</h4>
                               <p className="text-white">NEAR BY</p>
                             </div>
                           </div>
                         </div>
                         <div col>
                           <div className='panchitem'>
                             <img src={meet} />
                             <div className='para'>
                               <h4>COMMUNITY</h4>
                               <p className="text-white">HALL</p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-12 mb-3">
                         <Link to={"/residential/ashapurna-nri"} className="bg-golden-color text-white rounded py-2 px-3"> See All</Link>

                       </div>
                     </div>

                   </div>

                 </div>
                 <div>
                   <div className="row row-cols-2 gap-30px align-item-center">
                     <div className="col Fimage">
                       <img src={F21} alt="f1img" style={{ width: '426px', height: '162px' }} />
                     </div>
                     <div className="col content">
                       <div className='panch d-flex align-item-center'>
                         <div className='panchimg w-47px h-50px'>
                           <img src={F4logo} className="w-47px h-50px" />
                         </div>
                         <div className='heading'>
                           <h3 className="text-white fs-30px fw-500px">Ashapurna Pachpadra</h3>
                         </div>

                       </div>
                       <p className="text-white">
                         Ashapurna NRI is the 38th project of Ashapurna Buildcon Ltd. The project hosts classy Luxury Villas in Jodhpur that come in a package of European architecture villas in Jodhpur with 5-star luxury amenities like club house full of activities
                       </p>
                       <div className='row row-cols-lg-3'>
                         <div col>
                           <div className='panchitem'>
                             <img src={om} />
                             <div className='para'>
                               <h4>RERA</h4>
                               <p className="text-white">APPROVED</p>
                             </div>
                           </div>
                         </div>

                         <div col>
                           <div className='panchitem'>
                             <img src={om} />
                             <div className='para'>
                               <h4>TEMPLE</h4>
                               <p className="text-white">NEAR BY</p>
                             </div>
                           </div>
                         </div>
                         <div col>
                           <div className='panchitem'>
                             <img src={meet} />
                             <div className='para'>
                               <h4>COMMUNITY</h4>
                               <p className="text-white">HALL</p>
                             </div>
                           </div>
                         </div>

                       </div>
                       <div className="col-12 mb-3">
                         <Link to={"/residential/ashapurna-nri"} className="bg-golden-color text-white rounded py-2 px-3"> See All</Link>

                       </div>
                     </div>
                   </div>
                 </div>
               </Slider>
             </div>
           </div>
         </div>
       </div>


















    </>

  )
}
export default Home 