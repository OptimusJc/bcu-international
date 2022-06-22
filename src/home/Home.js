import { Row, Col } from "react-bootstrap";
import Television from "../television/Television";
import ReactPlayer from "react-player/youtube";

import "./home.scss";

import image from "../images/bcu_logo.webp";

const Home = () => {
    return (
        <div className="home">
            <div className="live-section">
                <p>
                    <span>live</span>
                    The body of christ united global international ministries
                </p>
                <button className="btn btn-primary"> share this page</button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col__flex">
                        <div className="tv-box">
                            <Television />
                        </div>
                        <div className="coming-soon">
                            <p className="display-6">
                                BCU Television
                                <sub className="lead">coming soon...</sub>
                            </p>
                        </div>
                    </div>
                    <div className="list">
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
                </div>
            </div>
        </div>
    );
};

export default Home;
