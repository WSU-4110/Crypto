import React from "react"
import { Alert, Button } from "react-bootstrap"

//Abstact class handles submit button ()
class MyFormHandler extends React.Component {

    // constructor to set error to empty and loadin to false 
    constructor(props) {
        super(props);
        // bind
        this.handleSubmit = this.handleSubmit.bind(this);
        //states
        this.state = {
            error: "",
            loading: false
        };
    }

    // defines the skeleton of the alogrithm 
    templateMethod() {
        // handle the submit form
        this.handleSubmit;
        // log what happened
        this.message;
        // render 
        this.render;
    }

    // handle submit functions that other classes will be overwritting for their message 
    handleSubmit(e) {

        // no error good to go
        try {
            this.setState(
                {
                    error: "",
                    loading: true,
                },
            );

        }
        // there is an error
        catch {
            this.setState(
                {
                    error: "ERROR",

                },
            );
        }
        // do if error or no error (allow user to click form)
        finally {

            this.setState(
                {
                    loading: false,
                },
            );
        }
    }

    // message function for logs
    message() {
        // logs
        console.log("Handled Submit Button On Form");
    }

    // render function
    render() {
        return (
            <>
                {/* if error then we alert in red for danger */}
                {this.error && <Alert variant="danger">{this.error}</Alert>}
                {/* how to handle forms */}
                <Form onSubmit={this.handleSubmit}>
                    {/* button, loading because if loading do not want to resubmit form */}
                    <Button disabled={this.loading} className="w-100" variant="primary" type="submit">Submit</Button>
                </Form>
            </>
        )
    }

}

export default MyFormHandler;
