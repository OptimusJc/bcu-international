import Card from "react-bootstrap/Card"
import ReactPlayer from 'react-player'




const Television = () => {

  return (
    <div>
  

    <Card className="bg-dark text-white">
      
      <Card.Title>NESBIT TELEVISION</Card.Title>
      <ReactPlayer
  url={[
    "https://www.youtube.com/watch?v=QuB5JoX063Q",
    'https://www.youtube.com/watch?v=jNgP6d9HraI'
  ]}
/>  
      
    </Card>
    </div>
  );
}

export default Television;