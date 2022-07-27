import "../css/Home.css";
import Card from "react-bootstrap/Card";

const Hero = () => {
  return (
    <div className="hero mt-5">
      <Card className="bg-dark text-white border-0">
        <Card.Img
          src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Card image"
          height="700px"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <div className="container">
            <Card.Title className="display-3">NEW ARRIVALS</Card.Title>
            <Card.Text className="lead fs-2">CHECK ALL TRENDS</Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Hero;
