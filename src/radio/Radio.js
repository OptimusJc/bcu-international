import Card from "react-bootstrap/Card";
import "./Radio.css";
import RadioLogo from "../../public/images/radio_logo_gold.jpeg";

let url = "http://stream.zeno.fm/t904qy1f268uv";

const Radio = () => {
    return (
        <div className="radio">
            <Card className="text-white ">
                <Card.Title
                    className="text-center pt-4 pb-2 "
                    style={{ letterSpacing: "0.1rem" }}
                >
                    NESBIT RADIO
                </Card.Title>
                <Card.Img src={RadioLogo} alt="ldka"></Card.Img>

                <figure>
                    <figcaption
                        style={{ textAlign: "center", paddingBottom: "1rem" }}
                    >
                        Listening to nesbit radio
                    </figcaption>
                    <audio controls src={url} className="sound">
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </figure>
            </Card>
        </div>
    );
};

export default Radio;
