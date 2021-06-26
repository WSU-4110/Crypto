import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const HeaderToolbar = () => {
    // Object destructuring
    const { login, logout, currentUser } = useAuth()
    const isLoggedIn = Boolean(currentUser)

    return (
        <Navbar>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                {isLoggedIn ? <Navbar.Text>
                    Signed in as: <Link to="/profile"> {currentUser.email}</Link>
                </Navbar.Text> : null}
            </Navbar.Collapse>
        </Navbar>
    )
}