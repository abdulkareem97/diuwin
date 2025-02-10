import React from 'react'
import '../css/indexC4Home.css'
import '../css/pageHome502.css'
import '../css/pageHome77.css'

import LoadingComponent from '../components/LoadingComponent'
import h5setting from '../images/h5Setting.png'
import MySwiperComponent from '../components/MySwiperComponent'
import GameTabs from '../components/GameTab'
import PwaButton from '../components/PwaButton'
import GameContent from '../components/GameContent'
const Home = () => {
    return (
        <div id="app" data-v-app="">
            <LoadingComponent />
            <div className="content-daman content">

                <div data-v-12a80a3e="" class="navbar">
                    <div data-v-12a80a3e="" class="navbar-fixed">
                        <div data-v-12a80a3e="" class="navbar__content">
                            <div data-v-12a80a3e="" class="navbar__content-left"><img src={h5setting} alt="" />
                            </div>
                            <div data-v-12a80a3e="" class="navbar__content-center">
                                <div data-v-12a80a3e="" class="navbar__content-title"></div>
                            </div>
                            <div data-v-12a80a3e="" class="navbar__content-right">
                                <div data-v-3dc40049="" class="nav-right">


                                    <svg data-v-3dc40049="" class="svg-icon icon-lottyWallet">
                                        <use href="#icon-lottyWallet"></use>
                                    </svg>
                                    <div data-v-3dc40049="">
                                        <div data-v-3dc40049="" class="text">Balance</div>
                                        <div data-v-3dc40049="" class="money" onclick="location.href = '/wallet/recharge'">₹ Recharge</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MySwiperComponent />


                <div className="noticeBar__container">
                    <svg className="svg-icon icon-noticeBarSpeaker">
                        <use xlinkHref="#icon-noticeBarSpeaker" />
                    </svg>
                    <div className="noticeBar__container-body">
                        <div className="noticeBar__container-body-text">
                            Welcome to the 77bet! Greetings, Gamers and Enthusiasts! 77bet is more
                            than just a platform for gaming. We invite you to join us, you'll find a
                            variety of games, promo, bonus, luxury gold awards, Register now and win.
                        </div>
                    </div>
                    <button className="hotIcon">Detail</button>
                </div>

                


                <GameTabs />

              <PwaButton />

              <GameContent />
            </div>
        </div>
    )
}

export default Home
