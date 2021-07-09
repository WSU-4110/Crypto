
import MyFormHandler from "./MyFormHandler"


class LoginFormHandler extends MyFormHandler {

    // construtor gets
    constructor(alert) {
        super(alert)
    }

    //override the method handleSubmit in NewHandleSubmit
    handleSubmit(e) {
        e.preventDefault()

        // no error good to go
        try {
            this.setState(
                {
                    // set error back to empty string
                    error: "",
                    // set up loading state (only can create one account at the same time, cant keep clicking submit button)
                    loading: true,
                },
            );
            await login(this.emailRef.current.value, this.passwordRef.current.value)
            history.push("/profile")

        }
        // there is an error
        catch {
            this.setState(
                {
                    // error message 
                    error: "ERROR: Failed login attempt",

                },
            );
        }
        // do if error or no error (allow user to click form)
        finally {

            this.setState(
                {
                    // after all handling is done 
                    loading: false,
                },
            );
        }
    }

    //override message function and give message that login button has been clicked 
    message() {
        // logs
        console.log("Handled Submit Button On Form: LOGIN");
    }

    //overides the render in the abstract class 
    render() {
        return (
            <>
                {/* Card will contain all our log in information  */}
                <Card>
                    <Card.Header> Crypto Pro Login</Card.Header>
                    <Card.Body>
                        <h2 className="text-center mb-3">Log In </h2>

                        {/* if error then we alert in red for danger */}
                        {this.error && <Alert variant="danger">{this.error}</Alert>}

                        {/* calling handle submit function */}
                        <Form onSubmit={handleSubmit}>

                            {/* user email*/}
                            <div className="div-1 ">
                                <Form.Group id="email">
                                    <Form.Label>Email address*</Form.Label>
                                    <Form.Control placeholder="email@email.com" type="email" ref={this.emailRef} required />

                                </Form.Group>
                            </div>

                            {/*user password */}
                            <div className="div-1 ">
                                <Form.Group id="password">
                                    <Form.Label>Password*</Form.Label>
                                    <Form.Control placeholder="password" type="password" ref={this.passwordRef} required />
                                </Form.Group>
                            </div>


                            {/* log in button, loading because if loading do not want to resubmit form */}
                            <div className="button">
                                <Button disabled={this.loading} className="w-100" variant="primary" type="submit">Log In</Button>
                            </div>
                        </Form>

                    </Card.Body>
                </Card>
                {/* forgot password link */}
                <div className="text-center mt-2">
                    <Link to="/forgotpassword">Forgot Password</Link>
                </div>
                <div className="text-center mt-2">
                    {/* if user needs to create an account send to register */}
                    <Link to="/register" >Create an account</Link>
                </div>
            </>

        )

    }

}

export default LoginFormHandler;