import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DashboardUser from "./DashboardUser";
import DashboardInformation from "./DashboardInformation";
import AddToCardModal from "./AddToCardModal";
import "./Dashboard.scss";

function Dashboard() {
  const [close, setClose] = useState(true)
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
      <DashboardUser addToCard={addToCard}/>
      <DashboardInformation/>
      </> : 
      <>
      <div className="modalBackGround">
      <AddToCardModal closeModal={closeModal}/>
      </div>
      <Sidebar />
      <DashboardUser />
      <DashboardInformation />
      </>
      }
    </div>
  );
}

export default Dashboard;
