import React, { useState } from "react"
import { Card, Alert, Button } from "react-bootstrap" 
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Home() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    
    //Handling the logout
  
    import React, { Component } from 'react'
    export default class UserLogout extends Component {
     
     logout = () => {
        localStorage.clear();
    
        window.location.href = "/login";
      }
     
      render() {
        return (
          <button onClick={this.logout}>Logout</button>
        )
      }
    }



    return (
      <>
        <Card>
          <Card.Body>
            {/*HOME PAGE */}
            <h2 className="div-0">Home</h2>

            {/* alert if cant log out*/}
            {error && <Alert variant="danger">{error}</Alert>}
            {/* welcome user with email*/}
            <div className = "div-2">Hello {currentUser.email}</div> 
            
          </Card.Body>
        </Card>
        {/* log out link */}
        <div className="div-3">
          <Button variant="primary" onClick={handleLogout}> Log Out</Button>
        </div>
      </>
    )
  }