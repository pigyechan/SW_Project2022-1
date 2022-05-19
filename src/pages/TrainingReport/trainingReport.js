import Table from 'react-bootstrap/Table'
import styled from "styled-components";
import './trainingReport.css';
import Card from 'react-bootstrap/Card'

function TrainingReport() {
    let Style = styled.div`
        display: flex;
        width: 100%;  
        border: 5px solid #930A1A;
        height: auto;
        border-radius: 5px;
        background-color: #550610;
        margin:0px;
    `
    
    return (
        <Style>
           <Table id="Table" bordered>
                <thead className='head1'>
                    <tr>
                        <th className="video">Video</th>
                        <th className="report">Report</th>
                    </tr>
                </thead>
                <tbody className='body'>
                    <tr>
                        <td>ee</td>
                        <td>
                            <Card className='Card' >
                                <Card.Body>
                                    <Card.Title>트레이닝 기록</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">2022년 5월 10일</Card.Subtitle>
                                    <Card.Text>
                                    트레이닝 기록을 적어봅니다1
                                    </Card.Text>
                                    <Card.Link href="#">More Details</Card.Link>
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                    <tr>
                        <td>ee</td>
                        <td>
                        <Card className='Card' >
                            <Card.Body>
                                <Card.Title>트레이닝 기록</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">2022년 5월 11일</Card.Subtitle>
                                <Card.Text>
                                트레이닝 기록을 적어봅니다2
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

    function Training(props){
        <tr>
            <td>ee</td>
            <td>
                <div id="summary"></div>
            </td>
        </tr>
    }

export default TrainingReport;