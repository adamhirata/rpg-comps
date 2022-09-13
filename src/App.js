import "./App.css";
import AppContainer from "./RPGComps/App/AppContainer/AppContainer";

export default function App() {
  const router = { "/home": { component: null } };

  return (
    <div className="App">
      <AppContainer
        topNavHeight={"10vh"}
        sideNavWidth={"10vw"}
        router={router}
      />
    </div>
  );
}
