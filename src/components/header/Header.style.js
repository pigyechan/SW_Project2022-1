import styled from "styled-components";
import { Container } from "react-bootstrap";

export const Head = styled.div`
  display: flex;
  background-color: #550610;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 10.2vh;
`;

export const Search = styled.input`
  margin-left: 4vw;
  display: flex;
  background-color: #720b1e;
  align-items: center;
  border-radius: 30px;
  height: 5vh;
  border: none;
  width: 60vw;
  font-size: 1.7rem;
  color: rgba(255, 255, 255, 0.7);
  outline: none;
  position: relative;
`;

export const SearchBar = styled.div`
  margin-left: 4vw;
  background-color: #720b1e;
  align-items: center;
  border-radius: 30px;
  display: flex;
  align-items: center;
  height: 5vh;
  border: none;
  width: 60vw;
  flex-direction: row;
`;

export const BackgroundDate = styled(Container)`
  margin-left: 4vw;
  display: flex;
  background: rgba(255, 255, 255, 0.3);
  align-items: center;
  border-radius: 30px;
  height: 5vh;
  width: 10vw;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 0;
`;

export const DisplayDate = styled.div`
  font-size: 1rem;
  color: #ffffff;
  position: relative;
  z-index: 1;
`;
