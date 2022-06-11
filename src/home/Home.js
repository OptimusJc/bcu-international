import { Row, Col } from "react-bootstrap";
import Television from "../television/Television";
import ReactPlayer from "react-player/youtube";

import "./Home.css";

import image from "../images/bcu_logo.webp";

const Home = () => {
    return (
        <div className="home" style={{ marginBottom: "3rem" }}>
            <div className="live-section">
                <p>live</p>
                <h3>
                    The body of christ united global international ministries
                </h3>
                <button className="btn btn-primary"> share this page</button>
            </div>
            <div className="column">
                <Row>
                    <Col className="tv-box">
                        <Television />
                    </Col>
                </Row>

                <Row className="coming-soon">
                    <Col>
                        <p className="display-6">
                            BCU Television
                            <sub className="lead">coming soon...</sub>
                        </p>
                    </Col>
                </Row>
            </div>
            <h2 className="heading-2">
                Body of Christ United International Videos on Demand
            </h2>
            {/* <Videos /> */}
            <ul className="video_list">
                <li>
                    <span>001</span>
                    <ReactPlayer
                        className="video_image"
                        url="https://www.youtube.com/watch?v=be6i4m2GeBE"
                    />
                    <span className="live">live</span>
                    <p>First Video Title</p>
                </li>
                <li>
                    <span>002</span>
                    <ReactPlayer
                        className="video_image"
                        url="https://www.youtube.com/watch?v=jX5EEgA6upQ"
                    />
                    <span className="live">live</span>
                    <p>Second Video Title</p>
                </li>
                <li>
                    <span>003</span>
                    <img
                        src={image}
                        alt="placeholder image"
                        className="video_image"
                    />
                    <span className="live">live</span>
                    <p>Third Video Title</p>
                </li>
                <li>
                    <span>004</span>
                    <img
                        src={image}
                        alt="placeholder image"
                        className="video_image"
                    />
                    <span className="live">live</span>
                    <p>Fourth Video Title</p>
                </li>
                <li>
                    <span>005</span>
                    <img
                        src={image}
                        alt="placeholder image"
                        className="video_image"
                    />
                    <span className="live">live</span>
                    <p>Fifth Video Title</p>
                </li>
                <li>
                    <span>006</span>
                    <img
                        src={image}
                        alt="placeholder image"
                        className="video_image"
                    />
                    <span className="live">live</span>
                    <p>Sixth Video Title</p>
                </li>
                <li>
                    <span>007</span>
                    <img
                        src={image}
                        alt="placeholder image"
                        className="video_image"
                    />
                    <span className="live">live</span>
                    <p>Seventh Video Title</p>
                </li>
            </ul>
        </div>
    );
};

export default Home;
