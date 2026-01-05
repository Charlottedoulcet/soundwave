import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Home.css";
import girlImage from "../../assets/images/landing-page-girl.png";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-image">
          <img
            src={girlImage}
            alt="Girl with headphones"
          />
        </div>
        <div className="home-hero">
          <h1 className="home-title">Feel The Music</h1>
          <p className="home-subtitle">Stream over 20 thousand songs with one click</p>
          <Link to="/join">
            <Button
              variant="primary"
              size="lg"
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </div>
  );
};

export default Home;
