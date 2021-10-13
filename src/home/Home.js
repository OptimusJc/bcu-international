import { Row, Col } from "react-bootstrap";
import Television from "../television/Television";
import Videos from "../videos/Videos";
import "./Home.css";

const Home = () => {
    return (
        <div style={{ marginBottom: "3rem" }}>
            <Row >
                <Col className="tv-box">
                    <Television />
                </Col>
                
            </Row>

            <Row className="coming-soon"> 
            <Col >
                    <p className="display-6">
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
