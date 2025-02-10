import React from "react";
import { useNavigate } from "react-router-dom";
import DailyRechargeBonus from "../components/DailyRechargeBonus";
import '../css/pageActivitybf.css'

const DailyTask = () => {
  const navigate = useNavigate();

  return (
    <div id="app" data-v-app="">
      <div
        data-v-d7213382=""
        className="dailySignIn__container"
        style={{ fontFamily: "Roboto, Inter, sans-serif" }}
      >
        {/* Navbar */}
        <div data-v-12a80a3e="" data-v-d7213382="" className="navbar">
          <div data-v-12a80a3e="" className="navbar-fixed">
            <div data-v-12a80a3e="" className="navbar__content">
              <div
                data-v-12a80a3e=""
                className="navbar__content-left"
                onClick={() => navigate(-1)}
              >
                <i className="van-badge__wrapper van-icon van-icon-arrow-left"></i>
              </div>
              <div data-v-12a80a3e="" className="navbar__content-center">
                <div data-v-12a80a3e="" className="navbar__content-title"></div>
              </div>
              <div data-v-12a80a3e="" className="navbar__content-right">
                <div
                  data-v-d7213382=""
                  className="navi-record"
                  onClick={() => navigate("/dailytask/record")}
                >
                  <svg data-v-d7213382="" className="svg-icon icon-watchCollection">
                    <use xlinkHref="#icon-watchCollection"></use>
                  </svg>
                  <span data-v-d7213382="">Collection record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Task Banner */}
        <div data-v-d7213382="" className="task-banner">
          <div data-v-d7213382="">
            <p data-v-d7213382="">
              <div data-v-d7213382="" className="banner-title">Activity Award</div>
              <div data-v-d7213382="" className="banner-content">
                <div data-v-d7213382="">
                  Complete weekly/daily tasks to receive rich rewards
                </div>
                <div data-v-d7213382="">
                  Weekly rewards cannot be accumulated to the next week, and daily rewards cannot be accumulated to the next day.
                </div>
              </div>
            </p>
          </div>
        </div>

        {/* Task Panel */}
        <DailyRechargeBonus />



      </div>
    </div>
  );
};

export default DailyTask;
