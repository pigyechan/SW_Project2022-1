import './ScoutingReport.css';
import Table from 'react-bootstrap/Table'
import styled from "styled-components";
import Card from 'react-bootstrap/Card'

function ScoutingReport() {
        let Style = styled.div`
            display: flex;
            width: 100%;  
            border: 5px solid #930A1A;
            height: auto;
            border-radius: 5px;
            background-color: #550610;
        `
        
        return (
            <Style>
               <Table id="Table" bordered>
                    <thead className='head1'>
                        <tr>
                            <th className="ScouterName">스카우터 이름</th>
                            <th className="comment">평가</th>
                        </tr>
                    </thead>
                    <tbody className='body'>
                        <tr>
                            <td>ee</td>
                            <td>
                                <Card className='Card'>
                                    <Card.Body>
                                        <Card.Title>평가</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">2022년 5월 10일</Card.Subtitle>
                                        <Card.Text>
                                        스카우터 평가 기록 입니다.1
                                        </Card.Text>
                                        <Card.Link href="#">More Details</Card.Link>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                        <tr>
                            <td>ee</td>
                            <td>
                                <Card className='Card'>
                                    <Card.Body>
                                        <Card.Title>평가</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">2022년 5월 11일</Card.Subtitle>
                                        <Card.Text>
                                            스카우터 평가 기록 입니다.2
                                        </Card.Text>
                                        <Card.Link href="#">More Details</Card.Link>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                        <tr>
                            <td>ee</td>
                            <td>
                                <Card className='Card'>
                                    <Card.Body>
                                        <Card.Title>평가</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">2022년 5월 12일</Card.Subtitle>
                                        <Card.Text>
                                            스카우터 평가 기록 입니다.3
                                        </Card.Text>
                                        <Card.Link href="#">More Details</Card.Link>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                    </tbody>
                </Table> 
            </Style>
        );
        }
    
    export default ScoutingReport;