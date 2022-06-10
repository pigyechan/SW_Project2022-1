import * as S from "./Develop.style";
import "./_Collapsible.scss";
import { HiPlus } from "react-icons/hi";

export function Develop(props) {
  const dateArr = ["2022-04-10-SUN", "2022-04-19-SAT", "2022-04-18-FRI"];
  const developArr = [
    {
      no: 19,
      position: "외야수",
      style: "좌투좌타",
      plus: [
        "4월 6일 경기와 비교했을 때 타율 0.200 에서 0.333으로 상승",
        "도루 1번 성공",
      ],
      minus: ["부상: 손목 골절 통증 부상 통증 발생"],
    },
    {
      no: 66,
      position: "외야수",
      style: "우투우타",
      plus: ["도루 1번 성공"],
      minus: ["4월 7일 경기와 비교했을 때 타율 0.333에서 0.000으로 하락"],
    },
  ];

  return (
    <S.BackContainer>
      <S.MainContainer>
        <S.Slide trigger="2022-04-10-SUN REPORT">
          <S.FontSet>
            <S.InnerFont style={{ float: "left" }}>
              No. 19 이용규
              <S.InnerFont
                style={{
                  fontSize: "1vw",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
              >
                외야수, 좌투좌타
              </S.InnerFont>
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 4월 6일 경기와 비교했을 때 타율 0.200 에서 0.333으로 상승
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 도루 1번 성공
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              - 부상: 손목 골절 통증 부상 통증 발생
            </S.InnerFont>
          </S.FontSet>
          <S.FontSet style={{ marginTop: "20px" }}>
            <S.InnerFont style={{ float: "left" }}>
              No. 19 이용규
              <S.InnerFont
                style={{
                  fontSize: "1vw",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
              >
                외야수, 좌투좌타
              </S.InnerFont>
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 4월 6일 경기와 비교했을 때 타율 0.200 에서 0.333으로 상승
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 도루 1번 성공
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              - 부상: 손목 골절 통증 부상 통증 발생
            </S.InnerFont>
          </S.FontSet>
        </S.Slide>
        <S.Slide trigger="2022-04-09-SAT REPORT">
          <S.FontSet>
            <S.InnerFont style={{ float: "left" }}>
              No. 19 이용규
              <S.InnerFont
                style={{
                  fontSize: "1vw",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
              >
                외야수, 좌투좌타
              </S.InnerFont>
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 4월 6일 경기와 비교했을 때 타율 0.200 에서 0.333으로 상승
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 도루 1번 성공
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              - 부상: 손목 골절 통증 부상 통증 발생
            </S.InnerFont>
          </S.FontSet>
          <S.FontSet style={{ marginTop: "20px" }}>
            <S.InnerFont style={{ float: "left" }}>
              No. 19 이용규
              <S.InnerFont
                style={{
                  fontSize: "1vw",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
              >
                외야수, 좌투좌타
              </S.InnerFont>
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 4월 6일 경기와 비교했을 때 타율 0.200 에서 0.333으로 상승
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 도루 1번 성공
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              - 부상: 손목 골절 통증 부상 통증 발생
            </S.InnerFont>
          </S.FontSet>
        </S.Slide>
        <S.Slide trigger="2022-04-08-FRI REPORT">
          <S.FontSet>
            <S.InnerFont style={{ float: "left" }}>
              No. 19 이용규
              <S.InnerFont
                style={{
                  fontSize: "1vw",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
              >
                외야수, 좌투좌타
              </S.InnerFont>
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 4월 6일 경기와 비교했을 때 타율 0.200 에서 0.333으로 상승
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 도루 1번 성공
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              - 부상: 손목 골절 통증 부상 통증 발생
            </S.InnerFont>
          </S.FontSet>
          <S.FontSet style={{ marginTop: "20px" }}>
            <S.InnerFont style={{ float: "left" }}>
              No. 19 이용규
              <S.InnerFont
                style={{
                  fontSize: "1vw",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
              >
                외야수, 좌투좌타
              </S.InnerFont>
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 4월 6일 경기와 비교했을 때 타율 0.200 에서 0.333으로 상승
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              + 도루 1번 성공
            </S.InnerFont>
            <S.InnerFont
              style={{
                fontSize: "1vw",
                paddingLeft: "5px",
              }}
            >
              - 부상: 손목 골절 통증 부상 통증 발생
            </S.InnerFont>
          </S.FontSet>
        </S.Slide>
      </S.MainContainer>
    </S.BackContainer>
  );
}
