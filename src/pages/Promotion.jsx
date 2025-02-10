import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import iconService from '../images/assets/png/icon_sevice-8a1f5628.png'; // Adjust the path as necessary
import '../css/pagePromotiond7.css'

const Promotion = () => {
    const userInfoTypes = {
        phoneNumber: "phone_user",
        username: "name_user",
        balance: "money_user",
        userId: "id_user",
        referCode: "code",
        betAmount: "total_bet_amount",
        level: "level",
    };
    const [userData, setUserData] = useState(null);
    const [subordinatesData, setSubordinatesData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
        initSubordinatesData();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await axios.get("/api/webapi/GetUserInfo");
            setUserData(response.data.data);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };

    const initSubordinatesData = async () => {
        try {
            const response = await axios.get("/api/subordinates/summary");
            setSubordinatesData(response.data.data);
        } catch (error) {
            console.error("Failed to fetch subordinates data:", error);
        }
    };

    const handleCopyInvitationCode = () => {
        navigator.clipboard.writeText(userData?.[userInfoTypes.referCode]);
        alert("Copy successful");
    };

    const handleShare = () => {
        const invitationLink = `${window.location.origin}/register?invitationCode=${userData?.[userInfoTypes.referCode]}`;
        navigator.share({
            title: document.title,
            text: "Invite Your friends from this link and claim rewards!",
            url: invitationLink,
        }).then(() => {
            alert("Share successful");
        }).catch(console.error);
    };

    return (
        <div id="app">
            <div data-v-12a80a3e="" data-v-600663f7="" className="navbar white">
                <div data-v-12a80a3e="" className="navbar-fixed">
                    <div data-v-12a80a3e="" className="navbar__content">
                        <div data-v-12a80a3e="" className="navbar__content-left"></div>
                        <div data-v-12a80a3e="" className="navbar__content-center">
                            <div data-v-12a80a3e="" className="navbar__content-title">Agency</div>
                        </div>
                        <div data-v-12a80a3e="" className="navbar__content-right" onClick={() => navigate('/promotion/subordinates')}>
                            <svg data-v-600663f7="" className="svg-icon icon-subordinate">
                                <use xlinkHref="#icon-subordinate"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-6cf5705a="" data-v-600663f7="" className="container">
                <div data-v-6cf5705a="" id="yesterdayCommissionAmount" className="amount">{subordinatesData.totalCommissionsYesterday || 0}</div>
                <div data-v-6cf5705a="" className="amount_txt">Yesterday's total commission</div>
                <div data-v-6cf5705a="" className="tip">Upgrade the level to increase commission income</div>
                <div data-v-6cf5705a="" className="info_content">
                    <div data-v-6cf5705a="" className="info">
                        <div data-v-6cf5705a="" className="head"><svg data-v-6cf5705a="" className="svg-icon icon-directSubordinates">
                            <use xlinkHref="#icon-directSubordinates"></use>
                        </svg> Direct subordinates</div>
                        <div data-v-6cf5705a="" className="line1 r">
                            <div data-v-6cf5705a="" id="noOfRegisteredSubordinates">{subordinatesData.noOfRegisteredSubordinates || 0}</div> number of register
                        </div>
                        <div data-v-6cf5705a="" className="line2 r">
                            <div data-v-6cf5705a="" id="directSubordinatesRechargeQuantity">{subordinatesData.directSubordinatesRechargeQuantity || 0}</div> Deposit number
                        </div>
                        <div data-v-6cf5705a="" className="line3 r">
                            <div data-v-6cf5705a="" id="directSubordinatesRechargeAmount">{subordinatesData.directSubordinatesRechargeAmount || 0}</div> Deposit amount
                        </div>
                        <div data-v-6cf5705a="" className="line1 r">
                            <div data-v-6cf5705a="" id="directSubordinatesWithDepositCount">{subordinatesData.directSubordinatesWithDepositCount || 0}</div> Number of people making first deposit
                        </div>
                    </div>
                    <div data-v-6cf5705a="" className="info">
                        <div data-v-6cf5705a="" className="head u2"><svg data-v-6cf5705a="" className="svg-icon icon-teamSubordinates">
                            <use xlinkHref="#icon-teamSubordinates"></use>
                        </svg>Team subordinates</div>
                        <div data-v-6cf5705a="" className="line1">
                            <div data-v-6cf5705a="" id="noOfRegisterAllSubordinates">{subordinatesData.noOfRegisterAllSubordinates || 0}</div> number of register
                        </div>
                        <div data-v-6cf5705a="" className="line2">
                            <div data-v-6cf5705a="" id="teamSubordinatesRechargeQuantity">{subordinatesData.teamSubordinatesRechargeQuantity || 0}</div> Deposit number
                        </div>
                        <div data-v-6cf5705a="" className="line3">
                            <div data-v-6cf5705a="" id="teamSubordinatesRechargeAmount">{subordinatesData.teamSubordinatesRechargeAmount || 0}</div> Deposit amount
                        </div>
                        <div data-v-6cf5705a="" className="line1">
                            <div data-v-6cf5705a="" id="teamSubordinatesWithDepositCount">{subordinatesData.teamSubordinatesWithDepositCount || 0}</div>
                            Number of people making first deposit
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-600663f7="" className="content">
                <div data-v-600663f7="" className="shareBtnContainer"><button data-v-600663f7="" className="shareBtn" onClick={handleShare}>INVITATION LINK</button></div>
                <div data-v-600663f7="" className="promote__cell">
                    <div data-v-600663f7="" className="promote__cell-item" id="invitation_code_copy_btn" onClick={handleCopyInvitationCode}>
                        <div data-v-600663f7="" className="label">
                            <svg data-v-600663f7="" className="svg-icon icon-copy_Code">
                                <use xlinkHref="#icon-copy_Code"></use>
                            </svg>
                            <span data-v-600663f7="">Copy invitation code</span>
                        </div>
                        <div data-v-600663f7="" className="arrow">
                            <span data-v-600663f7="" id="invitation_code_display">
                                {userData?.[userInfoTypes.referCode] || "Loading..."}
                                <svg data-v-600663f7="" className="svg-icon icon-copy">
                                    <use xlinkHref="#icon-copy"></use>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div data-v-600663f7="" className="promote__cell-item" onClick={() => navigate('/promotion/myTeam')}>
                        <div data-v-600663f7="" className="label"><svg data-v-600663f7="" className="svg-icon icon-team_port">
                            <use xlinkHref="#icon-team_port"></use>
                        </svg><span data-v-600663f7="">Subordinate data</span></div>
                        <div data-v-600663f7="" className="arrow"><i data-v-600663f7=""
                            className="van-badge__wrapper van-icon van-icon-arrow"></i></div>
                    </div>
                    <div data-v-600663f7="" className="promote__cell-item" onClick={() => navigate('/promotion/promotionDes')}>
                        <div data-v-600663f7="" className="label"><svg data-v-600663f7="" className="svg-icon icon-commission">
                            <use xlinkHref="#icon-commission"></use>
                        </svg><span data-v-600663f7="">Commission detail</span></div>
                        <div data-v-600663f7="" className="arrow"><i data-v-600663f7=""
                            className="van-badge__wrapper van-icon van-icon-arrow"></i></div>
                    </div>
                    <div data-v-600663f7="" className="promote__cell-item" onClick={() => navigate('/promotion/tutorial')}>
                        <div data-v-600663f7="" className="label"><svg data-v-600663f7="" className="svg-icon icon-invite_reg">
                            <use xlinkHref="#icon-invite_reg"></use>
                        </svg><span data-v-600663f7="">Invitation rules</span></div>
                        <div data-v-600663f7="" className="arrow"><i data-v-600663f7=""
                            className="van-badge__wrapper van-icon van-icon-arrow"></i></div>
                    </div>
                    <div data-v-600663f7="" className="promote__cell-item" onClick={() => window.location.href = '/agent'}>
                        <div data-v-600663f7="" className="label"><svg data-v-600663f7="" className="svg-icon icon-server">
                            <use xlinkHref="#icon-server"></use>
                        </svg><span data-v-600663f7="">Agent line customer service</span></div>
                        <div data-v-600663f7="" className="arrow"><i data-v-600663f7=""
                            className="van-badge__wrapper van-icon van-icon-arrow"></i></div>
                    </div>
                    <div data-v-600663f7="" className="promote__cell-item" onClick={() => navigate('/promotion/rebateRadio')}>
                        <div data-v-600663f7="" className="label"><svg data-v-600663f7="" className="svg-icon icon-rebateRatio">
                            <use xlinkHref="#icon-rebateRatio"></use>
                        </svg><span data-v-600663f7="">Rebate ratio</span></div>
                        <div data-v-600663f7="" className="arrow"><i data-v-600663f7=""
                            className="van-badge__wrapper van-icon van-icon-arrow"></i></div>
                    </div>
                </div>
                <div data-v-600663f7="" className="commission">
                    <div data-v-600663f7="" className="commission__title"><svg data-v-600663f7=""
                        className="svg-icon icon-promotionData">
                        <use xlinkHref="#icon-promotionData"></use>
                    </svg><span data-v-600663f7="">promotion data</span></div>
                    <div data-v-600663f7="" className="commission__body">
                        <div data-v-600663f7=""><span data-v-600663f7="" id="totalCommissionsThisWeek">{subordinatesData.totalCommissionsThisWeek || 0}</span><span
                            data-v-600663f7="">This Week</span></div>
                        <div data-v-600663f7=""><span data-v-600663f7="" id="totalCommissions">{subordinatesData.totalCommissions || 0}</span><span
                            data-v-600663f7="">Total commission</span>
                        </div>
                    </div>
                    <div data-v-600663f7="" className="commission__body">
                        <div data-v-600663f7=""><span data-v-600663f7="" id="directSubordinatesCount">{subordinatesData.directSubordinatesCount || 0}</span><span
                            data-v-600663f7="">direct
                            subordinate</span></div>
                        <div data-v-600663f7=""><span data-v-600663f7="" id="teamSubordinatesCount">{subordinatesData.teamSubordinatesCount || 0}</span><span
                            data-v-600663f7="">Total number of
                            subordinates in the team</span></div>
                    </div>
                </div>
                {/* </div> */}


                <div className="van-overlay" style={{ zIndex: 2029, display: "none" }}></div>
                <div
                    role="dialog"
                    tabIndex={0}
                    className="van-popup van-popup--center van-dialog firstSaveDialog"
                    style={{ zIndex: 2029, display: "none" }}
                >
                    <div className="van-dialog__header">
                        <div data-v-9cd12fb2="" className="header">
                            <div data-v-9cd12fb2="" className="title">
                                Extra first deposit bonus
                            </div>
                            <div data-v-9cd12fb2="" className="tip">
                                Each account can only receive rewards once
                            </div>
                        </div>
                    </div>
                    <div className="van-dialog__content">
                        <div data-v-9cd12fb2="" className="container">
                            <div data-v-48dabef8="" className="first_list-item">
                                <div data-v-48dabef8="" className="head">
                                    <div data-v-48dabef8="" className="title">
                                        First deposit<span data-v-48dabef8="">100000</span>
                                    </div>
                                    <div data-v-48dabef8="" className="orange">
                                        + ₹800.00
                                    </div>
                                </div>
                                <div data-v-48dabef8="" className="description">
                                    Deposit 100000 for the first time and you will receive 800 bonus
                                </div>
                                <div data-v-48dabef8="" className="foot">
                                    <div
                                        data-v-bff59ba2=""
                                        data-v-48dabef8=""
                                        className="progress"
                                        style={{
                                            background: "var(--bg_color_L1)",
                                            height: 16,
                                            borderRadius: 16
                                        }}
                                    >
                                        <div
                                            data-v-bff59ba2=""
                                            className="line"
                                            style={{
                                                background: "var(--norm_secondary-color)",
                                                width: "0%",
                                                height: 16,
                                                borderRadius: 16
                                            }}
                                        ></div>
                                        <div data-v-bff59ba2="" className="step">
                                            0/100000
                                        </div>
                                    </div>
                                    <div data-v-48dabef8="" className="btn n2">
                                        Deposit
                                    </div>
                                </div>
                            </div>
                            <div data-v-48dabef8="" className="first_list-item">
                                <div data-v-48dabef8="" className="head">
                                    <div data-v-48dabef8="" className="title">
                                        First deposit<span data-v-48dabef8="">50000</span>
                                    </div>
                                    <div data-v-48dabef8="" className="orange">
                                        + ₹500.00
                                    </div>
                                </div>
                                <div data-v-48dabef8="" className="description">
                                    Deposit 50000 for the first time and you will receive 500 bonus
                                </div>
                                <div data-v-48dabef8="" className="foot">
                                    <div
                                        data-v-bff59ba2=""
                                        data-v-48dabef8=""
                                        className="progress"
                                        style={{
                                            background: "var(--bg_color_L1)",
                                            height: 16,
                                            borderRadius: 16
                                        }}
                                    >
                                        <div
                                            data-v-bff59ba2=""
                                            className="line"
                                            style={{
                                                background: "var(--norm_secondary-color)",
                                                width: "0%",
                                                height: 16,
                                                borderRadius: 16
                                            }}
                                        ></div>
                                        <div data-v-bff59ba2="" className="step">
                                            0/50000
                                        </div>
                                    </div>
                                    <div data-v-48dabef8="" className="btn n2">
                                        Deposit
                                    </div>
                                </div>
                            </div>
                            <div data-v-48dabef8="" className="first_list-item">
                                <div data-v-48dabef8="" className="head">
                                    <div data-v-48dabef8="" className="title">
                                        First deposit<span data-v-48dabef8="">10000</span>
                                    </div>
                                    <div data-v-48dabef8="" className="orange">
                                        + ₹200.00
                                    </div>
                                </div>
                                <div data-v-48dabef8="" className="description">
                                    Deposit 10000 for the first time and you will receive 200 bonus
                                </div>
                                <div data-v-48dabef8="" className="foot">
                                    <div
                                        data-v-bff59ba2=""
                                        data-v-48dabef8=""
                                        className="progress"
                                        style={{
                                            background: "var(--bg_color_L1)",
                                            height: 16,
                                            borderRadius: 16
                                        }}
                                    >
                                        <div
                                            data-v-bff59ba2=""
                                            className="line"
                                            style={{
                                                background: "var(--norm_secondary-color)",
                                                width: "0%",
                                                height: 16,
                                                borderRadius: 16
                                            }}
                                        ></div>
                                        <div data-v-bff59ba2="" className="step">
                                            0/10000
                                        </div>
                                    </div>
                                    <div data-v-48dabef8="" className="btn n2">
                                        Deposit
                                    </div>
                                </div>
                            </div>
                            <div data-v-48dabef8="" className="first_list-item">
                                <div data-v-48dabef8="" className="head">
                                    <div data-v-48dabef8="" className="title">
                                        First deposit<span data-v-48dabef8="">5000</span>
                                    </div>
                                    <div data-v-48dabef8="" className="orange">
                                        + ₹100.00
                                    </div>
                                </div>
                                <div data-v-48dabef8="" className="description">
                                    Deposit 5000 for the first time and you will receive 100 bonus
                                </div>
                                <div data-v-48dabef8="" className="foot">
                                    <div
                                        data-v-bff59ba2=""
                                        data-v-48dabef8=""
                                        className="progress"
                                        style={{
                                            background: "var(--bg_color_L1)",
                                            height: 16,
                                            borderRadius: 16
                                        }}
                                    >
                                        <div
                                            data-v-bff59ba2=""
                                            className="line"
                                            style={{
                                                background: "var(--norm_secondary-color)",
                                                width: "0%",
                                                height: 16,
                                                borderRadius: 16
                                            }}
                                        ></div>
                                        <div data-v-bff59ba2="" className="step">
                                            0/5000
                                        </div>
                                    </div>
                                    <div data-v-48dabef8="" className="btn n2">
                                        Deposit
                                    </div>
                                </div>
                            </div>
                            <div data-v-48dabef8="" className="first_list-item">
                                <div data-v-48dabef8="" className="head">
                                    <div data-v-48dabef8="" className="title">
                                        First deposit<span data-v-48dabef8="">200</span>
                                    </div>
                                    <div data-v-48dabef8="" className="orange">
                                        + ₹10.00
                                    </div>
                                </div>
                                <div data-v-48dabef8="" className="description">
                                    Deposit 200 for the first time and you will receive 10 bonus
                                </div>
                                <div data-v-48dabef8="" className="foot">
                                    <div
                                        data-v-bff59ba2=""
                                        data-v-48dabef8=""
                                        className="progress"
                                        style={{
                                            background: "var(--bg_color_L1)",
                                            height: 16,
                                            borderRadius: 16
                                        }}
                                    >
                                        <div
                                            data-v-bff59ba2=""
                                            className="line"
                                            style={{
                                                background: "var(--norm_secondary-color)",
                                                width: "0%",
                                                height: 16,
                                                borderRadius: 16
                                            }}
                                        ></div>
                                        <div data-v-bff59ba2="" className="step">
                                            0/200
                                        </div>
                                    </div>
                                    <div data-v-48dabef8="" className="btn n2">
                                        Deposit
                                    </div>
                                </div>
                            </div>
                            {/**/}
                            {/**/}
                        </div>
                        <div data-v-9cd12fb2="" className="close" />
                    </div>
                    <div data-v-9cd12fb2="" className="footer">
                        <div data-v-9cd12fb2="" className="active">
                            <svg data-v-9cd12fb2="" className="svg-icon icon-active">
                                <use xlinkHref="#icon-active" />
                            </svg>
                            No more reminders today
                        </div>
                        <div data-v-9cd12fb2="" className="btn">
                            Activity
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;