import React from "react";
import {FormattedMessage} from "react-intl"
import { addDays, format } from "date-fns/fp";
import seeall from "../../Images/seeall.svg";
import examinations from "../../Images/examinations.svg";
import healthcurve from "../../Images/average.png";
import leftArrow from "../../Images/left-arrow.svg"
import rightArrow from "../../Images/right-arrow.svg"
import "./Dashboard.scss";
import Arrow from "../../Images/pluscopy2.svg"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
// import { render } from "@testing-library/react";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


function DashboardInformation() {
  const data = {
    labels: ["12AM", "6AM", "12PM", "6PM"],
    datasets: [
      {
        data: [8, 5, 5, 6, 10],
        borderColor: "#13CBD5",
        pointBorderColor: "transparent",
        pointBorderwith: 4,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        display: false,
      },
    },
  };
  
  return (
  <div className="scrolBar">
    <div className="dashboardinformation">
      <div className="examinations">
        <div className="examinationsHead">
          <p>
            <FormattedMessage 
            id="examinationsHead"
            defaultMessage="Examinations"
            />
          </p>
          <button>
            <div className="imgbg">
              <img src={seeall} alt="" />
            </div>
            <p>
            <FormattedMessage 
            id="seeAll"
            defaultMessage="See all"
            />
            </p>
          </button>
        </div>
        <div className="examinationsCard">
          <img src={examinations} alt="" />
          <p>
          <FormattedMessage 
            id="examinationsContent"
            defaultMessage="Here you will have your"
            />
          <br />
          <FormattedMessage 
            id="examinationsContent2"
            defaultMessage="last examinations"
            />
          </p>
        </div>
      </div>
      <div className="healthCurveHead">
        <p>
        <FormattedMessage 
            id="healthCurve"
            defaultMessage="Health Curve"
            />
        </p>
        <div className="filter">
          <button>
          <FormattedMessage 
            id="filterDay"
            defaultMessage="D"
            />
          </button>
          <button>
          <FormattedMessage 
            id="filterWeek"
            defaultMessage="W"
            />
          </button>
          <button>
          <FormattedMessage 
            id="filterMonth"
            defaultMessage="M"
            />
          </button>
          <button>
          <FormattedMessage 
            id="filterYear"
            defaultMessage="Y"
            />
          </button>
        </div>
      </div>
      <div className="healthcurve">
        <img src={healthcurve} alt="" />
        <div className="ln"></div>
        <Line data={data} options={options} className="line" />
      </div>
      <form className="healthCurveFooter">
        <div className="check">
          <input className="notChecked" type="radio" name="dataType" id="Average" />
          <label htmlFor="Average">
          <FormattedMessage 
            id="filterAverage"
            defaultMessage="Average"
            />
          </label>
        </div>
        <div className="check">
          <input className="checked" type="radio" name="dataType" id="MyData" />
          <label htmlFor="MyData">
          <FormattedMessage 
            id="filterMyData"
            defaultMessage="My Data"
            />
          </label>
        </div>
      </form>
      <div className="nearestTreatmentAndAdviceArea">
        <div className="nearestTreatment">
          <h2 className="title">
          <FormattedMessage 
            id="nearestTreatment"
            defaultMessage="Nearest Treatment"
            />
          </h2>
          <div className="monthYearArrow">
            <h3 className="MonthYear">August 2023</h3>
            <img src={Arrow} alt="arrow-to-right" />
          </div>
          <div className="sliderBack">
            <img src={leftArrow} alt="left Arrow" />
            <p className="dayofWeek">26</p>
            <p className="dayofWeek">27</p>
            <p className="dayofWeek">28</p>
            <p className="dayofWeek">29</p>
            <p className="dayofWeek">30</p>
            <p className="dayofWeek">31</p>
            <p className="dayofWeek">01</p>
            <img src={rightArrow} alt="right Arrow" />
          </div>
        </div>
        <div className="advice">
          <h2 className="title">
          <FormattedMessage 
            id="advice"
            defaultMessage="Advice"
            />
          </h2>
          <p className="aboutAdvice">
          <FormattedMessage 
            id="aboutAdvice"
            defaultMessage="The clinical service is consultant-led and
            available on a 24-hour basis"
            />
          </p>
          <h3 className="moreInfo">
          <FormattedMessage 
            id="moreInfo"
            defaultMessage="More info via the link"
            />
          </h3>
          <a href="https://www.heftpathology.com/Haematology-Clinical-Advice" className="infoLink">
          <FormattedMessage 
            id="Info"
            defaultMessage="Info"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DashboardInformation;
