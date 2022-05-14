import React from "react";
import { Form, Button } from "react-bootstrap";

function Login(props) {
  return (
    <div className="container mt-5 mb-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Login/Register</Form.Label>
          <Form.Control type="email" placeholder="Username" />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Rememeber Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;