import { useState, useEffect } from "react";
import axios from "axios";
import apiAxios from "../apiAxios";

const DailyRechargeBonus = () => {
  const [bonusList, setBonusList] = useState([]);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Function to format numbers in Indian format
  const formatIndianNumber = (num) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(num);
  };

  // Fetch daily recharge bonus
  const fetchDailyRechargeBonus = async () => {
    try {
      const response = await apiAxios.get(`/api/activity/daily_recharge_bonus`);
      console.log('called')
      if (response.data.status) {
        setBonusList(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching daily recharge bonus:", error);
    }
  };

  useEffect(() => {
    fetchDailyRechargeBonus();
  }, []);

  // Handle claim bonus
  const claimBonus = async (id) => {
    try {
      const response = await apiAxios.post(`/api/activity/daily_recharge_bonus/claim`, { id });
      if (response.data.status) {
        setMessage(response.data.message);
        setIsSuccess(true);
        fetchDailyRechargeBonus(); // Refresh data after claiming
      } else {
        setMessage(response.data.message);
        setIsSuccess(false);
      }
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Error claiming bonus:", error);
      setMessage(error.response?.data?.message || "An error occurred");
      setIsSuccess(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1600);
    }
  };

  return (
    <div data-v-d7213382="" className="task-panel">

      {bonusList.map((item) => (
        <div key={item.id} data-v-d7213382="" className="task-item">
          <div data-v-d7213382="" className="task-item-header">
            <div data-v-d7213382="" className="hearder-status day">Daily mission</div>
            <span data-v-d7213382="" className="headerR">
              {item.isFinished ? "Finished" : "Unfinished"}
            </span>
          </div>

          <div data-v-d7213382="" className="task-item-type">
            <div data-v-d7213382="" className="type-title weeklyType1">
              <div data-v-d7213382="">Recharge Bonus</div>
            </div>
            <div data-v-d7213382="" className="type-tip">
              {item.rechargeAmount}/{item.requiredRechargeAmount}
            </div>
          </div>

          <div data-v-d7213382="" className="task-item-description">
            If your cumulative deposit reaches the maximum of 100,000 rupees on that day, you can claim the entire bonus
          </div>

          <div data-v-d7213382="" className="task-item-bottom">
            <div data-v-d7213382="">Award amount</div>
            <div data-v-d7213382="" className="bottom-title">
              <img
                data-v-d7213382=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7ZfPSwJBFMe/b9YSwV+HQCNCI7NL4KV7B7t36tpfEP4JHvoDOkR/gReDLnnPQ39CEEFQpAeJsnRTSy2dadfYLazWrWYzyi8MO8N78z775g3DDAkhFAxBDEOSXPDuwpJdVzngvcUosrG8Hpt5ZOfSdqbQt2qcXw7iqpiC4K9hKkIzMST3VaupX894Zz6Fy/PTPqiuIMqFgVl/PmO9jp1WGkJY13PMk8Tq0QEGgkvrQd5srIHz4IfOtUoCjfoK7GjcfSgmwjljKAQVFa8vh6ntXglchqGrBSTqbFrFEv4AoDd7SmhRE+ZPE8CbtYBW2y19zF4MIgKnxWGu5h85QEbg3wh2QbKoWgFdlID7u/fMacSxIR1M12VQ4cyWr9Slppty78tjcfDorKWv1IyFooD0jqKHJfwc2OcHqVWwk+OBvnJ3dWgSQmt2JH1Xi+mIBg8D7fZbY+shw5wC9zTufm798ikFozs6MocAZkyFwxKMikbf3Fys4810XfVb4g7dRLTEFI/XvIPRv3s7PQHFo3muTyJYoAAAAABJRU5ErkJggg=="
                alt="coin"
              />
              <span data-v-d7213382="">₹{formatIndianNumber(item.bonusAmount)}</span>
            </div>
          </div>

          <div
            data-v-d7213382=""
            className={`btn btnOther status${item.isFinished && !item.isClaimed ? 2 : 1}`}
            onClick={() => claimBonus(item.id)}
          >
            {item.isFinished ? (item.isClaimed ? "Already Claimed" : "Claim") : "to complete"}
          </div>
        </div>
      ))}
      {showToast && (
        <div className={`toast-message ${isSuccess ? "success" : "error"}`} data-v-d7213382="">
          {message}
        </div>
      )}
    </div>
  );
};

export default DailyRechargeBonus;
