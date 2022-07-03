import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import TrainingReport from "../../pages/TrainingReport/trainingReport";
import ScoutingReport from "../../pages/ScoutingReport/ScoutingReport";
import Profile from "../../pages/Profile";
import "./tab.css";

function Tabss() {
  let [tab, setTab] = useState(0);

  return (
    <div id="ttab">
      <Nav
        className="nav"
        fill
        justify
        variant="tabs"
        defaultActiveKey="profile"
      >
        <Nav.Item id="navitem1">
          <Nav.Link style={{color: "white",}} onClick={() => {setTab(0);}}eventKey="profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item id="navitem2">
          <Nav.Link style={{color: "white",}}onClick={() => {setTab(1);}}eventKey="scouting">Scouting Report</Nav.Link>
        </Nav.Item>
        <Nav.Item id="navitem3">
          <Nav.Link style={{color: "white",}} onClick={() => {setTab(2);}}eventKey="training">Training Report</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="TabContent">
        <TabContent tab={tab} />
      </div>
    </div>
  );
}

function TabContent(props) {
  if (props.tab == 0) {
    return <Profile />;
  } else if (props.tab == 1) {
    return <ScoutingReport />;
  } else if (props.tab == 2) {
    return <TrainingReport />;
  }
}

export default Tabss;
