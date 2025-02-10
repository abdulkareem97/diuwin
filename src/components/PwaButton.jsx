import { useState } from "react";

const PwaButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className="btn pwa-btn"
      style={{ display: isVisible ? "" : "none" }} // Toggling visibility
      data-v-b3bd7e49=""
      data-v-3dc40049=""
    >
      <svg
        className="line"
        width={1}
        height={60}
        viewBox="0 0 1 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-v-b3bd7e49=""
      >
        <line x1="0.5" x2="0.5" y2={60} stroke="white" />
      </svg>
      <a href="/newimage/77bet.apk" className="text" data-v-b3bd7e49="">

        Add to Desktop
      </a>
      <i
        className="van-badge__wrapper van-icon van-icon-close close"
        onClick={() => setIsVisible(false)}
        style={{ cursor: "pointer" }} // Makes it clear it's clickable
        data-v-b3bd7e49=""
      ></i>
    </div>


  );
};

export default PwaButton;
