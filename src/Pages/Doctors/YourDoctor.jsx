import React, { useState } from 'react'
import girldoctor from "../../Images/girldoctor.svg"
import monthimage from "../../Images/monthimage.svg"
import clock from "../../Images/clock.svg"
import besswils from "../../Images/besswills.svg"
import rightt from "../../Images/rightttticon.svg"
function YourDoctor({addToCard,setActiveYourDoctor}) {
   const [click, setClick] = useState(false)

   function closeYourDoctor() {
      setClick(true)
    // click = true 
      console.log("click");
      if(click){
         setActiveYourDoctor(false)
         setClick(false)
      }    
   }
  return (
    <div className='YourDoctor'>

     <div className='yourdoctortextinfo'>
       <p>Your Doctor:</p>
     </div>


    <div className='yourdoctordatetime'>
            
    <div className='doctorphotoandnamebox'>
            <img src={girldoctor} alt="" />

            <h5>Dr. Eula Harris</h5>
            <p>Therapist</p>
            </div>


     <div className='doctorappointetdatetime'>

    <div className='doctordatetextandbutton'>
        <p>Appointed day</p>
        <button className='yearmonthbutton' onClick={addToCard}>
        <img src={monthimage} alt="" />
         <p>16 Jan 2019</p>
        </button>
    </div>

    <div className='doctordatetextandbutton'>
        <p>Appointed Time</p>
        <button className='yearmonthbutton' onClick={addToCard}>
        <img src={clock} alt="" />
         <p>08:45 AM</p>
        </button>
    </div>

    <div className='doctordatetextandbutton'>
        <p>Repeat every:</p>
        <div className='daysboxes'>
         <div className="daybox">
            <p>D</p>
         </div>

         <div className="daybox">
            <p>W</p>
         </div>

         <div className="daybox">
            <p>M</p>
         </div>

         <div className="daybox">
            <p>Y</p>
         </div>



        </div>


    </div>


    <div className='doctordatetextandbutton'>
        <p>Remind me:</p>
        <button className='yearmonthbutton'>
        <img src={monthimage} alt="" />
         <p>01-16-2019/08:00 AM</p>
        </button>
    </div>










     </div>





    </div>


    <div className='yourdoctortextinfo'>
       <p>Your Data:</p>
     </div>


    <div className='doctorsdatainformation'>


    <div className='doctorphotoandnamebox'>
            <img src={besswils} alt="" />

            <h5>Bess Willis</h5>
            <p>Therapist</p>
            </div>

    <div className='doctorscommentbox'>


   <div className='doctorsinfowightbloodtext'>
      <div className="doctorinfocatecorybox">
         <h6>Blood</h6>
         <p>-B</p>
      </div>

      <div className="doctorinfocatecorybox">

         <h6>Height</h6>
         <p>170</p>
   
      </div> 
      
       <div className="doctorinfocatecorybox">
         <h6>Weight</h6>
         <p>60kq</p>
      </div>
      

     



   </div>


    <div className='doctorscommentandtextbox'>
      <p>Your Disease</p>
    
    
    <div className='doctorcommentandbuttonarea'>
    <input className="doctorcommentinput" type="text" placeholder="Write here your disease" name="email" required/>
     <div className='doctorbuttondont'>Don’t know</div>
    </div>






    </div>




    <div className='textandchexboxarea'>
    <input className="textandchexboxareacheckbox" type="checkbox" id="checkBox" name="checkBox"/>

    <p>Taking medication at the moment</p>
    </div>










    </div>


    </div>



   <div onClick={()=> closeYourDoctor()} className='choosepagearea'>

      <p>Make an appointment</p>

      <div className='choossepagebutton'>

      <img src={rightt} alt="" />
      </div>
   </div>


    </div>
  )
}

export default YourDoctor