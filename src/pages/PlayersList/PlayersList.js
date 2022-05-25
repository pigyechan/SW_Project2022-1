import styled from "styled-components";
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react';
import All from './Players/All';
import Catcher from './Players/Catcher';
import Pitcher from './Players/Picher';
import Infielder from './Players/Infielder';
import Outfielder from './Players/Outfielder';
import Newbie from './Players/Newbie';
import Arm from './Players/Arm';

export function PlayersList(Props) {
    let [tab, setTab] = useState(0);
    
    return (
        <div id="tttab">
            <Nav className="nav" fill justify variant="pills" defaultActiveKey="All">
                <Nav.Item id="navitem1">
                    <Nav.Link onClick ={() => { setTab(0) }} eventKey="All">전체</Nav.Link>
                </Nav.Item>
                <Nav.Item id="navitem2">
                    <Nav.Link onClick ={() => { setTab(1) }} eventKey="Pitcher">투수</Nav.Link>
                </Nav.Item>
                <Nav.Item id="navitem3">
                    <Nav.Link onClick ={() => { setTab(2) }} eventKey="Catcher">포수</Nav.Link>
                </Nav.Item>
                <Nav.Item id="navitem4">
                    <Nav.Link onClick ={() => { setTab(3) }} eventKey="Infielder">내야수</Nav.Link>
                </Nav.Item>
                <Nav.Item id="navitem5">
                    <Nav.Link onClick ={() => { setTab(4) }} eventKey="Outfielder">외야수</Nav.Link>
                </Nav.Item>
                <Nav.Item id="navitem6">
                    <Nav.Link onClick ={() => { setTab(5) }} eventKey="Newbie">신인선수</Nav.Link>
                </Nav.Item>
                <Nav.Item id="navitem7">
                    <Nav.Link onClick ={() => { setTab(6) }} eventKey="Arm">군입대선수</Nav.Link>
                </Nav.Item>
            </Nav>
        <div className="TabContent">
            <TabContent tab={tab}/>
        </div>
    </div>  
  );
}

function TabContent(props){
    if(props.tab===0){
      return <All/>
    }else if(props.tab===1){
      return <Pitcher/>
    }else if(props.tab===2){
      return <Catcher/>
    }else if(props.tab===3){
    return <Infielder/>
    }else if(props.tab===4){
        return <Outfielder/>
    }else if(props.tab===5){
        return <Newbie/>
    }else if(props.tab===6){
        return <Arm/>
    }
  }
