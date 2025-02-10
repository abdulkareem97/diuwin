import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../images/images/avatar.svg';
import audio from '../images/images/audio.webp';
import iconWallet from '../images/images/icon_wallet.webp';
import kingIcon from '../images/images/king.png';
// import s1 from '../images/images/s1.png';
// import s2 from '../images/images/s2.png';
// import s3 from '../images/images/s3.png';
// import s4 from '../images/images/s4.png';
// import s5 from '../images/images/s5.png';
const s1 = "",s2="",s3="",s4="",s5=""
const Promotion1 = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        id: '',
        phone: '',
        balance: '0.00'
    });
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/webapi/GetUserInfo`);
            const data = await response.json();
            if (data.status === false) {
                unsetCookie();
                return;
            }
            setUserInfo({
                name: data.data.name_user,
                id: data.data.id_user,
                phone: `+91 ${data.data.phone_user.slice(0, 2)}****${data.data.phone_user.slice(-4)}`,
                balance: data.data.money_user
            });
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    const handleLogout = () => {
        setShowLogoutDialog(true);
    };

    const confirmLogout = () => {
        unsetCookie();
        navigate('/login');
    };

    const cancelLogout = () => {
        setShowLogoutDialog(false);
    };

    const unsetCookie = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    };

    return (
        <div id="app">
            <div data-v-8cd483ca="" className="mian page">
                <div data-v-106b99c8="" data-v-8cd483ca="" className="navbar">
                    <div data-v-106b99c8="" className="navbar-left"></div>
                    <div data-v-106b99c8="" className="navbar-title">Mine</div>
                    <div data-v-106b99c8="" className="navbar-right" onClick={() => navigate('/keFuMenu')}>
                        <div data-v-8cd483ca="" data-v-106b99c8="" className="c-row">
                            <img data-v-8cd483ca="" data-v-106b99c8="" src={audio} className="audio" alt="audio" />
                        </div>
                    </div>
                </div>
                <div data-v-8cd483ca="" className="menu-box">
                    <div data-v-8cd483ca="" className="info p-t-30 p-l-30 p-b-30 p-r-20">
                        <div data-v-8cd483ca="" className="c-row c-row-between c-row-middle state-box c-pr" onClick={() => navigate('/myProfile')}>
                            <div data-v-8cd483ca="" className="c-row c-row-middle">
                                <div data-v-8cd483ca="" className="user-img">
                                    <img data-v-8cd483ca="" src={avatar} className="img" alt="avatar" />
                                </div>
                                <div data-v-8cd483ca="" className="p-l-10 infoName">
                                    <div data-v-8cd483ca="" className="name mb3 c-row c-row-middle">{userInfo.name}</div>
                                    <div data-v-8cd483ca="" className="id tag-read mb3">ID: {userInfo.id}</div>
                                    <div data-v-8cd483ca="" className="number mb3">{userInfo.phone}</div>
                                </div>
                            </div>
                            <div data-v-8cd483ca="" className="profile">
                                <i data-v-8cd483ca="" className="van-icon van-icon-arrow" style={{ color: 'rgb(255, 255, 255)', fontSize: '20px' }}></i>
                            </div>
                        </div>
                    </div>
                    <div data-v-8cd483ca="" className="total-box">
                        <div data-v-8cd483ca="" className="infoItem">
                            <div data-v-8cd483ca="" className="c-row c-row-middle">
                                <img data-v-8cd483ca="" width="45px" height="45px" src={iconWallet} className="walletImg" alt="wallet" />
                                <div data-v-8cd483ca="" className="p-l-15">
                                    <div data-v-8cd483ca="" className="des u-m-b-15">Balance</div>
                                    <div data-v-8cd483ca="" className="c-row c-row-middle c-row-center p-t-5">
                                        <div data-v-8cd483ca="" className="money">
                                            <div data-v-8cd483ca="">
                                                {isBalanceVisible ? (
                                                    <span data-v-8cd483ca="" className="txt" id="Balance">₹ {userInfo.balance}</span>
                                                ) : (
                                                    <span data-v-8cd483ca="" className="txt1" id="balance_show">******</span>
                                                )}
                                            </div>
                                        </div>
                                        <div data-v-8cd483ca="">
                                            <img data-v-8cd483ca="" width="20px" height="20px" src={kingIcon} className="img m-l-10 reload_money" alt="reload" />
                                        </div>
                                    </div>
                                </div>
                                <span toggle="#password-field" className="fa fa-fw fa-eye field_icon toggle-password" style={{ margin: '8px', alignSelf: 'end', marginLeft: 'auto' }} onClick={toggleBalanceVisibility}></span>
                            </div>
                            <div data-v-8cd483ca="" className="c-row c-row-between m-t-10 infoBtn">
                                <div data-v-8cd483ca="" className="item c-row c-row-center" onClick={() => navigate('/wallet/withdrawal')}>
                                    <div data-v-8cd483ca="" className="li">Withdraw</div>
                                </div>
                                <div data-v-8cd483ca="" className="item c-row c-row-center" onClick={() => navigate('/wallet/recharge')}>
                                    <div data-v-8cd483ca="" className="li">Recharge</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-8cd483ca="" className="promote c-row c-row-middle-center" onClick={() => navigate('/promotion')}>
                        <div data-v-8cd483ca="" className="c-row c-row-middle">
                            <div data-v-8cd483ca="">Promotion</div>
                        </div>
                        <img data-v-8cd483ca="" width="30px" height="15px" src={kingIcon} className="img" alt="promotion" />
                    </div>
                    <div data-v-21f3500a="" data-v-8cd483ca="" className="list">
                        <div data-v-21f3500a="" className="item c-row c-row-between" onClick={() => navigate('/mian/forgot')}>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <img data-v-21f3500a="" width="24px" height="24px" src={s1} className="img" alt="security" />
                                <span data-v-21f3500a="" className="name">Security and Safety</span>
                            </div>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <i data-v-21f3500a="" className="van-icon van-icon-arrow" style={{ color: 'rgb(84, 94, 104)', fontSize: '20px' }}></i>
                            </div>
                        </div>
                        <div data-v-21f3500a="" className="item c-row c-row-between" onClick={() => navigate('/redenvelopes')}>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <img data-v-21f3500a="" width="24px" height="24px" src={s2} className="img" alt="redeem" />
                                <span data-v-21f3500a="" className="name">Redeem Code</span>
                            </div>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <i data-v-21f3500a="" className="van-icon van-icon-arrow" style={{ color: 'rgb(84, 94, 104)', fontSize: '20px' }}></i>
                            </div>
                        </div>
                        <div data-v-21f3500a="" className="item c-row c-row-between" onClick={() => navigate('/newtutorial')}>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <img data-v-21f3500a="" width="24px" height="24px" src={s3} className="img" alt="guide" />
                                <span data-v-21f3500a="" className="name">Guide for beginners</span>
                            </div>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <i data-v-21f3500a="" className="van-icon van-icon-arrow" style={{ color: 'rgb(84, 94, 104)', fontSize: '20px' }}></i>
                            </div>
                        </div>
                        <div data-v-21f3500a="" className="item c-row c-row-between" onClick={() => navigate('/about')}>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <img data-v-21f3500a="" width="24px" height="24px" src={s4} className="img" alt="about" />
                                <span data-v-21f3500a="" className="name">About Us</span>
                            </div>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <i data-v-21f3500a="" className="van-icon van-icon-arrow" style={{ color: 'rgb(84, 94, 104)', fontSize: '20px' }}></i>
                            </div>
                        </div>
                        <div data-v-21f3500a="" className="item c-row c-row-between" onClick={() => navigate('/keFuMenu')}>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <img data-v-21f3500a="" width="24px" height="24px" src={s5} className="img" alt="support" />
                                <span data-v-21f3500a="" className="name">Customer Support Online 24/7</span>
                            </div>
                            <div data-v-21f3500a="" className="c-row c-row-middle">
                                <i data-v-21f3500a="" className="van-icon van-icon-arrow" style={{ color: 'rgb(84, 94, 104)', fontSize: '20px' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-8cd483ca="" className="logout-btn m-t-40">
                    <div data-v-8cd483ca="" className="gradient">
                        <button data-v-8cd483ca="" className="logout van-button van-button--default van-button--normal van-button--block van-button--round" style={{ color: 'rgb(255, 255, 255)', background: 'rgb(242, 65, 59)', borderColor: 'rgb(242, 65, 59)' }} onClick={handleLogout}>
                            <div data-v-8cd483ca="" className="van-button__content">
                                <span data-v-8cd483ca="" className="van-button__text">Logout</span>
                            </div>
                        </button>
                    </div>
                </div>
                {showLogoutDialog && (
                    <div className="van-overlay" style={{ zIndex: 2001 }}>
                        <div role="dialog" className="van-dialog" style={{ zIndex: 2002 }} aria-labelledby="Lời nhắc">
                            <div className="van-dialog__header">Reminder</div>
                            <div className="van-dialog__content">
                                <div className="van-dialog__message van-dialog__message--has-title">Do you want to sign out?</div>
                            </div>
                            <div className="van-hairline--top van-dialog__footer van-dialog__footer--buttons">
                                <button className="van-button van-button--default van-button--large van-dialog__cancel" onClick={cancelLogout}>
                                    <div className="van-button__content">
                                        <span className="van-button__text">Cancel</span>
                                    </div>
                                </button>
                                <button className="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left" onClick={confirmLogout}>
                                    <div className="van-button__content">
                                        <span className="van-button__text">Confirm</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Promotion1;