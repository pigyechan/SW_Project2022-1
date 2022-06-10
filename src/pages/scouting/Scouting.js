import * as S from "./Scouting.style";
import { MdSearch } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FormControl } from "react-bootstrap";

export function Scouting(props) {
  const scouterArr = ["스카우터명", "스카우터명", "스카우터명"];
  const nameArr = ["김혜성", "이정후"];
  const scoutingArr = [
    {
      name: "김혜성",
      age: "23",
      nation: "대한민국",
      style: "좌",
      status: "WAR+ 2.04",
      box: <S.Box></S.Box>,
    },
  ];
  return (
    <S.BackContainer>
      <S.MainContainer>
        <S.FontSet>스카우트</S.FontSet>
        <S.TrainContainer>
          <S.LeftContainer>
            <S.FontSet
              style={{
                height: "5%",
                padding: "10px",
                flexDirection: "row",
                display: "flex",
                borderBottom: "1px solid #ffffff",
                alignItems: "center",
              }}
            >
              <MdSearch />
              <FormControl
                style={{
                  marginLeft: "1vw",
                  marginRight: "1vw",
                  backgroundColor: "#885158",
                  border: "none",
                  outline: "none",
                  fontSize: "1.13rem",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              ></FormControl>
              <hr style={{ height: "145%" }}></hr>
              <IoCalendarClearOutline
                style={{
                  marginRight: "0.6vw",
                }}
              />
            </S.FontSet>
            {scouterArr.map((date, index) => (
              <S.CalenderFontBox
                style={{
                  height: "10%",
                  borderBottom: "1px solid #ffffff",
                }}
              >
                <div
                  style={{
                    marginLeft: "1vw",
                    fontSize: "1.7vw",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {date}
                </div>
              </S.CalenderFontBox>
            ))}
          </S.LeftContainer>
          <S.RightContainer>
            <S.FontSet
              style={{
                height: "5.5%",
                width: "100%",
                paddingTop: "10px",
                paddingBottom: "10px",
                display: "flex",
                color: "rgba(255, 255, 255, 0.7)",
                borderBottom: "1px solid #ffffff",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  paddingLeft: "10px",
                }}
              >
                스카우터명
              </div>
            </S.FontSet>
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderRight: "1px solid #ffffff",
                }}
              >
                {nameArr.map((name, index) => (
                  <S.CalenderFontBox
                    style={{
                      height: "15%",
                      width: "100%",
                      borderBottom: "1px solid #ffffff",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "1vw",
                        fontSize: "1.7vw",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      {name}
                    </div>
                  </S.CalenderFontBox>
                ))}
              </div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {scoutingArr.map((scouting, index) => (
                  <div
                    style={{
                      height: "33%",
                      padding: "10px",
                      alignItems: "center",
                    }}
                  >
                    <S.FontSet
                      style={{
                        height: "3%",
                        width: "100%",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        display: "flex",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "2vh",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          paddingTop: "15px",
                          paddingLeft: "15px",
                        }}
                      >
                        {scouting.name}
                      </div>
                    </S.FontSet>
                    <S.FontSet
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        padding: "10px",
                        display: "flex",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "2vh",
                        alignItems: "center",
                      }}
                    >
                      {scouting.box}
                      <div
                        style={{
                          paddingLeft: "2vw",
                          marginBottom: "7vh",
                        }}
                      >
                        {scouting.age} 세<br></br> {scouting.nation}
                        <br></br> {scouting.status}
                        <br></br> {scouting.style}
                      </div>
                    </S.FontSet>
                  </div>
                ))}
                <S.FontSet
                  style={{
                    width: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    display: "flex",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "2vh",
                    paddingLeft: "15px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      paddingLeft: "15px",
                    }}
                  >
                    평가
                  </div>
                </S.FontSet>
              </div>
            </div>
          </S.RightContainer>
        </S.TrainContainer>
      </S.MainContainer>
    </S.BackContainer>
  );
}
