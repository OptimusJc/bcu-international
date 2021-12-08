import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";

import './Television.css';
import sunrise_video from "../../public/images/sunrise.mp4";

const Television = () => {
    return (
        <div className="television">
            <Card className=" text-white"  >
                <Card.Title className="text-center mb-4 mt-0">
                    NESBIT TELEVISION
                </Card.Title>
                {/* ? add prop 'controls' to allow users to unmute */}
                <ReactPlayer playing="true" muted loop className="video-container"
                    url={ sunrise_video }
                />
            </Card>
            <div className="spacing"></div>
        </div>
    );
};

export default Television;
