import React, { useEffect, useState } from 'react';
import avatarImg from '../images/assets/png/20-a58f23bf.png';
// import editPencil from '../images/assets/png/editPencil-c89ee923.png';
import avatarPlaceholder from '../images/assets/png/avatar-2f23f3bd.png';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import tipImage from "../images/assets/png/tip-2298bb83.png";
const editPencil = ""
const UserInfoComponent = () => {
    const navigate = useNavigate();

    const [dialogActive, setDialogActive] = useState(false);

    const deleteAllCookies = () => {
        document.cookie.split(";").forEach((cookie) => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        });
    };

    const logoutHandler = () => {
        setDialogActive(true);
    };

    const confirmLogout = () => {
        deleteAllCookies();
        navigate("/login");
    };


    const [userData, setUserData] = useState(null);

    // const [balance, setBalance] = useState('Loading..');
    const [balance, setBalance] = useState('₹ 7463.79');

    const handleReloadBalance = () => {
        // Implement balance reload logic
        setBalance('Updated Balance');
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("/api/webapi/GetUserInfo");
                // if (userData?.level === 1) {
                //     $("#admin_zone").show();
                //  }
                setUserData(response?.data?.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    const setUserInfoDisplay = (userInfoType, prefix) => {
        if (!userData) return "Loading...";
        return prefix ? prefix(userData[userInfoType]) : userData[userInfoType];
    };

    return (
        <>

            <div className="userInfo__container" data-v-5bd44e74="" style={{ "--f13b4d11-currentFontFamily": "'Roboto', 'Inter', sans-serif" }}>
                <div className="userInfo__container-content" data-v-5bd44e74="">
                    <div className="userInfo__container-content-wrapper" data-v-5bd44e74="">
                        <div className="userInfo__container-content__avatar" data-v-5bd44e74="" >
                            <div onClick={() => (window.location.href = 'settings/change_avatar')} id="avatar_display" className="userAvatar" data-v-5bd44e74="" >
                                <img src={userData ? `/assets/png/${userData.avatar}` : avatarImg} alt="User Avatar" />
                            </div>
                        </div>
                        <div className="userInfo__container-content__name" data-v-5bd44e74="" >
                            <div className="userInfo__container-content-nickname" data-v-5bd44e74="" >
                                <h3 id="username_display" data-v-5bd44e74="">{setUserInfoDisplay("name_user")}</h3>
                                <div className={userData ? `n${userData.vip_level}` : "n0"} data-v-5bd44e74=""></div>
                                <img className="editPencil" src={editPencil} style={{ display: "none" }} alt="Edit" data-v-5bd44e74="" />
                            </div>
                            <div className="userInfo__container-content-uid" data-v-5bd44e74="">
                                <span>UID</span>
                                <span>|</span>
                                <span id="phone_number_display" data-v-5bd44e74="">{setUserInfoDisplay("id_user")}</span>
                                <svg className="svg-icon icon-copy" data-v-5bd44e74="" >
                                    <use xlinkHref="#icon-copy"></use>
                                </svg>
                            </div>
                            <div className="userInfo__container-content-balance" data-v-5bd44e74="">
                                <span>Balance:</span>
                                <span id="money_amount_display" data-v-5bd44e74="" >{setUserInfoDisplay("money_user", value => `₹ ${value}`)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {userData?.level === 1 && <div id="admin_zone" data-v-5bd44e74="" style={{ display: "block" }}>Admin Zone</div>}
                <div className="ar-loading-view" data-v-5bd44e74="" style={{ display: userData ? "none" : "block" }}></div>
            </div>


            <div
                data-v-a78765c7=""
                className="userinfo-content"
                style={{ "--f13b4d11-currentFontFamily": "'Roboto', 'Inter', sans-serif" }}
            >
                <div data-v-7d799898="" data-v-a78765c7="" className="totalSavings__container">
                    <div data-v-7d799898="" className="totalSavings__container-header">
                        <div data-v-7d799898="" className="totalSavings__container-header-box ar-1px-b">
                            <div data-v-7d799898="" className="totalSavings__container-header__title">
                                <span data-v-7d799898="">Total balance</span>
                            </div>
                            <p data-v-7d799898="" className="totalSavings__container-header__subtitle">
                                <span data-v-7d799898="" id="money_amount_display">{balance}</span>
                                <svg
                                    data-v-7d799898=""
                                    className="svg-icon icon-refreshBalance"
                                    id="reload_money_btn"
                                    onClick={handleReloadBalance}
                                >
                                    <use xlinkHref="#icon-refreshBalance"></use>
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div data-v-7d799898="" className="totalSavings__container-content">
                        <NavLink data-v-7d799898="" className="totalSavings__container-content-item" to="/wallet/">
                            <div data-v-7d799898="">
                                <svg data-v-7d799898="" className="svg-icon icon-wallets">
                                    <use xlinkHref="#icon-wallets"></use>
                                </svg>
                                <span data-v-7d799898="">Wallet</span>
                            </div>
                        </NavLink>
                        <NavLink data-v-7d799898="" className="totalSavings__container-content-item" to="/wallet/recharge">
                            <div data-v-7d799898="">
                                <svg data-v-7d799898="" className="svg-icon icon-rechargeIcon">
                                    <use xlinkHref="#icon-rechargeIcon"></use>
                                </svg>
                                <span data-v-7d799898="">Deposit</span>
                            </div>
                        </NavLink>
                        <NavLink data-v-7d799898="" className="totalSavings__container-content-item" to="/wallet/withdrawal">
                            <div data-v-7d799898="">
                                <svg data-v-7d799898="" className="svg-icon icon-widthdrawBlue">
                                    <use xlinkHref="#icon-widthdrawBlue"></use>
                                </svg>
                                <span data-v-7d799898="">Withdraw</span>
                            </div>
                        </NavLink>
                        <NavLink data-v-7d799898="" className="totalSavings__container-content-item" to="/vip">
                            <div data-v-7d799898="">
                                <svg data-v-7d799898="" className="svg-icon icon-VipIcon">
                                    <use xlinkHref="#icon-VipIcon"></use>
                                </svg>
                                <span data-v-7d799898="">VIP</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div data-v-acd6d46f="" data-v-a78765c7="" className="financialServices__container">
                    <div data-v-acd6d46f="" className="financialServices__container-footer">
                        <div data-v-acd6d46f=""><svg data-v-acd6d46f="" className="svg-icon icon-vault">
                            <use xlinkHref="#icon-vault"></use>
                        </svg>
                            <div data-v-acd6d46f="">
                                <div data-v-acd6d46f=""><span data-v-acd6d46f="">Safe</span>
                                    <div data-v-acd6d46f="" className="financialServices__container-footer-des"><svg data-v-acd6d46f=""
                                        className="svg-icon icon-vaultSmallIcon">
                                        <use xlinkHref="#icon-vaultSmallIcon"></use>
                                    </svg>
                                        <h4 data-v-acd6d46f="">₹0.00</h4><i data-v-acd6d46f=""
                                            className="van-badge__wrapper van-icon van-icon-arrow"
                                            style={{ color: "var(--text_color_L2)" }}></i>
                                    </div>
                                </div>
                                <span data-v-acd6d46f="">Daily interest rate 0.1% + VIP extra income safe, calculated every 1
                                    minute</span>
                            </div>
                        </div>
                    </div>
                    <div data-v-acd6d46f="" className="financialServices__container-box">
                        <div data-v-acd6d46f="" onClick={() => navigate("/game_history")}> <svg data-v-acd6d46f=""
                            className="svg-icon icon-betHistory">
                            <use xlinkHref="#icon-betHistory"></use>
                        </svg>
                            <div data-v-acd6d46f="" className="financialServices__container-box-para">
                                <h3 data-v-acd6d46f="">Game History</h3><span data-v-acd6d46f="">My game history</span>
                            </div>
                        </div>
                        <div data-v-acd6d46f="" onClick={() => navigate("/wallet/transactionhistory")}> <svg data-v-acd6d46f=""
                            className="svg-icon icon-tradeHistory">
                            <use xlinkHref="#icon-tradeHistory"></use>
                        </svg>
                            <div data-v-acd6d46f="" className="financialServices__container-box-para">
                                <h3 data-v-acd6d46f="">Transaction</h3><span data-v-acd6d46f="">My transaction history</span>
                            </div>
                        </div>
                        <div data-v-acd6d46f="" onClick={() => navigate("/wallet/rechargerecord")}> <svg data-v-acd6d46f=""
                            className="svg-icon icon-rechargeHistory">
                            <use xlinkHref="#icon-rechargeHistory"></use>
                        </svg>
                            <div data-v-acd6d46f="" className="financialServices__container-box-para">
                                <h3 data-v-acd6d46f="">Deposit</h3><span data-v-acd6d46f="">My deposit history</span>
                            </div>
                        </div>
                        <div data-v-acd6d46f="" onClick={() => navigate("/wallet/withdrawalrecord")}> <svg data-v-acd6d46f=""
                            className="svg-icon icon-myWithdrawHistory">
                            <use xlinkHref="#icon-myWithdrawHistory"></use>
                        </svg>
                            <div data-v-acd6d46f="" className="financialServices__container-box-para">
                                <h3 data-v-acd6d46f="">Withdraw</h3><span data-v-acd6d46f="">My withdraw history</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-a30d19b1="" data-v-a78765c7="" className="settingPanel__container">
                    <div data-v-a30d19b1="" className="settingPanel__container-items">
                        <a data-v-a30d19b1="" className="settingPanel__container-items__item ar-1px-b" href="/newimage/77bet.apk">
                            <div data-v-a30d19b1="" className="settingPanel__container-items__title">
                                <svg data-v-a30d19b1="" className="svg-icon icon-notification">
                                    <use xlinkHref="#icon-notification"></use>
                                </svg>
                                <span data-v-a30d19b1="">Download app</span>
                            </div>
                            <div data-v-a30d19b1="" className="settingPanel__container-items-right">
                                <h5 data-v-a30d19b1=""></h5>
                                <span data-v-a30d19b1="" style={{ display: "none" }}>English</span>
                                <i data-v-a30d19b1="" className="van-badge__wrapper van-icon van-icon-arrow" style={{ color: "#666" }}></i>
                            </div>
                        </a>

                        <div data-v-a30d19b1="" className="settingPanel__container-items__item ar-1px-b" onClick={() => navigate("/redenvelopes")}>
                            <div data-v-a30d19b1="" className="settingPanel__container-items__title">
                                <svg data-v-a30d19b1="" className="svg-icon icon-gifts">
                                    <use xlinkHref="#icon-gifts"></use>
                                </svg>
                                <span data-v-a30d19b1="">Gifts</span>
                            </div>
                        </div>

                      {userData?.level === 1 &&   <div id="admin_zone" data-v-a30d19b1="" className="settingPanel__container-items__item ar-1px-b"  onClick={() => navigate("/admin/manager/index")}>
                            <div data-v-a30d19b1="" className="settingPanel__container-items__title">
                                <svg data-v-a30d19b1="" className="svg-icon icon-tournament">
                                    <use xlinkHref="#icon-tournament"></use>
                                </svg>
                                <span data-v-a30d19b1="">Admin Zone</span>
                            </div>
                        </div>}

                        <div data-v-a30d19b1="" className="settingPanel__container-items__item ar-1px-b" onClick={() => navigate("/mian/game_statistics")}>
                            <div data-v-a30d19b1="" className="settingPanel__container-items__title">
                                <svg data-v-a30d19b1="" className="svg-icon icon-statsIcon">
                                    <use xlinkHref="#icon-statsIcon"></use>
                                </svg>
                                <span data-v-a30d19b1="">Game statistics</span>
                            </div>
                        </div>

                        <div data-v-a30d19b1="" className="settingPanel__container-items__item ar-1px-b">
                            <div data-v-a30d19b1="" className="settingPanel__container-items__title">
                                <svg data-v-a30d19b1="" className="svg-icon icon-language">
                                    <use xlinkHref="#icon-language"></use>
                                </svg>
                                <span data-v-a30d19b1="">Language</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-159bf81f="" data-v-a78765c7="" className="serviceCenter-wrap">
                    <div data-v-159bf81f="" className="serviceCenter__container">
                        <h1 data-v-159bf81f="">Service center</h1>
                        <div data-v-159bf81f="" className="serviceCenter__container-items">
                            {[
                                { href: "/settings", icon: "#icon-settingCenter", text: "Settings" },
                                { href: "/feedback", icon: "#icon-feedback", text: "Feedback" },
                                { href: "/notification", icon: "#icon-notificationCenter", text: "Notification" },
                                { href: "/support", icon: "#icon-server", text: "24/7 Customer service" },
                                { href: "/guide", icon: "#icon-guide", text: "Beginner's Guide" },
                                { href: "/about", icon: "#icon-about", text: "About us" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    data-v-159bf81f=""
                                    className="serviceCenter__container-items__item"
                                    onClick={() => navigate(item.href)}
                                >
                                    <svg data-v-159bf81f="" className="svg-icon">
                                        <use xlinkHref={item.icon}></use>
                                    </svg>
                                    <span data-v-159bf81f="">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-v-159bf81f="" className="serviceCenter-wrap-header">
                        <button data-v-159bf81f="" onClick={logoutHandler}>
                            <svg data-v-159bf81f="" className="svg-icon">
                                <use xlinkHref="#icon-logout"></use>
                            </svg>
                            Log out
                        </button>
                    </div>
                    {dialogActive && (
                        <div data-v-3e71d3da="" data-v-159bf81f="" className="dialog active">
                            <div data-v-3e71d3da="" className="dialog__container" role="dialog" tabIndex="0">
                                <div data-v-3e71d3da="" className="dialog__container-img">
                                    <img data-v-3e71d3da="" alt="Tip" src={tipImage} />
                                </div>
                                <div data-v-3e71d3da="" className="dialog__container-title">
                                    <h1 data-v-3e71d3da="">Do you want to log out?</h1>
                                </div>
                                <div data-v-3e71d3da="" className="dialog__container-footer">
                                    <button data-v-3e71d3da="" onClick={confirmLogout}>Confirm</button>
                                    <button data-v-3e71d3da="" onClick={() => setDialogActive(false)}>Cancel</button>
                                </div>
                            </div>
                            <div data-v-3e71d3da="" className="dialog__outside"></div>
                        </div>
                    )}
                </div>
            </div>




        </>
    );
};

export default UserInfoComponent;
