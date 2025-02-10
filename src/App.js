import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Promotion from "./pages/Promotion";
import Activity from "./pages/Activity";
import Wallet from "./pages/Wallet";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import SvgFiles from "./components/SvgFiles";
import './css/modules-5dd73da0.css'
import './css/indexFee84.css'
import './css/indexC4.css'
import SplashScreen from "./components/SplashScreen";
import DailyTask from "./pages/DailyTask";
import Login from "./pages/Login";



const App = () => {
  const location = useLocation();
  
  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = [ "/dailytask","/login"];
  return (
    <>
      <SplashScreen />
      <SvgFiles />
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
     
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/promotion" element={<Promotion />} />
      
      <Route path="/activity" element={<Activity />} />
      <Route path="/dailytask" element={<DailyTask />} />






      <Route path="/wallet" element={<Wallet />} />
      <Route path="/mian" element={<Account />} />

      </Routes>
    </>
  );
};

export default App;
