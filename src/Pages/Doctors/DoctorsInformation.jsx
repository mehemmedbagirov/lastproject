import React, { useEffect, useState } from 'react'
import "./Doctors.scss";
import searchicon from "../../Images/searchicon.svg"
import girldoctor from "../../Images/girldoctor.svg"
import trooth from "../../Images/toothicon.svg"
import heart from "../../Images/heart.svg"
import blackdoctor from "../../Images/blackdoctor.svg"
import doctorman from "../../Images/doctorman.svg"
import doctormanblack from "../../Images/doctormanblack.svg"
import doctorwoman from "../../Images/doctorwoman.svg"
import doctormanblackhair from "../../Images/doctormanblackhair.svg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import Slider from './Slider';


function DoctorsInformation({setActiveAllergist, setActiveYourDoctor}) {
  const [click,setClick] = useState(false)

    function openAllergist() {
      setClick(true)
      // click = true 
      console.log("click");
      if(click){
        setActiveAllergist(true)
        setClick(false)
      }        
    }
  
    function openYourDoctor() {
      setClick(true)
      // click = true 
      console.log("click");
      if(click){
        setActiveYourDoctor(true)
        setClick(false)
      } 
    }
  return (
    
    <div className='doctorsdinformationbody'>
       <p>Make an appointment, that will help you! Choose a doctor.</p>


      <div className='doctorssearchbox'>
         <button className='doctorssearchbutton'>
         <img src={searchicon} alt="" />
         </button>
        

         <input className="doctorssearch" type="search" placeholder="Find your doctor" name="email" required/>
        
         </div>


     <div className='doctorsserctors'>
        <div className='doctorssectorstype'>
           
        <div className='doctorssectorsbox'>

          <div className='doctorsdentalbox'>
          <img src={trooth} alt="" />
          </div>


          <div className='doctorssurgeon'>
         <p>Surgeon</p>
          </div>

        </div>
           
           
           
            <div onClick={()=> openYourDoctor()} className='doctorphotoandname'>
            <img src={girldoctor} alt="" />

            <h5>Dr. Eula Harris</h5>
            <p>Therapist</p>
            </div>

        </div>

       

       <div className='doctorssectrotypetwo'>
        <button onClick={()=> {openAllergist()}} className='doctorssurgeon'>
         <p>Allergist</p>
        </button>
   
          <div className='doctorsheart'>
          <img src={heart} alt="" />
            
          </div>

      <div className='doctorsoncolog'>
        <p>Oncologist</p>
      </div>



     <div className='doctorimmunologistbox'>
     <img src={blackdoctor} alt="" />
      <div className='blackdoctorinfo'>
        <h6>Dr. Cole Turner</h6>
        <p>Immunologist</p>

      </div>

     </div>

     <div className='doctorphysiologist'>
         <p>Physiologist</p>
          </div>
     
       </div>
    



     </div>
    
    <div className='treamenttextbox'><h6 className='treamenttext'>Popular searches</h6></div>
     <div className='sliderBack'>
     <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="doctorsslider">
      <img src={doctorman} alt="" />
      <h6>Dr. Randall Wood</h6>
      <p>Therapist</p>
      <p className='doctorslidertext'>California Hospital Medical Center</p>
        </div>
        </SwiperSlide>
     


        <SwiperSlide><div className="doctorsslider">
      <img src={doctormanblack} alt="" />
      <h6>Dr. Leonard Vasquez</h6>
      <p>Therapist</p>
      <p className='doctorslidertext'>UCSF Medical Center</p>
        </div>
        </SwiperSlide>


        <SwiperSlide><div className="doctorsslider">
      <img src={doctorwoman} alt="" />
      <h6>Dr. Mok Kwang-Hyun</h6>
      <p>Therapist</p>
      <p className='doctorslidertext'>Local Hospital, CA</p>
        </div>
        </SwiperSlide>


        <SwiperSlide><div className="doctorsslider">
      <img src={doctormanblackhair} alt="" />
      <h6>Dr. Randall Wood</h6>
      <p>Therapist</p>
      <p className='doctorslidertext'>Local Hospital, CA</p>
        </div>
        </SwiperSlide>
 
    </Swiper>
    </div>
    </div>
  )
}

export default DoctorsInformation