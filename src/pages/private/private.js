import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function Private(Props) {
  
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
    <div style = {{width : '100%', height : '100%'}}>
      <TableContainer component={Paper} style = {{backgroundColor : '#550610', height : '100%', borderCollapse : 'collapse', }}>
          <TableRow style = {{minheight : '100px', height : '20%'}}>
            <TableCell style = {{color : 'white',  border : '1px solid #930A1A'}} align="center" colSpan={2} ><img className="Image" src="images/요키시.jpg" /><br/>{players[0].name} </TableCell>
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center" colSpan={2} ><h3>소속팀</h3>{players[0].team}</TableCell>
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center"><h3>스카우트 요약</h3>{players[0].scoutsum}</TableCell>
          </TableRow>
            
          <TableRow style = {{minheight : '20px', height : '10%'}}>
            <TableCell style = {{color : 'white', minWidth : '200px', width: '20%',  border : '1px solid #930A1A'}} align="center">프로필</TableCell>
            <TableCell style = {{color : 'white', minWidth : '200px', width: '20%', border : '1px solid #930A1A'}} align="center">트레이닝</TableCell>
            <TableCell style = {{color : 'white', minWidth : '200px', width: '20%', border : '1px solid #930A1A'}} align="center">스카우팅 리포트</TableCell>
            <TableCell style = {{border : '1px solid #930A1A'}} colSpan={2}></TableCell>
          </TableRow>
          
          <TableRow style = {{minheight : '20px', height : '10%'}}>
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center" colSpan={2} rowspan={6}>피치스타일</TableCell>
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center">경기 수&nbsp;&nbsp;{players[0].gamec}</TableCell>
            <TableCell style = {{color : 'white', minWidth : '200px', width: '20%', border : '1px solid #930A1A'}} align="center">탈삼진&nbsp;&nbsp;{players[0].strout}</TableCell>
            <TableCell style = {{color : 'white',  border : '1px solid #930A1A'}} align="center"rowspan={6}>리그 평균과 비교</TableCell>
          </TableRow>

          <TableRow style = {{color : 'white'}} >
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center">승리 수&nbsp;&nbsp;{players[0].winc}</TableCell>
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center">피옵스&nbsp;&nbsp;{players[0].ops}</TableCell>
          </TableRow>

          <TableRow style = {{color : 'white'}} >
           <TableCell style = {{color : 'white', border : '1px solid #930A1A'}}align="center">평균자책점&nbsp;&nbsp;{players[0].score}</TableCell>
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center">볼넷&nbsp;&nbsp;{players[0].ballf}</TableCell>
          </TableRow>

          <TableRow style = {{color : 'white'}} >
            <TableCell style = {{color : 'white',  border : '1px solid #930A1A'}} align="center">WHIP&nbsp;&nbsp;{players[0].whip}</TableCell>
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center">볼삼비&nbsp;&nbsp;{(players[0].bastr).toFixed(2)}</TableCell>
          </TableRow>

          <TableRow style = {{color : 'white'}} >
            <TableCell style = {{color : 'white',  border : '1px solid #930A1A'}} align="center">이닝&nbsp;&nbsp;{players[0].innings}</TableCell>
            <TableCell style = {{color : 'white',  border : '1px solid #930A1A'}} align="center">피안타율&nbsp;&nbsp;{players[0].hits}</TableCell>
          </TableRow>

          <TableRow style = {{color : 'white'}} >
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center">투구수&nbsp;&nbsp;{players[0].ballc}</TableCell>
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center">피홈런율&nbsp;&nbsp;{players[0].homerun}</TableCell>
          </TableRow>

          <TableRow style = {{color : 'white', height : '200px'}}>
            <TableCell style = {{color : 'white', border : '1px solid #930A1A'}} align="center" colSpan={2}>부상상태<br/>{players[0].injury}</TableCell>
            <TableCell colSpan = {3} style = {{color : 'white', border : '1px solid #930A1A'}} align="center">게임 로그<br/>2022.05.11 vs삼성 4이닝</TableCell>
          </TableRow>
       </TableContainer>
      </div>
  );
}