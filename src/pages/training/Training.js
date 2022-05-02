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
                width: "95%",
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
                }}
              ></FormControl>
              <hr style={{ height: "145%" }}></hr>
              <IoCalendarClearOutline />
            </S.FontSet>
            <S.FontSet></S.FontSet>
          </S.LeftContainer>
          <S.RightContainer></S.RightContainer>
        </S.TrainContainer>
      </S.MainContainer>
    </S.BackContainer>
  );
}
