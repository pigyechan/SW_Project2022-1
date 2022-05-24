import Table from 'react-bootstrap/Table'
import styled from "styled-components";
import './profile.css';

export function Profile(Props) {
  let Style = styled.div`
            display: flex;
            width: 100%;  
            height: auto;
            border-radius: 5px;
            background-color: #550610;

        `
  
  const players =[{
    id:0,
    name: '요키시',
    team: '키움',
    scoutsum: '좋은 영입이 될 것',
    gamec: 5,
    strout: 29,
    winc: 2,
    ops : 123,
    score : 2.27,
    ballf : 3,
    whip : 1.04,
    bastr : 29/3,
    innings : '31 2/3',
    hits : 30,
    ballc : 474,
    homerun : 0,
    injury : '팔, 다리 부상',}
  ]

  return (
    <Style>
      <Table bordered id= "table">
        <tbody>
          <tr>
            <td colSpan={3} rowspan={6}>피치스타일</td>
            <td>경기 수&nbsp;&nbsp;{players[0].gamec}</td>
            <td>탈삼진&nbsp;&nbsp;{players[0].strout}</td>
            <td rowspan={6}>리그 평균과 비교</td>
          </tr>
          <tr>
            <td>승리 수&nbsp;&nbsp;{players[0].winc}</td>
            <td>피옵스&nbsp;&nbsp;{players[0].ops}</td>
          </tr>
          <tr>
            <td>평균자책점&nbsp;&nbsp;{players[0].score}</td>
            <td>볼넷&nbsp;&nbsp;{players[0].ballf}</td>
          </tr>
          <tr>
            <td>WHIP&nbsp;&nbsp;{players[0].whip}</td>
            <td>볼삼비&nbsp;&nbsp;{(players[0].bastr).toFixed(2)}</td>
          </tr>
          <tr>
            <td>이닝&nbsp;&nbsp;{players[0].innings}</td>
            <td>피안타율&nbsp;&nbsp;{players[0].hits}</td>
          </tr>
          <tr>
            <td>투구수&nbsp;&nbsp;{players[0].ballc}</td>
            <td>피홈런율&nbsp;&nbsp;{players[0].homerun}</td>
          </tr>    
          <tr>
            <td colSpan = {3}>부상상태<br/>{players[0].injury}</td>
            <td colSpan = {4} rowspan={2}>게임 로그<br/>2022.05.11 vs삼성 4이닝</td>
          </tr>
          <tr>
            <td colSpan = {3}>스핀<br/><br/></td>
          </tr>
        </tbody>
      </Table>
    </Style>
  );
}