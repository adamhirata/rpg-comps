import "./App.css";
import AppContainer from "./RPGComps/App/AppContainer/AppContainer";
import SideNavBar from "./RPGComps/App/NavBars/SideNavBar";
import TopNavBar from "./RPGComps/App/NavBars/TopNavBar";

export default function App() {
  const router = { "/home": { component: null }, "/": { component: null } };

  return (
    <div className="App">
      <AppContainer
        topNav={<TopNavBar innerComps={<div>"404"</div>} />}
        sideNav={<SideNavBar />}
        topNavHeight={"10vh"}
        sideNavWidth={"10vw"}
        router={router}
      />
    </div>
  );
}
