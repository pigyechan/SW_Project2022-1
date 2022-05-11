import styled from "styled-components";
import { Container } from "react-bootstrap";

export const BackContainer = styled(Container)`
  display: flex;
  background-color: #550610;
  width: 100vw;
  height: 100vh;
`;

export const MainContainer = styled(Container)`
  display: flex;
  margin: 1vw;
  margin-left: 2.5vw;
  flex-direction: column;
`;

export const TrainContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const LeftContainer = styled(Container)`
  display: flex;
  height: 80vh;
  width: 20vw;
  margin-top: 1vw;
  flex-direction: column;
  position: relative;
  background: rgba(255, 255, 255, 0.3);
`;

export const RightContainer = styled(Container)`
  display: flex;
  height: 80vh;
  flex-direction: column;
  width: 60vw;
  margin-top: 1vw;
  margin-left: 1.5vw;
  position: relative;
  background: rgba(255, 255, 255, 0.3);
`;
export const FontSet = styled.div`
  font-size: 1.2vw;
  color: #ffffff;
`;
export const CalenderFontBox = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  borderbottom: "1px solid #ffffff";
`;

export const Box = styled.div`
  position: relative;
  width: 238px;
  height: 178px;
  boder: 1px solid black;
  background: #ff00ff;
`;
