import { Redirect } from "react-router-dom";
import * as  S from './Login.style'
import { Row, Col } from 'react-bootstrap'

export function Login(props) {

    return (
        <S.WelcomeContainer>
            <Row>
                <Col md="5">
                    <S.WelcomeCard>
                        <h1>Who Are You?</h1>
                        <p>
                            Login Page
                        </p>
                        <p>
                            Yahhh ⚔️ No
                        </p>
                    </S.WelcomeCard>
                </Col>
            </Row>
        </S.WelcomeContainer >
    );
    
}