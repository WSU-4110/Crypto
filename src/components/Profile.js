import React, { useRef, useState, useEffect } from "react"
import { Card, Alert, Button, Form, Col, Row } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom"
import EmailSubmission from "../components/EmailSignup"
import { postAlert } from "../services/alertClient";

function useInput() {
    const [value, setValue] = useState("");
    const input = <Form.Control value={value} onChange={e => setValue(e.target.value)} type="text" />;
    return [value, setValue, input];
}

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout, cryptoUser } = useAuth()
    const history = useHistory()
    const emailSubmit = useRef()
    const [bitcoinValue, setBitcoinValue, bitcoinInput] = useInput()
    const [ethereumValue, setEthereumValue, ethereumInput] = useInput()
    const [dogecoinValue, setDogecoinValue, dogecoinInput] = useInput()

    async function handleAlertSave() {
        await postAlert({
            docid: cryptoUser.id,
            BTC: bitcoinValue,
            ETH: ethereumValue,
            DOGE: dogecoinValue
        });
    }

    useEffect(() => {
        if (cryptoUser) {
            setBitcoinValue(cryptoUser?.data?.currency?.BTC ?? bitcoinValue);
            setEthereumValue(cryptoUser?.data?.currency?.ETH ?? ethereumValue);
            setDogecoinValue(cryptoUser?.data?.currency?.DOGE ?? dogecoinValue);
        }

    }, [cryptoUser])

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
                            Number: {cryptoUser?.data?.userphonenumber ?? ""}
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
                                        {bitcoinInput}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Ethereum</Form.Label>
                                    <Col sm="3">
                                        {ethereumInput}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Dogecoin</Form.Label>
                                    <Col sm="3">
                                        {dogecoinInput}
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

