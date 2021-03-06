import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './strategy.css';

const theme = createTheme({
  palette: {
    search: {
      main: '#A51919',
      darker: '#430C13',
      contrastText : '#fff'
    },
  },
});




export function Strategy(props) {
  const [team, setTeam] = React.useState('');
  const [weather, setWeather] = React.useState('');
  const [stadium, setStadium] = React.useState('');
  const [pitcher, setPitcher] = React.useState('');

  const handleChanget = (event) => {
    setTeam(event.target.value);
  };

  const handleChangew = (event) => {
    setWeather(event.target.value);
  };

  const handleChanges = (event) => {
    setStadium(event.target.value);
  };

  const handleChangep = (event) => {
    setPitcher(event.target.value);
  };

  
  const pitcherdata = [];
  if (team === "SSG"){
    pitcherdata[0] = "김광현"
    pitcherdata[1] = "윌머 폰트"
    pitcherdata[2] = "이반 노바"
  }
  if (team === "LG"){
    pitcherdata[0] = "정우영"
    pitcherdata[1] = "이민호"
    pitcherdata[2] = "임찬규"
  }

  if (team === "삼성"){
    pitcherdata[0] = "뷰캐넌"
    pitcherdata[1] = "수아레즈"
    pitcherdata[2] = "원태인"
  }

  if (team === "두산"){
    pitcherdata[0] = "박치국"
    pitcherdata[1] = "남호"
    pitcherdata[2] = "홍건희"
  }

  if (team === "롯데"){
    pitcherdata[0] = "최준용"
    pitcherdata[1] = "김원중"
    pitcherdata[2] = "스파크맨"
  }

  if (team === "KIA"){
    pitcherdata[0] = "김이환"
    pitcherdata[1] = "양현종"
    pitcherdata[2] = "임기영"
  }

  if (team === "KT"){
    pitcherdata[0] = "소형준"
    pitcherdata[1] = "고영표"
    pitcherdata[2] = "엄상백"
  }

  if (team === "NC"){
    pitcherdata[0] = "박치국"
    pitcherdata[1] = "남호"
    pitcherdata[2] = "홍건희"
  }

  if (team === "한화"){
    pitcherdata[0] = "이재학"
    pitcherdata[1] = "구창모"
    pitcherdata[2] = "송명기"
  }
  const reportdata = [{
    vsteam : "SSG 상대로 승률 53%",
    vspitcher : "김광현 상대로 타율 0.435",
    instadium : "서울종합운동장 야구장에서 타율 0.342"
  }];
  



  const pitcherlists = pitcherdata.map((p) => (<MenuItem value={p}>{p}</MenuItem>));

  let [details, changedetails] = useState(0);

  let [result, changeresult] = useState(0);




 
  return (
   
  <>
    <div align='center' style={{minWidth : '700px', paddingBottom: '10px', backgroundColor: '#430C13', height: '25%', width: '100%', position: 'relative', color : 'white'}}>
      <div align='center' style={{ position: 'relative', top: '50%', transform: 'translateY(-75%)', width: '25%', float: 'left' }}>
        상대 팀<br />
        <FormControl sx={{ m: 1, minWidth: 120, width: '80%', backgroundColor: '#984655', borderRadius: '5px' }}>
          <Select
            value={team}
            onChange={handleChanget}
            displayEmpty
          >
            <MenuItem value="">
              <em>팀 선택</em>
            </MenuItem>
            <MenuItem value={"SSG"}>SSG</MenuItem>
            <MenuItem value={"LG"}>LG</MenuItem>
            <MenuItem value={"KIA"}>KIA</MenuItem>
            <MenuItem value={"삼성"}>삼성</MenuItem>
            <MenuItem value={"두산"}>두산</MenuItem>
            <MenuItem value={"KT"}>KT</MenuItem>
            <MenuItem value={"롯데"}>롯데</MenuItem>
            <MenuItem value={"한화"}>한화</MenuItem>
            <MenuItem value={"NC"}>NC</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div align='center' style={{ position: 'relative', top: '50%', transform: 'translateY(-75%)', width: '25%', float: 'left' }}>
        상대 선발 투수<br/>
        <React.Fragment>
          {team === '' ? (<FormControl sx={{ m: 1, minWidth: 120, width: '80%', backgroundColor: '#984655', borderRadius: '5px', }} disabled>
            <Select
              value={pitcher}
              onChange={handleChangep}
              displayEmpty
            >
              <MenuItem value="">
                <em>선수 선택</em>
              </MenuItem>
              {pitcherlists}
            </Select>
          </FormControl>) : (
            <FormControl sx={{ m: 1, minWidth: 120, width: '80%', backgroundColor: '#984655', borderRadius: '5px', }}>
              <Select
                value={pitcher}
                onChange={handleChangep}
                displayEmpty
              >
                <MenuItem value="">
                  <em>선수 선택</em>
                </MenuItem>
                {pitcherlists}
              </Select>
            </FormControl>)}
        </React.Fragment>
      </div>

      <div align='center' style={{ position: 'relative', top: '50%', transform: 'translateY(-75%)', width: '30%', float: 'left' }}>
        구장<br />
        <FormControl sx={{ m: 1, minWidth: 120, width: '90%', backgroundColor: '#984655', borderRadius: '5px' }}>
          <Select
            value={stadium}
            onChange={handleChanges}
            displayEmpty
          >
            <MenuItem value="">
              <em>구장 선택</em>
            </MenuItem>
            <MenuItem value={"서울종합운동장 야구장"}>서울종합운동장 야구장</MenuItem>
            <MenuItem value={"고척 스카이돔"}>고척 스카이돔</MenuItem>
            <MenuItem value={"인천 SSG 랜더스필드"}>인천 SSG 랜더스필드</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div align='center' style={{ position: 'relative', top: '50%', transform: 'translateY(-75%)', width: '15%', float: 'left' }}>
        날씨<br />
        <FormControl sx={{ m: 1, minWidth: 120, width: '80%', backgroundColor: '#984655', borderRadius: '5px' }}>
          <Select
            value={weather}
            onChange={handleChangew}
            displayEmpty
          >
            <MenuItem value="">
              <em>날씨 선택</em>
            </MenuItem>
            <MenuItem value={"맑음"}>맑음</MenuItem>
            <MenuItem value={"강우"}>강우</MenuItem>
            <MenuItem value={"눈"}>눈</MenuItem>
            <MenuItem value={"강풍"}>강풍</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ paddingTop: '4%',  position: 'relative', color: 'white', clear: 'left' }}>
        <ThemeProvider theme={theme}>
          <Button onClick={()=>{changeresult(1)}} variant="contained" color="search">
            결과 확인
          </Button>
        </ThemeProvider>
      </div>
    </div>
    <div style = {{ paddingRight : '10px', width : '50%', height : '100%', float : "left"}}>
    <React.Fragment> 
      { result === 1 ? ( 
    <div style = {{height : '100%', backgroundColor : 'white'}}>
    <table style = {{padding : '10px', height : '100%', width : '100%', borderCollapse: 'collapse'}}>
      <tr onClick = {()=>{changedetails(1)}} style = {{height : '6.5%', borderBottom : '1px solid #f2f2f2'}}>
        <td style = {{minWidth : '50px', width : '10%'}}>
          1
        </td>
        <td  style = {{width : '30%'}}>
          김혜성
        </td>
        <td style = {{width : '20%'}}>
          2B
        </td>
        <td style = {{width : '20%'}}>
          L
        </td>
      </tr>
      <tr style = {{height : '6.5%' , borderBottom : '1px solid #f2f2f2', backgroundColor : '#fafafa'}}>
        <td style = {{minWidth : '50px', width : '10%', }}>
          2
        </td>
        <td>
          전병우
        </td>
        <td>
          1B
        </td>
        <td>
          R
        </td>
      </tr>
      <tr style = {{height : '6.5%', borderBottom : '1px solid #f2f2f2'}}>
        <td>
          3
        </td>
        <td>
          이정후
        </td>
        <td>
          CF
        </td>
        <td>
          L
        </td>
      </tr>
      <tr style = {{height : '6.5%', borderBottom : '1px solid #f2f2f2', backgroundColor : '#fafafa'}}>
        <td>
          4
        </td>
        <td>
          푸이그
        </td>
        <td>
          RF
        </td>
        <td>
          R
        </td>
      </tr>
      <tr style = {{height : '6.5%', borderBottom : '1px solid #f2f2f2'}}>
        <td>
          5
        </td>
        <td>
          송성문
        </td>
        <td>
          3B
        </td>
        <td>
          L
        </td>
      </tr>
      <tr style = {{height : '6.5%', borderBottom : '1px solid #f2f2f2', backgroundColor : '#fafafa'}}>
        <td>
          6
        </td>
        <td>
          김주형
        </td>
        <td>
          SS
        </td>
        <td>
          R
        </td>
      </tr>
      <tr style = {{height : '6.5%', borderBottom : '1px solid #f2f2f2'}}>
        <td>
          7
        </td>
        <td>
          이병규
        </td>
        <td>
          DH
        </td>
        <td>
          L
        </td>
      </tr>
      <tr style = {{height : '6.5%', borderBottom : '1px solid #f2f2f2', backgroundColor : '#fafafa'}}>
        <td>
          8
        </td>
        <td>
          김재현
        </td>
        <td>
          C
        </td>
        <td>
          R
        </td>
      </tr>
      <tr style = {{height : '6.5%', borderBottom : '1px solid #f2f2f2' }}>
        <td>
          9
        </td>
        <td>
          박찬혁
        </td>
        <td>
          LF
        </td>
        <td>
          R
        </td>
      </tr>
      <tr>
       
      </tr>
    </table>
    </div>
 ) : null} 
    </React.Fragment>
    </div>


    <div style = {{backgroundColor : '#550610', width: '49%', height : '100%', float : "left"}}>
     
     <React.Fragment>
       {details === 1 ? (
         <div>
         <div style = {{fontSize : '20px', padding : '15px', borderBottom : '1px solid #720B1E', color : 'white'}}>
         {reportdata[0].vsteam}
        </div>
        <div style = {{fontSize : '20px', padding : '15px', borderBottom : '1px solid #720B1E', color : 'white'}}>
         {reportdata[0].vspitcher}
         </div>
        <div style = {{fontSize : '20px', padding : '15px', borderBottom : '1px solid #720B1E', color : 'white'}}>
         {reportdata[0].instadium}
         </div>
       </div>
       ) : null }

     </React.Fragment>
    </div>
    </>
  
  );
}
