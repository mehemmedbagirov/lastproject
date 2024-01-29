import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Message from "./Message";
import YourContact from "./YourContact";
import "./Contact.scss";
function Contact() {
    return (
      <div className="contact">
            <Sidebar />
            <YourContact />
            <Message/>
      </div>
    );
}

export default Contact;
