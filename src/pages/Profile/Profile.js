import Table from "react-bootstrap/Table";
import styled from "styled-components";
import "./profile.css";
import player from "../PlayersList/Players/playersData";

export function Profile(Props) {
  let Style = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    width: auto;
    border-radius: 5px;
    background-color: #550610;
  `;

  return (
    <Style>
      <Table bordered id="table">
        <tbody>
          <tr>
            <td rowspan={6}>
              <div id="tbtb">
                <div>피치스타일</div>
                <div className="pitch"></div>
                <div>스타일 목록</div>
              </div>
            </td>
            <td colSpan={2}>경기 수&nbsp;&nbsp;{player[0].gamec}</td>
            <td colSpan={2}>탈삼진&nbsp;&nbsp;{player[0].strout}</td>
            <td colSpan={2} rowspan={6}>
              리그 평균과 비교
            </td>
          </tr>
          <tr>
            <td colSpan={2}>승리 수&nbsp;&nbsp;{player[0].winc}</td>
            <td colSpan={2}>피옵스&nbsp;&nbsp;{player[0].ops}</td>
          </tr>
          <tr>
            <td colSpan={2}>평균자책점&nbsp;&nbsp;{player[0].score}</td>
            <td colSpan={2}>볼넷&nbsp;&nbsp;{player[0].ballf}</td>
          </tr>
          <tr>
            <td colSpan={2}>WHIP&nbsp;&nbsp;{player[0].whip}</td>
            <td colSpan={2}>볼삼비&nbsp;&nbsp;{player[0].bastr.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={2}>이닝&nbsp;&nbsp;{player[0].innings}</td>
            <td colSpan={2}>피안타율&nbsp;&nbsp;{player[0].hits}</td>
          </tr>
          <tr>
            <td colSpan={2}>투구수&nbsp;&nbsp;{player[0].ballc}</td>
            <td colSpan={2}>피홈런율&nbsp;&nbsp;{player[0].homerun}</td>
          </tr>
          <tr>
            <td>
              부상상태
              <br />
              {player[0].injury}
            </td>
            <td colSpan={6} rowspan={2}>
              게임 로그
              <br />
              2022.05.11 vs삼성 4이닝
            </td>
          </tr>
          <tr>
            <td>
              스핀
              <br />
              <br />
            </td>
          </tr>
        </tbody>
      </Table>
    </Style>
  );
}
