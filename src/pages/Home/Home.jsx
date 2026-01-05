import { Link } from "react-router-dom";
import Button from "../../components/Button/button";

const Home = () => {
  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1>Home Page</h1>

      <Link to="/join">
        <Button variant="primary" size="md">
          Join Now
        </Button>
      </Link>
    </div>
  );
};

export default Home;
