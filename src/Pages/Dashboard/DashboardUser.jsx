import React from "react";
import { FormattedMessage } from "react-intl";
import "./Dashboard.scss";
import calendar from "../../Images/calendar-icon.svg";
import user from "../../Images/user.svg";
import plus from "../../Images/plus.svg";

function DashboardUser({addToCard}) {
 
  return (
    <div className="scrollbarhidden">
        <div className="dashboarduser">
          <div className="userCard">
            <div className="imgArea">
              <img src={user} alt="" />
            </div>
            <div className="userInfo">
              <p className="name">Bess Willis</p>
              <p className="age">
                24
                <FormattedMessage
                id="yearsOld"
                defaultMessage=" years old"
                />
              </p>

              <ul>
                <li>
                  <p>
                  <FormattedMessage
                id="blood"
                defaultMessage="Blood"
                />
                  </p>
                  <li>-B</li>
                </li>
                <li>
                  <p>
                  <FormattedMessage
                id="height"
                defaultMessage="Height"
                />
                  </p>
                  <li>170</li>
                </li>
                <li>
                  <p>
                  <FormattedMessage
                id="weight"
                defaultMessage="Weight"
                />
                  </p>
                  <li>
                    66 <sub>kg</sub>
                  </li>
                </li>
              </ul>
            </div>
          </div>
          <div className="notifications">
            <div className="notificationsHead">
              <p className="name">
                <FormattedMessage
                id="Notifications"
                defaultMessage="Notifications"
                />
              </p>
              <p className="date">26 Aug 2019</p>
            </div>
            <div className="card">
              <img src={calendar} alt="" />
              <p>
              <FormattedMessage
                id="NotificationsContent"
                defaultMessage="Here you will have notifications"
                />
              </p>
            </div>
          </div>
          <div className="creditCard">
            <button onClick={addToCard}>
              <img src={plus} alt="" />
              <p>
                <FormattedMessage
                id="addYourCard"
                defaultMessage="Add your card"
                />
              </p>
            </button>
          </div>
      </div>
    </div>
  );
}

export default DashboardUser;
