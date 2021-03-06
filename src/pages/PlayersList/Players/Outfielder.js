import * as S from "./players.style.js";
import player from "./playersData";

function Outfielder() {
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
                                padding: "25px",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                        <div
                            style={{
                                height:"100%",
                                width: "280%",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                            <div
                                style={{
                                    fontSize:"1.5vh",
                                    color: "grey",
                                }}>
                                외야수</div>
                            <div
                                style={{
                                    fontSize:"2vh",
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
                        marginLeft: "30px",
                        marginRight: "30px",
                        height:"190px",
                    }}>
                        <div>{player.box}</div>
                        <div
                            style={{
                                marginTop:"10px",
                                alignItems:"center",
                        }}>{player.profile}</div>
                    </div>
                </div>    
                ))}
              </div>
        </S.Container>
    );
}
export default Outfielder;