import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";



export function IncreCounter1(){
let [counter1, setcounter1]=useState(false)

    return(
<ScrollTrigger onEnter={()=>setcounter1(true)} onExit={()=>setcounter1(false)}>
    <div className="IncreCounter-page"style={{width:'170px',height:'40px',textAlign:'center'}}>
        <div className="IncreCounter1" style={{fontSize:'25px',color:' #212529'}}>
            {
              counter1 && <CountUp start={1}  end={26} duration={3} delay={0}/>}
           +     
            
             </div>
    </div>
</ScrollTrigger>
    )
}
export function IncreCounter2(){
    let [counter2, setcounter2]=useState(false)
    
        return(
    <ScrollTrigger onEnter={()=>setcounter2(true)} onExit={()=>setcounter2(false)}>
        <div className="IncreCounter-page" style={{width:'170px',height:'40px',textAlign:'center'}}>
            <div className="IncreCounter2" style={{fontSize:'25px',color:' #212529'}}>
                {counter2 && <CountUp start={1}  end={40} duration={3} delay={0}/>}
               +     
                
                 </div>
        </div>
    </ScrollTrigger>
        )
    }
    export function IncreCounter3(){
        let [counter3, setcounter3]=useState(false)
        
            return(
        <ScrollTrigger onEnter={()=>setcounter3(true)} onExit={()=>setcounter3(false)}>
            <div className="IncreCounter-page"style={{width:'170px',height:'40px',textAlign:'center'}}>
                <div className="IncreCounter3" style={{fontSize:'25px',color:' #212529'}}>
                    {
                      counter3 && <CountUp start={1}  end={26000} duration={3} delay={0}/>}
                   +     
                    
                     </div>
            </div>
        </ScrollTrigger>
            )
        }
        export function IncreCounter4(){
            let [counter4, setcounter4]=useState(false)
            
                return(
            <ScrollTrigger onEnter={()=>setcounter4(true)} onExit={()=>setcounter4(false)}>
                <div className="IncreCounter-page"style={{width:'170px',height:'40px',textAlign:'center'}}>
                    <div className="IncreCounter4"style={{fontSize:'25px',color:' #212529'}}>
                        {
                          counter4 && <CountUp start={1}  end={36} duration={3} delay={0}/>}
                       +     
                        
                         </div>
                </div>
            </ScrollTrigger>
                )
            }       

            export function IncreCounter5(){
                let [counter5, setcounter5]=useState(false)
                
                    return(
                <ScrollTrigger onEnter={()=>setcounter5(true)} onExit={()=>setcounter5(false)}>
                    <div className="IncreCounter-page"style={{width:'170px',height:'40px',textAlign:'center'}}ap>
                        <div className="IncreCounter5"style={{fontSize:'25px',fontWeight:'500px',color:' #212529'}}>
                            {counter5 && <CountUp start={1}  end={11000} duration={3} delay={0}/>}
                           +     
                            
                             </div>
                    </div>
                </ScrollTrigger>
                    )
                            }