import { borderBottom, borderLeft } from "@mui/system";




export function Main(props) {
  return (
    <>
    <style>{`
    td{
     border:1px solid #E6E6E6;
    }
   `}
    </style>
    
    <div style={{ width: '100%', height: '100%', color: 'white', backgroundColor: '#550610' }}>
        <div style={{ minWidth: '450px', width: '35%', height: '100%', borderRight: '1px solid #930A1A', float:'left' }}>
          <div style={{ minHeight: '120px', width: '100%', height: '15%', borderBottom: '1px solid #930A1A' }}>
            <div style={{ padding: '10px', width: '30%', float: 'left' }}>
              <img className="Image" src="images/kiumlogo.png" />
            </div>
            <div style={{ paddingTop: '25px', fontWeight: 'bold', fontSize: '24px' }}>
              키움 히어로즈
            </div>
            <div style={{ paddingTop: '10px', }}>70승 67패 6무</div>
          </div>
          <div style={{ minHeight: '200px', width: '100%', height: '30%', borderBottom: '1px solid #930A1A' }}>
            <div style={{ height: '50%' }}>
              <div style={{ padding: '10px', fontSize: '18px' }}>
                NEXT
              </div>
              <div style={{ fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>
                04. 09 (토)
              </div>
              <div style={{ textAlign: 'center' }}>키움 &ensp;&ensp; vs &ensp;&ensp;삼성</div>
            </div>
            <div style={{ padding: '10px', fontSize: '18px' }}>
              PREVIOUS
            </div>
            <table style={{textAlign: 'center', border: '1px solid #f2f2f2', color: 'black', backgroundColor: '#fafafa', width: '100%', height: '39%', borderCollapse : 'collapse'}}>
              <tr style={{ backgroundColor : '#F2F2F2', fontWeight: 'bold', }}>
                <td>팀</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
              </tr>
              <tr style={{ height: '40%' }}>
                <td>LG</td><td>0</td><td>2</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td>
              </tr>
              <tr style={{backgroundColor : '#F2F2F2', height: '40%' }}>
                <td>키움</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
              </tr>
            </table>
          </div>
          <div>
            <div style={{paddingBottom : '10px', paddingLeft : '10px', paddingTop : '25px', fontSize : '24px', fontWeight : 'bold'}}>
              2022 정규리그 순위
            </div>
            <table style={{textAlign: 'center', border: '1px solid #f2f2f2', color: 'black', backgroundColor: '#fafafa', width: '100%', height: '39%', borderCollapse : 'collapse'}}>
              <tr style={{ backgroundColor : '#F2F2F2', fontWeight: 'bold', }}>
                <td>순위</td><td>팀명</td><td>경기</td><td>승</td><td>무</td><td>패</td><td>승률</td><td>게임차</td><td>연승</td><td>최근10경기</td>
              </tr>
              <tr style={{ height: '40%' }}>
                <td>1</td><td>LG</td><td>5</td><td>5</td><td>0</td><td>0</td><td>1.000</td><td>0.0</td><td>5승</td><td>5승-0패-0무</td>
              </tr>
              <tr>
                <td>2</td><td>SSG</td><td>5</td><td>5</td><td>0</td><td>0</td><td>1.000</td><td>0.0</td><td>5승</td><td>5승-0패-0무</td>
              </tr>
              <tr>
                <td>3</td><td>두산</td><td>5</td><td>3</td><td>0</td><td>2</td><td>0.600</td><td>2.0</td><td>1승</td><td>3승-2패-0무</td>
              </tr>
              <tr>
                <td>4</td><td>삼성</td><td>5</td><td>3</td><td>0</td><td>2</td><td>0.600</td><td>2.0</td><td>1패</td><td>3승-2패-0무</td>
              </tr>
              <tr>
                <td>5</td><td>롯데</td><td>5</td><td>3</td><td>0</td><td>2</td><td>0.600</td><td>2.0</td><td>1승</td><td>3승-2패-0무</td>
              </tr>
              <tr>
                <td>6</td><td>KIA</td><td>5</td><td>3</td><td>0</td><td>2</td><td>0.600</td><td>2.0</td><td>3승</td><td>3승-2패-0무</td>
              </tr>
              <tr>
                <td>7</td><td>KT</td><td>5</td><td>1</td><td>0</td><td>4</td><td>0.200</td><td>4.0</td><td>4패</td><td>1승-4패-0무</td>
              </tr>
              <tr>
                <td>8</td><td>키움</td><td>5</td><td>1</td><td>0</td><td>4</td><td>0.200</td><td>4.0</td><td>3승</td><td>1승-4패-0무</td>
              </tr>
              <tr>
                <td>9</td><td>NC</td><td>5</td><td>1</td><td>0</td><td>4</td><td>0.200</td><td>4.0</td><td>1패</td><td>1승-4패-0무</td>
              </tr>
              <tr>
                <td>10</td><td>한화</td><td>5</td><td>0</td><td>0</td><td>5</td><td>0.000</td><td>5.0</td><td>5패</td><td>0승-5패-0무</td>
              </tr>
            </table>
          </div>
        </div>
        
        <div style={{minWidth: '200px', width: '25%', height: '100%', borderRight: '1px solid #930A1A', float:'left' }}>
          <div style={{paddingBottom : '10px', paddingLeft : '10px', paddingTop : '10px', fontSize : '24px', fontWeight : 'bold'}}>
            당일 로스터 목록
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              1
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              서건창
            </div>
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              2
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              김하성
            </div>
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              3
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              이정후
            </div>
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              4
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              박병호
            </div>
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              5
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              샌즈
            </div>
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              6
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              박동원
            </div>
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              7
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              김혜성
            </div>
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              8
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              장영석
            </div>
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              9
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              박정음
            </div>
          </div>
          <div style = {{width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '15px', borderRight: '1px solid #930A1A', float : 'left'}}>
              P
            </div>
            <div style={{marginLeft : '30px', padding : '5px', }}>
              요키시
            </div>
          </div>
          <div style = {{ width : '100%'}}>
            <div style = {{padding : '5px',  borderBottom : '1px solid #930A1A'}}>
             불펜
            </div>
          </div>
          <div style = {{ width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style = {{padding : '5px', width : '120px', borderRight : '1px solid #930A1A', float : 'left'}}>
             조상우 (좌)
            </div>
            <div style = {{marginLeft : '135px', padding : '5px'}}>
              3.48
            </div>
          </div>
          <div style = {{ width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style = {{padding : '5px', width : '120px', borderRight : '1px solid #930A1A', float : 'left'}}>
             오주원 (우)
            </div>
            <div style = {{marginLeft : '135px', padding : '5px'}}>
              4.56
            </div>
          </div>
          <div style={{padding : '5px', fontSize : '18px', fontWeight : 'bold'}}>주요 타이틀</div>
        </div>
        <div style={{width : '30%', height : '100%', float : 'left'}}>
          <div style={{paddingLeft : '80px', padding : '10px', fontSize : '24px', fontWeight : 'bold'}}>
            리포트
          </div>
          <div style = {{height : '15%', width : '100%', borderBottom : '1px solid #930A1A'}}>
           <div style={{padding : '10px', paddingTop : '0px', fontSize : '18px'}}>
              리포트 제목
            </div>
            <div style={{padding : '10px', paddingTop : '0px'}}>
              리포트 요약
            </div>
          </div>
          <div style = {{height : '25%', width : '100%', borderBottom : '1px solid #930A1A'}}>
          </div>
          <div style={{paddingBottom : '10px', paddingLeft : '10px', paddingTop : '10px', fontSize : '24px', fontWeight : 'bold'}}>
            팀 부상
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
              포지션
            </div>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
              이름
            </div>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
              부상
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
              투수
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
              한현희
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
              발목 부상
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '27%',float : 'left'}}>
            &nbsp;
            </div>
          </div>
        </div>
      </div>
      
      
      </>
  );
}
