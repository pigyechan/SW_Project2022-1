import { borderBottom, borderLeft } from "@mui/system";




export function Main(props) {
  return (
    <>
    
    <div style={{ width: '100%', height: '100%', color: 'white', backgroundColor: '#550610' }}>
        <div style={{ minWidth: '450px', width: '40%', height: '100%', borderRight: '1px solid #930A1A', float:'left' }}>
          <div style={{ minHeight: '120px', width: '100%', height: '10%', borderBottom: '1px solid #930A1A' }}>
            <div style={{ padding: '10px', width: '30%', float: 'left' }}>
              <img className="Image" src="images/kiumlogo.png" />
            </div>
            <div style={{ paddingTop: '25px', fontWeight: 'bold', fontSize: '24px' }}>
              키움 히어로즈
            </div>
            <div style={{ paddingTop: '10px', }}>34승 22패 1무</div>
          </div>
          <div style={{ minHeight: '200px', width: '100%', height: '35%', borderBottom: '1px solid #930A1A' }}>
            <div style={{ height: '50%' }}>
              <div style={{padding: '10px',  paddingTop : '5px', fontSize: '18px' }}>
                NEXT
              </div>
              <div style={{ fontWeight: 'bold', paddingBottom: '10px', textAlign: 'center' }}>
                06. 08 (목)
              </div>
              
              
              <div style={{ textAlign: 'center' }}><img className="Image" src="images/kium.png" width = "70px"/>&ensp;&ensp;vs&ensp;&ensp;<img className="Image" src="images/kt.png" width = "70px"/> </div>
              <div style={{ textAlign: 'center' }}>키움 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;KT</div>
            </div>
            <div style={{ padding: '10px', fontSize: '18px' }}>
              PREVIOUS
            </div>
            <table style={{textAlign: 'center', border: '1px solid #f2f2f2', color: 'black', backgroundColor: '#fafafa', width: '100%', height: '39%', borderCollapse : 'collapse'}}>
              <tr style={{ backgroundColor : '#F2F2F2', fontWeight: 'bold', }}>
                <td>팀</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>R</td><td>H</td><td>E</td><td>B</td>
              </tr>
              <tr style={{ height: '40%' }}>
                <td>키움</td><td>2</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td style={{fontWeight : 'bold'}}>3</td><td>5</td><td>0</td><td>3</td>
              </tr>
              <tr style={{backgroundColor : '#F2F2F2', height: '40%' }}>
                <td>KT</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td style={{fontWeight : 'bold'}}>0</td><td>8</td><td>0</td><td>9</td>
              </tr>
            </table>
          </div>
          <div>
            <div style={{paddingBottom : '10px', paddingLeft : '10px', paddingTop : '25px', fontSize : '24px', fontWeight : 'bold'}}>
              2022 정규리그 순위
            </div>
            <table style={{textAlign: 'center', border: '1px solid #f2f2f2', color: 'black', backgroundColor: '#fafafa', width: '100%', height: '39%', borderCollapse : 'collapse'}}>
              <tr style={{ backgroundColor : '#F2F2F2', fontWeight: 'bold', }}>
                <td>순위</td><td>팀명</td><td>경기</td><td>승</td><td>패</td><td>무</td><td>승률</td><td>게임차</td><td>연속</td><td>최근10경기</td>
              </tr>
              <tr style={{ height: '40%' }}>
                <td>1</td><td>SSG</td><td>59</td><td>36</td><td>20</td><td>3</td><td>0.643</td><td>0.0</td><td>2패</td><td>3승-6패-1무</td>
              </tr>
              <tr>
                <td>2</td><td>키움</td><td>58</td><td>34</td><td>23</td><td>1</td><td>0.596</td><td>2.5</td><td>1패</td><td>6승-3패-1무</td>
              </tr>
              <tr>
                <td>3</td><td>두산</td><td>58</td><td>32</td><td>25</td><td>1</td><td>0.561</td><td>4.5</td><td>1패</td><td>5승-4패-1무</td>
              </tr>
              <tr>
                <td>4</td><td>삼성</td><td>57</td><td>31</td><td>25</td><td>1</td><td>0.554</td><td>5.0</td><td>1승</td><td>5승-4패-1무</td>
              </tr>
              <tr>
                <td>5</td><td>롯데</td><td>57</td><td>28</td><td>29</td><td>0</td><td>0.491</td><td>8.5</td><td>1패</td><td>5승-5패-0무</td>
              </tr>
              <tr>
                <td>6</td><td>KIA</td><td>56</td><td>27</td><td>28</td><td>1</td><td>0.491</td><td>8.5</td><td>1승</td><td>4승-6패-0무</td>
              </tr>
              <tr>
                <td>7</td><td>KT</td><td>58</td><td>26</td><td>30</td><td>2</td><td>0.464</td><td>10.0</td><td>1승</td><td>5승-3패-2무</td>
              </tr>
              <tr>
                <td>8</td><td>키움</td><td>57</td><td>25</td><td>30</td><td>2</td><td>0.455</td><td>10.5</td><td>1승</td><td>3승-6패-1무</td>
              </tr>
              <tr>
                <td>9</td><td>NC</td><td>58</td><td>22</td><td>36</td><td>0</td><td>0.379</td><td>15.0</td><td>1패</td><td>5승-5패-0무</td>
              </tr>
              <tr>
                <td>10</td><td>한화</td><td>58</td><td>21</td><td>36</td><td>1</td><td>0.368</td><td>15.5</td><td>2승</td><td>6승-3패-1무</td>
              </tr>
            </table>
          </div>
        </div>
        
        <div style={{minWidth: '200px', width: '25%', height: '100%', borderRight: '1px solid #930A1A', float:'left' }}>
          <div style={{paddingBottom : '10px', paddingLeft : '10px', paddingTop : '10px', fontSize : '24px', fontWeight : 'bold'}}>
            당일 로스터 목록
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              1
            </div>
            <div style={{width : '84%', padding : '5px', borderRight: '1px solid #930A1A', float: 'left'}}>
              김준완
            </div>
            <div style={{padding : '5px', float: 'left'}}>
              LF
            </div>
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A', clear : 'left'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              2
            </div>
            <div style={{width : '84%', padding : '5px', borderRight: '1px solid #930A1A', float: 'left'}}>
              송성문
            </div>
            <div style={{padding : '5px', float: 'left'}}>
              2B
            </div>
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A', clear : 'left'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              3
            </div>
            <div style={{width : '84%', padding : '5px', borderRight: '1px solid #930A1A', float: 'left'}}>
              이정후
            </div>
            <div style={{padding : '5px', float: 'left'}}>
              CF
            </div>
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A', clear : 'left'}}>
          <div style={{ fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              4
            </div>
            <div style={{width : '84%', padding : '5px', borderRight: '1px solid #930A1A', float: 'left'}}>
              야시엘 푸이그
            </div>
            <div style={{padding : '5px', float: 'left'}}>
              RF
            </div>
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A', clear : 'left'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              5
            </div>
            <div style={{width : '84%', padding : '5px', borderRight: '1px solid #930A1A', float: 'left'}}>
              김혜성
            </div>
            <div style={{padding : '5px', float: 'left'}}>
              2B
            </div>
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A', clear : 'left'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              6
            </div>
            <div style={{width : '84%', padding : '5px', borderRight: '1px solid #930A1A', float: 'left'}}>
              김수환
            </div>
            <div style={{padding : '5px', float: 'left'}}>
              1B
            </div>
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A', clear : 'left'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              7
            </div>
            <div style={{width : '84%', padding : '5px', borderRight: '1px solid #930A1A', float: 'left'}}>
              임지열
            </div>
            <div style={{padding : '5px', float: 'left'}}>
              DH
            </div>
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A', clear : 'left'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              8
            </div>
            <div style={{width : '84%', padding : '5px', borderRight: '1px solid #930A1A', float: 'left'}}>
              이지영
            </div>
            <div style={{padding : '5px', float: 'left'}}>
              C
            </div>
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A', clear : 'left'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              9
            </div>
            <div style={{width : '84%', padding : '5px', borderRight: '1px solid #930A1A', float: 'left'}}>
              김휘집
            </div>
            <div style={{padding : '5px', float: 'left'}}>
              SS
            </div>
          </div>
          <div style = {{width : '100%', height : '35px', borderBottom : '1px solid #930A1A', clear : 'left'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '25px', borderRight: '1px solid #930A1A', float : 'left'}}>
              P
            </div>
            <div style={{width : '84%', padding : '5px', float: 'left'}}>
              최원태
            </div>
          </div>
          <div style = {{ width : '100%'}}>
            <div style = {{padding : '5px',  borderBottom : '1px solid #930A1A', fontWeight : 'bold'}}>
             불펜
            </div>
          </div>
          <div style = {{height : '35px', width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style = {{padding : '5px', width : '120px', borderRight : '1px solid #930A1A', float : 'left'}}>
             조상우 (좌)
            </div>
            <div style = {{padding : '5px', float : 'left'}}>
              3.48
            </div>
          </div>
          <div style = {{height : '35px', width : '100%', borderBottom : '1px solid #930A1A', clear : 'left'}}>
            <div style = {{padding : '5px', width : '120px', borderRight : '1px solid #930A1A', float : 'left'}}>
             오주원 (우)
            </div>
            <div style = {{ padding : '5px',  float : 'left'}}>
              4.56
            </div>
          </div>
          <div style={{padding : '5px', fontSize : '18px', fontWeight : 'bold'}}>주요 타이틀</div>
          <table style={{textAlign: 'center', border: '1px solid #f2f2f2', color: 'black', backgroundColor: '#fafafa', width: '100%', height: '39%', borderCollapse : 'collapse'}}>
              <tr style={{ backgroundColor : '#F2F2F2', fontWeight: 'bold', }}>
                <td>부문</td><td>선수 이름</td><td>기록</td>
              </tr>
              <tr >
                <td>다승</td><td>안우진</td><td>7승</td>
              </tr>
              <tr >
                <td>평균자책</td><td>안우진</td><td>2.31</td>
              </tr>
              <tr >
                <td>탈삼진</td><td>안우진</td><td>83</td>
              </tr>
              <tr >
                <td>탈삼진</td><td>요키시</td><td>72</td>
              </tr>
              <tr >
                <td>도루</td><td>김혜성</td><td>20</td>
              </tr>
              <tr >
                <td>WHIP</td><td>요키시</td><td>0.97</td>
              </tr>
              <tr >
                <td>WAR</td><td>안우진</td><td>2.45</td>
              </tr>
            </table>
        </div>
        <div style={{width : '35%', height : '100%', float : 'left'}}>
          <div style={{paddingLeft : '80px', padding : '10px', fontSize : '24px', fontWeight : 'bold'}}>
            리포트
          </div>
          <div style = {{height : '15%', width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '10px', paddingTop : '0px', fontSize : '18px'}}>
              OO 선수의 훈련 결과
            </div>
            <div style={{padding : '10px', paddingTop : '0px'}}>
              OO 선수가 훈련에서 매우 좋은 결과를 거두었습니다.<br/>
              다음 경기 때 좋은 모습을 보일 것으로 보입니다.
            </div>
          </div>
          <div style = {{height : '25%', width : '100%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '10px', paddingTop : '10px', fontSize : '18px'}}>
              OO 선수의 이전 경기 리포트
            </div>
            <div style={{padding : '10px', paddingTop : '10px'}}>
              OO 선수가 경기에서 낮은 타율을 보여줬습니다.<br/>
              타격에서의 보완이 필요합니다.
            </div>
          </div>
          <div style={{paddingBottom : '10px', paddingLeft : '10px', paddingTop : '10px', fontSize : '24px', fontWeight : 'bold'}}>
            팀 부상
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
              포지션
            </div>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
              이름
            </div>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '24%',float : 'left', borderRight: '1px solid #930A1A'}}>
              부상
            </div>
            <div style={{fontWeight : 'bold', padding : '5px', textAlign : 'center', width : '24%',float : 'left'}}>
              재활 기간
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
              투수
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
              한현희
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
              발목 부상
            </div>
            <div style={{padding : '5px',  textAlign : 'center', width : '24%', float : 'left'}}>
              4.21~5.23
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
          <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
          <div style = {{width : '100%', height : '3.5%', borderBottom : '1px solid #930A1A'}}>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', borderRight: '1px solid #930A1A', float : 'left'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left', borderRight: '1px solid #930A1A'}}>
            &nbsp;
            </div>
            <div style={{padding : '5px', textAlign : 'center', width : '24%', float : 'left'}}>
            &nbsp;
            </div>
          </div>
        </div>
      </div>
      
      
      </>
  );
}
