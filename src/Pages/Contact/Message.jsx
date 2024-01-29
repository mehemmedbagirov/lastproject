import React from "react";
import "./Contact.scss";
import girldoctor from "../../Images/girldoctor.svg";
import searchicon from "../../Images/searchicon.svg";
import callicon from "../../Images/call.svg";
import moreicon from "../../Images/more.svg";
import atach from "../../Images/attach.svg";
import send from "../../Images/send.svg";
import check from "../../Images/check.svg"
function Message() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  return (
    <div className="messagearea">
      <div className="doctorinfocontainer">
        <div className="doctorinfo">
          <img src={girldoctor} alt="" />
          <div className="doctorname">
            <p className="name">
              Dr. Isabella Bowers <span>2 min ago</span>
            </p>
            <p className="prof">Surgeon /California Hospital Medical Center</p>
          </div>
        </div>
        <div className="contactarea">
          <div className="box">
            <img src={callicon} alt="" />
          </div>
          <div className="box">
            <img src={searchicon} alt="" />
          </div>
          <div className="box">
            <img src={moreicon} alt="" />
          </div>
        </div>
      </div>
      <div className="messagecontainer">
        <div className="day">
          <div className="line"></div>
          <p>Today</p>
          <div className="line"></div>
        </div>
        <div className="doctormessage">
          <p>
            When vision becomes cloudy, normally due to age factor, you can
            suspect cataract. The primary effect of cataract is blurred vision.
            Then, what is cataract and how does it develop? The word cataract is
            derived from Latin word cataracta which means waterfall. It is
            metaphorically imported into the modern English for its blurring
            effect on the eye.
          </p>
          <div className="timebox">
            {hour + ":" + minute} <img src={check} alt="" />
          </div>
        </div>
        <div className="usermessage">
          
          <p>
            When vision becomes cloudy, normally due to age factor, you can
            suspect cataract.
          </p>
          <div className="timebox">
            {hour + ":" + minute} <img src={check} alt="" />
          </div>
        </div>
        <p className="doctortyping">Doctor is typing you…🙊</p>
      </div>
      <div className="writeingarea">
        <img src={girldoctor} alt="" />
        <input type="text" placeholder="Write your message…." />
        <div className="mesgarea">
          <div className="box">
            <img src={atach} alt="" className="atach" />
          </div>
          <div className="atachbox box">
            <img src={send} alt="" className="send" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
