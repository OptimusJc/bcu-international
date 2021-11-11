import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";

import './Television.css';

const Television = () => {
    return (
        <div className="television">
            <Card className=" text-white"  >
                <Card.Title className="text-center">
                    NESBIT TELEVISION
                </Card.Title>
                <ReactPlayer className="video-container"
                    url={
                        
                        "https://video.wixstatic.com/video/889011_185a9a86819e493fa94c43a9ac817769/480p/mp4/file.mp4"
                    }
                />
            </Card>
            <div className="spacing"></div>
        </div>
    );
};

export default Television;
