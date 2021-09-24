import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const SignUp = () => {
  return (
    <div className="container my-5">
        <div className="container_core">
            <h4 className="text-center">Sign Up</h4>
            <p className="text-center">to continue to BCU TV</p>

      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalTelephone">
        <Form.Label column sm={2}>
          Tel
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="tel" placeholder="Telephone" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{span: 5, offset: 2}}>
          <Form.Check label="Remember me" />
        </Col>
        <Col sm={{span: 4, offset: 1}}>
          <Button type="submit">Sign Up</Button>
        </Col>
      </Form.Group>

      </Form>
        </div>
        </div>
  );
}

export default SignUp;
