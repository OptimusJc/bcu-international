import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../signup/SignUp.css";

const Login = () => {
    return (
        <div className="login">
            <h4 className="text-center">Log In</h4>
            <p className="text-center">to continue to BCU TV</p>

            <Form className="form form-login">
                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                >
                    <Form.Label column sm={2} md={3}>
                        Email
                    </Form.Label>
                    <Col sm={10} md={9} lg={9}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPassword"
                >
                    <Form.Label column sm={2} md={3}>
                        Password
                    </Form.Label>
                    <Col sm={10} md={9} lg={9}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalCheck"
                >
                    <Col
                        sm={{ span: 4, offset: 2 }}
                        md={{ span: 5, offset: 0 }}
                    >
                        <Form.Check label="Remember me" />
                    </Col>
                    <Col
                        sm={{ span: 4, offset: 2 }}
                        md={{ span: 2, offset: 2 }}
                        className="signup"
                    >
                        <Button type="submit" className="btn btn-warning">
                            Log In
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;
