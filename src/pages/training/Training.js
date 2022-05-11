import * as S from "./Training.style";
import { MdSearch } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FormControl } from "react-bootstrap";

export function Training(props) {
  return (
    <S.BackContainer>
      <S.MainContainer>
        <S.FontSet>트레이닝</S.FontSet>
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
                2022/04/08
              </div>
            </S.CalenderFontBox>
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
                2022/04/07
              </div>
            </S.CalenderFontBox>
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
                2022/04/06
              </div>
            </S.CalenderFontBox>
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
                2022/04/08
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
                  height: "100%",
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderRight: "1px solid #ffffff",
                }}
              >
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
                    참가선수이름
                  </div>
                </S.CalenderFontBox>
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
                    참가선수이름
                  </div>
                </S.CalenderFontBox>
              </div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "33%",
                    borderBottom: "1px solid #ffffff",
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
                        paddingLeft: "15px",
                      }}
                    >
                      트레이닝 이름(설명)
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
                    <S.Box></S.Box>
                    <div
                      style={{
                        paddingLeft: "4vw",
                        marginBottom: "5vh",
                      }}
                    >
                      - 트레이닝 자세한 설명
                      <br></br>- 결과
                      <br></br>- 기대점, 부족한 점 등
                    </div>
                  </S.FontSet>
                </div>
                <div
                  style={{
                    height: "33%",
                    borderBottom: "1px solid #ffffff",
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
                        paddingLeft: "15px",
                      }}
                    >
                      트레이닝 이름(설명)
                    </div>
                  </S.FontSet>
                  <S.FontSet
                    style={{
                      width: "100%",
                      padding: "10px",
                      display: "flex",
                      color: "rgba(255, 255, 255, 0.7)",
                      marginTop: "10px",
                      fontSize: "2vh",
                      alignItems: "center",
                    }}
                  >
                    <S.Box></S.Box>
                    <div
                      style={{
                        paddingLeft: "4vw",
                        marginBottom: "5vh",
                      }}
                    >
                      - 트레이닝 자세한 설명
                      <br></br>- 결과
                      <br></br>- 기대점, 부족한 점 등
                    </div>
                  </S.FontSet>
                </div>
              </div>
            </div>
          </S.RightContainer>
        </S.TrainContainer>
      </S.MainContainer>
    </S.BackContainer>
  );
}
