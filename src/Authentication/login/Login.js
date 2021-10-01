import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Login.css";

const Login = () => {
    return (
        <div>
            <h4 className="text-center">Log In</h4>
            <p className="text-center">to continue to BCU TV</p>

            <Form className="form">
                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                >
                    <Form.Label column sm={2} md={2}>
                        Email
                    </Form.Label>
                    <Col sm={10} md={7}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPassword"
                >
                    <Form.Label column sm={2} md={2}>
                        Password
                    </Form.Label>
                    <Col sm={10} md={7}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalCheck"
                >
                    <Col
                        sm={{ span: 5, offset: 2 }}
                        md={{ span: 3, offset: 2 }}
                    >
                        <Form.Check label="Remember me" />
                    </Col>
                    <Col
                        sm={{ span: 5, offset: 0 }}
                        md={{ span: 3, offset: 2 }}
                        className="signup"
                    >
                        <Button
                            type="submit"
                            className="btn btn-outline-warning"
                        >
                            Log In
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;
