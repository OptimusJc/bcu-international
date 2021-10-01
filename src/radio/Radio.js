import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import dummy_image from "../images/dummy_image.jpg";

let url = "http://stream.zeno.fm/t904qy1f268uv";

const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    // instanciating the playing and setPlaying state
    const [playing, setPlaying] = useState(false);

    // instanciating the toggle
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false));

        return () => {
            audio.removeEventListener("ended", () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle];
};

const Radio = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div>
            {/* <Button onClick={toggle} >
        {playing ? "Pause": "Play"}
      </Button> */}

            <Card className="bg-dark text-white">
                <Card.Img src={dummy_image} alt="Card image" />
                <Card.ImgOverlay>
                    <div>
                        <Card.Title>NESBIT RADIO</Card.Title>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Radio;
