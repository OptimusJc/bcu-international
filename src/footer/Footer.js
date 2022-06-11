import { Link } from "@reach/router";
import { ListGroup } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="page-footer align-bottom font-small pt-4 text-centered">
            <div className="text-centered">
                <div className="row">
                    <div className="col-md-3 mt-md-0 mt-3">
                        <h5 className="text-uppercase">BCU International</h5>
                        <blockquote>
                            <cite>We are a move of God</cite>
                        </blockquote>
                    </div>

                    <hr className="clearfix w-50 w-md-100 d-md-none pb-0" />

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
                                <Link to="#">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="#">Copyright Policy</Link>
                            </li>
                            <li>
                                <Link to="#">F.A.Q</Link>
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
                                <a
                                    href="https://www.facebook.com/profile.php?id=100008233095156"
                                    className="icon facebook"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="var(--facebook)"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                                    </svg>
                                </a>
                            </ListGroup.Item>
                            <ListGroup.Item
                                variant="primary"
                                className="list_group"
                            >
                                <a
                                    href="https://www.youtube.com/channel/UC32x9S-LGduGd9Qbc4RAsBQ"
                                    className="icon youtube"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="red"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-9.333v24h-24v-24h24zm-4 12c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" />
                                    </svg>
                                </a>
                            </ListGroup.Item>

                            <ListGroup.Item
                                variant="primary"
                                className="list_group"
                            >
                                <a href="#" className="icon twitter">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="var(--twitter)"
                                        style={{ background: "#fff" }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" />
                                    </svg>
                                </a>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">
                Copyright © 2021: BCU-International
            </div>
        </footer>
    );
};

export default Footer;
