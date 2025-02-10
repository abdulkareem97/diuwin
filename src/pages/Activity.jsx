import React from 'react'
import Banner1 from '../images/newimage/Banner_1.png';
import Banner2 from '../images/newimage/Banner_2.png';
import Banner3 from '../images/newimage/Banner_3.png';
import Banner4 from '../images/newimage/Banner_4.jpg';
import Banner5 from '../images/newimage/Banner_5.jpg';
import Banner6 from '../images/newimage/Banner_6.jpg';
import Banner7 from '../images/newimage/Banner_7.jpg';
import Banner8 from '../images/newimage/Banner_8.jpg';
import h5setting from '../images/h5Setting.png'
import signInBanner from '../images/assets/png/signInBanner-33f86d3f.png'
import giftRedeem from '../images/assets/png/giftRedeem-45917887.png'
import '../css/pageActivitybf.css'
import { NavLink } from "react-router-dom";


const Activity = () => {
  return (
    <div id="app" data-v-app="">
      <div data-v-12a80a3e="" data-v-214b87c9="" className="navbar main">
        <div data-v-12a80a3e="" className="navbar-fixed">
          <div data-v-12a80a3e="" className="navbar__content">
            <div data-v-12a80a3e="" className="navbar__content-left">
              {/*v-if*/}
            </div>
            <div data-v-12a80a3e="" className="navbar__content-center">
              <div
                data-v-12a80a3e=""
                className="headLogo"
                style={{
                  backgroundImage: 'url("/images/h5setting.png")'
                }}
              ></div>
              <div data-v-12a80a3e="" className="navbar__content-title" />
            </div>
            <div data-v-12a80a3e="" className="navbar__content-right" />
          </div>
        </div>
      </div>
      <div data-v-4a7709f3="" data-v-214b87c9="" className="activity-wrapper">
        <div data-v-4a7709f3="" className="activity-banner">
          <div data-v-4a7709f3="">
            <div data-v-4a7709f3="" className="banner-title">
              Activity
            </div>
            <div data-v-4a7709f3="" className="banner-para">
              Please remember to follow the event page
            </div>
            <div data-v-4a7709f3="" className="banner-para">
              We will launch user feedback activities from time to time
            </div>
          </div>
        </div>
        <div data-v-4a7709f3="" className="activity-panel">
      <div data-v-4a7709f3="" className="activity-panel-header lg4">
        <NavLink to="/dailytask" data-v-4a7709f3="" className="header-item">
          <div data-v-4a7709f3="" className="van-badge__wrapper">
            <div data-v-4a7709f3="" className="a1 bgcontainer" />
          </div>
          <span data-v-4a7709f3="">Activity Award</span>
        </NavLink>

        <NavLink to="/rebate" data-v-4a7709f3="" className="header-item">
          <div data-v-4a7709f3="" className="van-badge__wrapper">
            <div data-v-4a7709f3="" className="a3 bgcontainer" />
          </div>
          <span data-v-4a7709f3="">Betting Rebate</span>
        </NavLink>

        <NavLink to="/jackpot" data-v-4a7709f3="" className="header-item">
          <div data-v-4a7709f3="" className="van-badge__wrapper">
            <div data-v-4a7709f3="" className="a4 bgcontainer" />
          </div>
          <span data-v-4a7709f3="">Super Jackpot</span>
        </NavLink>

        <NavLink to="/newGift" data-v-4a7709f3="" className="header-item">
          <div data-v-4a7709f3="" className="van-badge__wrapper">
            <div data-v-4a7709f3="" className="a5 bgcontainer" />
          </div>
          <span data-v-4a7709f3="">New Member Gift Package</span>
        </NavLink>
      </div>

      <div data-v-4a7709f3="" className="activity-panel-content">
        <NavLink to="/redenvelopes" data-v-4a7709f3="" className="content-title">
          <img
            data-v-4a7709f3=""
            className=""
            data-origin="/images/assets/png/signInBanner-33f86d3f.png"
            src={signInBanner}
            alt="Sign In Banner"
          />
          <div data-v-4a7709f3="" className="content-para">Gifts</div>
          <p data-v-4a7709f3="">Enter the redemption code to receive gift rewards</p>
        </NavLink>

        <NavLink to="/attendance" data-v-4a7709f3="" className="content-title">
          <img
            data-v-4a7709f3=""
            className=""
            data-origin="/images/assets/png/giftRedeem-45917887.png"
            src={giftRedeem}
            alt="Gift Redeem"
          />
          <div data-v-4a7709f3="" className="content-para">Attendance Bonus</div>
          <p data-v-4a7709f3="">The more consecutive days you sign in, the higher the reward will be.</p>
        </NavLink>
      </div>
    </div>
        {/*v-if*/}
        <div data-v-4a7709f3="" role="feed" className="van-list" aria-busy="false">
          <div data-v-4a7709f3="" className="activitySection__container">
            <div
              data-v-4a7709f3=""
              className="box"
              onclick="location.href='/first_deposit_bonus'"
            >
              <img
                data-v-4a7709f3=""
                src={Banner1}
                className="act_0"
              />
              <div data-v-4a7709f3="" className="box-content">
                <div data-v-4a7709f3="" className="box-title">
                  💸 First Deposit Bonus 💸
                </div>
              </div>
            </div>
            <div data-v-4a7709f3="" className="box" onclick="">
              <img
                data-v-4a7709f3=""
                src={Banner2}
                className="act_1"
              />
              <div data-v-4a7709f3="" className="box-content">
                <div data-v-4a7709f3="" className="box-title">
                  🔥 New Hot Offer 🔥
                </div>
              </div>
            </div>
            <div data-v-4a7709f3="" className="box" onclick="">
              <img
                data-v-4a7709f3=""
                src={Banner3}
                className="act_2"
              />
              <div data-v-4a7709f3="" className="box-content">
                <div data-v-4a7709f3="" className="box-title">
                  💰 Get Daily Check-in Bonus 💰
                </div>
              </div>
            </div>
            <div data-v-4a7709f3="" className="box" onclick="">
              <img
                data-v-4a7709f3=""
                src={Banner4}
                className="act_3"
              />
              <div data-v-4a7709f3="" className="box-content">
                <div data-v-4a7709f3="" className="box-title">
                  🚀Aviator Fly High &amp; Win Big🚀
                </div>
              </div>
            </div>
            <div data-v-4a7709f3="" className="box" onclick="">
              <img
                data-v-4a7709f3=""
                src={Banner5}
                className="act_4"
              />
              <div data-v-4a7709f3="" className="box-content">
                <div data-v-4a7709f3="" className="box-title">
                  💰Lucky "10" Days Of Interest💰
                </div>
              </div>
            </div>
            <div data-v-4a7709f3="" className="box" onclick="">
              <img
                data-v-4a7709f3=""
                src={Banner6}
                className="act_5"
              />
              <div data-v-4a7709f3="" className="box-content">
                <div data-v-4a7709f3="" className="box-title">
                  ▶️ Youtube Creative Video ▶️
                </div>
              </div>
            </div>
            <div data-v-4a7709f3="" className="box" onclick="">
              <img
                data-v-4a7709f3=""
                src={Banner7}
                className="act_6"
              />
              <div
                data-v-4a7709f3=""
                className="box-content"
                onclick="location.href='/mystery'"
              >
                <div data-v-4a7709f3="" className="box-title">
                  ❗️ Mysterious Gift ❗️
                </div>
              </div>
            </div>
            <div data-v-4a7709f3="" className="box" onclick="">
              <img
                data-v-4a7709f3=""
                src={Banner8}
                className="act_7"
              />
              <div
                data-v-4a7709f3=""
                className="box-content"
                onclick="location.href='/wingo'"
              >
                <div data-v-4a7709f3="" className="box-title">
                  ✨Member Wingo Winning Streak✨
                </div>
              </div>
            </div>
         
          </div>
          {/**/}
          <div className="van-list__finished-text">No more</div>
          {/**/}
          <div className="van-list__placeholder" />
        </div>
        {/*v-if*/}
        {/*v-if*/}
      </div>
      <br data-v-214b87c9="" />
      <br data-v-214b87c9="" />
      <br data-v-214b87c9="" />
      <br data-v-214b87c9="" />
      {/*online custom service*/}
 
   
    </div>

  )
}

export default Activity
