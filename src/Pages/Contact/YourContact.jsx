import React from "react";
import "./Contact.scss";
import line from "../../Images/line.svg";
import doctorsfemale from "../../Images/doctorfemalephoto.svg";
import doctorseedetailsicon from "../../Images/doctorseedetailsicon.svg";

function YourContact() {
  return (
    <div className="yourContact">
      <h4>Your Treatment</h4>
      <div className="datebox">
        <h6 className="datetext">Your Doctors</h6>
        <img src={line} alt="" />
      </div>

      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsfemale} alt="" />
          <div className="doctorsnamesurname">
            <div className="nameandtime">
              <h6>Dr. Isabella Bowers</h6>
              <p>2 min ago</p>
            </div>
            <p>Surgeon, CA</p>
          </div>
        </div>
        <p className="message">Some text that she wrote. And here are…</p>
      </div>

      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsfemale} alt="" />
          <div className="doctorsnamesurname">
            <div className="nameandtime">
              <h6>Dr. Isabella Bowers</h6>
              <p>2 min ago</p>
            </div>
            <p>Surgeon, CA</p>
          </div>
        </div>
        <p className="message">Some text that she wrote. And here are…</p>
      </div>

      <div className="datebox">
        <h6 className="datetext">App Users</h6>
        <img src={line} alt="" />
      </div>
      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsfemale} alt="" />
          <div className="doctorsnamesurname">
            <div className="nameandtime">
              <h6>Dr. Isabella Bowers</h6>
              <p>2 min ago</p>
            </div>
            <p>Surgeon, CA</p>
          </div>
        </div>
        <p className="message">Some text that she wrote. And here are…</p>
      </div>
      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsfemale} alt="" />
          <div className="doctorsnamesurname">
            <div className="nameandtime">
              <h6>Dr. Isabella Bowers</h6>
              <p>2 min ago</p>
            </div>
            <p>Surgeon, CA</p>
          </div>
        </div>
        <p className="message">Some text that she wrote. And here are…</p>
      </div>
      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsfemale} alt="" />
          <div className="doctorsnamesurname">
            <div className="nameandtime">
              <h6>Dr. Isabella Bowers</h6>
              <p>2 min ago</p>
            </div>
            <p>Surgeon, CA</p>
          </div>
        </div>
        <p className="message">Some text that she wrote. And here are…</p>
      </div>
      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsfemale} alt="" />
          <div className="doctorsnamesurname">
            <div className="nameandtime">
              <h6>Dr. Isabella Bowers</h6>
              <p>2 min ago</p>
            </div>
            <p>Surgeon, CA</p>
          </div>
        </div>
        <p className="message">Some text that she wrote. And here are…</p>
      </div>
    </div>
  );
}

export default YourContact;
