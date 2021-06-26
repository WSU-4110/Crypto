import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" // npm i react-router-dom
import Home from "./Home"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import Register from "./Register"
import { HeaderToolbar } from "./Header"
import { Profile } from "./Profile"


function App() {
  return (
    //container to format register page 
    <Container className="container">
      <AuthProvider>
        <Router>
          <HeaderToolbar />
          <div id="routerContainer" className="width100" >
            {/*switch determines which route we are currently on */}
            <Switch>
              <Route path="/login"> <Login /> </Route>
              <PrivateRoute path="/"> <Home /> </PrivateRoute>
              <PrivateRoute path="/profile"> <Profile /> </PrivateRoute>
              <Route path="/register"> <Register /> </Route>
              <Route path="/forgotpassword"> <ForgotPassword /> </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </Container>
  )
}

export default App;
