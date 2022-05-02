import { Redirect } from "react-router-dom";
import * as S from "./Main.style";
import { Row, Col } from "react-bootstrap";

export function Main(props) {
  return (
    <S.WelcomeContainer>
      <Row>
        <Col md="5">
          <S.WelcomeCard>
            <h1>Hello warrior</h1>
            <p>Let's start coding</p>
            <p>Yahhh ⚔️ No</p>
          </S.WelcomeCard>
        </Col>
      </Row>
    </S.WelcomeContainer>
  );
}
