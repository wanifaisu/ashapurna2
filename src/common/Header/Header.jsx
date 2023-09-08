import logo1 from "./images/logo1.webp"
import './Header.css';
import { useState } from "react";
import logo2 from './images/logo2.jpg';
import {Link} from "react-router-dom";



export function Header() {
    
    let [modal, setmodal] = useState(false);
    let [input1,setInput1]=useState('');
    let [input2,setInput2]=useState('');
    let [input3,setInput3]=useState('');
    let [input4,setInput4]=useState('');
    let [input5,setInput5]=useState('');

    let [msg1,setMsg1] = useState('');
    let [msg2,setMsg2] = useState('');
    let [msg3,setMsg3] = useState('');
    let [msg4,setMsg4] = useState('');
    let [msg5,setMsg5] = useState('');
     
    let getData=(e)=>{
        let checkstatus=0;
    if(input1===''){
checkstatus=1;
    }
    if (checkstatus===1){
        setMsg1('Please fill name')
        setTimeout(()=>{
            setMsg1('')
        },2000)
    }
    if(input2===''){
        checkstatus=1;
            }
 if (checkstatus===1){
    setMsg2('Please fill email address')
    setTimeout(()=>{
   setMsg2('')
     },2000)
            }
 if(input3===''){
    checkstatus=1;
    }
  if (checkstatus===1){
     setMsg3('Please fill phone number')
     setTimeout(()=>{
    setMsg3('')
     },2000)
      }
      if(input4===''){
        checkstatus=1;
        }
      if (checkstatus===1){
         setMsg4('Pplease fill select Property')
         setTimeout(()=>{
        setMsg4('')
         },2000)
          }   
          if(input5===''){
            checkstatus=1;
            }
          if (checkstatus===1){
             setMsg5('Please fill message')
             setTimeout(()=>{
            setMsg5('')
             },2000)
              }   

             e.preventDefault();
    }
   
    let showmodel = () => {
        setmodal(!modal);
    }
    let hidemodel=()=>{
        setmodal(!modal);
    }

    return(
     <>
     <header>
     
<nav  className="navbar navbar-expand-lg container-fluid position-absolute,start-0,end-0,top-0,">
<div className="container"> 
<Link to="#" className="navbar-brand" >  
<img src={logo1} alt="Logo" width={'180px'} height={'120px'} /> 
</Link>
 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menubar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="menubar">
    <ul className="navbar-nav align-item-center justify-content-end">
      <li className="nav-item">
        <Link to={'/'} className="nav-link">Home
         </Link>
      </li>

      <li className="nav-item">
        {/* <button className="enquire"  onClick={showmodel}>ENQUIRE</button> */}
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
         About us
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">About us</a>
          <a class="dropdown-item" href="#">Our Journey</a>
          <a class="dropdown-item" href="#">Management Speaks</a>
          <a class="dropdown-item" href="#">Our Team</a>
          <a class="dropdown-item" href="#">Management Speaks</a>
        </div>
      </li>
     

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        Project
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Residential</a>
          <a class="dropdown-item" href="#">Commercial</a>
          <a class="dropdown-item" href="#">Management Speaks</a>
          <a class="dropdown-item" href="#">Our Team</a>
          <a class="dropdown-item" href="#">Management Speaks</a>
        </div>
      </li>
      
       <li className="nav-item">
        <Link to={'/Media'} className="nav-link">Media and Events
         </Link>
      </li>
      <li className="nav-item">
        <Link to={'/Blogs'} className="nav-link">Blogs
         </Link>
      </li>
      <li className="nav-item">
        <Link to={'/Blogs'} className="nav-link">Contact Us
         </Link>
      </li>
      <li className="nav-item">
        <button className="enquire"  onClick={showmodel}>ENQUIRE</button>
        </li>
    </ul>
  </div>
  </div> 
</nav>

</header>
          
                            <div className={`modal ${(modal === true) ? 'show' : "hide"}`}>
                                <div className="backimage">
                                    <img src={logo2} alt="Logo2" className="popimg" />
                                </div>
                                <button className="cross" onClick={hidemodel}>&times;</button>
                                <form onSubmit={getData} className="enquireform">
                                    <div className="row">
                                        <div className="container">
                                            <div className="col-lg-12">
                                                <h2 className="formHead">ENQUIRE NOW</h2>
                                                <p style={{marginTop:15,marginBottom:20,paddingLeft:10,fontSize:18}}>Feel free to connect with us. We will contact with you shortly.</p>
                                            </div>
                                            <div className="row" style={{ paddingLeft: 20, marginTop: 25 }}>
                                                <div className="col-lg-6 outlined">
                                                    <input type="text" name="uname" id='input1' value={input1} onChange={(e) =>setInput1(e.target.value)} placeholder="Name" required="" style={{ height: 50, width: 250,paddingInlineStart:10}} />
                                                    <div className="text-danger">{msg1}</div>
                                                </div>
                                                <div className="col-lg-6 outlined">
                                                    <input type="email" name="uemail" id='input2' value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Email" required="" style={{ height: 50, width: 250,paddingInlineStart:10 }} />
                                                    <div className="text-danger">{msg2}</div>
                                                    </div>
                                            </div>
                                            <div className="row" style={{ paddingLeft: 20, marginTop: 25 }}>
                                                <div className="col-lg-6 outlined">
                                                    <input type="tel" name="uphone" id='input3' value={input3} onChange={(e) => setInput3(e.target.value)} placeholder="Phone" required="" style={{ height: 50, width: 250,paddingInlineStart:10 }} />
                                                    <div className="text-danger">{msg3}</div>
                                                </div>
                                                <div className="col-lg-6 outlined">
                                                    <select type="text" name="SelectProperty" id='input4' value={input4} onChange={(e) => setInput4(e.target.value)} placeholder="Select Property" required="" style={{ height: 50, width: 250,paddingInlineEnd:10 }} />
                                                    <div className="text-danger">{msg4}</div>
                                                    </div>
                                            </div>

                                            <div className="row" style={{ paddingLeft: 20, marginTop: 25 }}>
                                                <div className="col-lg-12 outlined">
                                                    <textarea name="umessage" id='input5' value={input5} onChange={(e) => setInput5(e.target.value)}  placeholder="Explain Your Enquiry " style={{ height:70, width: 470, paddingInlineStart:10,paddingBlockStart:10}} ></textarea>
                                                    <div className="text-danger">{msg5}</div>
                                                </div>
                                            </div>

                                            <div className="row" style={{ paddingLeft: 20, marginTop: 20 }}>
                                                <div className="col-lg-12 text-center   ">
                                                   <button className="btnsub">SUBMIT</button>
                                                                                                   </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>

            
       </>

    )


}
