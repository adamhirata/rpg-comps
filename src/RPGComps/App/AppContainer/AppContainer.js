import { useEffect } from "react";
import { useState } from "react";
import "./AppContainer.css";

export default function AppContainer(props) {
  // [Props]

  const [topNav, sideNav, topNavHeight, sideNavWidth, router] = [
    props.topNav ? props.topNav : null,
    props.sideNav ? props.sideNav : null,
    props.topNavHeight ? props.topNavHeight : "0vh",
    props.sideNavWidth ? props.sideNavWidth : "0vw",
    props.router ? props.router : null,
  ];

  // [Variables]

  const route = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  let routeComp;

  // [States]

  const [screenContainer, setScreenContainer] = useState();

  // [DidMount]

  useEffect(() => {
    const routeObj = router ? router[route] : null;
    if (routeObj) {
      setScreenContainer(
        <ScreenContainer
          marginTop={topNavHeight}
          marginLeft={sideNavWidth}
          screenComp={routeObj.component}
        />
      );
    }
  }, []);

  return (
    <div className="AppContainer">
      {screenContainer}
      {sideNav}
      {topNav}
    </div>
  );
}

function ScreenContainer(props) {
  // [Props]

  const [marginTop, marginLeft, screenComp] = [
    props.marginTop,
    props.marginLeft,
    props.screenComp,
  ];
  return (
    <div
      className="ScreenContainer"
      style={{
        marginTop: marginTop,
        marginLeft: marginLeft,
        height: "calc(100vh - " + marginTop + ")",
        width: "calc(100vw - " + marginLeft + ")",
      }}
    >
      {screenComp}
    </div>
  );
}
