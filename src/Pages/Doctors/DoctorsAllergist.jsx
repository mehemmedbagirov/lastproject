import React,{useState} from 'react'
import leftgray from "../../Images/leftgray.svg"
import doctorsfemalebig from "../../Images/doctorsfemalebig.svg"
import doctorlittleblack from "../../Images/doctorslittleblack.svg"
import doctorlittlegirl from "../../Images/doctorslittlegirl.svg"
import { sassFalse } from 'sass'
function DoctorsAllergist({setActiveAllergist}) {
  const [click,setClick] = useState(false)

  function closeAllergist() {
    setClick(true)
    // click = true 
    console.log("click");
    if(click){
      setActiveAllergist(false)
      setClick(false)
    }        
  }
  return (
    <div className='doctorallergistinformation'>

     <div className='doctorstypetextbox'>
       <div onClick={()=> closeAllergist()} className='doctorstypetext'>
       <img src={leftgray} alt="" />
       <p>Doctor type:</p>
       </div>
        <p className=''>Allergist</p>

     </div>

      <div className='doctorslocationandday'>
        <p>Doctor name / Location</p>
        <p className='doctorsdaysofadmission'>Days of admission</p>
      </div>

  

     <div className='doctorsweekdatebox'>
     <div className='doctorsimageandnamesurname'>
     <img src={doctorsfemalebig} alt="" />
     <div className='docnamesurname'>
       <h6>Dr. Isabella Bowers</h6>
       <p>California Hospital Medical Center</p>
     </div>



     </div>


       <div className='weekbox'>
        <div className="buttonbox">
          <p>Mon</p>
        </div>

        <div className="buttonbox">
          <p>Wen</p>
        </div>

        <div className="buttonbox">
          <p>Fri</p>
        </div>

        <div className="buttonbox">
          <p>San</p>
        </div>

       </div>




     </div>




     <div className='doctorsweekdatebox'>
     <div className='doctorsimageandnamesurname'>
     <img src={doctorlittleblack} alt="" />
     <div className='docnamesurname'>
       <h6>Dr. Ryan Gray</h6>
       <p>California Local Hospital</p>
     </div>



     </div>


       <div className='weekbox'>
        <div className="buttonbox">
          <p>Mon</p>
        </div>

        <div className="buttonbox">
          <p>Wen</p>
        </div>

        <div className="buttonbox">
          <p>Fri</p>
        </div>

        <div className="buttonbox">
          <p>San</p>
        </div>

       </div>




     </div>

     <div className='doctorsweekdatebox'>
     <div className='doctorsimageandnamesurname'>
     <img src={doctorlittlegirl} alt="" />
     <div className='docnamesurname'>
       <h6>Dr. Alexandra Fleming</h6>
       <p>Alta Bates Summit Medical Center </p>
     </div>



     </div>


       <div className='weekbox'>
        <div className="buttonbox">
          <p>Mon</p>
        </div>

        <div className="buttonbox">
          <p>Wen</p>
        </div>

        <div className="buttonbox">
          <p>Fri</p>
        </div>

        <div className="buttonbox">
          <p>San</p>
        </div>

       </div>




     </div>


    </div>
  )
}

export default DoctorsAllergist