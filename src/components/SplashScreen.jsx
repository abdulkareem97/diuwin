import React, { useEffect } from 'react';
import '../css/indexC4Home.css'
import startImg from '../images/assets/png/start-4688a3c2.png'

const SplashScreen = () => {
  useEffect(() => {
    const initFunc = () => {
      if (sessionStorage.getItem("splash") === "true") {
        document.querySelector(".splash_root").style.display = "none";
        return;
      }
      document.querySelector(".splash_root").style.display = "flex";
      setTimeout(function() {
        document.querySelector(".splash_root").style.display = "none";
        sessionStorage.setItem("splash", "true");
      }, 1200);
    };
    initFunc();
  }, []);

  return (
    <div className="splash_root">
      <div className="splash_screen">
        <div className="main_box">
          <img src={startImg} alt="" className="splash_img" />
          <h2 className="splash__text">Withdraw fast, safe and stable</h2>
        </div>
        <div className="logo_box">
          <img className="logo__image" src="/h5settinggreen_20240724134835hng9.png" alt="" />
        </div>
      </div>
    
    </div>
  );
};

export default SplashScreen;
