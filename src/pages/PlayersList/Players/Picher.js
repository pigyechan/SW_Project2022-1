import * as S from "./players.style.js";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Pitcher() {
    const player = [
        {
            position: "투수",
            name: "정찬헌",
            number: "No. 22",
            photo: "",
            box: <S.Box></S.Box>,
            profile: <Button variant="secondary">자세히 보기</Button>,
        },
        {
            position: "투수",
            name: "문성현",
            number: "No. 39",
            photo: "",
            box: <S.Box></S.Box>,
            profile: <Button variant="secondary">자세히 보기</Button>,
        },
        {
            position: "투수",
            name: "양현",
            number: "No. 39",
            photo: "",
            box: <S.Box></S.Box>,
            profile: <Button variant="secondary">자세히 보기</Button>,
        },
        {
            position: "투수",
            name: "에릭 요키시",
            number: "No. 43",
            photo: "",
            box: <S.Box></S.Box>,
            profile: 
            <Link to ="./playerss/playersInfo">
                <Button variant="secondary" >자세히 보기</Button>
            </Link>,
        },
        {
            position: "투수",
            name: "김태훈",
            number: "No. 17",
            photo: "",
            box: <S.Box></S.Box>,
            profile: <Button variant="secondary">자세히 보기</Button>,
        },
        {
            position: "투수",
            name: "한현희",
            number: "No. 63",
            photo: "",
            box: <S.Box></S.Box>,
            profile: <Button variant="secondary">자세히 보기</Button>,
        },
        {
            position: "투수",
            name: "박주현",
            number: "No. 45",
            photo: "",
            box: <S.Box></S.Box>,
            profile: <Button variant="secondary">자세히 보기</Button>,
        },
    ];

    return (
        <S.Container>
            <div
              style={{
                display: "flex",
                height: "auto",
                width: "auto",
                flexDirection: "row",
                alignItems:"center",
                justifyContent:"center",
                flexWrap: "wrap",
                margin:"1%",
              }}
            >
            {player.map((player, index) => (
                  <div
                    style={{
                        width: "45vh",
                        height: "30vh",
                        display: "flex",
                        flexDirection: "row",
                        position: "relative",
                        margin: "1%",
                        alignItems: "center",
                        justifyContent: "space-between",
                        border:"3px solid grey",
                        borderRadius:"10px",

                    }}
                  >
                    <div style={{
                                padding: "30px",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                        <div
                            style={{
                                height:"100%",
                                width: "100%",
                                padding: "10px",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                            <div
                                style={{
                                    fontSize:"2vh",
                                    color: "grey",
                                }}>
                                {player.position}</div>
                            <div
                                style={{
                                    fontSize:"3vh",
                                    fontWeight:"bolder",
                                    marginBottom: "60px",
                                }}>
                                {player.name}</div>
                            <div
                                style={{
                                    borderTop: "3px solid #930A1A",
                                    width: "2vh",
                                }}></div>
                            <div
                                style={{
                                    fontSize:"3vh",
                                    color:"#930A1A",
                                    marginTop:"15px",
                                    fontWeight:"bolder",
                                }}>
                                {player.number}</div>
                        </div>
                    </div>

                    <div
                    style={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        margin: "60px",
    
                    }}>
                        <div>{player.box}</div>
                        <div
                            style={{
                                marginTop:"15px",
                                alignItems:"center",
                        }}>{player.profile}</div>
                    </div>
                </div>    
                ))}
              </div>
        </S.Container>
    );
}
export default Pitcher;