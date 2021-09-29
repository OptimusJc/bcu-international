import Card from "react-bootstrap/Card"
import ReactPlayer from 'react-player'

let url = "http://stream.zeno.fm/t904qy1f268uv";



const Radio = () => {

  return (
    <div>
  

    <Card className="bg-dark text-white">
      
      <Card.Title>NESBIT RADIO</Card.Title>
      
      <ReactPlayer
  url={url}
  width="400px"
        height="100px"
        playing={false}
        controls={true}
/>

      
      
    </Card>
    </div>
  );
}

export default Radio;