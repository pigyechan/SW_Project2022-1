import * as S from "./Training.style";
import { MdSearch } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FormControl } from "react-bootstrap";

export function Training(props) {
  const dateArr = ["2022/04/08", "2022/04/07", "2022/04/06"];
  const nameArr = ["김혜성", "이정후"];
  const trainingArr = [
    {
      name: "웨이트 트레이닝",
      detail: "-트레이닝 자세한 설명",
      result: "-결과",
      general: "-기대점, 부족한 점 등",
      box: <S.Box></S.Box>,
    },
    {
      name: "코어 트레이닝",
      detail: "-트레이닝 자세한 설명",
      result: "-결과",
      general: "-기대점, 부족한 점 등",
      box: <S.Box></S.Box>,
    },
    {
      name: "트레이닝 이름(설명)",
      detail: "-트레이닝 자세한 설명",
      result: "-결과",
      general: "-기대점, 부족한 점 등",
      box: <S.Box></S.Box>,
    },
  ];
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
            {dateArr.map((date, index) => (
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
                {trainingArr.map((training, index) => (
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
                        {training.name}
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
                      {training.box}
                      <div
                        style={{
                          paddingLeft: "4vw",
                          marginBottom: "5vh",
                        }}
                      >
                        {training.detail}
                        <br></br> {training.result}
                        <br></br> {training.general}
                      </div>
                    </S.FontSet>
                  </div>
                ))}
              </div>
            </div>
          </S.RightContainer>
        </S.TrainContainer>
      </S.MainContainer>
    </S.BackContainer>
  );
}
