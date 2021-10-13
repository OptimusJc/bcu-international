import { Link } from "@reach/router";
import { ListGroup } from "react-bootstrap";

import {
    faFacebookF,
    faInstagram,
    faInstagramSquare,
    faTwitter,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="page-footer align-bottom font-small pt-4 text-centered">
            <div className="text-centered">
                <div className="row">
                    <div className="col-md-3 mt-md-0 mt-3">
                        <h5 className="text-uppercase">
                            BCU International
                        </h5>
                        <p>We are a move of God.</p>
                    </div>

                    <hr className="clearfix w-50 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-capitalize">About Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/podcasts">Podcasts</Link>
                            </li>
                            <li>
                                <Link to="/videos">Videos</Link>
                            </li>
                            <li>
                                <Link to="/radio">Radio</Link>
                            </li>
                            <li>
                                <Link to="/television">Television</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-capitalize">Info</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="">Copyright Policy</Link>
                            </li>
                            <li>
                                <Link to="">F.A.Q</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3 ">
                        <h5 className="text-capitalize">Social Media</h5>

                        {/* NOTE: Fix the _blank issue */}
                        <ListGroup horizontal>
                            <ListGroup.Item
                                variant="primary"
                                className="list_group"
                            >
                                <a href="https://www.facebook.com/profile.php?id=100008233095156">
                                    <FontAwesomeIcon
                                        icon={faFacebookF}
                                        className="icon"
                                    />
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item
                                variant="primary"
                                className="list_group"
                            >
                                <a href="https://www.youtube.com/channel/UC32x9S-LGduGd9Qbc4RAsBQ">
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="icon"
                                    />
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item
                                variant="primary"
                                className="list_group"
                            >
                                <a href="">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="icon"
                                    />
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item
                                variant="primary"
                                className="list_group"
                            >
                                <a href="">
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className="icon"
                                    />
                                </a>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">
                © 2021 Copyright: BCU-International
            </div>
        </footer>
    );
};

export default Footer;
