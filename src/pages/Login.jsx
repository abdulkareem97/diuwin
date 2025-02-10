import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import '../css/pageLogin3f.css'
import '../css/login.css'

import countryCodesData from "../extra_info/country_codes.json";

// Import images
import headLogo from "../images/h5Setting.png";
import eyeInvisible from "../images/assets/png/eyeInvisible-821d9d16.png";
// import eyeVisible from "../images/assets/png/eyeVisible.png"; // Replace with the correct path
import tipImage from "../images/assets/png/tip-2298bb83.png";
// import iconServr from "../images/assets/png/iconservr-6e6ee69a.png";

// Base64 images for eye icons
const closeEye = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAP1BMVEUAAADExMTExMTDw8PExMTFxcXFxcXExMS/v7/FxcXFxcXExMTExMTDw8PExMTFxcXFxcXExMTPz8+/v7/ExMTkagEbAAAAFHRSTlMAIO/ff29fvxDfMD/PoI+fr1AQMBwdwB4AAAFQSURBVDjL5ZJbkoQgDEXDI4iAqN3sf61DIEFHqmvmv/OhEE5ycwvgm0Il+z9uLQU/HJ0OrTvD4IqdoZdbdOHQh+sczphlSmKlvZu4uPZG2bkqfnDRzFlKL/FKuM9cig+/OoLCmcs8Au7ZqUDcG4IW00OGE2Fh040D/G1baeFO8mDo07gmpdUAa5djVGQPgej3OFtuwqZX7U3o1C0RmjevL+/rWLZqVzqnyV0bc70atgVJInPUaR/ip5TkATrmIBYBd3Gq6pGSVWpc18mPY9jYGKk0jgeP0nCjPxtDTgpnZXDkjGy0kgv3AK+4FG6opMmQXJVwob8wK0/jgCu8qWS+c/oU7hJumUqyrl2MOdDLzd85maVs/p6iQScOMnG1HcYXANlBwsriH9zWua2NZ4zmR8l+Jy6Ycotk/czJfQU8kqmRdgwwhU9y7X+F3yx8VfwAZv4b1F/KTEQAAAAASUVORK5CYII=";
const openEye = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAOVBMVEUAAADExMTFxcXExMTFxcXFxcXExMTExMTExMTFxcW/v7/ExMTExMTFxcXGxsa/v7/Pz8/FxcXExMSmSILoAAAAEnRSTlMA338gMF/vP7+fEHBPj28wEM9PEbqRAAABB0lEQVQ4y+1TR5IDIQwkCBjCJP3/scvaQj3Feqfsu/sCJXUrIcwXH8GHzbmt0T0r5ciCmNu/tCqsARte0uh8xAlUjCkUHrGtfxHu116LAYLtJjfz3I1xMtld7gelY4zATsyKcmjhjsWDWcHz4AUWBGVGdNRlu0p4bSn3g2S0Pby2h0IWkRDcK3OS66mJC3NWdxFbHBpCwKTq1nNjIgSiahokF+IoLBZNvT5vuafWvk8kXNEMjWYQMBi4k+bmnNraD68Wi4HHm4EPyfyE/vmEO3jbvBRDWBKVMQX7d33e371594/N8pR3lCNf4egk+QrnDv+0+1dEhJvRrt81mVtQq87V4M0Xn+AHBckSwmsdObYAAAAASUVORK5CYII=";
const iconServr = "";
const eyeVisible = "";
const LoginComponent = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [dialCode, setDialCode] = useState("+91");
    const [showPassword, setShowPassword] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [countryCodes, setCountryCodes] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [errorMessage, alertMessage] = useState("");
    const navigate = useNavigate(); // Initialize the navigate function


    const [alertText, setAlertText] = useState(""); // State to manage alert message
    const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

    const alertMessage = (text) => {
        setAlertText(text); // Set the alert message
        setShowAlert(true); // Show the alert

        // Hide the alert after 1 second
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    };

    // Fetch country codes on component mount
    useEffect(() => {
        setCountryCodes(countryCodesData);
    }, []);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Handle login button click
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!phoneNumber || !password) {
            alertMessage("Please fill in all fields.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/webapi/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    dialCode,
                    phoneNumber,
                    pwd: password,
                }),
            });

            const data = await response.json();

            if (data.status === true) {
                Cookies.set("token", data.token, { expires: 1 });
                Cookies.set("auth", data.value, { expires: 1 });
                navigate("/home"); // Navigate to the home page
            } else {
                alertMessage(data.message);
            }
        } catch (error) {
            alertMessage("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Handle dropdown item click
    const handleDialCodeChange = (code) => {
        setDialCode(code);
        setIsDropdownOpen(false);
    };

    return (
        <div id="app" data-v-app="">
            {showAlert && (
                <div data-v-1dcba851="" className="message_alert_root">
                    <div
                        data-v-1dcba851=""
                        className="message_alert_text"
                        style={{ transition: "opacity 0.1s" }}
                    >
                        {alertText}
                    </div>
                </div>
            )}
            <div
                data-v-47f4cc84=""
                className="login__container"
                style={{ "--f13b4d11-currentFontFamily": "'Roboto', 'Inter', sans-serif" }}
            >
                {/* Navbar */}
                <div data-v-12a80a3e="" data-v-47f4cc84="" className="navbar main">
                    <div data-v-12a80a3e="" className="navbar-fixed">
                        <div data-v-12a80a3e="" className="navbar__content">
                            <div data-v-12a80a3e="" className="navbar__content-left" onClick={() => window.history.back()}>
                                <i data-v-12a80a3e="" className="van-badge__wrapper van-icon van-icon-arrow-left"></i>
                            </div>
                            <div data-v-12a80a3e="" className="navbar__content-center">
                                <div
                                    data-v-12a80a3e=""
                                    className="headLogo"
                                    style={{ backgroundImage: `url(${headLogo})` }}
                                ></div>
                                <div data-v-12a80a3e="" className="navbar__content-title"></div>
                            </div>
                            <div data-v-12a80a3e="" className="navbar__content-right">
                                <div data-v-8610bd15="" data-v-47f4cc84=""></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login Heading */}
                <div data-v-47f4cc84="" className="login__container-heading">
                    <h1 data-v-47f4cc84="" className="login__container-heading__title">Log in</h1>
                    <div data-v-47f4cc84="" className="login__container-heading__subTitle">
                        <div data-v-47f4cc84="">Please log in with your phone number or email</div>
                        <div data-v-47f4cc84="">If you forget your password, please contact customer service</div>
                    </div>
                </div>

                {/* Login Tabs */}
                <div data-v-47f4cc84="" className="login_container-tab">
                    <div data-v-47f4cc84="" className="tab active">
                        <svg data-v-47f4cc84="" className="svg-icon icon-phone">
                            <use xlinkHref="#icon-phone"></use>
                        </svg>
                        <div data-v-47f4cc84="">Log in with phone</div>
                    </div>
                </div>

                {/* Login Form */}
                <div data-v-47f4cc84="" className="login__container-form">
                    <div data-v-47f4cc84="" className="tab-content activecontent">
                        <div data-v-33f88764="" data-v-47f4cc84="" className="signIn__container">
                            {/* Phone Input */}
                            <div data-v-50aa8bb0="" data-v-33f88764="" className="phoneInput__container">
                                <div data-v-50aa8bb0="" className="phoneInput__container-label">
                                    <svg data-v-50aa8bb0="" className="svg-icon icon-phone">
                                        <use xlinkHref="#icon-phone"></use>
                                    </svg>
                                    <span data-v-50aa8bb0="">Phone number</span>
                                </div>
                                <div data-v-50aa8bb0="" className="phoneInput__container-input">
                                    <div data-v-5067ef5e="" data-v-50aa8bb0="" className="dropdown">
                                        <div data-v-5067ef5e="" className="dropdown__value" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                            <span data-v-5067ef5e="">{dialCode}</span>
                                            <i data-v-5067ef5e="" className="van-badge__wrapper van-icon van-icon-arrow-down"></i>
                                        </div>
                                        {isDropdownOpen && (
                                            <div data-v-5067ef5e="" className={`dropdown__list`} style={{ opacity: 1, height: "6rem" }}>
                                                {countryCodes.map((country, id) => (
                                                    <div
                                                        key={id}
                                                        data-v-5067ef5e=""
                                                        className={`dropdown__list-item ${dialCode === country.dial_code ? "active" : ""}`}
                                                        onClick={() => handleDialCodeChange(country.dial_code)}
                                                    >
                                                        <span data-v-5067ef5e="" className="dial_code">
                                                            {country.dial_code}
                                                        </span>
                                                        {country.name}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        id="phone_number_inp"
                                        data-v-50aa8bb0=""
                                        type="text"
                                        name="userNumber"
                                        placeholder="Please enter the phone number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div data-v-ea5b66c8="" data-v-33f88764="" className="passwordInput__container">
                                <div data-v-ea5b66c8="" className="passwordInput__container-label">
                                    <svg data-v-ea5b66c8="" className="svg-icon icon-editPswIcon passwordInput__container-label__icon passwordInput__container-label__icon">
                                        <use xlinkHref="#icon-editPswIcon"></use>
                                    </svg>
                                    <span data-v-ea5b66c8="">Password</span>
                                </div>
                                <div data-v-ea5b66c8="" className="passwordInput__container-input">
                                    <input
                                        id="password_inp"
                                        data-v-ea5b66c8=""
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        maxLength="32"
                                        autoComplete="new-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <img
                                        id="password_eye_btn"
                                        data-v-ea5b66c8=""
                                        src={showPassword ? openEye : closeEye}
                                        className="eye"
                                        onClick={togglePasswordVisibility}
                                    />
                                </div>
                            </div>

                            {/* Remember Password Checkbox */}
                            <div data-v-33f88764="">
                                <div data-v-33f88764="" role="checkbox" className="van-checkbox" tabIndex="0" aria-checked="true">
                                    <div className="van-checkbox__icon van-checkbox__icon--round van-checkbox__icon--checked">
                                        <i className="van-badge__wrapper van-icon van-icon-success"></i>
                                    </div>
                                    <span className="van-checkbox__label">Remember password</span>
                                </div>
                            </div>

                            {/* Login and Register Buttons */}
                            <div data-v-33f88764="" className="signIn__container-button">
                                <button id="login_button" data-v-33f88764="" className="active" onClick={handleLogin} disabled={loading}>
                                    {loading ? "Logging in..." : "Log in"}
                                </button>
                                <button data-v-33f88764="" className="register" onClick={() => (window.location.href = "/register")}>
                                    Register
                                </button>
                            </div>

                            {/* Footer Links */}
                            <div data-v-33f88764="" className="signIn_footer">
                                <div data-v-33f88764="" className="forgetcon" onClick={() => (window.location.href = "/forgot_reset")}>
                                    <svg data-v-33f88764="" className="svg-icon icon-clock_b forgetbg forgetbg">
                                        <use xlinkHref="#icon-clock_b"></use>
                                    </svg>
                                    <div data-v-33f88764="" className="font24">Forgot password</div>
                                </div>
                                <div data-v-33f88764="" className="customcon">
                                    <svg data-v-33f88764="" className="svg-icon icon-customer_b forgetbg forgetbg">
                                        <use xlinkHref="#icon-customer_b"></use>
                                    </svg>
                                    <div data-v-33f88764="" className="font24">Customer Service</div>
                                </div>
                            </div>

                            {/* Locked Account Dialog */}
                            <div data-v-3e71d3da="" data-v-33f88764="" className="dialog inactive">
                                <div data-v-3e71d3da="" className="dialog__container" role="dialog" tabIndex="0">
                                    <div data-v-3e71d3da="" className="dialog__container-img">
                                        <img data-v-3e71d3da="" className="" alt="" data-origin={tipImage} src={tipImage} />
                                    </div>
                                    <div data-v-3e71d3da="" className="dialog__container-title">
                                        <h1 data-v-3e71d3da="">Account has been locked</h1>
                                    </div>
                                    <div data-v-3e71d3da="" className="dialog__container-content">
                                        <div data-v-33f88764="" className="idlockTip">
                                            You Have Entered Wrong Password More Then 10 Times
                                            <br data-v-33f88764="" />
                                            Please Use Forgot Password To Change New Password For Unlock And Log In
                                        </div>
                                    </div>
                                    <div data-v-3e71d3da="" className="dialog__container-footer">
                                        <button data-v-33f88764="" className="dialogBtn">Cancel</button>
                                        <button data-v-33f88764="" className="dialogBtn">
                                            <img data-v-33f88764="" src={iconServr} /> Contact customer service
                                        </button>
                                    </div>
                                </div>
                                <div data-v-3e71d3da="" className="dialog__outside"></div>
                            </div>

                            {/* Popups */}
                            <div data-v-96e240c3="" data-v-33f88764="" className="popups">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;