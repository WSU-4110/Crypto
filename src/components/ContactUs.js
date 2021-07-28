import React from "react"
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap"

export default function Home() {

    return (
        <Card className="mb-5"> 
            <Card.Header as="h4">Contact Us</Card.Header> 
            <Card.Body>
                <Card>
                    <Card.Header as="h5"> Contact Us </Card.Header>
                        <Card.Body>
                        <Container>
                        <Row>
                        <Col> 
                            <h2>Chris Gumieny</h2>
                            <img src="/images/chris.png" alt="chris"></img>
                            <Button href="https://github.com/chrisgumieny" variant="primary" target="_blank">
                                    chrisgumieny</Button>{"\n"}
                        </Col>

                        <Col>
                            <h2>Viona Veseli</h2>
                            <img src="/images/viona.png" alt="viona"></img> 
                            <Button href="https://github.com/gj6645" variant="primary" target="_blank">
                                    gj6645</Button>{"\n"}
                        </Col>
                        </Row>    

                        <Row>
                        <Col>
                            <h2>Ian Kwiotek</h2>
                            <img src="/images/ian.png" alt="ian"></img>
                            <Button href="https://github.com/IKwiotek" variant="primary" target="_blank">
                                    IKwiotek</Button>{"\n"}
                        </Col>

                        <Col>
                            <h2>Sadeem Shamoun</h2>
                            <img src="/images/abdul.png" alt="sadeem"></img>
                            <Button href="https://github.com/snshamwow" variant="primary" target="_blank">
                                    snshamwow</Button>{"\n"}
                        </Col>
                        </Row>

                        <Row>
                        <Col>
                            <h2>Abdul Rashid</h2>
                            <img src="/images/sadeem.png" alt="abdul"></img><br></br>
                            <Button href="https://github.com/abdulr07" variant="primary" target="_blank">
                                    abdulr07</Button>{"\n"}
                        </Col>
                        </Row>
                        </Container>
                        </Card.Body>
                </Card> <br></br>
                <Card>
                    <Card.Header as="h5"> Contribute </Card.Header>
                        <Card.Body>
                            <p>Crypto Pro is an open source project created by the Cryptocurrency community. To contribute to the Crypto Pro code base please visit the project repository.</p>
                            <Button href="https://github.com/WSU-4110/Crypto" variant="primary" target="_blank">
                                Our GitHub</Button>
                        </Card.Body>
                </Card> <br></br>
                <Card>
                    <Card.Header as="h5"> Report Issues </Card.Header>
                        <Card.Body>
                            <p>To report bugs, please create a detailed GitHub Issue in the project repository.</p>
                            <Button href="https://github.com/WSU-4110/Crypto" variant="primary" target="_blank">
                                Our GitHub</Button>
                        </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    )
}
