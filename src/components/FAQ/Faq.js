import './Faq.css'
import { Card, Accordion, Button, ListGroup } from "react-bootstrap"
export default function Faq() {

    return (
        <Card>
            <Card.Header>Frequently Asked Questions</Card.Header>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">
                        What Are Cryptocurrencies?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Cryptocurrencies are a digital asset that started as a medium of exchange for people to buy goods and services. Over time, their functionality has expanded.

                            </Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="1">
                        How to Create an Account?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>When you have entered thhe site, click on the register button and follow the prompted steps. 

                            </Card.Body>
                           
                            
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="2">
                        How To Change and Reset Password?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Click on the forgot password button, you will be sent an email directing you on how to change/reset your password.
                               
                            </Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="3">
                        What Does The First Party Education Page Entail?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>This consists of basic information needed for users to learn how to trade cryptocurrencies.

                            </Card.Body>
                           
                            
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="4">
                        What  Does The Third Party Education Page Entail?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>This will have a selection of articles written by third parties that can educate users on entry level crypto info.</Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="5">
                        How Can I Receive Alerts About Cryoto I Am Interested In?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>You will be able to choose to receive emails or texts about cryptos you are interested in when selected.</Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="6">
                        What Can I Expect To Get Out Of The Site?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>Among many things, you will be able expand your knowledge on cryptocurrencies and be notified of your favorite ones.</Card.Body>
                        </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="7">
                        Why are there so many cryptocurrencies?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>People saw the success of Bitcoin and tried to improve existing functionality and provide new functionality with new cryptocurrencies. Additionally, investors and developers wanted to make profit.</Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="8">
                        Can I Save Specific Cryptos That I Want To Get Info Of?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="8">
                            <Card.Body>Yes, you can do that from your profile on user settings.</Card.Body>
                        </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="9">
                        Can I Purchase Crypto From This Site?
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="9">
                            <Card.Body>Unfortunately, you will not be able to purchase cryptos as this is not a brokerage platform.</Card.Body>
                        </Accordion.Collapse>
                </Card>

            </Accordion>
        </Card>
    )
}