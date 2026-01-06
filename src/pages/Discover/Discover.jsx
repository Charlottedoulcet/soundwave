import "./Discover.css";
import coversImage from "../../assets/images/covers.jpg";
import microphoneIcon from "../../assets/images/microphone.svg";
import albumsIcon from "../../assets/images/albums.svg";
import moreIcon from "../../assets/images/more.svg";

const Discover = () => {
  return (
    <div className="discover-page">
      <div className="discover-container">
        <div className="discover-content">
          <h1 className="discover-title">Discover new music</h1>
          <div className="discover-buttons">
            <button className="discover-btn">
              <img
                src={microphoneIcon}
                alt="Charts"
                className="discover-icon"
              />
              <span>Charts</span>
            </button>
            <button className="discover-btn">
              <img
                src={albumsIcon}
                alt="Albums"
                className="discover-icon"
              />
              <span>Albums</span>
            </button>
            <button className="discover-btn">
              <img
                src={moreIcon}
                alt="More"
                className="discover-icon"
              />
              <span>More</span>
            </button>
          </div>
          <p className="discover-description">By joining you can benefit by listening to the latest albums released.</p>
        </div>
        <div className="discover-covers">
          <img
            src={coversImage}
            alt="Album covers"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
