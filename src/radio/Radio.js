import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import "./Radio.css";
import RadioLogo from "../images/radio_logo_gold.jpeg";

let url = "http://stream.zeno.fm/t904qy1f268uv";

const Radio = () => {
    return (
        <div>
            <Card className="bg-dark text-white ">
                <Card.Title className="text-center">NESBIT RADIO</Card.Title>
                <Card.Img src={RadioLogo} alt="ldka"></Card.Img>

                <ReactPlayer
                    url={url}
                    playing={false}
                    controls={true}
                    className="sound"
                    width="200px"
                />
            </Card>
        </div>
    );
};

export default Radio;
