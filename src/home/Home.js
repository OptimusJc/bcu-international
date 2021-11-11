import { Row, Col } from "react-bootstrap";
import Television from "../television/Television";
import Videos from "../videos/Videos";
import "./Home.css";

const Home = () => {
    return (
        <div className="home" style={{ marginBottom: "3rem" }}>
            <div className="column">
            <Row >
                <Col className="tv-box">
                    <Television  />
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
            </div>
            <h2 className="heading-2">
                Body of Christ International Videos on Demand
            </h2>
            {/* <Videos /> */}
            <ul>
                <li>
                  <img src="../images/bcu_logo.webp" />
                </li>
            </ul>
        </div>
    );
};

export default Home;
