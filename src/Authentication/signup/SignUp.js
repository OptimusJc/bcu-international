import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className="signup">
            <h4 className="text-center">Sign Up</h4>
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
                    <Col sm={10} md={10} lg={9}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalTelephone"
                >
                    <Form.Label column sm={2} md={2}>
                        Tel
                    </Form.Label>
                    <Col sm={10} md={10} lg={9}>
                        <Form.Control type="tel" placeholder="Telephone" />
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
                    <Col sm={10} md={10} lg={9}>
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
                        md={{ span: 4, offset: 2 }}
                    >
                        <Form.Check label="Remember me" />
                    </Col>
                    <Col
                        sm={{ span: 4, offset: 2 }}
                        md={{ span: 3, offset: 2 }}
                        className="signup"
                    >
                        <Button type="submit" className="btn btn-warning">
                            Sign Up
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default SignUp;
