import { Link } from "@reach/router";
import { ListGroup } from "react-bootstrap";

import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Footer.css'

const Footer = () => {
  return (
    <div className="container"> 
        <footer className="page-footer font-small pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
                <h5 className="text-uppercase">BCU International</h5>
                <p>We are a move of God.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
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
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Channels</h5>
                <ul className="list-unstyled">
                  <li>
                      <Link to="/radio">Radio</Link>
                    </li>
                    <li>
                      <Link to="/television">Television</Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Social Media</h5>
                {/* <ul className="list-unstyled d-inline">
                  <li>
                      <Link to="">
                      <FontAwesomeIcon icon={ faFacebookF} />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <FontAwesomeIcon icon={ faYoutube} />
                      </Link>
                    </li>
                </ul> */}

        {/* NOTE: Fix the _blank issue */}
        <ListGroup horizontal  >
        <ListGroup.Item variant="primary" className="list_group">
        <a href="https://www.facebook.com/profile.php?id=100008233095156"  >
                      <FontAwesomeIcon icon={ faFacebookF} />
                      </a>
        </ListGroup.Item>
        <ListGroup.Item variant="primary" className="list_group">
        <a target="_blank" href="https://www.youtube.com/channel/UC32x9S-LGduGd9Qbc4RAsBQ" >
          <FontAwesomeIcon icon={ faYoutube} />
        </a>

        </ListGroup.Item>
        
</ListGroup>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        BCU-International
    </div>

</footer>
    </div>
  );
}

export default Footer;