import React from "react";
import "./Doctors.scss";
import line from "../../Images/line.svg";
import doctorsfemale from "../../Images/doctorfemalephoto.svg";
import doctorseedetailsicon from "../../Images/doctorseedetailsicon.svg";
import doctorsmale from "../../Images/doctorsmale.svg";
import doctorsfemaletwo from "../../Images/doctorsfemaletwo.svg";
function DashboardUser() {
  return (
    <div className="scrollbarhidden">
      <h4>Your Treatment</h4>

      <div className="datebox">
        <h6 className="datetext">26 Aug 2019</h6>
        <img src={line} alt="" />
      </div>

      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsfemale} alt="" />
          <div className="doctorsnamesurname">
            <h6>Dr. Isabella Bowers</h6>
            <p>California Hospital Medical Center</p>
          </div>
        </div>

        <div className="doctorinfoafter">
          <h5>Surgeon</h5>
          <p>Spinal pain</p>
        </div>

        <div className="doctordatetime">
          <div className="doctortimebox">
            <h6>Date</h6>
            <p>26 Aug 2019</p>
          </div>

          <div className="doctortimebox">
            <h6>Time</h6>
            <p>12:45 AM</p>
          </div>
        </div>

        <div className="doctorseedetails">
          <div className="doctorseedetailstextandbox">
            <h5>See Details</h5>
            <div className="doctorseedetailsclickebox">
              <img src={doctorseedetailsicon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsmale} alt="" />
          <div className="doctorsnamesurname">
            <h6>Dr. Leonard Vasquez</h6>
            <p>California Hospital Medical Center</p>
          </div>
        </div>

        <div className="doctorinfoafter">
          <h5>Therapist</h5>
          <p>Consultation</p>
        </div>

        <div className="doctordatetime">
          <div className="doctortimebox">
            <h6>Date</h6>
            <p>26 Aug 2019</p>
          </div>

          <div className="doctortimebox">
            <h6>Time</h6>
            <p>12:45 AM</p>
          </div>
        </div>

        <div className="doctorseedetails">
          <div className="doctorseedetailstextandbox">
            <h5>See Details</h5>
            <div className="doctorseedetailsclickebox">
              <img src={doctorseedetailsicon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="datebox">
        <h6 className="datetext">28 Aug 2019</h6>
        <img src={line} alt="" />
      </div>

      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsfemaletwo} alt="" />
          <div className="doctorsnamesurname">
            <h6>Dr. Mok Kwang-Hyun</h6>
            <p>Local Hospital, CA</p>
          </div>
        </div>

        <div className="doctorinfoafter">
          <h5>Surgeon</h5>
          <p>Spinal pain</p>
        </div>

        <div className="doctordatetime">
          <div className="doctortimebox">
            <h6>Date</h6>
            <p>26 Aug 2019</p>
          </div>

          <div className="doctortimebox">
            <h6>Time</h6>
            <p>12:45 AM</p>
          </div>
        </div>

        <div className="doctorseedetails">
          <div className="doctorseedetailstextandbox">
            <h5>See Details</h5>
            <div className="doctorseedetailsclickebox">
              <img src={doctorseedetailsicon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="doctorsdatebox">
        <div className="doctorinfobox">
          <img src={doctorsfemale} alt="" />
          <div className="doctorsnamesurname">
            <h6>Dr. Isabella Bowers</h6>
            <p>California Hospital Medical Center</p>
          </div>
        </div>

        <div className="doctorinfoafter">
          <h5>Surgeon</h5>
          <p>Spinal pain</p>
        </div>

        <div className="doctordatetime">
          <div className="doctortimebox">
            <h6>Date</h6>
            <p>26 Aug 2019</p>
          </div>

          <div className="doctortimebox">
            <h6>Time</h6>
            <p>12:45 AM</p>
          </div>
        </div>

        <div className="doctorseedetails">
          <div className="doctorseedetailstextandbox">
            <h5>See Details</h5>
            <div className="doctorseedetailsclickebox">
              <img src={doctorseedetailsicon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUser;
