import React , {useRef} from 'react'
import {FormattedMessage} from "react-intl"
import './Sidebar.scss'
import dashboard from "../../Images/dashboard.svg"
import doctor from "../../Images/Doctor.svg"
import contact from "../../Images/Contact.svg";
import tracker from "../../Images/Tracker.svg";
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

function Sidebar() {
    // const htmlKoduRef = useRef("");
    // const section = htmlKoduRef.current;
    // console.log(section);
    // const location = useLocation();
    // const { pathname } = location;
    // // console.log(pathname);
    // if (pathname == "/") {
    //     section.className = "linkActive"
    // }
    // // function sidebarNavigationClick(e, data) {
    // //     console.log(data);
    // // }
    // const handleClick = () => {
        
    //     console.log(section);
    //     // console.log(section.className);

    //   };

  return (
    <div className="sections">
      <div className="section">
        <Link to="/" className="link">
          <img src={dashboard} alt="dashboard" />
          <p>
            <FormattedMessage 
            id='SidebarDashboard'
            defaultMessage="Dashboard"
            />
          </p>
        </Link>
      </div>
      <div className="section">
        <Link to="/doctors" className="link">
          <img src={doctor} alt="doctor" />
          <p>
          <FormattedMessage 
            id='SidebarDoctor'
            defaultMessage="Doctor"
            />
          </p>
        </Link>
      </div>
      <div className="section">
        <Link to="/contact" className="link">
          <img src={contact} alt="contact" />
          <p>
          <FormattedMessage 
            id='SidebarContact'
            defaultMessage="Contact"
            />
          </p>
        </Link>
      </div>
      <div className="section">
        <Link to="/tracker" className="link">
          <img src={tracker} alt="tracker" />
          <p>
          <FormattedMessage 
            id='SidebarTracker'
            defaultMessage="Tracker"
            />
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar