import "./App.css";
import { Router } from "react-router-dom";
import Routes from "./routes";
import PlayersInfo from "./pages/playersInfo.js";

function App() {
  return (
    <div className="outer">
      <Routes />
    </div>
  );
}

export default App;
