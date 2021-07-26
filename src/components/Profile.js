import React, { useRef, useState } from "react"
import { Card, Alert, Button, Form, Col, Row } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom"
import EmailSubmission from "../components/EmailSignup"
import { postAlert } from "../services/alertClient";

const cryptos = ["Bitcoin", "Etherium", "Dogecoin"]


export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const emailSubmit = useRef()
    const bitcoinRef = useRef()
    const ethereumRef = useRef()
    const dogecoinRef = useRef()
    
    async function handleAlertSave() {
            console.log(bitcoinRef.current.value, ethereumRef.current.value, dogecoinRef.current.value)
            console.log(currentUser)


            // Create await function to get user document value for a particular userid

            await postAlert({
                userid: currentUser.uid,
                BTC: bitcoinRef.current.value,
                ETH: ethereumRef.current.value,
                DOGE: dogecoinRef.current.value
            });
    }

    // handle logout
    async function handleLogout() {
        setError("") // empty

        try {
            // wait for logout
            await logout()
            // go back to login page
            history.push("/login")
        }
        catch {
            //error message
            setError("ERROR: Failed to log out of account")
        }
    }

    return (
        <>
            <Card>
                <Card.Header> Profile</Card.Header>
                <Card.Body>

                    {/* alert if cant log out*/}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Card border="dark" className=" p-4" >
                        <Card.Title  > User Information:</Card.Title>
                        <Card.Body>
                            Email: {currentUser.email}
                            <br />
                            Number: {currentUser.phoneNumber}

                            <div className=" mt-2">
                                <Link to="/profilechange">Change User Information</Link>
                            </div>

                        </Card.Body>
                    </Card>

                    <br></br>

                    <Card border="dark" >
                        {/*Emai Submission Box*/}
                        <EmailSubmission eSubmit={emailSubmit} userEmail={currentUser.email} />
                    </Card>

                    <br></br>

                    <Card>
                        <Card.Header> Alert Configuration </Card.Header>
                        <Card.Body>
                            <Form className="alertForm">
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Bitcoin</Form.Label>
                                    <Col sm="3">
                                    <Form.Control type="text" ref={bitcoinRef} defaultValue=""/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Ethereum</Form.Label>
                                    <Col sm="3">
                                    <Form.Control type="text" ref={ethereumRef} defaultValue=""/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Dogecoin</Form.Label>
                                    <Col sm="3">
                                    <Form.Control type="text" ref={dogecoinRef} defaultValue=""/>
                                    </Col>
                                </Form.Group>
                                <Button variant="primary" type="button" onClick={handleAlertSave}>Save Alerts</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>


            {/* log out link */}
            <div className="w-100">
                <Button variant="primary" onClick={handleLogout}> Log Out</Button>
            </div>
        </>
    )
}

