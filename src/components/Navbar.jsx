import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      data-v-fb80cf49=""
      className="tabbar__container"
      style={{ '--f13b4d11-currentFontFamily': "'Roboto', 'Inter', sans-serif" }}
    >
      <div data-v-fb80cf49="" className="tabbar__container-item">
        <svg
          data-v-fb80cf49=""
          onClick={() => handleNavigation('/promotion')}
          className="svg-icon icon-p3_promotion"
        >
          <use xlinkHref="#icon-p3_promotion" />
        </svg>
        <span data-v-fb80cf49="">Promotion</span>
      </div>

      <div data-v-fb80cf49="" className="tabbar__container-item">
        <svg
          data-v-fb80cf49=""
          onClick={() => handleNavigation('/activity')}
          className="svg-icon icon-p3_activity"
        >
          <use xlinkHref="#icon-p3_activity" />
        </svg>
        <span data-v-fb80cf49="">Activity</span>
      </div>

      <div data-v-fb80cf49="" className="tabbar__container-item active">
        <div data-v-fb80cf49="" className="promotionBg">
          <svg
            data-v-fb80cf49=""
            onClick={() => handleNavigation('/home')}
            className="svg-icon icon-p3_home_a"
          >
            <use xlinkHref="#icon-p3_home_a" />
          </svg>
        </div>
      </div>

      <div data-v-fb80cf49="" className="tabbar__container-item">
        <svg
          data-v-fb80cf49=""
          onClick={() => handleNavigation('/wallet')}
          className="svg-icon icon-p3_wallet"
        >
          <use xlinkHref="#icon-p3_wallet" />
        </svg>
        <span data-v-fb80cf49="">Wallet</span>
      </div>

      <div data-v-fb80cf49="" className="tabbar__container-item">
        <svg
          data-v-fb80cf49=""
          onClick={() => handleNavigation('/mian')}
          className="svg-icon icon-p3_main"
        >
          <use xlinkHref="#icon-p3_main" />
        </svg>
        <span data-v-fb80cf49="">Account</span>
      </div>
    </div>
  );
};

export default Navbar;
