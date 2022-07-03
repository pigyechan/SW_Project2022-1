import styled from "styled-components";
import { Container } from "react-bootstrap";
import Collapsible from "react-collapsible";

export const BackContainer = styled.div`
  display: flex;
  background-color: #550610;
  width: 100vw;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  margin: 1vw;
  margin-left: 2.5vw;
  flex-direction: column;
`;

export const Slide = styled(Collapsible)`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.3);
  margin-bottom: 40px;
`;

export const FontSet = styled.div`
  display: flex;
  width: 70vw;
  padding-bottom: 40px;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
  background: rgba(255, 255, 255, 0.4);
`;

export const InnerFont = styled.p`
  font-size: 15px;
  color: white;
`;
