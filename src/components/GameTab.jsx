import lotteryImg from "../images/gamecategory/gamecategory_20240722092542sh85.png";
import superJackpotImg from "../images/gamecategory/gamecategory_20240722092600jsn4.png";
import slotsImg from "../images/gamecategory/gamecategory_20240722092552pj7d.png";
import originalImg from "../images/gamecategory/gamecategory_20240722092452swfv.png";
import sportsImg from "../images/gamecategory/gamecategory_20240722092533461f.png";
import casinoImg from "../images/gamecategory/gamecategory_20240722092524eyc6.png";
import fishingImg from "../images/gamecategory/gamecategory_20240722092502uryl.png";
import pvcImg from "../images/gamecategory/gamecategory_20240722092510alv1.png";

const GameTabs = () => {
  const tabs = [
    { id: "lottery", name: "Lottery", img: lotteryImg },
    { id: "bigaward", name: "Super Jackpot", img: superJackpotImg },
    { id: "slot", name: "Slots", img: slotsImg },
    { id: "flash", name: "Original", img: originalImg },
    { id: "sport", name: "Sports", img: sportsImg },
    { id: "video", name: "Casino", img: casinoImg },
    { id: "fish", name: "Fishing", img: fishingImg },
    { id: "pvc", name: "PVC", img: pvcImg },
  ];

  return (

          <div data-v-0137aa14="" className="van-tabs van-tabs--line gameTypeHome">
            <div className="van-sticky">
              <div className="van-tabs__wrap">
                <div
                  role="tablist"
                  className="van-tabs__nav van-tabs__nav--line van-tabs__nav--complete"
                  aria-orientation="horizontal"
                >
                  {tabs.map((tab, index) => (
                    <div
                      key={index}
                      data-v-0137aa14=""
                      id={`van-tabs-20-${index}`}
                      role="tab"
                      className="van-tab van-tab--line van-tab--grow"
                      tabIndex={-1}
                      aria-selected="false"
                      aria-controls={`van-tab-${index}`}
                      onClick={() => window.location.href = `/home#${tab.id}`}
                    >
                      <span className="van-tab__text">
                        <div data-v-0137aa14="" className="tabs-btn">
                          <img data-v-0137aa14="" alt={tab.name} src={tab.img} />
                          {tab.name}
                        </div>
                      </span>
                    </div>
                  ))}
                  <div
                    className="van-tabs__line"
                    style={{
                      transform: "translateX(57px) translateX(-50%)",
                      transitionDuration: "0.3s",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default GameTabs;
