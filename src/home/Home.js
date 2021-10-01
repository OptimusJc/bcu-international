import { Row, Col } from "react-bootstrap";
import Television from "../television/Television";
import Videos from "../videos/Videos";

const Home = () => {
    return (
        <div style={{ marginBottom: "2rem" }}>
            <Row style={{ marginBottom: "3rem" }}>
                <Col style={{ border: "1px solid red" }}>
                    <Television />
                </Col>
                <Col>
                    <p
                        style={{
                            border: "1px solid red",
                            height: "620px",
                            paddingTop: "300px",
                            paddingLeft: "1rem",
                        }}
                        className="display-4"
                    >
                        BCU Television
                        <sub className="lead">coming soon...</sub>
                    </p>
                </Col>
            </Row>
            <h2 style={{ color: "gold" }}>
                Body of Christ International Videos on Demand
            </h2>
            <Videos />
        </div>
    );
};

export default Home;
