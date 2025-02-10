import React, { useEffect, useState } from 'react'
import '../css/loadingComponent.css'
import h5setting from '../images/h5Setting.png'
const LoadingComponent = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Delay the fade-in effect slightly
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
    data-v-647954c7=""
    style={{ display: "none" }}
    className={`ar-loading-view ${isVisible ? "fade-in" : ""}`}
  >
    <div data-v-647954c7="" className="loading-wrapper">
      {/* <VanLoading /> */}
      <div data-v-647954c7="" className="loading-animat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 200 200"
          width={200}
          height={200}
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "100%",
            transform: "translate3d(0px, 0px, 0px)",
            contentVisibility: "visible"
          }}
        >
          <defs>
            <clipPath id="__lottie_element_2">
              <rect width={200} height={200} x={0} y={0} />
            </clipPath>
            <image xlinkHref={h5setting}></image>
            <image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAATlBMVEVHcExWtthewtlUstddwdpcvthYttZdv9lYtdtSsNhVs9ZWtNddwdlcwdlIn9NcwNlFmtJHntNEltBDlNBfxNldwdlDks9ZutlDm9JLptXm8Yi6AAAAFHRSTlMAMPBhmsBAexD/IFDQ4KCw2/CExn9LFu4AAAWJSURBVHja7Vxpe7MqEBVBQHBfiv7/P3oBTatX82YzhpknfGrT2HA4ywyYJIq+4+6hOMcAQ7Y/Pz81xYHDDg1dVs2E46cCOX3Cm6ZtZy7mQYApiTfFGsBlADK8os0+Bj8kEBR8DaJqi6bhnBM1P1CAQKGLegGh0Us/UP9oC4AQ/ofCYlA7wdUW4ZcR1VQXJgotI6iDFxcUDYngDtpiQBHRWVMF7OZjhlE3CjQMPcGogPe0xHljAA9DNg7FAB1GROthGOBvlFQ7ODoaCRxH4+gYWgUchiwsGUMNfdMacU8HeFVFjYMBnw7ZOhwFeDpI5WUFHUaknT0qAh4H9aELXlZR4e0R4cBBceCAn7pT7NbwbS4rHDisrsahUjj8UUkkfCDA0YzjiMEfdBxQ4CBIcKjaCgtBPZcVDhxRMY4Y+kRr9HHEELzEGqRWSAyicRhkxGAQ7gwS4RAWhkrohYWhghCLo0WAI3KJhSB5fSlsMDi9xpFY3ukY3kqpLI4ECyEKCSEFDkJSNIQ0KAhJ01piICQd0wIJISkGh8g6xUEItYRg2IZEWYqjqBNLCEVi9RoDjsgSwjDg0FisXqZpjgGHxGJ1jaSqu8zKsGQWivaEYMksYYGgUFaSpiUWi6AIX44lfK1FYhTKKrFYJE9TgaXR4li8LpF4HUULH7HUoDh2cHUdhdejGAuQ1BgUoUVMalD08NwYg0JZ2jKCAogwSNIXEZAUST00hmEBIr5AvkC+QDaNSSJRAFGxyVAAWTRYXyBfIF8gO4MaczklZaCbxkXLK75AwgMC+Cx+0bvD3rMvosoBgXv0my8y10A+11pO3v4M9g6ispMnGPr4lcFLY8DeebORmy9/AftGlFVbogHn78oWBHBsrYPK9FDdTpahBfmIjq5dIUyfIfD65HaYTUq+1pK0JgH5sW9pGVhNPANqEmoZkP+TWg7UImtz677vFXyLWK31pgdYSXYqedn3APtG0ffx5iHTwwvgrN9klLImAbe5cpPWW3DwtGWVtZWRAJhbed+zXZqA5RbZU5bPLWA1kW0zy1d7iw/U7krGe8qy49rjwfZZ11zN9jIgbKsnV1MZkN359cpn7R7DoSS5Hk4cUnXn/9JPAiiB2b/ko+FQcsPQORhKbviZQgkufmuiCZDgujlPDoMSfXuaCYhuPr8tHNcaB7/BEvekK9tv8oOKXtve3j6qds1xHrbfy/s2HC6CWehOv2uC1u9dwDssJ5n7SoQKW1zl/Sa2odAFKy76SKwm4SaXih/pPfyzwyyL2WNr7PgL8qYiezRSWZg28Qv8UA7JLMQ9FnGSJ49f0wf2mT5XQR4PIVc/46CQeJU8oXfxsB5PMHr57IUBIWF99+x0HJVJSHw8uwuXWdeFEsL0JcuGg4S+GD0kDgMJtdPoXur+wkAiHI4Xy7NH8uHsYgfgCAHJMThsT+8cn3+sxsvEvvwxLYbPrvhDu3iSHYZjXpTuIyep3AubHCtTdr5RfFwdatDpP55sFFl2x4e/5zg+davF87co2odXV8pzZfWWjPFGiU86JvJp1SXvWTcdn0aKp+N9QTm5LxbnuOOt2SI8Kclbq6MquxPq1kRKx952DimntToh6nU+LZh8I+XxKW2EvLzY8VDotEin9RDKJ3EXHyswKSYYyZn9qfJ9pF07ctzieJ677Ow2m89QMnqEDvSUIV3+ifNmMgnMKoy8SsakqXNFtSeHLn8eixJZN8v0k3dgJb1MI2dPdGGc/V4uPn6HjFxosdIQDywqEeXvhSyQO5b6D0uXMXoTDdEi+b2gK2lIZ/76YthJKIkQnG/mJzkXoswWT4yZDu+OvqLlEsyM6Hds/haXItyvuVSUJd0dI2MCwHd1Ki7YloCZhoQJDe37RrmzxN/gO675js34DxGidN2D9/DoAAAAAElFTkSuQmCC"></image>
          </defs>
          <g clipPath="url(#__lottie_element_2)">
            <g
              className="ai"
              transform="matrix(1,0,0,1,0,0)"
              opacity={1}
              style={{ display: "block" }}
            >
              <image
                width="200px"
                height="200px"
                preserveAspectRatio="xMidYMid slice"
                xlinkHref="data:image/png;base64,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"
              ></image>
            </g>
            <g
              className="png"
              transform="matrix(0.8999999761581421,0,0,0.8999999761581421,31.150001525878906,82)"
              opacity={1}
              style={{ display: "block" }}
            >
              <image
                width="163px"
                height="60px"
                preserveAspectRatio="xMidYMid slice"
                xlinkHref={h5setting}
              ></image>
              {/* xlink:href="/h5settinggreen_20240724134835hng9.png"> */}
            </g>
          </g>
        </svg>
      </div>
      <div data-v-647954c7="" className="com__box" style={{ display: "none" }}>
        {/* loading */}
        <div className="loading" data-v-647954c7="">
          <div className="shape shape-1" data-v-647954c7="" />
          <div className="shape shape-2" data-v-647954c7="" />
          <div className="shape shape-3" data-v-647954c7="" />
          <div className="shape shape-4" data-v-647954c7="" />
        </div>
        {/* 说明：组件名 */}
      </div>
      {/* <div class="animation"></div> */}
    </div>
    <div
      data-v-647954c7=""
      className="skeleton-wrapper"
      style={{ display: "none" }}
    >
      <div data-v-647954c7="" className="van-skeleton van-skeleton--animate">
        {/**/}
        <div className="van-skeleton__content">
          {/**/}
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "60%" }} />
        </div>
      </div>
      <div data-v-647954c7="" className="van-skeleton van-skeleton--animate">
        <div className="van-skeleton-avatar van-skeleton-avatar--round" />
        <div className="van-skeleton__content">
          <h3 className="van-skeleton-title" />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "60%" }} />
        </div>
      </div>
      <div data-v-647954c7="" className="van-skeleton van-skeleton--animate">
        {/**/}
        <div className="van-skeleton__content">
          <h3 className="van-skeleton-title" />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "100%" }} />
          <div className="van-skeleton-paragraph" style={{ width: "60%" }} />
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

export default LoadingComponent
