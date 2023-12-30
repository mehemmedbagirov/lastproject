import React, {useState} from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DoctorsUser from "./DoctorsUser";
import DoctorsInformation  from "./DoctorsInformation";
import DoctorsAllergist from "./DoctorsAllergist"
import DoctorsModalone from "./DoctorsModalone"
import DoctorsModaltwo from "./DoctorsModaltwo"
import YourDoctor from "./YourDoctor"
import "./Doctors.scss";


function Dashboard() {
  const [close, setClose] = useState(true)
  const [activeAllergist, setActiveAllergist] = useState(false)
  const [activeYourDoctor, setActiveYourDoctor] = useState(false)
  // const [click, setClick] = useState(false)
  function addToCard() {  
    console.log("click");
    if (close == true) {
      setClose(false)
    }
    else {
      setClose(true)
    }
  }
  function closeModal() {
    if (close == false) {
      setClose(true)
    }
    else {
      setClose(false)
    }
  }

  return (
    <div className="dashboard">
    {
      
      close? 
      <>
      <Sidebar />
      <DoctorsUser />
      {
      !activeYourDoctor?
      <>
      {activeAllergist? <DoctorsAllergist setActiveAllergist={setActiveAllergist}/> :
      <DoctorsInformation setActiveYourDoctor={setActiveYourDoctor} setActiveAllergist={setActiveAllergist}/>
      }</>:
      <YourDoctor setActiveYourDoctor={setActiveYourDoctor} addToCard={addToCard}/>
      }
      {/* <YourDoctor addToCard={addToCard}/> */}
      </> : 
      <>
      <div className="modalBackGround">
      <DoctorsModalone closeModal={closeModal}/>
      </div>
      <div className="modalBackGround">
      <DoctorsModaltwo closeModal={closeModal}/>
      </div>
      <Sidebar />
      <DoctorsUser />
      {activeAllergist? <DoctorsAllergist setActiveAllergist={setActiveAllergist}/> :
      <YourDoctor setActiveAllergist={setActiveAllergist}/>
      }
      {/* <YourDoctor /> */}
      </>
      }
    </div>
  );
}

export default Dashboard;