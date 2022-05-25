import PlayersData from '../../pages/PlayersList/Players/playersData';
import styled from "styled-components";
import { useState } from 'react';
import './playerProfile.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

let Photo = styled.div`
    width: 25%; 
    border-radius: 70%;
    overflow: hidden;
`

function PlayerProfile() {
    const [players] = useState(PlayersData);

    return(
        <div id="playerProfile">
            <Firstbox className='box1'></Firstbox>
            <Secondbox className='box2'></Secondbox>
            <div className='box3'>
                <div className="summarybox">
                    <div className="summaryletter">스카우트 요약</div>
                    <div className="summarysum"></div>
                    <Example className="summarybutton"></Example>
                </div>
            </div>
        </div>
        );
    }

    function Example() {
        const values = [true];
        const [fullscreen, setFullscreen] = useState(true);
        const [show, setShow] = useState(false);
      
        function handleShow(breakpoint) {
          setFullscreen(breakpoint);
          setShow(true);
        }
      
        return (
          <>
            {values.map((v, idx) => (
              <Button key={idx}className="me-2 mb-2" onClick={() => handleShow(v)}>
                More Details
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>스카우트 요약</Modal.Title>
              </Modal.Header>
              <Modal.Body>스카우트 요약은 여기 나타납니다아아아아앙아ㅏ</Modal.Body>
            </Modal>
          </>
        );
      }
      

function Firstbox(props){   
  const [players] = useState(PlayersData);
  return(
    <div className='profile'>
        <div className='profile-photoname'>
          <div className="photo">Photo</div>
          <h5 className="name">{players[0].name}</h5>
        </div>
        <div className="detailinfo">
          <p>{players[0].age}</p>
          <p>{players[0].nationality}</p>
          <p>{players[0].RL}</p>
          <p>{players[0].defenseRatio}</p>
        </div>
    </div>
    );
}

function Secondbox(props){   
    const [players] = useState(PlayersData);
    return(
        <div className= "kiwoom">
          <div className="kiwoom-small">
            <div>{players[0].team}</div>
            <h5 className="contract">{players[0].contract}</h5>
            </div>
        </div>
    );
}

export default PlayerProfile;