import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rechargeIcon from '../images/assets/png/rechargeIcon-f0c488bf.png';
import widthdrawBlue from '../images/assets/png/widthdrawBlue-8b2a5474.png';
import rechargeHistory from '../images/assets/png/rechargeHistory-65bfbdc9.png';
import withdrawHistory from '../images/assets/png/withdrawHistory-572eb30b.png';
import LoadingComponent from '../components/LoadingComponent';
import '../css/pageWallet85.css'
import axios from 'axios';



// Function to format numbers in Indian format
const formatIndianNumber = (num) => {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(num);
};

// User info types
const userInfoTypes = {
  phoneNumber: 'phone_user',
  username: 'name_user',
  balance: 'money_user',
  userId: 'id_user',
  referCode: 'code',
  betAmount: 'total_bet_amount',
  total_withdraw: 'total_withdraw',
  total_recharge: 'total_recharge',
  level: 'level',
};



const Wallet = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [userDataFull, setUserDataFull] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/webapi/GetUserInfo`);
      setUserData(response?.data?.data);
      setUserDataFull(response?.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUser();
  }, []);

    // Update DOM elements with user data
    useEffect(() => {
      if (userData && userDataFull) {
        // Update total balance
        const moneyAmountDisplay = document.getElementById('money_amount_display');
        if (moneyAmountDisplay) {
          moneyAmountDisplay.textContent = `₹${formatIndianNumber(userData[userInfoTypes.balance])}`;
        }
  
        // Update main wallet balance
        const mainWalletAmount = document.querySelector('.progressBarsL h3');
        if (mainWalletAmount) {
          mainWalletAmount.textContent = `₹${formatIndianNumber(userData[userInfoTypes.balance])}`;
        }
  
        // Update total withdraw amount and percentage
        const totalWithdrawAmountDisplay = document.getElementById('total_withdraw_amount_display');
        const totalWithdrawAmountPer = document.getElementById('total_withdraw_amount_per');
        const totalWithdrawAmountPie = document.getElementById('total_withdraw_amount_pie');
        if (totalWithdrawAmountDisplay && totalWithdrawAmountPer && totalWithdrawAmountPie) {
          totalWithdrawAmountDisplay.textContent = `₹${formatIndianNumber(userDataFull.totalWithdraw)}`;
          totalWithdrawAmountPer.textContent = `${Math.round((userDataFull.totalWithdraw / userData[userInfoTypes.balance]) * 100)}%`;
          totalWithdrawAmountPie.style.strokeDasharray = `${(userDataFull.totalWithdraw / userData[userInfoTypes.balance]) * 3140}px, 3140px`;
        }
  
        // Update total deposit amount and percentage
        const totalDepositAmountDisplay = document.getElementById('total_deposit_amount_display');
        const totalDepositAmountPer = document.getElementById('total_deposit_amount_per');
        const totalDepositAmountPie = document.getElementById('total_deposit_amount_pie');
        if (totalDepositAmountDisplay && totalDepositAmountPer && totalDepositAmountPie) {
          totalDepositAmountDisplay.textContent = `₹${formatIndianNumber(userDataFull.totalRecharge)}`;
          totalDepositAmountPer.textContent = `${Math.round((userDataFull.totalRecharge / userData[userInfoTypes.balance]) * 100)}%`;
          totalDepositAmountPie.style.strokeDasharray = `${(userDataFull.totalRecharge / userData[userInfoTypes.balance]) * 3140}px, 3140px`;
        }
  
        // Update game list balances
        const gameMoneyElements = document.querySelectorAll('.gameList .money');
        gameMoneyElements.forEach((element) => {
          element.textContent = `₹${formatIndianNumber(userData[userInfoTypes.balance])}`;
        });
      }
    }, [userData, userDataFull]);


  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div id="app" data-v-app="">
      <LoadingComponent />
      <div data-v-0dabd3fc="" className="wallet-container" style={{ '--f13b4d11-currentFontFamily': "'Roboto', 'Inter', sans-serif" }}>
        <div data-v-0dabd3fc="" className="wallet-container-header">
          <div data-v-12a80a3e="" data-v-0dabd3fc="" className="navbar main">
            <div data-v-12a80a3e="" className="navbar-fixed">
              <div data-v-12a80a3e="" className="navbar__content">
                <div data-v-12a80a3e="" className="navbar__content-left" onClick={() => navigate(-1)}>
                  <i data-v-12a80a3e="" className="van-badge__wrapper van-icon van-icon-arrow-left"></i>
                </div>
                <div data-v-12a80a3e="" className="navbar__content-center">
                  <div data-v-12a80a3e="" className="navbar__content-title">Wallet</div>
                </div>
                <div data-v-12a80a3e="" className="navbar__content-right"></div>
              </div>
            </div>
          </div>
          <div data-v-0dabd3fc="" className="wallet-container-header-belly">
            <svg data-v-0dabd3fc="" className="svg-icon icon-wallet1">
              <use xlinkHref="#icon-wallet1"></use>
            </svg>
            <div data-v-0dabd3fc="" id="money_amount_display">₹0.00</div>
            <span data-v-0dabd3fc="">Total balance</span>
          </div>
        </div>
        <div data-v-0dabd3fc="" className="wallet-container-content">
          <div data-v-0dabd3fc="" className="container">
            <div data-v-0dabd3fc="" className="progressBars">
              <div data-v-0dabd3fc="" className="progressBarsL">
                <div data-v-0dabd3fc="" className="van-circle">
                  <svg viewBox="0 0 1100 1100">
                    <path className="van-circle__layer" d="M 550 550 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000" style={{ fill: 'none', strokeWidth: '100px' }}></path>
                    <path d="M 550 550 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000" className="van-circle__hover" style={{ strokeWidth: '101px', strokeLinecap: 'butt', strokeDasharray: '0px, 3140px' }} id="total_withdraw_amount_pie"></path>
                  </svg>
                  <div className="van-circle__text" id="total_withdraw_amount_per">0%</div>
                </div>
                <h3 data-v-0dabd3fc="">₹0.00</h3>
                <span data-v-0dabd3fc="">Main wallet</span>
              </div>
              <div data-v-0dabd3fc="" className="progressBarsR">
                <div data-v-0dabd3fc="" className="van-circle">
                  <svg viewBox="0 0 1100 1100">
                    <path className="van-circle__layer" d="M 550 550 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000" style={{ fill: 'none', strokeWidth: '100px' }}></path>
                    <path d="M 550 550 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000" className="van-circle__hover" style={{ strokeWidth: '101px', strokeLinecap: 'butt', strokeDasharray: '0px, 3140px' }} id="total_deposit_amount_pie"></path>
                  </svg>
                  <div className="van-circle__text" id="total_deposit_amount_per">0%</div>
                </div>
                <h3 data-v-0dabd3fc="" id="total_deposit_amount_display">₹0.00</h3>
                <span data-v-0dabd3fc="">3rd party wallet</span>
              </div>
            </div>
            <div data-v-0dabd3fc="" className="recycleBtnD" onClick={() => handleNavigation('/wallet/recharge')}>
              <button data-v-0dabd3fc="" className="recycleBtn">Recharge Now</button>
            </div>
            <div data-v-0dabd3fc="" className="userDetail">
              <div data-v-0dabd3fc="" onClick={() => handleNavigation('/wallet/recharge')}>
                <div data-v-0dabd3fc="" className="imgD">
                  <img data-v-0dabd3fc="" src={rechargeIcon} alt="Recharge" />
                </div>
                <span data-v-0dabd3fc="">Deposit</span>
              </div>
              <div data-v-0dabd3fc="" onClick={() => handleNavigation('/wallet/withdrawal')}>
                <div data-v-0dabd3fc="" className="imgD">
                  <img data-v-0dabd3fc="" src={widthdrawBlue} alt="Withdraw" />
                </div>
                <span data-v-0dabd3fc="">Withdraw</span>
              </div>
              <div data-v-0dabd3fc="" onClick={() => handleNavigation('/wallet/rechargerecord')}>
                <div data-v-0dabd3fc="" className="imgD">
                  <img data-v-0dabd3fc="" src={rechargeHistory} alt="Deposit History" />
                </div>
                <span data-v-0dabd3fc="">Deposit history</span>
              </div>
              <div data-v-0dabd3fc="" onClick={() => handleNavigation('/wallet/withdrawalrecord')}>
                <div data-v-0dabd3fc="" className="imgD">
                  <img data-v-0dabd3fc="" src={withdrawHistory} alt="Withdrawal History" />
                </div>
                <span data-v-0dabd3fc="">Withdrawal history</span>
              </div>
            </div>
          </div>
          <div data-v-0dabd3fc="" className="gameList">
            {[
              { icon: 'icon-Lottery', name: 'Lottery', amount: '0.00' },
              { icon: 'icon-TB_Chess', name: 'TB_Chess', amount: '0.00' },
              { icon: 'icon-Wickets9', name: 'Wickets9', amount: '0.00' },
              { icon: 'icon-JILI', name: 'JILI', amount: '0.00' },
              { icon: 'icon-PG', name: 'PG', amount: '0.00' },
              { icon: 'icon-DG', name: 'DG', amount: '0.00' },
              { icon: 'icon-MG', name: 'MG', amount: '0.00' },
              { icon: 'icon-JDB', name: 'JDB', amount: '0.00' },
              { icon: 'icon-SaBa', name: 'SaBa', amount: '0.00' },
              { icon: 'icon-CQ9', name: 'CQ9', amount: '0.00' },
              { icon: 'icon-TB', name: 'TB', amount: '0.00' },
              { icon: 'icon-EVO_Video', name: 'EVO_Video', amount: '0.00' },
              { icon: 'icon-AG_Video', name: 'AG_Video', amount: '0.00' },
              { icon: 'icon-Card365', name: 'Card365', amount: '0.00' },
              { icon: 'icon-V8Card', name: 'V8Card', amount: '0.00' },
              { icon: 'icon-SEXY_Video', name: 'SEXY_Video', amount: '0.00' },
            ].map((game, index) => (
              <div key={index} data-v-0dabd3fc="" className="box">
                <svg data-v-0dabd3fc="" className={`svg-icon ${game.icon}`}>
                  <use xlinkHref={`#${game.icon}`}></use>
                </svg>
                <h3 data-v-0dabd3fc="" className="money">{game.amount}</h3>
                <span data-v-0dabd3fc="">{game.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Wallet
